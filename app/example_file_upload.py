import os
from app import app
from flask import Flask, flash, request, redirect, url_for, jsonify
from werkzeug.utils import secure_filename

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        # check if the post request has the file part
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        file = request.files['file']
        # If the user does not select a file, the browser submits an
        # empty file without a filename.
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            task = compile.delay(filename)
            return redirect(url_for('files', task_id=task.id))

            # return redirect(url_for('progress', name=filename, taskid=task.id))
    return '''
    <!doctype html>
    <title>Upload new File</title>
    <h1>Upload new File</h1>
    <form method=post enctype=multipart/form-data>
      <input type=file name=file>
      <input type=submit value=Upload>
    </form>
    '''

from celery import Celery

def make_celery(app):
    celery = Celery(app.import_name, backend=app.config['CELERY_BACKEND'],
                    broker=app.config['CELERY_BROKER_URL'])
    celery.conf.update(app.config)
    TaskBase = celery.Task
    class ContextTask(TaskBase):
        abstract = True
        def __call__(self, *args, **kwargs):
            with app.app_context():
                return TaskBase.__call__(self, *args, **kwargs)
    celery.Task = ContextTask
    return celery

celery = make_celery(app)

@celery.task(name='return_something')
def return_something():
    # print ('something')
    return 'something'

@app.route('/test')
def home():
    result = return_something.delay()
    return result.wait()

# @celery.task()
# def compile(filename):
#     return "some result"

# @app.route('/status/<task_id>')
# def taskstatus(task_id):
#     task = compile.AsyncResult(task_id)
#     if task.state == 'PENDING':
#         # time.sleep(config.SERVER_SLEEP)
#         response = {
#             'queue_state': task.state,
#             'status': 'Process is ongoing...',
#             'status_update': url_for('taskstatus', task_id=task.id)
#         }
#     else:
#         response = {
#             'queue_state': task.state,
#             'result': task.wait()
#         }
#     return jsonify(response)
# # @app.route('/progress/<filename><taskid>' )
# # def progress(filename, taskid):
# #     return '''
# #     <!doctype html>
# #     <title>Compiled files</title>
# #     <h1>File</h1>
 
# #     '''
