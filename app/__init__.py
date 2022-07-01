"""
Flask API entry point. Initialize flask application and set configuration.
"""

from secrets import token_hex
from flask import Flask, render_template
from secrets import token_hex

app = Flask(
    __name__, static_url_path="", static_folder="static",
    template_folder="templates"
)


# Serve React App
@app.route("/")
@app.route("/dashboard")
@app.route("/projects")
@app.route("/pastprojects")
@app.route("/upload")
@app.route("/results")
@app.route("/userinfo")
@app.route("/signUp")
@app.route("/login")
def serve():
    return app.send_static_file("index.html")


app.secret_key = token_hex()

PROJECTS_DIR = "/var/www/projects"

app.config["PROJECTS_DIR"] = PROJECTS_DIR
app.config["MAX_CONTENT_LENGTH"] = 16 * 1000 * 1000

app.config["CELERY_BACKEND"] = "redis://redis:6379/0"
app.config["CELERY_BROKER_URL"] = "redis://redis:6379/0"
app.config["CELERY_TIMEZONE"] = "UTC"

from app import authentication, routes
from app import api_endpoint
from app import schedule
from app import celeryworker