FROM tiangolo/uwsgi-nginx-flask:python3.8
RUN mkdir -p /var/www/c_files
RUN mkdir app
COPY ./requirements.txt /app/requirements.txt
RUN pip install --default-timeout=1000 -r /app/requirements.txt
