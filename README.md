# Stronger together

Stronger together is a volunteer computing platform allowing institutions to provide their researchers easy access to
crowd-sourced computing power.

## Installation

1. Install the required dependencies: `docker, docker-compose, npm`
2. Install npm packages: `$ bash npm_build.sh`
3. Start the application: `docker-compose up`

## Usage

The application database can be managed using "phpmyadmin". This service is accessible through a web-interface at port
8082 of the server IP-address.

Volunteers are able to sign up as freely, but researchers need to be verified by a moderator. This proces is as follows:

1. Sign up as researcher
2. Wait for moderator confirmation
3. Access researcher functionality

## License

??GPLv3??
