from flask import Flask
from datetime import timedelta
from secrets import token_hex

app = Flask(__name__)

app.secret_key = token_hex()

UPLOAD_FOLDER = "/var/www/c_files"
ALLOWED_EXTENSIONS = {"c"}

app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER
app.config["MAX_CONTENT_LENGTH"] = 16 * 1000 * 1000


app.config["CELERY_BACKEND"] = "redis://redis:6379/0"
app.config["CELERY_BROKER_URL"] = "redis://redis:6379/0"

app.config["CELERYBEAT_SCHEDULE"] = {
    "say-every-5-seconds": {
        "task": "return_something",
        "schedule": timedelta(seconds=5),
    },
}
app.config["CELERY_TIMEZONE"] = "UTC"

from app import example_file_upload
from app import authentication
