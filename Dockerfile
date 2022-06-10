FROM python
RUN mkdir -p /var/www/c_files

# install supervisord
RUN apt-get update && apt-get install -y supervisor

COPY ./requirements.txt /var/www/requirements.txt
RUN pip install -r /var/www/requirements.txt

COPY ./app /app
COPY ./main.py main.py
COPY ./supervisord.conf /etc/supervisor/conf.d/supervisord.conf
# needs to be set else Celery gives an error (because docker runs commands inside container as root)
ENV C_FORCE_ROOT=1

# install the emcc compiler
RUN git clone https://github.com/emscripten-core/emsdk.git && cd emsdk && ./emsdk install latest
# run supervisord
CMD ["/usr/bin/supervisord"]


