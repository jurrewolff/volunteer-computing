from http import HTTPStatus
from urllib.parse import urlparse, urljoin

from flask import request, jsonify
from flask_login import LoginManager, UserMixin, login_user, logout_user, login_required
from urllib.parse import urlparse, urljoin
import app.mysql_script as ms
import app.models.user as user

from app.util import build_response
from main import app

# TODO - TESTING
# Function that returns username, password, firstname, lastname and score from username input.
def get_user_from_db(username: str) -> dict:
    res = ms.check_user_exists(username, True)
    if res:
        return {"username": res[1], "password": res[2], "firstname": res[4], "lastname": res[5], "score": res[6]}

    return {}

def insert_user_into_db(username: str, password: str, email: str, firstname: str, lastname: str) -> int:
    res = user.insert_user((ms.get_new_user_id(), username, password, email, firstname, lastname, 0))
    if res:
        return True

    return False


# # Mockup function simulating adding user to DB.
# def insert_user(user_id: str, password: str) -> dict:
#     mock_db_new_row = {"username": user_id, "password": password}
#     mock_db.append(mock_db_new_row)

#     return mock_db_new_row


# TODO - ENDTESTING


class User(UserMixin):
    def __init__(self, username: str, password: str):
        self.username = username
        self._password = password


    @staticmethod
    def get(user_id: str):
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
    user_db = get_user_from_db(username)
    if password == user_db.get("password"):
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
    email = request.headers.get("email")
    firstname = request.headers.get("firstname")
    lastname = request.headers.get("lastname")

    if not username:
        return build_response(HTTPStatus.BAD_REQUEST, "Please provide a username")
    if not password:
        return build_response(HTTPStatus.BAD_REQUEST, "Please provide a password")
    if not email:
        return build_response(HTTPStatus.BAD_REQUEST, "Please provide an email")
    if not firstname:
        return build_response(HTTPStatus.BAD_REQUEST, "Please provide a firstname")
    if not lastname:
        return build_response(HTTPStatus.BAD_REQUEST, "Please provide a lastname")

    user_db = get_user_from_db(username)
    if user_db:
        return build_response(
            HTTPStatus.CONFLICT, "user with username {} already exists".format(username)
        )

    if not insert_user_into_db(username, password, email, firstname, lastname):
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

    user = load_user(username) # username not found erbij doen?
    if not user:
        return jsonify(build_response(HTTPStatus.OK, "username not found"))

    if authenticate_user(username, password):
        if not login_user(user):
            response = build_response(
                HTTPStatus.INTERNAL_SERVER_ERROR, "failed logging in user"
            )
        else:
            response = build_response(HTTPStatus.OK, "user logged in successfully")
    else:
        response = build_response(HTTPStatus.OK, "incorrect password")

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
        {"code": 200, "msg": "dashboard of user {}".format(session["_user_id"])}
    )
