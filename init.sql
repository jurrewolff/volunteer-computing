DROP DATABASE IF EXISTS app;
CREATE DATABASE app;
CREATE TABLE app.User (
user_id int,
username varchar(255),
password varchar(255),
email varchar(255),
first_name varchar(255),
last_name varchar(255),
score int,
institution varchar(255),
upload_rights BOOL,
background varchar(255),
UNIQUE (username, email),
PRIMARY KEY(user_id)
);


CREATE TABLE app.Project (
project_id int,
name varchar(255),
description varchar(255),
owner int,
block_size int,
random_validation BOOL,
max_runtime int,
PRIMARY KEY (project_id),
FOREIGN KEY (owner) REFERENCES User(user_id)
);

CREATE TABLE app.Jobs (
job_id int,
project_id int,
qorum_size int,
PRIMARY KEY (job_id, project_id),
FOREIGN KEY (project_id) REFERENCES Project(project_id)
);

CREATE TABLE app.Result (
job_id int,
project_id int,
volunteer int,
PRIMARY KEY (job_id, project_id),
FOREIGN KEY (job_id) REFERENCES Jobs(job_id),
FOREIGN KEY (project_id) REFERENCES Project(project_id),
FOREIGN KEY (volunteer) REFERENCES User(user_id)
);
