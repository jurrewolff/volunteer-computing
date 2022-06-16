#!/bin/bash
docker build -t pse-flask .
docker build -f Dockerfile.db -t pse-mysql .
docker-compose up
