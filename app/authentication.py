"""
Module providing API with authentication; Signup, login and logout
functionalities.

The module interacts with database to store and retrieve user accounts. The
login status is session based using cookies for tracking keeping track of
running sessions.
"""

from http import HTTPStatus

import bcrypt
from urllib.parse import urlparse, urljoin
from flask import request, jsonify, session
from flask_login import LoginManager, UserMixin, login_user, logout_user, login_required

from app.models import user
from app.models.user import get_user

from app.util import build_response
from main import app


class User(UserMixin):
    """User object used to tying sessions to users."""

    def __init__(self, username: str, password: str):
        self.username = username
        self._password = password

    @staticmethod
    def get(username: str):
        """Get user with username from db and return it as an object."""
        user_db = get_user(username)

        if user_db:
            return User(username, user_db.get("password"))
        return None

    def get_id(self):
        """Get username of user object"""
        return self.username


login_manager = LoginManager()
login_manager.init_app(app)


# Helper functions
def authenticate_user(username, password) -> bool:
    """
    Check if password matches stored password of user with provided
    username.
    """

    pw_bytes = password.encode("utf-8")

    user_db = user.get_user(username)

    return bcrypt.checkpw(pw_bytes, bytes(user_db["password"], "utf-8"))


def is_safe_url(target):
    """Check if provided target url is safe to serve."""
    ref_url = urlparse(request.host_url)
    test_url = urlparse(urljoin(request.host_url, target))
    return test_url.scheme in ("http", "https") and ref_url.netloc == test_url.netloc


# Authentication functions
@login_manager.user_loader
def load_user(username: str) -> User:
    """Get user object for provided username"""
    return User.get(username)


@app.route("/api/signup", methods=["POST"])
def signup():
    """
    Handle signup request; Extract and check presence of request headers,
    store in db and return appropriate response.
    """
    if not request.headers:
        return build_response(
            HTTPStatus.BAD_REQUEST, "request is missing request headers"
        )

    # Get info about user from header.
    new_user = {"user_id": user.get_new_user_id()}
    new_user.update({"username": request.headers.get("username")})
    new_user.update({"password": request.headers.get("password")})
    new_user.update({"email": request.headers.get("email")})
    new_user.update({"firstname": request.headers.get("firstname")})
    new_user.update({"lastname": request.headers.get("lastname")})
    new_user.update({"score": 0})
    new_user.update({"trust_level": 0})
    new_user.update({"is_researcher": request.headers.get("is_researcher")})
    new_user.update({"institution": request.headers.get("institution")})
    new_user.update({"background": request.headers.get("background")})

    # Empty string is default. Will be overwritten is user is a researcher.
    new_user.update({"institution": ""})
    new_user.update({"background": ""})

    # Check if required information has been retrieved from header.
    if (
        not new_user["username"]
        or not new_user["password"]
        or not new_user["email"]
        and (new_user["is_researcher"] == "0"
        or not new_user["firstname"]
        or not new_user["lastname"]
        or not new_user["is_researcher"])
    ):
        return build_response(
            HTTPStatus.BAD_REQUEST, "request is missing required headers"
        )

    # Transform is_researcher integer to boolean.
    new_user["is_researcher"] = bool(new_user["is_researcher"] == "1")
    if new_user["is_researcher"]:
        # Check if researcher specific information can be retrieved.
        if not request.headers.get("institution"):
            return build_response(
                HTTPStatus.BAD_REQUEST, "Please provide an institution"
            )
        if not request.headers.get("background"):
            return build_response(HTTPStatus.BAD_REQUEST, "Please provide a background")

        # Retrieve additional researcher specific variables.
        new_user["institution"] = request.headers.get("institution")
        new_user["background"] = request.headers.get("background")

    # Check if username is unique.
    if user.username_exists(new_user["username"]):
        return build_response(
            HTTPStatus.CONFLICT,
            f"user with username {new_user['username']} already exists",
        )

    # Hash password.
    pw_bytes = new_user["password"].encode("utf-8")
    new_user["password"] = bcrypt.hashpw(pw_bytes, bcrypt.gensalt())

    # Insert user into database.
    if not user.insert_user(new_user):
        return build_response(
            HTTPStatus.INTERNAL_SERVER_ERROR, "failed to insert user into db"
        )

    return build_response(HTTPStatus.CREATED, "new user is inserted into db")


@app.route("/api/login", methods=["POST"])
def login(username=None, password=None):
    """
    Handle login request; Check request headers, get user from db,
    authenticate user and send appropriate response.
    """
    if (not request.headers and not username and not password):
        return build_response(
            HTTPStatus.BAD_REQUEST, "request is missing request headers"
        )

    # get and check required info from headers.
    if (not username or not password):
        username = request.headers.get("username")
        password = request.headers.get("password")


    app.logger.warning(f"user: {username}, pass: {password}")


    if not username:
        return build_response(HTTPStatus.BAD_REQUEST, "provide a username")
    if not password:
        return build_response(HTTPStatus.BAD_REQUEST, "provide a password")

    user_obj = load_user(username)  # username not found erbij doen?
    if not user_obj:
        return build_response(HTTPStatus.UNAUTHORIZED, "username or password is incorrect")

    if authenticate_user(username, password):
        if not login_user(user_obj):
            response = build_response(
                HTTPStatus.INTERNAL_SERVER_ERROR, "failed logging in user"
            )
        else:
            response = build_response(HTTPStatus.OK, "user logged in successfully")
    else:
        response = build_response(
            HTTPStatus.UNAUTHORIZED, "username or password is incorrect"
        )
    session["name"] = username
    user_db = get_user(username)
    session["user_id"] = user_db["user_id"]
    session["is_researcher"] = user_db["is_researcher"]

    response.set_cookie("name", username, max_age=3600, samesite="strict")
    response.set_cookie(
        "user_id", str(user_db["user_id"]), max_age=3600, samesite="strict"
    )
    response.set_cookie(
        "is_researcher", str(user_db["is_researcher"]), max_age=3600, samesite="strict"
    )

    return response


@app.route("/api/logout", methods=["GET", "POST"])
@login_required
def logout():
    """Handle logout request"""
    if logout_user():
        data = build_response(HTTPStatus.OK, "user logged out")
    else:
        data = build_response(
            HTTPStatus.INTERNAL_SERVER_ERROR, "failed logging out user"
        )

    session["name"] = ""
    session["user_id"] = ""
    session["is_researcher"] = ""
    data.delete_cookie("name")
    data.delete_cookie("user_id")
    data.delete_cookie("is_researcher")

    return data


@app.route("/dashboard", methods=["GET", "POST"])
def leaderboard():
    return User.get_all_users()