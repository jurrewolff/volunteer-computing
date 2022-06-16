from main import app
from http import HTTPStatus
from util import build_response
from flask import jsonify, request
from flask_login import login_required
from authentication import userdata

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
        # TODO - Get project from DB
        response = build_response(HTTPStatus.NOT_IMPLEMENTED, "Implement me!")
        pass
    elif request.method == "PATCH":
        # TODO - Update project in DB
        response = build_response(HTTPStatus.NOT_IMPLEMENTED, "Implement me!")
        pass
    elif request.method == "DELETE":
        # TODO - Delete project from DB
        response = build_response(HTTPStatus.NOT_IMPLEMENTED, "Implement me!")
        pass

    return jsonify(response)
