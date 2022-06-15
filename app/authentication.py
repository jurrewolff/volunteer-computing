from http import HTTPStatus
from urllib.parse import urlparse, urljoin

from flask import request
from flask_login import LoginManager, UserMixin, login_user, logout_user, login_required

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
    def get(user_id: str):
        # TODO - Search DB for user_id/name and populate object values.

        user_db = get_user_from_db(user_id)

        if user_db:
            user = User(user_db.get("username"), user_db.get("password"))
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
    # TODO - Replace mockup with actual DB call and proper password comparison.

    for item in mock_db:
        if item.get("username") == username and item.get("password") == password:
            return True

    return False


def is_safe_url(target):
    ref_url = urlparse(request.host_url)
    test_url = urlparse(urljoin(request.host_url, target))
    return test_url.scheme in ("http", "https") and ref_url.netloc == test_url.netloc


# Authentication functions
@login_manager.user_loader
def load_user(user_id: str) -> User:
    return User.get(user_id)


@app.route("/signup", methods=["POST"])
def signup():
    if not request.headers:
        return build_response(
            HTTPStatus.BAD_REQUEST, "request is missing request headers"
        )

    username = request.headers.get("username")
    password = request.headers.get("password")
    if not username:
        return build_response(HTTPStatus.BAD_REQUEST, "provide a username")
    if not password:
        return build_response(HTTPStatus.BAD_REQUEST, "provide a password")

    user_db = get_user_from_db(username)
    if user_db:
        return build_response(
            HTTPStatus.CONFLICT, "user with username {} already exists".format(username)
        )

    if not insert_user(username, password):
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

    username = request.headers.get("username")
    password = request.headers.get("password")
    if not username:
        return build_response(HTTPStatus.BAD_REQUEST, "provide a username")
    if not password:
        return build_response(HTTPStatus.BAD_REQUEST, "provide a password")

    user = load_user(username)

    if authenticate_user(username, password):
        if not login_user(user):
            response = build_response(
                HTTPStatus.INTERNAL_SERVER_ERROR, "failed logging in user"
            )
        else:
            response = build_response(HTTPStatus.OK, "user logged in successfully")
    else:
        response = build_response(HTTPStatus.UNAUTHORIZED, "incorrect password")

    return response


@app.route("/logout", methods=["GET"])
@login_required
def logout():
    if logout_user():
        data = build_response(HTTPStatus.OK, "user logged out")
    else:
        data = build_response(
            HTTPStatus.INTERNAL_SERVER_ERROR, "failed logging out user"
        )
    return data


@app.route("/userdata", methods=["GET"])
@login_required
def userdata():

    if not request.headers:
        return build_response(
            HTTPStatus.BAD_REQUEST, "request is missing request headers"
        )

    username = request.headers.get("username")
    if not username:
        return build_response(HTTPStatus.BAD_REQUEST, "provide a username")

    user_db = get_user_from_db(username)

    if not user_db:
        return build_response(
            HTTPStatus.NOT_FOUND,
            "user with username {} does not exist".format(username),
        )

    data = {
        "username": user_db.get("username"),
        "password": user_db.get("password"),
        # TODO - Add all user attributes returned by actual db call.
        # "email": user_db.get("email"),
        # "etcetera": user_db.get("etcetera"),
    }

    response = build_response(
        HTTPStatus.OK, "fetched data for user {}".format(username), data=data
    )

    return response
