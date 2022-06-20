#!/bin/bash
docker-compose down
docker image rm pse-mysql pse-flask

docker build -t pse-flask .
docker build -f Dockerfile.db -t pse-mysql .
docker-compose up
