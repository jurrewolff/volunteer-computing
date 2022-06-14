# import mysql.connector as connector
from itertools import count, filterfalse

from app import mysql

cur = mysql.connection.cursor()
def print_users(): # For testing purpuses.
    cur.execute("SELECT * FROM User")
    res = cur.fetchall()
    for x in res:
        print(x)
print_users()
db = None
# Adds a user to the User table.
# val should be of format: (id, username, password, email, first_name, last_name, score).
# Returns false if username is not unique, returns true otherwise.
def insert_user(val):
    if not account_id_exists(val[0]) and not username_exists(val[1]):
        sql = "INSERT INTO User (user_id, username, password, email, first_name, last_name, score, upload_rights) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"
        db.cur.execute(sql, val)
        db.con.commit()
        return True
    return False

#def insert_researcher():


# Returns true if account_id exists, returns false otherwise.
def account_id_exists(user_id):
    sql = f"SELECT 1 FROM User WHERE user_id = '{user_id}'"
    db.cur.execute(sql)
    res = db.cur.fetchone()
    if res == None:
        return False
    else:
        return True

# Returns true if account_username exists, returns false otherwise.
def username_exists(username):
    sql = f"SELECT 1 FROM User WHERE username = '{username}'"
    db.cur.execute(sql)
    res = db.cur.fetchone()
    if res == None:
        return False
    else:
        return True

# returns a tuple containing all column of the given user. If the user doesn't exists, False is returned.
def get_user(username):
    if username_exists():
        sql = f"SELECT * FROM User WHERE username = '{username}'"
        db.cur.execute(sql)
        res = db.cur.fetchone()
        return res
    return False

# Returns the lowest id that has not yet been taken.
def get_new_user_id():
    sql = f"SELECT user_id FROM User"
    db.cur.execute(sql)
    ids_taken = [x[0] for x in db.cur.fetchall()]
    return next(filterfalse(set(ids_taken).__contains__, count(1)))