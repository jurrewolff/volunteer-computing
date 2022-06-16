from flask import Flask
from datetime import timedelta

app = Flask(__name__)

PROJECTS_DIR = '/var/www/projects'

app.config['PROJECTS_DIR'] = PROJECTS_DIR
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
