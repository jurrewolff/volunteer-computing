from flask import Flask

app = Flask(__name__)
import example_file_upload
import authentication
import secrets

app.secret_key = secrets.token_hex()
