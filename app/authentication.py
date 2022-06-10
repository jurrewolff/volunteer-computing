import json

from main import app
from flask import session, request, flash, redirect, url_for, abort, jsonify
from flask_login import LoginManager, UserMixin, login_user, logout_user, login_required
from urllib.parse import urlparse, urljoin


# TODO - TESTING
# Mockup function simulating database search. Only username "jantje" is present.
def get_user_from_db(user_id: str) -> dict:
    if user_id == "jantje":
        return {"username": "jantje", "password": "geheim"}
    elif user_id == "dirk":
        return {"username": "dirk", "password": "geheim"}

    return {}


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

    if username == "jantje" and password == "geheim":
        return True
    elif username == "dirk" and password == "geheim":
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
