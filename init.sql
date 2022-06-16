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
trust_level float(24),
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
trust_level float(24),
random_validation BOOL,
max_runtime int,
quorum_size int,
PRIMARY KEY (project_id),
FOREIGN KEY (owner) REFERENCES User(user_id)
);


CREATE TABLE app.Volunteer (
user_id int,
project_id int,
contribution int,
PRIMARY KEY (user_id, project_id),
FOREIGN KEY (user_id) REFERENCES User(user_id),
FOREIGN KEY (project_id) REFERENCES Project(project_id)
);

CREATE TABLE app.Jobs (
job_id int,
project_id int,
quorum_size int,
done BOOL,
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
FOREIGN KEY (volunteer) REFERENCES Volunteer(user_id)
);
