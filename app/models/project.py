import mysql.connector as connector
from itertools import count, filterfalse
from main import app

from app.models.database import *
import app.models.user as user

# Returns True if project exists, returns False otherwise.


def project_exists(project_id):
    sql = f"SELECT 1 FROM Project WHERE project_id = '{project_id}'"
    db.cur.execute(sql)
    if db.cur.fetchone() == None:
        return False
    return True


# Inserts a project into the 'project' table.
# val should be of format: (id, name, description, block_size, owner, random_validation, max_runtime).


def insert_project(dic):
    if not project_exists(dic["project_id"]):
        sql = "INSERT INTO Project VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
        val = (
            dic["project_id"],
            dic["name"],
            dic["description"],
            dic["block_size"],
            dic["trust_level"],
            dic["owner"],
            dic["random_validation"],
            dic["max_runtime"],
            dic["quorum"],
            0,
            0,
        )
        db.cur.execute(sql, val)
        db.con.commit()
        return True
    return False


# Returns the first not in use id in the project table.
def get_new_project_id():
    sql = f"SELECT project_id FROM Project"
    db.cur.execute(sql)
    ids_taken = [x[0] for x in db.cur.fetchall()]
    return next(filterfalse(set(ids_taken).__contains__, count(1)))


# Returns a list of all project. 1 tuple per project.
def get_all_projects():
    sql = f"SELECT * FROM Project WHERE done = 0"
    db.cur.execute(sql)
    res = db.cur.fetchall()
    return [{"project_id": x[0], "name": x[1], "description": x[2]} for x in res]


# Returns a list of all project. 1 tuple per project.


def get_projects_researchers(user_id):
    projects = []
    sql = f"SELECT * FROM Project WHERE owner = '{user_id}'"
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


def get_project(project_id):
    if project_exists(project_id):
        sql = f"SELECT * FROM Project WHERE project_id = '{project_id}'"
        db.cur.execute(sql)
        res = db.cur.fetchone()
        return {
            "project_id": res[0],
            "name": res[1],
            "description": res[2],
            "block_size": res[3],
            "trust_level": res[4],
            "owner": res[5],
            "random_validation": res[6],
            "max_runtime": res[7],
            "quorum_size": res[8],
            "done": res[9],
            "progress": res[10],
        }
    else:
        return False


def get_n_open_jobs(project_id):
    query = f"""
    SELECT COUNT(*)
    FROM Jobs
    WHERE  project_id = '{project_id}' AND Jobs.done = 0
    """
    db.cur.execute(query)
    return db.cur.fetchone()[0]


def possible_jobs(project_id, user_id):
    query = f"""
    SELECT job_id, project_id
    FROM Jobs
    WHERE  project_id = '{project_id}' AND Jobs.done = 0 AND '{user_id}' NOT IN (
        SELECT volunteer
        FROM Result
        WHERE Result.job_id = Jobs.job_id AND project_id = '{project_id}'
    )
    """
    db.cur.execute(query)
    res = db.cur.fetchall()
    return res


def get_projects_from_user(user_id):
    if user.account_id_exists(user_id):
        sql = f"SELECT * FROM Project WHERE owner = '{user_id}'"
        db.cur.execute(sql)
        projects = []
        res = db.cur.fetchall()
        for x in res:
            project = {
                "project_id": x[0],
                "name": x[1],
                "description": x[2],
            }
            projects.append(project)
        return projects
    else:
        return False
