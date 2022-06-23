import os
from app import app
from flask import (
    flash,
    request,
    redirect,
    url_for,
    jsonify,
    send_from_directory,
    render_template,
    session
)
import time
from flask_login import login_required
from .read_datafile import file_to_arguments
import app.models.project as pj
from app.models.user import account_id_exists
from app.util import build_response
from http import HTTPStatus
from celery import Celery
import subprocess
from app.authentication import *
from app.schedule import give_work, receive_work
ALLOWED_EXTENSIONS = {"c"}

def allowed_file(filename):
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route("/output/<proj_id>")
def send_output(proj_id):
    with open(f"{app.config['PROJECTS_DIR']}/{proj_id}/output") as f:
        return render_template("content.html", text=f.read(), proj_id=proj_id)
    return send_from_directory(
        os.path.join(app.config["PROJECTS_DIR"], f"{proj_id}"), "output"
    )  # cached for a week


@app.route("/download/<proj_id>")
def dl_output(proj_id):
    return send_from_directory(
        os.path.join(app.config["PROJECTS_DIR"], f"{proj_id}"), "output"
    )  # cached for a week


@app.route("/upload", methods=["GET", "POST"])
def upload_file():
    if request.method == "POST":
        # check if the post request has the file part
        if "file" not in request.files or "input" not in request.files:
            flash("No file part")
            return redirect(request.url)
        file = request.files["file"]
        input = request.files["input"]
        # If the user does not select a file, the browser submits an
        # empty file without a filename.
        if file.filename == "" or input.filename == "":
            flash("No selected file")
            return redirect(request.url)
        if file and input and allowed_file(file.filename):
            response, proj_id = add_project_db()
            if proj_id != 0:
                proj_dir = os.path.join(app.config["PROJECTS_DIR"], f"{proj_id}")

                os.mkdir(proj_dir)
                file.save(os.path.join(proj_dir, "main.c"))
                input.save(os.path.join(proj_dir, "input"))
                open(os.path.join(proj_dir, "output"), "x").close()
                create_jobs(proj_id, request.form.get("qorum"))
                task = compile.delay(proj_id)
                return redirect(url_for("taskstatus", task_id=task.id))
            return response

            # return redirect(url_for('progress', name=filename, taskid=task.id))
    return """
    <!doctype html>
    <title>Upload new File</title>
    <h1>Upload new File</h1>
    <form method=post enctype=multipart/form-data>
      <input type=file name=file>
      <input type=file name=input>
      <input type=submit value=Upload>
      <input type="text" name="name" value="name">
      <input type="text" name="description" value="desc">
      <input type="text" name="block_size" value="1">
      <input type="text" name="owner" value="1">
      <input type="text" name="random_validation" value="1">
      <input type="text" name="max_runtime" value="1">
      <input type="text" name="qorum" value="1">
    </form>
    """


def add_project_db():
    if not request.headers:
        return build_response(
            HTTPStatus.BAD_REQUEST, "request is missing request headers"
        )

    # Get info about user from header.
    new_project = {"project_id": pj.get_new_project_id()}
    # new_project.update({"name": request.form.get("name")})
    # new_project.update({"description": request.headers.get("description")})
    # new_project.update({"block_size": request.headers.get("block_size")})
    # new_project.update({"owner": request.headers.get("owner")})
    # new_project.update({"random_validation": request.headers.get("random_validation")})
    # new_project.update({"max_runtime": request.headers.get("max_runtime")})

    new_project.update({"name": request.form.get("name")})
    new_project.update({"description": request.form.get("description")})
    new_project.update({"block_size": int(request.form.get("block_size"))})
    new_project.update({"trust_level": 1})
    new_project.update({"owner": request.form.get("owner")})
    new_project.update(
        {"random_validation": int(request.form.get("random_validation"))}
    )
    new_project.update({"max_runtime": int(request.form.get("max_runtime"))})
    new_project.update({"qorum": request.form.get("qorum")})

    # Check if required information has been retrieved from header.
    if not new_project["name"]:
        return (
            build_response(HTTPStatus.BAD_REQUEST, "Please provide a project name"),
            0,
        )
    if not new_project["description"]:
        return build_response(
            HTTPStatus.BAD_REQUEST, "Please provide a project description"
        )
    if not new_project["block_size"]:
        return build_response(HTTPStatus.BAD_REQUEST, "Please provide a block size"), 0
    if not new_project["owner"]:
        return (
            build_response(HTTPStatus.BAD_REQUEST, "Please provide a project owner"),
            0,
        )
    if not new_project["random_validation"]:
        return build_response(
            HTTPStatus.BAD_REQUEST, "Please provide a validation method"
        )
    if not new_project["max_runtime"]:
        return build_response(HTTPStatus.BAD_REQUEST, "Please provide a max runtime"), 0

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


def make_celery(app):
    celery = Celery(
        app.import_name,
        backend=app.config["CELERY_BACKEND"],
        broker=app.config["CELERY_BROKER_URL"],
    )
    celery.conf.update(app.config)
    TaskBase = celery.Task

    class ContextTask(TaskBase):
        abstract = True

        def __call__(self, *args, **kwargs):
            with app.app_context():
                return TaskBase.__call__(self, *args, **kwargs)

    celery.Task = ContextTask
    return celery


celery = make_celery(app)


# @celery.task(name="create_jobs")
def create_jobs(project_id, quorum):
    from app.models.jobs import insert_job
    with open(os.path.join(app.config['PROJECTS_DIR'], f'{project_id}/input'), encoding="utf-8") as f:
        for i,line in enumerate(f):
            # TODO decide if we want to store the input in the db
            insert_job((i, project_id, quorum, False), project_id)


@celery.task(name="compile")
def compile(proj_id):
    os.system(
        f"emcc {os.path.join(app.config['PROJECTS_DIR'], f'{proj_id}/main.c')} -s EXIT_RUNTIME -o {os.path.join(app.config['PROJECTS_DIR'], f'{proj_id}/main')}.js"
    )
    os.remove(f"{os.path.join(app.config['PROJECTS_DIR'], f'{proj_id}/main.js')}")
    # we don't need to store .c files
    os.remove(f"{os.path.join(app.config['PROJECTS_DIR'], f'{proj_id}/main.c')}")
    # subprocess.run(["emcc", f"{os.path.join(app.config['UPLOAD_FOLDER'], filename)}",f" -o {os.path.join(app.config['COMPILED_FILES_FOLDER'], filename_without_extension)}.js"])
    return "done"


@app.route("/taskstatus/<task_id>")
def taskstatus(task_id):
    task = compile.AsyncResult(task_id)
    if task.state == "PENDING":
        time.sleep(1)
        # time.sleep(config.SERVER_SLEEP)
        response = {
            "queue_state": task.state,
            "status": "Process is ongoing...",
            "status_update": url_for("taskstatus", task_id=task.id),
        }
    else:
        response = {"queue_state": task.state, "result": task.wait()}
    return jsonify(response)


@app.route("/runproject/<proj_id>/<job_id>", methods=("GET", "POST"))
@login_required
def datatest(proj_id, job_id):
    user_id = session["user_id"]
    if request.method == "POST":
        data = request.form.get("data")
        receive_work(proj_id, job_id, user_id, data)
        # return redirect(f"/output/{proj_id}")

    # arguments from scheduler
    job_id, project_id = give_work(project_id, user_id)
    data = file_to_arguments(f"{app.config['PROJECTS_DIR']}/{proj_id}/input", start_line=job_id, end_line=job_id+1)
    return render_template("template.html", data=data, name=proj_id, job=job_id)


@app.route("/<proj_id>.js")
def jstemplate(proj_id):
    return render_template("template.js", name=proj_id)


@app.route("/<proj_id>.wasm")
def serve_wasm(proj_id):
    return send_from_directory(
        os.path.join(app.config["PROJECTS_DIR"], f"{proj_id}"),
        "main.wasm",
        cache_timeout=604800,
    )  # cached for a week


# @celery.task()
# def compile(filename):
#     return "some result"

# @app.route('/status/<task_id>')
# def taskstatus(task_id):
#     task = compile.AsyncResult(task_id)
#     if task.state == 'PENDING':
#         # time.sleep(config.SERVER_SLEEP)
#         response = {
#             'queue_state': task.state,
#             'status': 'Process is ongoing...',
#             'status_update': url_for('taskstatus', task_id=task.id)
#         }
#     else:
#         response = {
#             'queue_state': task.state,
#             'result': task.wait()
#         }
#     return jsonify(response)
# # @app.route('/progress/<filename><taskid>' )
# # def progress(filename, taskid):
# #     return '''
# #     <!doctype html>
# #     <title>Compiled files</title>
# #     <h1>File</h1>
# #     '''

