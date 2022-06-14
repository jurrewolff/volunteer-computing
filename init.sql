CREATE DATABASE app;
CREATE TABLE app.User (
user_id int,
username varchar(255),
password varchar(255),
email varchar(255),
first_name varchar(255),
last_name varchar(255),
score int,
trust_level float(24),
UNIQUE (username, email),
PRIMARY KEY(user_id)
);


CREATE TABLE app.Project (
project_id int,
name varchar(255),
description varchar(255),
owner int,
block_size int,
trust_level float(24),
PRIMARY KEY (project_id),
FOREIGN KEY (owner) REFERENCES User(user_id)
);


CREATE TABLE app.Participant (
user_id int,
project_id int,
result_path varchar(255),
PRIMARY KEY (user_id, project_id),
FOREIGN KEY (user_id) REFERENCES User(user_id),
FOREIGN KEY (project_id) REFERENCES Project(project_id)
);
