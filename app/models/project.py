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
# val should be of format: (id, name, description, block_size, owner, random_validation, max_runtime).
def insert_project(dic):
    if not project_exists(dic["project_id"]):
        sql = "INSERT INTO Project VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)"
        val = (
            dic["project_id"],
            dic["name"],
            dic["description"],
            dic["block_size"],
            dic["trust_level"],
            dic["owner"],
            dic["random_validation"],
            dic["max_runtime"],
            dic["qorum"]
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
    projects = []
    sql = f"SELECT * FROM Project"
    db.cur.execute(sql)
    res = db.cur.fetchall()
    for x in res:
        projects.append(x)
    return projects