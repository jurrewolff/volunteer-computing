import mysql.connector as connector
from itertools import count, filterfalse

from models.database import *

# Returns True if project exists, returns False otherwise.
def check_project_exists(project_id):
    sql = f"SELECT 1 FROM Project WHERE project_id = '{project_id}'"
    db.cur.execute(sql)
    if db.cur.fetchone() == None:
        return False
    return True

# Inserts a project into the 'project' table.
# val should be of format: (id, name, description, owner, block_size).
def insert_project(val):
    if not check_project_exists(val[0]):
        sql = "INSERT INTO Project VALUES (%s, %s, %s, %s, %s)"
        db.cur.execute(sql, val)
        db.con.commit()
        return True
    return False

def get_new_project_id():
    sql = f"SELECT project_id FROM Project"
    db.cur.execute(sql)
    ids_taken = [x[0] for x in db.cur.fetchall()]
    return next(filterfalse(set(ids_taken).__contains__, count(1)))

def get_all_projects():
    projects = []
    sql = f"SELECT * FROM Project"
    db.cur.execute(sql)
    res = db.cur.fetchall()
    for x in res:
        projects.append(x)
    return projects