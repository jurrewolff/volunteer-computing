import mysql.connector as connector
from itertools import count, filterfalse
import app.models.user as user
import app.models.project as project
from main import app

from app.models.database import *

# Adds an entry to the Result table.
# Val should be of format: (user_id, project_id, block_count)
# Returns False if given user or project doesn't exists, returns True otherwise.


def insert_result(val):
    if user.account_id_exists(val[0]) and project.check_project_exists(val[1]) and not result_exists((val[0], val[1])):
        sql = "INSERT INTO Result VALUES (%s, %s, %s)"
        db.cur.execute(sql, val)
        db.con.commit()
        return True
    return False

# Returns True if result is in table, returns False otherwise.
# Val should be of format: (user_id, project_id).


def result_exists(val):
    sql = f"SELECT 1 FROM Result WHERE user_id = '{val[0]}' AND project_id = '{val[1]}'"
    db.cur.execute(sql)
    res = db.cur.fetchone()
    if res == None:
        return False
    else:
        return True

# Returns all projects a user has participated in. The projects are
# returned in a list of tuples. The tuples are of format (name, description, owner, contribution).


def get_projects_of_user(user_id):
    projects = []
    sql = f"SELECT DISTINCT Project.project_id, Project.name, Project.description FROM Result JOIN Project ON Result.project_id=Project.project_id WHERE Result.volunteer = '{user_id}'"
    db.cur.execute(sql)
    res = db.cur.fetchall()
    for x in res:
        project = {
            "project_id": x[0],
            "name": x[1],
            "description": x[2],
        }
        projects.append(project)
    return projects


def save_result(project_id, job_id, volunteer_id, result):
    """Insert a result into the db."""
    query = f"INSERT INTO Result (job_id, project_id, volunteer, result) VALUES ('{job_id}','{project_id}','{volunteer_id}', '{result}')"
    db.cur.execute(query)
    db.con.commit()


def get_number_of_results(job_id, project_id):
    """Retrieve the number of results for a project."""
    query = f"SELECT COUNT(*) FROM Result WHERE job_id ='{job_id}' AND project_id = '{project_id}';"
    db.cur.execute(query)
    res = db.cur.fetchone()
    return res