"""Routes for handling incoming API requests."""
from app.models.user import get_user
from main import app
from http import HTTPStatus
from app.util import build_response
from flask import jsonify, request, session
from flask_login import login_required

import json
import app.models.project as project
import app.models.results as results
import app.models.volunteer as volunteer
import app.models.user as user


# TODO - Move existing routes to routes.py


@app.route("/api/projects", methods=["POST", "GET", "PATCH", "DELETE"])
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


@app.route("/api/results", methods=["POST", "GET", "PATCH", "DELETE"])
@login_required
def get_results():
    response = {}

    if request.method == "POST":
        # TODO - Create project in DB
        response = build_response(HTTPStatus.NOT_IMPLEMENTED, "Implement me!")
        pass
    elif request.method == "GET":
        user_id = request.headers.get("user_id")
        if not user_id:
            return build_response(
                HTTPStatus.BAD_REQUEST, "request is missing 'user_id' request header"
            )

        # Returns a list with a dictionary per project.
        projects = project.get_projects_from_user(user_id)
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


@app.route("/api/project", methods=["GET"])
@login_required
def get_project():
    project_id = request.headers.get("project_id")
    proj = project.get_project(project_id)
    return json.dumps(proj)


@app.route("/api/my_projects", methods=["GET"])
@login_required
def get_past_projects():
    user_id = request.headers.get("user_id")
    result = results.get_projects_of_user(user_id)
    return json.dumps(result)


@app.route("/api/userdata", methods=["GET"])
@login_required
def userdata():

    if not request.headers:
        return build_response(
            HTTPStatus.BAD_REQUEST, "request is missing request headers"
        )

    username = request.headers.get("username")
    if not username:
        return build_response(HTTPStatus.BAD_REQUEST, "provide a username")

    user_db = get_user(username)

    if not user_db:
        return build_response(
            HTTPStatus.NOT_FOUND,
            "user with username {} does not exist".format(username),
        )

    response = build_response(
        HTTPStatus.OK, "fetched data for user {}".format(username), data=user_db
    )

    return response


@app.route("/api/dashboard", methods=["GET"])
@login_required
def leaderboard():
    amount = request.headers.get("amount")
    order_by = request.headers.get("order_by")
    if not amount or not order_by:
        amount = 10
        order_by = 'trust_level'

    best_users = user.get_all_users(amount, order_by)
    return json.dumps(best_users)