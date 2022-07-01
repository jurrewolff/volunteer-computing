"""
Date:               01-07-2022
Contributers:       PSE Group G

File description:
Routes for handling incoming API requests.
"""
from app.models.user import get_user
from main import app
from http import HTTPStatus
from app.util import build_response
from flask import request
from flask_login import login_required

import json
import app.models.project as project
import app.models.user as user


@app.route("/api/projects", methods=["GET", "PATCH", "DELETE"])
@login_required
def projects():
    """
    Output:
    A list with a dictionary per project. The dictionary has the following keys:
    project_id, name, description.

    """
    projects = project.get_all_projects()
    return json.dumps(projects)


@app.route("/api/results", methods=["POST", "GET", "PATCH", "DELETE"])
@login_required
def get_results():
    """
    Output:
    A list with all projects of a researcher. A dictionary per list is stored in the list. The dictionary has the keys:
    project_id, name, description, runtime (seconds), done, progress (percentage integer).
    """
    user_id = request.headers.get("user_id")
    if not user_id:
        return build_response(
            HTTPStatus.BAD_REQUEST, "request is missing 'user_id' request header"
        )

    projects = project.get_projects_researcher(user_id)
    return json.dumps(projects)


@app.route("/api/project", methods=["GET"])
@login_required
def get_project():
    """
    Output:
    The project with the given project_id. The project is returned as a dictionary with the following keys:
    project_id, name, description, block_size, owner, random_validation, runtime, quorum_size, done, progress.
    False is returned if the project doesn't exist.
    """
    project_id = request.headers.get("project_id")
    proj = project.get_project(project_id)
    return json.dumps(proj)


@app.route("/api/my_projects", methods=["GET"])
@login_required
def get_past_projects():
    """
    Output:
    Returns a list with all projects a user has participated in. The projects are stored in the list as a dictionary with
    the following keys: project_id, name, description, done, progress, contributed_time. False is returned if the user doesn't exist.
    """
    user_id = request.headers.get("user_id")
    result = project.get_projects_from_user(user_id)
    return json.dumps(result)


@app.route("/api/userdata", methods=["GET"])
@login_required
def userdata():
    """
    Output:
    a dictionary containing the following keys: user_id, username, password, email, first_name,
    last_name, score, trust_leve, institution, is_researcher, background.
    """
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
    """
    TODO write documentation
    """
    amount = request.headers.get("amount")
    order_by = request.headers.get("order_by")
    if not amount or not order_by:
        amount = 10
        order_by = "trust_level"

    best_users = user.get_all_users(amount, order_by)
    return json.dumps(best_users)
