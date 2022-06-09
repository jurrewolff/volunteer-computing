from celery import Celery
from main import app
def make_celery(app):
    celery = Celery(app.import_name)
    celery.conf.update(app.config["CELERY_CONFIG"])

    class ContextTask(celery.Task):
        def __call__(self, *args, **kwargs):
            with app.app_context():
                return self.run(*args, **kwargs)

    celery.Task = ContextTask
    return celery


app.config.update(CELERY_CONFIG={
    'broker_url': 'redis://localhost:6379',
    'result_backend': 'redis://localhost:6379',
})
celery = make_celery(app)

@celery.task()
def add_together(a, b):
    return a + b

result = add_together.delay(23, 42)
result.wait()  # 65

@app.route('/compile', methods=['GET'])
def convert_file():
    result = add_together.delay(23, 42)
    result.wait()  # 65
    return result