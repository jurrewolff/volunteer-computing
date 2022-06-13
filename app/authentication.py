import json

from main import app
from flask import session, request, flash, redirect, url_for, abort, jsonify
from flask_login import LoginManager, UserMixin, login_user, logout_user, login_required
from urllib.parse import urlparse, urljoin
import app.mysql_script as ms


# TODO - TESTING
# Function that returns username, password, firstname, lastname and score from username input.
def get_user_from_db(username: str) -> dict:
    res = ms.check_user_exists(username, True)
    if res:
        return {"username": res[1], "password": res[2], "firstname": res[4], "lastname": res[5], "score": res[6]}

    return {}

def insert_user_into_db(username: str, email: str, firstname: str, lastname: str) -> int:
    res = ms.insert_user((ms.get_new_user_id(), username, email, firstname, lastname, 0))
    if res:
        return 0

    return 1


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


# Login functions
@login_manager.user_loader
def load_user(user_id: str) -> User:
    return User.get(user_id)


@app.route("/login", methods=["GET", "POST"])
def login():
    if not request.headers:
        app.logger.debug("login request without headers")
        return abort(400)

    username = request.headers.get("username")
    password = request.headers.get("password")

    user = load_user(username)

    if authenticate_user(username, password):
        if not login_user(user):
            response = {"code": 500, "msg": "failed logging in user"}
        else:
            response = {"code": 200, "msg": "user logged in successfully"}
    else:
        response = {"code": 200, "msg": "incorrect password"}

    return jsonify(response)


@app.route("/logout", methods=["GET"])
@login_required
def logout():
    if logout_user():
        data = {"code": 200, "msg": "user logged out"}
    else:
        data = {"code": 500, "msg": "failed logging out user"}
    return jsonify(data)


@app.route("/dashboard", methods=["GET"])
@login_required
def dashboard():
    return jsonify(
        {"code": 200, "msg": "dashboard of user {}".format(session["_user_id"])}
    )