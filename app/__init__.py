from flask import Flask,render_template
from datetime import timedelta
from secrets import token_hex
import os
app = Flask(__name__, static_url_path='',static_folder='static', template_folder='static')
# Serve React App
@app.route("/")
def serve():
    return render_template("index.html")

app.secret_key = token_hex()

UPLOAD_FOLDER = '/var/www/c_files'
COMPILED_FILES_FOLDER = '/var/www/compiled_files'

app.config['COMPILED_FILES_FOLDER'] = COMPILED_FILES_FOLDER
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1000 * 1000



app.config['CELERY_BACKEND'] = "redis://redis:6379/0"
app.config['CELERY_BROKER_URL'] = "redis://redis:6379/0"
# app.config['CELERYBEAT_SCHEDULE'] = {
#     'say-every-5-seconds': {
#         'task': 'compile',
#         'schedule': timedelta(seconds=5),
#         'args' :  ([1],),
#     },
# }
app.config['CELERY_TIMEZONE'] = 'UTC'

from app import example_file_upload
from app import authentication
