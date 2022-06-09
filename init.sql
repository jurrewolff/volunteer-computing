CREATE TABLE User (
user_id int,
username varchar(255),
email varchar(255),
first_name varchar(255),
last_name varchar(255),
score int,
UNIQUE (username, email),
PRIMARY KEY(user_id)
);


CREATE TABLE Project (
project_id int,
name varchar(255),
description varchar(255),
owner int,
PRIMARY KEY (project_id),
FOREIGN KEY (owner) REFERENCES User(user_id)
);


CREATE TABLE Participant (
participant_id int,
user_id int,
project_id int,
result_path varchar(255),
PRIMARY KEY (participant_id),
FOREIGN KEY (user_id) REFERENCES User(user_id),
FOREIGN KEY (project_id) REFERENCES Project(project_id)
);
