import mysql.connector as connector
from itertools import count, filterfalse

from app.models.database import *
import app.models.project as pj

# Inserts a project into the 'project' table.
# val should be of format: (job_id, project_id, qorum_size, done).


def insert_job(val, project):
    if pj.project_exists(project):
        sql = "INSERT INTO Jobs VALUES (%s, %s, %s, %s)"
        db.cur.execute(sql, val)
        db.con.commit()
        return True
    return False

# Returns the first not in use id in the project table.


def get_new_job_id(project):
    sql = f"SELECT job_id FROM Jobs WHERE project_id = {project}"
    db.cur.execute(sql)
    ids_taken = [x[0] for x in db.cur.fetchall()]
    return next(filterfalse(set(ids_taken).__contains__, count(1)))

# Returns a list of all project. 1 tuple per project.


def get_all_jobs_of_project(project):
    jobs = []
    sql = f"SELECT * FROM Jobs WHERE project_id = {project}"
    db.cur.execute(sql)
    res = db.cur.fetchall()
    for x in res:
        jobs.append(x)
    return jobs


def increment_quorum_size(project_id, job_id):
    query = f"""
    UPDATE Jobs
    SET quorum_size = quorum_size + 1
    WHERE job_id = '{job_id}' AND project_id = '{project_id}'
    """
    db.cur.execute(query)
    db.con.commit()


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
