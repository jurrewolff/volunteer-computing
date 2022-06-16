import os
from app import app
from flask import Flask, flash, request, redirect, url_for, jsonify, send_from_directory, render_template
from werkzeug.utils import secure_filename
import time

def get_project_id(name):
    return 7

ALLOWED_EXTENSIONS = {'c'}
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

            # TODO: put in database and get id to use as dir name
            proj_id = get_project_id(filename)

            os.mkdir(os.path.join(app.config['PROJECTS_DIR'], f"{proj_id}"))
            file.save(os.path.join(app.config['PROJECTS_DIR'], f"{proj_id}/main.c"))
            task = compile.delay(proj_id)
            return redirect(url_for('taskstatus', task_id=task.id))

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
import subprocess
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

@celery.task(name='compile')
def compile(proj_id):
    os.system(f"emcc {os.path.join(app.config['PROJECTS_DIR'], f'{proj_id}/main.c')} -o {os.path.join(app.config['PROJECTS_DIR'], f'{proj_id}/main')}.js")
    os.remove(f"{os.path.join(app.config['PROJECTS_DIR'], f'{proj_id}/main.js')}")
    # we don't need to store .c files
    os.remove(f"{os.path.join(app.config['PROJECTS_DIR'], f'{proj_id}/main.c')}")
    # subprocess.run(["emcc", f"{os.path.join(app.config['UPLOAD_FOLDER'], filename)}",f" -o {os.path.join(app.config['COMPILED_FILES_FOLDER'], filename_without_extension)}.js"])
    return "done"

@app.route('/taskstatus/<task_id>')
def taskstatus(task_id):
    task = compile.AsyncResult(task_id)
    if task.state == 'PENDING':
        time.sleep(1)
        # time.sleep(config.SERVER_SLEEP)
        response = {
            'queue_state': task.state,
            'status': 'Process is ongoing...',
            'status_update': url_for('taskstatus', task_id=task.id)
        }
    else:
        response = {
            'queue_state': task.state,
            'result': task.wait()
        }
    return jsonify(response)


@app.route('/runproject/<proj_id>', methods=('GET', 'POST'))
def datatest(proj_id):
    if request.method == 'POST':
        data = request.form.get('data')
        with open(f"{app.config['PROJECTS_DIR']}/{proj_id}/output", "a") as f:
            f.write(data)
    # arguments from scetuler
    lines = [str(r) for r in range(0,10)]
    data =  {'arguments': ["1 20 3", "5 6 7"], "size": 2, "line" : lines}
    return render_template('template.html', data=data, name=proj_id)

@app.route('/<proj_id>.js')
def jstemplate(proj_id):
    return render_template('template.js', name=proj_id)

@app.route('/<proj_id>.wasm')
def serve_wasm(proj_id):
    return send_from_directory(os.path.join(app.config['PROJECTS_DIR'], f"{proj_id}"), 'main.wasm', cache_timeout=604800) # cached for a week

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
