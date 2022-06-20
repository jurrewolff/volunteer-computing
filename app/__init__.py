"""
Flask API entry point. Initialize flask application and set configuration.
"""

from secrets import token_hex
from flask import Flask

app = Flask(__name__)

app.secret_key = token_hex()

PROJECTS_DIR = '/var/www/projects'

app.config['PROJECTS_DIR'] = PROJECTS_DIR
app.config['MAX_CONTENT_LENGTH'] = 16 * 1000 * 1000

app.config["CELERY_BACKEND"] = "redis://redis:6379/0"
app.config["CELERY_BROKER_URL"] = "redis://redis:6379/0"
app.config["CELERY_TIMEZONE"] = "UTC"

app.config["MYSQL_USER"] = "root"
app.config["MYSQL_PASSWORD"] = "admin"
app.config["MYSQL_DB"] = "app"

from app import example_file_upload
from app import authentication
from app import schedule
