"""Routes for handling incoming API requests."""

from main import app
from http import HTTPStatus
from app.util import build_response
from flask import jsonify, request, session
from flask_login import login_required

import json
import app.models.project as project
import app.models.results as results
import app.models.volunteer as volunteer


# TODO - Move existing routes to routes.py


@app.route("/projects", methods=["POST", "GET", "PATCH", "DELETE"])
@login_required
def projects():
    response = {}

    if request.method == "POST":
        # TODO - Create project in DB
        response = build_response(HTTPStatus.NOT_IMPLEMENTED, "Implement me!")
        pass
    elif request.method == "GET":
        # Returns a list with a dictionary per project.
        projects = project.get_all_projects()
        return json.dumps(projects)

    elif request.method == "PATCH":
        # TODO - Update project in DB
        response = build_response(HTTPStatus.NOT_IMPLEMENTED, "Implement me!")
        pass
    elif request.method == "DELETE":
        # TODO - Delete project from DB
        response = build_response(HTTPStatus.NOT_IMPLEMENTED, "Implement me!")
        pass

    return jsonify(response)

@app.route("/results", methods=["POST", "GET", "PATCH", "DELETE"])
@login_required
def get_results():
    response = {}

    if request.method == "POST":
        # TODO - Create project in DB
        response = build_response(HTTPStatus.NOT_IMPLEMENTED, "Implement me!")
        pass
    elif request.method == "GET":
        # Returns a list with a dictionary per project.
        projects = project.get_projects_from_user(1)
        return json.dumps(projects)

    elif request.method == "PATCH":
        # TODO - Update project in DB
        response = build_response(HTTPStatus.NOT_IMPLEMENTED, "Implement me!")
        pass
    elif request.method == "DELETE":
        # TODO - Delete project from DB
        response = build_response(HTTPStatus.NOT_IMPLEMENTED, "Implement me!")
        pass

    return jsonify(response)

@app.route("/project", methods=["GET"])
@login_required
def get_project():
    project_id = request.headers.get("project_id")
    proj = project.get_project(project_id)
    return json.dumps(proj)

@app.route("/my_projects", methods=["GET"])
@login_required
def get_past_projects():
    user_id = request.headers.get("user_id")
    result = results.get_projects_of_user(user_id)
    return json.dumps(result)



@app.route("/contributed_time/<project_id>", methods=["POST", "GET"])
@login_required
def get_results(project_id):
    user_id = session["user_id"]

    response = {}

    if request.method == "POST":
        new_contribution = volunteer.update_contribution()
        response = build_response(HTTPStatus.NOT_IMPLEMENTED, "Implement me!")
        pass
    elif request.method == "GET":
        # Returns a list with a dictionary per project.
        projects = project.get_projects_from_user(1)
        return json.dumps(projects)


    return jsonify(response)
