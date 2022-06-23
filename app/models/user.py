from itertools import count, filterfalse

from app.models.database import *


def print_users():  # For testing purpuses.
    db.cur.execute("SELECT * FROM User")
    res = db.cur.fetchall()
    for x in res:
        print(x)


# Adds a user to the User table.
# dictionary should have values: id, username, password, email,
# first_name, last_name, score, institution, is_researcher, background.
# Returns false if user_id or username allready exists.
def insert_user(dic):
    if not account_id_exists(dic["user_id"]) and not username_exists(dic["username"]):
        sql = "INSERT INTO User VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
        val = (
            dic["user_id"],
            dic["username"],
            dic["password"],
            dic["email"],
            dic["firstname"],
            dic["lastname"],
            dic["score"],
            dic["trust_level"],
            dic["institution"],
            dic["is_researcher"],
            dic["background"],
        )

        db.cur.execute(sql, val)
        db.con.commit()
        return True
    return False


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


# returns a dictionary container the user info. If the user doesn't exists, False is returned.
def get_user(username):
    if username_exists(username):
        sql = f"SELECT * FROM User WHERE username = '{username}'"
        db.cur.execute(sql)
        res = db.cur.fetchone()
        return {
            "user_id": res[0],
            "username": res[1],
            "password": res[2],
            "email": res[3],
            "first_name": res[4],
            "last_name": res[5],
            "score": res[6],
            "trust_level": res[7],
            "institution": res[8],
            "is_researcher": res[9],
            "background": res[10],
        }
    return False


# Returns the lowest id that has not yet been taken.
def get_new_user_id():
    sql = f"SELECT user_id FROM User"
    db.cur.execute(sql)
    ids_taken = [x[0] for x in db.cur.fetchall()]
    return next(filterfalse(set(ids_taken).__contains__, count(1)))
