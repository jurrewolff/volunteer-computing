FROM tiangolo/uwsgi-nginx-flask:python3.8
RUN mkdir -p /var/www/c_files

COPY ./requirements.txt /var/www/requirements.txt
RUN pip install -r /var/www/requirements.txt

COPY ./app /app
