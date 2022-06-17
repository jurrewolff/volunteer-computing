from main import app
from http import HTTPStatus
from app.util import build_response
from flask import jsonify, request
from flask_login import login_required
from app.authentication import userdata

import logging
import json
import app.models.project as project

# TODO - Move existing routes to routes.py


@app.route("/projects", methods=["POST", "GET", "PATCH", "DELETE"])
#@login_required
def projects():
    response = {}

    if request.method == "POST":
        # TODO - Create project in DB
        response = build_response(HTTPStatus.NOT_IMPLEMENTED, "Implement me!")
        pass
    elif request.method == "GET":
        # Returns a list with a dictionary per project.
        projects = project.get_all_projects()
        response = json.dumps(projects)
        #response = build_response(HTTPStatus.OK, data=projects)
        pass

        for x in projects:
            app.logger.warning(x)

        return response
    elif request.method == "PATCH":
        # TODO - Update project in DB
        response = build_response(HTTPStatus.NOT_IMPLEMENTED, "Implement me!")
        pass
    elif request.method == "DELETE":
        # TODO - Delete project from DB
        response = build_response(HTTPStatus.NOT_IMPLEMENTED, "Implement me!")
        pass

    return jsonify(response)
