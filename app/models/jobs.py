import mysql.connector as connector
from itertools import count, filterfalse

from models.database import *
import models.project as pj

# Inserts a project into the 'project' table.
# val should be of format: (job_id, project_id, qorum_size).
def insert_job(val, project):
    if pj.check_project_exists(project):
        sql = "INSERT INTO Jobs VALUES (%s, %s, %s)"
        db.cur.execute(sql, val)
        db.con.commit()
        return True
    return False

# Returns the first not in use id in the project table.
def get_new_project_id(project):
    sql = f"SELECT job_id FROM Jobs WHERE project_id = {project}"
    db.cur.execute(sql)
    ids_taken = [x[0] for x in db.cur.fetchall()]
    return next(filterfalse(set(ids_taken).__contains__, count(1)))

# Returns a list of all project. 1 tuple per project.
def get_all_projects():
    projects = []
    sql = f"SELECT * FROM Project"
    db.cur.execute(sql)
    res = db.cur.fetchall()
    for x in res:
        projects.append(x)
    return projects