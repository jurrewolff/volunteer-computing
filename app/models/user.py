"""
Date:               01-07-2022
Contributers:       PSE Group G

File description:
This file contains all functions to insert and update information of the results table. It also
contains all functions to retrieve information from that table.
"""

from itertools import count, filterfalse

from app.models.database import *
from app.models.volunteer import get_volunteer


def insert_user(dic):
    """
    Input:
    dic should have values: id, username, password, email,
    first_name, last_name, score, institution, is_researcher, background.

    Output:
    False if user_id or username allready exists, True otherwise

    Description:
    Adds a user to the User table.
    """
    if not account_id_exists(dic["user_id"]) and not username_exists(dic["username"]):
        sql = "INSERT INTO User VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
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
            0
        )

        db.cur.execute(sql, val)
        db.con.commit()
        return True
    return False


def account_id_exists(user_id):
    """
    Output:
    True if account_id exists, False otherwise.
    """
    sql = f"SELECT 1 FROM User WHERE user_id = '{user_id}'"
    db.cur.execute(sql)
    res = db.cur.fetchone()
    if res == None:
        return False
    else:
        return True


def username_exists(username):
    """
    Output:
    True if account_username exists, False otherwise.
    """
    sql = f"SELECT 1 FROM User WHERE username = '{username}'"
    db.cur.execute(sql)
    res = db.cur.fetchone()
    if res == None:
        return False
    else:
        return True


def get_user(username):
    """
    Output:
    a dictionary containing the following keys: user_id, username, password, email, first_name, 
    last_name, score, trust_leve, institution, is_researcher, background.
    """
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


def get_all_users(amount=None, order_by='trust_level'):
    """
    Output:
    A list containing dictionaries with each the following keys:
    user_id, username, score, trust_level, is_researcher.
    """
    if amount and order_by != 'trust_level':
        sql = f"SELECT * FROM User ORDER BY {order_by} DESC LIMIT {amount}"
    elif amount and order_by =='trust_level':
        sql = f"SELECT * FROM User ORDER BY {order_by} ASC LIMIT {amount}"
    else:
        sql = f"SELECT * FROM User ORDER BY {order_by} DESC LIMIT 10"

    db.cur.execute(sql)
    users = []
    res = db.cur.fetchall()
    for x in res:
        user = {
            "user_id": x[0],
            "username": x[1],
            "score": x[6],
            "trust_level": x[7],
            "is_researcher": x[9],
            "runtime": x[11]
        }
        users.append(user)
    return users


def get_new_user_id():
    """
    Output:
    The lowest user_id that has not yet been taken.
    """
    sql = f"SELECT user_id FROM User"
    db.cur.execute(sql)
    ids_taken = [x[0] for x in db.cur.fetchall()]
    return next(filterfalse(set(ids_taken).__contains__, count(1)))


def get_trust_levels(job_id, project_id, user_id):
    """
    Description:
    Retrieve trust_level of user an project.
    """
    query = f"SELECT (SELECT trust_level FROM User WHERE  user_id = '{user_id}'),(SELECT trust_level FROM Project WHERE  project_id = '{project_id}') FROM DUAL"
    db.cur.execute(query)
    res = db.cur.fetchone()
    return res


def update_trust_level(user_id, update_rule):
    """Description:
    Set the trust_level to update_rule.
    """
    query = f"UPDATE User SET trust_level = {update_rule} WHERE user_id = '{user_id}';"
    db.cur.execute(query)
    db.con.commit()
