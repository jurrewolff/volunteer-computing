"""Routes for handling incoming API requests."""

from main import app
from http import HTTPStatus
from app.util import build_response
from flask import jsonify, request
from flask_login import login_required

import json
import app.models.project as project

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
