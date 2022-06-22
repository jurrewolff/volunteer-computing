"""Routes for handling incoming API requests."""

from main import app
from http import HTTPStatus
from app.util import build_response
from flask import jsonify, request
from flask_login import login_required

import json
import app.models.project as project
import app.models.results as results

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
        app.logger.warning(projects)
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
#@login_required
def get_project():
    project_id = request.headers.get("project_id")
    app.logger.warning("this is the received project_id: " + str(project_id))
    proj = project.get_project(project_id)
    app.logger.warning("this is the received project:" + str(proj))
    return json.dumps(proj)

@app.route("/my_projects", methods=["GET"])
#@login_required
def get_past_projects():
    project_id = request.headers.get("project_id")
    projects = results.get_projects_of_user(project_id)
    return build_response(HTTPStatus.OK, projects)
    
    