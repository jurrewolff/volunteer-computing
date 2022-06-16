import mysql.connector as connector
from itertools import count, filterfalse
import models.user as user
import app.models.project as project

from models.database import *

# Adds an entry to the Volunteer table.
# Val should be of format: (user_id, project_id, block_count)
# Returns False if given user or project doesn't exists, returns True otherwise.
def insert_volunteer(val):
    if user.account_id_exists(val[0]) and project.check_project_exists(val[1]) and not volunteer_exists((val[0], val[1])):
        sql = "INSERT INTO Volunteer VALUES (%s, %s, %s)"
        db.cur.execute(sql, val)
        db.con.commit()
        return True
    return False
    
# Returns True if volunteer is in table, returns False otherwise.
# Val should be of format: (user_id, project_id).
def volunteer_exists(val):
    sql = f"SELECT 1 FROM Volunteer WHERE user_id = '{val[0]}' AND project_id = '{val[1]}'"
    db.cur.execute(sql)
    res = db.cur.fetchone()
    if res == None:
        return False
    else :
        return True

# Returns all projects a user has participated in. The projects are
# returned in a list of tuples. The tuples are of format (name, description, owner, contribution).
def get_projects_of_user(user_id):
    sql = f"SELECT * FROM Volunteer WHERE user_id = '{user_id}'"
    db.cur.execute(sql)
    res = db.cur.fetchone()
    return res
