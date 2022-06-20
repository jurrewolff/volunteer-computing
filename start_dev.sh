#!/bin/bash

bash npm_build.sh

bash precompile_libs.sh
app="pse-flask"

docker-compose down
docker image rm pse-mysql pse-flask

docker build -t ${app} .
docker build -f Dockerfile.db -t pse-mysql .
docker-compose up
