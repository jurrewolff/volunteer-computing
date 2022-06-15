import mysql.connector as connector
from itertools import count, filterfalse

from app.models.database import *

# Returns True if project exists, returns False otherwise.
def project_exists(project_id):
    sql = f"SELECT 1 FROM Project WHERE project_id = '{project_id}'"
    db.cur.execute(sql)
    if db.cur.fetchone() == None:
        return False
    return True

# Inserts a project into the 'project' table.
# val should be of format: (id, name, description, owner, block_size).
def insert_project(val):
    if not project_exists(val[0]):
        sql = "INSERT INTO Project VALUES (%s, %s, %s, %s, %s, %s, %s)"
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
    projects = []
    sql = f"SELECT * FROM Project"
    db.cur.execute(sql)
    res = db.cur.fetchall()
    for x in res:
        projects.append(x)
    return projects

def get_project(project_id):
    if project_exists(project_id):
        sql = f"SELECT * FROM Project WHERE project_id = '{project_id}'"
        db.cur.execute(sql)
        res = db.cur.fetchone()
        return {
            "project_id" : res[0],
            "name" : res[1],
            "description" : res[2],
            "owner" : res[3],
            "block_size" : res[4],
            "random_validation" : res[5],
            "max_runtime" : res[6]
        }
    else:
        return False