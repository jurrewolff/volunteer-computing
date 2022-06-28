#!/bin/bash

cd flask_react
rm -rfv node_modules build package-lock.json
npm cache clear --force
npm install --force
cd ..
bash npm_build.sh

app="pse-flask"

docker-compose down
docker image rm pse-mysql pse-flask

docker build -t ${app} .
docker build -f Dockerfile.db -t pse-mysql .
docker-compose up

