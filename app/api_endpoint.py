"""
Date:               29-06-2022
Contributers:       PSE Group G

File description:
.................


Sources:
Celery Function: https://flask.palletsprojects.com/en/2.1.x/patterns/celery/
(Basic setup for celery)

"""
import os
import shutil
from urllib import response

from app import app
from flask import (
    flash,
    request,
    redirect,
    url_for,
    jsonify,
    send_from_directory,
    render_template,
    session,
    Response,
)
import time
from flask_login import login_required
from .read_datafile import get_line_from_file
import app.models.project as pj
from app.models.user import account_id_exists
from app.models.volunteer import update_contribution, get_contributed_time
from app.models.timer import insert_timer, retrieve_time
from app.util import build_response
from http import HTTPStatus
import subprocess
from app.authentication import *
from app.schedule import give_work, receive_work
import math
from pathlib import Path
from app.models.database import *
import numpy as np
from .celeryworker import compile_to_wasm

ALLOWED_EXTENSIONS = {"c"}


def allowed_file(filename):
    """/
    Description:
    Check or file has the correct extensions.
    """
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route("/api/download/<proj_id>")
@login_required
def dl_output(proj_id):
    """
    Description:
    Send final results to website. Download file.
    """
    base_dir = os.path.join(app.config["PROJECTS_DIR"], f"{proj_id}")
    to_check = base_dir + "/download"
    path = Path(to_check)
    if path.is_file() == False:
        f = open(base_dir + "/download", "w+")
        test = subprocess.run(
            ["sort", "-k1", "-n", base_dir + "/output"], capture_output=True, text=True
        )
        r = test.stdout.split("\n")
        for line in r[:-1]:
            s = line.split(" ", 1)
            f.write(s[1] + "\n")
    return send_from_directory(
        base_dir, "download", as_attachment=True, cache_timeout=0
    )  # cached for a week


@app.route("/api/upload", methods=["GET", "POST"])
@login_required
def upload_file():
    """
    Description:
    If a POST is received, the project will be put in the database. Some basic error handling.
    """
    if request.method == "POST":
        # check if the post request has the file part
        if "file" not in request.files or "input" not in request.files:
            flash("Please upload program and input file")
            return redirect(request.url)
        file = request.files["file"]
        input = request.files["input"]
        # If the user does not select a file, the browser submits an empty file without a filename.
        if file.filename == "" or input.filename == "":
            flash("No selected file")
            return redirect(request.url)
        if file and allowed_file(file.filename):
            response, proj_id = add_project_db()
            if proj_id != 0:
                if os.path.exists(
                    os.path.join(app.config["PROJECTS_DIR"], f"{proj_id}")
                ):
                    shutil.rmtree(
                        os.path.join(app.config["PROJECTS_DIR"], f"{proj_id}")
                    )
                os.mkdir(os.path.join(app.config["PROJECTS_DIR"], f"{proj_id}"))
                file.save(os.path.join(app.config["PROJECTS_DIR"], f"{proj_id}/main.c"))
                input.save(os.path.join(app.config["PROJECTS_DIR"], f"{proj_id}/input"))
                create_jobs(proj_id, request.headers.get("quorum"))
                task = compile_to_wasm.delay(proj_id)
            return response
    return


@login_required
def add_project_db():
    """
    Description:
    Project is added to database. If request is not OK there will be a message provided.
    """
    if not request.headers:
        return (
            build_response(
                HTTPStatus.BAD_REQUEST, "request is missing request headers"
            ),
            0,
        )

    # Get info about user from header.
    new_project = {"project_id": pj.get_new_project_id()}
    new_project.update({"name": request.headers.get("name")})
    new_project.update({"description": request.headers.get("description")})
    new_project.update({"quorum": request.headers.get("quorum")})
    new_project.update({"trust_level": request.headers.get("trust_level")})
    new_project.update({"runtime": 0})
    new_project.update({"block_size": 1})
    new_project.update({"owner": session["user_id"]})

    if "always_check" in request.headers and request.headers.get("always_check"):
        new_project.update({"random_validation": 0})
    else:
        new_project.update({"random_validation": 1})
    # Check if required information has been retrieved from header.
    if not new_project["name"]:
        return (
            build_response(HTTPStatus.BAD_REQUEST, "Please provide a project name"),
            0,
        )
    if not new_project["description"]:
        return (
            build_response(
                HTTPStatus.BAD_REQUEST, "Please provide a project description"
            ),
            0,
        )
    # Insert project into database.
    if not account_id_exists(new_project["owner"]) or not pj.insert_project(
        new_project
    ):
        return (
            build_response(
                HTTPStatus.INTERNAL_SERVER_ERROR, "Failed to add project to database"
            ),
            0,
        )
    return (
        build_response(HTTPStatus.CREATED, "Project added to database"),
        new_project["project_id"],
    )


def create_jobs(project_id, quorum=1):
    """
    Description:
    Create jobs that are needed to be executed.
    """
    from app.models.jobs import insert_job

    with open(
        os.path.join(app.config["PROJECTS_DIR"], f"{project_id}/input"),
        encoding="utf-8",
    ) as f:
        for i, line in enumerate(f):
            insert_job((i, project_id, quorum, False), project_id)


def change_prog_percentage(project_id, per):
    """
    Input: project_id(primary key), per(percentage which will be the new one in db)
    Output: -

    Description:
    Database function to change progress
    """
    query = f"UPDATE Project SET progress = '{per}' WHERE project_id = '{project_id}';"
    db.cur.execute(query)
    db.con.commit()


def calculate_per(project_id):
    """
    Description:
    Calculate progress percentage from volunteer table.
    """
    sql = f"SELECT done FROM Jobs WHERE project_id = {project_id};"
    db.cur.execute(sql)
    res = db.cur.fetchall()
    done_or_not = [x[0] for x in res]
    done = np.count_nonzero(np.array(done_or_not) == 1)
    perc = int(done / len(done_or_not) * 100)
    change_prog_percentage(project_id, perc)


def get_user_time_from_scretch(user_id):
    """
    Description:
    Use Volunteer table to get computing time.
    """
    sql = f"SELECT contributed_time FROM Volunteer WHERE user_id = '{user_id}'"
    db.cur.execute(sql)
    res = db.cur.fetchall()
    contributed_time = 0
    for time in res:
        contributed_time += time[0]
    return contributed_time


def update_user_time(user_id, time=-1):
    """
    Description:
    Use user table to update total runtime.
    """
    if time == -1:
        time = get_user_time_from_scretch(user_id)
    query = f"UPDATE User SET runtime = '{time}' WHERE user_id = '{user_id}';"
    db.cur.execute(query)
    db.con.commit()


def update_total_time_contributed(new_contribution_time, user_id):
    """
    Description:
    Use user table to update total runtime.
    """
    query = f"SELECT runtime FROM User WHERE user_id = '{user_id}'"
    db.cur.execute(query)
    res = db.cur.fetchone()
    time = res[0]
    new_time = int(new_contribution_time) + int(time)
    update_user_time(user_id, new_time)


@app.route("/api/runproject/<project_id>", methods=["GET"])
@login_required
def start_running_project(project_id):
    """
    Description:
    Running Project
    """
    return render_template("template.html", name=project_id)


@app.route("/api/get_job/<project_id>", methods=["GET"])
@login_required
def request_job(project_id):
    """
    Description:
    Job request function uses schedule.py to get results.
    """
    user_id = session["user_id"]
    succes, return_val = give_work(project_id, user_id)
    if succes:
        data = get_line_from_file(
            f"{app.config['PROJECTS_DIR']}/{project_id}/input", line=return_val
        )
        insert_timer((return_val, user_id, project_id))
        return jsonify({"job_id": return_val, "data": data})
    return return_val


def score_plus(user_id):
    """
    Description:
    Score is added to user. Every job is valued 1 point.
    """
    query = f"UPDATE User SET score = score + 1 WHERE user_id = {user_id}"
    db.cur.execute(query)
    db.con.commit()


@app.route("/api/post_result/<project_id>", methods=["POST"])
@login_required
def handle_result(project_id):
    """
    Description:
    When a post message from the post_result is received it will be handle here.
    """
    user_id = session["user_id"]
    data = request.form.get("data")
    job_id = request.form.get("job_id")
    addition_time_contributed = math.floor(time.time_ns() / 1000000) - retrieve_time(
        (job_id, user_id, project_id)
    )
    allready_contributed_time = get_contributed_time((user_id, project_id))
    new_contribution_time = allready_contributed_time + addition_time_contributed

    update_contribution((new_contribution_time, user_id, project_id))
    update_total_time_contributed(addition_time_contributed, user_id)
    score_plus(user_id)
    succes, return_val = receive_work(project_id, job_id, user_id, data)
    if not succes:
        return return_val
    calculate_per(project_id)
    return build_response(HTTPStatus.OK, "result handled")


@app.route("/api/get_template/template.js")
def jstemplate():
    """
    Description:
    Sends the JS template in it needed form.
    """
    with open("app/templates/template.js", "r") as content_file:
        content = content_file.read()
        return Response(content, mimetype="text/javascript")
    # return render_template("template.js", name=proj_id)


@app.route("/api/get_worker/worker.js")
def serve_worker():
    """
    Description:
    Sends the worker in it needed form.
    """
    with open("app/templates/worker.js", "r") as content_file:
        content = content_file.read()
        return Response(content, mimetype="text/javascript")


@app.route("/api/get_worker/get_wasm/<proj_id>.wasm")
def serve_wasm(proj_id):
    """
    Description:
    Sends the wasm file in its needed form.
    """
    with open(
        os.path.join(app.config["PROJECTS_DIR"], f"{proj_id}/main.wasm"), "rb"
    ) as content_file:
        content = content_file.read()
        return Response(content, mimetype="application/wasm")
