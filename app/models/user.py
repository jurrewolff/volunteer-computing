import mysql.connector as connector
from itertools import count, filterfalse

from app.models.database import *

def print_users(): # For testing purpuses.
    db.cur.execute("SELECT * FROM User")
    res = db.cur.fetchall()
    for x in res:
        print(x)

# Adds a user to the User table.
# val should be of format: (id, username, password, email, first_name, last_name, score).
# Returns false if username is not unique, returns true otherwise.
def insert_user(val):
    if check_user_exists(val[1]) == None:
        sql = "INSERT INTO User VALUES (%s, %s, %s, %s, %s, %s, %s)"
        db.cur.execute(sql, val)
        db.con.commit()
        return True
    return False

# Returns true if user exists based on username, returns false otherwise.
# When login is true, returns the record of the user.
def check_user_exists(username, login=False):
    sql = f"SELECT 1 FROM User WHERE username = '{username}'"
    db.cur.execute(sql)
    res = db.cur.fetchone()
    if login:
        sql = f"SELECT * FROM User WHERE username = '{username}'"
        db.cur.execute(sql)
        res = db.cur.fetchone()
    return res

# Returns the lowest id that has not yet been taken.
def get_new_user_id():
    sql = f"SELECT user_id FROM User"
    db.cur.execute(sql)
    ids_taken = [x[0] for x in db.cur.fetchall()]
    return next(filterfalse(set(ids_taken).__contains__, count(1)))