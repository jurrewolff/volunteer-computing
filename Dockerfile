FROM tiangolo/uwsgi-nginx-flask:python3.8
RUN mkdir -p /var/www/c_files
COPY ./app /app
