#!/bin/bash
app="pse-flask"
docker build -t ${app} .
docker build -f Dockerfile.db -t pse-mysql .
docker-compose up
