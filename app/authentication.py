from distutils.command.upload import upload
from http import HTTPStatus
from urllib.parse import urlparse, urljoin

from flask import Flask, request, jsonify, session
from flask_login import LoginManager, UserMixin, login_user, logout_user, login_required
from flask_session.__init__ import Session
from urllib.parse import urlparse, urljoin
#import app.mysql_script as ms
import logging


import app.models.user as user
from app.models.user import get_user

from app.util import build_response
from main import app

# TODO - TESTING

mock_db = []


# Mockup function simulating database search. Only username "jantje" is present.
def get_user_from_db(user_id: str) -> dict:
    for item in mock_db:
        if item.get("username") == user_id:
            return item

    return {}


# Mockup function simulating adding user to DB.
def insert_user(user_id: str, password: str) -> dict:
    mock_db_new_row = {"username": user_id, "password": password}
    mock_db.append(mock_db_new_row)

    return mock_db_new_row


# TODO - ENDTESTING


class User(UserMixin):
    def __init__(self, username: str, password: str):
        self.username = username
        self._password = password

        # TODO - Add user to DB.

    @staticmethod
    def get(username: str):
        user_db = get_user(username)

        if user_db:
            user = User(username, user_db.get("password"))
            return user
        else:
            return None

    def get_id(self):
        return self.username

    def get_password(self):
        return self._password

    def set_password(self, new_password: str):
        # TODO - Update password in DB; Maybe some error handling.
        self._password = new_password

    pass


login_manager = LoginManager()
login_manager.init_app(app)


# Helper functions
def authenticate_user(username, password) -> bool:
    user_db = user.get_user(username)
    if password == user_db.get("password"):
        return True

    return False


def is_safe_url(target):
    ref_url = urlparse(request.host_url)
    test_url = urlparse(urljoin(request.host_url, target))
    return test_url.scheme in ("http", "https") and ref_url.netloc == test_url.netloc


# Authentication functions
@login_manager.user_loader
def load_user(username: str) -> User:
    return User.get(username)


@app.route("/signup", methods=["POST"])
def signup():
    if not request.headers:
        return build_response(
            HTTPStatus.BAD_REQUEST, "request is missing request headers"
        )

    # Get info about user from header.
    new_user = {"user_id": user.get_new_user_id()}
    new_user.update( {'username' : request.headers.get("username")} )
    new_user.update( {'password' : request.headers.get("password")} )
    new_user.update( {'email' : request.headers.get("email")} )
    new_user.update( {'firstname' : request.headers.get("firstname")} )
    new_user.update( {'lastname' : request.headers.get("lastname")} )
    new_user.update( {'score' : 0} )
    new_user.update( {'is_researcher' : request.headers.get("is_researcher")} )

    # Empty string is default. Will be overwritten is user is a researcher.
    new_user.update( {'institution' : ""} )
    new_user.update( {'background' : ""} )

    # Check if required information has been retrieved from header.
    if not new_user["username"]:
        return build_response(HTTPStatus.BAD_REQUEST, "Please provide a username")
    if not new_user["password"]:
        return build_response(HTTPStatus.BAD_REQUEST, "Please provide a password")
    if not new_user["email"]:
        return build_response(HTTPStatus.BAD_REQUEST, "Please provide an email")
    if not new_user["firstname"]:
        return build_response(HTTPStatus.BAD_REQUEST, "Please provide a firstname")
    if not new_user["lastname"]:
        return build_response(HTTPStatus.BAD_REQUEST, "Please provide a lastname")
    if not new_user["is_researcher"]:
        return build_response(HTTPStatus.BAD_REQUEST, "unknown if user is a researcher")

    # Transform upload_rights integer to boolean.
    new_user["is_researcher"] = True if new_user["is_researcher"] == "1" else False

    if new_user["is_researcher"]:
        # Check if researcher specific information can be retrieved.
        if not request.headers.get("institution"):
            return build_response(HTTPStatus.BAD_REQUEST, "Please provide an institution")
        if not request.headers.get("background"):
            return build_response(HTTPStatus.BAD_REQUEST, "Please provide a background")

        #Retrieve additional researcher specific variables.
        new_user["institution"] = request.headers.get("institution")
        new_user["background"] = request.headers.get("background")

    # Check if username is unique.
    if user.username_exists(new_user["username"]):
        return build_response(
            HTTPStatus.CONFLICT, "user with username {} already exists".format(new_user["username"])
        )

    # Insert user into database.
    if not user.insert_user(new_user):
        return build_response(
            HTTPStatus.INTERNAL_SERVER_ERROR, "failed to insert user into db"
        )

    return build_response(HTTPStatus.CREATED, "new user is inserted into db")


@app.route("/login", methods=["POST"])
def login():
    if not request.headers:
        return build_response(
            HTTPStatus.BAD_REQUEST, "request is missing request headers"
        )

    # get and check required info from headers.
    username = request.headers.get("username")
    password = request.headers.get("password")
    if not username:
        return build_response(HTTPStatus.BAD_REQUEST, "provide a username")
    if not password:
        return build_response(HTTPStatus.BAD_REQUEST, "provide a password")
    
    user = load_user(username) # username not found erbij doen?
    if not user:
        return jsonify(build_response(HTTPStatus.OK, "username or password is incorrect"))

    if authenticate_user(username, password):
        if not login_user(user):
            response = build_response(
                HTTPStatus.INTERNAL_SERVER_ERROR, "failed logging in user"
            )
        else:
            response = build_response(HTTPStatus.OK, "user logged in successfully")
    else:
        response = build_response(HTTPStatus.OK, "username or password is incorrect")
    session["name"] = username

    return jsonify(response)


@app.route("/logout", methods=["GET"])
@login_required
def logout():
    if logout_user():
        data = build_response(HTTPStatus.OK, "user logged out")
    else:
        data = build_response(
            HTTPStatus.INTERNAL_SERVER_ERROR, "failed logging out user"
        )
    return jsonify(data)


@app.route("/dashboard", methods=["GET"])
@login_required
def dashboard():
    return jsonify(
        {"code": 200, "msg": "dashboard of user {}".format(session["name"])}
    )
