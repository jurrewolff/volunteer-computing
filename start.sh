#!/bin/bash
app="pse-flask"
docker build -t ${app} .
docker-compose up