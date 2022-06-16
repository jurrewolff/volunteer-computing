FROM python
RUN mkdir -p /var/www/c_files
RUN mkdir -p /var/www/compiled_files
#RUN mkdir app

# install supervisord
RUN apt-get update && apt-get install -y supervisor && apt-get install -y emscripten
# emcc needs to be called once before it will start compiling files
RUN emcc
#RUN mkdir /emcc_cache
RUN python /usr/share/emscripten/embuilder.py build MINIMAL
#COPY ./emcc_cache /emcc_cache


COPY ./requirements.txt /var/www/requirements.txt
RUN pip install -r /var/www/requirements.txt
COPY ./app /app
COPY ./main.py main.py
COPY ./supervisord.conf /etc/supervisor/conf.d/supervisord.conf
# needs to be set else Celery gives an error (because docker runs commands inside container as root)
ENV C_FORCE_ROOT=1

# install the emcc compiler
#RUN git clone https://github.com/emscripten-core/emsdk.git && cd emsdk && ./emsdk install latest && . ./emsdk_env.sh
# run supervisord
CMD ["/usr/bin/supervisord"]
