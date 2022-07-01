"""
Date:               01-07-2022
Contributers:       PSE Group G

File description:
This file contains all functions to insert and update information of the timer table. It also
contains all functions to retrieve information from that table.
"""

import app.models.user as user
from main import app
import time
import math

from app.models.database import *


def insert_timer(val):
    """
    Input:
    val should be a tuple of format: (job_id, user_id, project_id).

    Output:
    True if a timer has been inserted. False otherwise.

    Description:
    Inserts a timer entry into the Timer table. If the timer allready exists. The
    start_time is updated with the current time.
    """
    if user.account_id_exists(val[1]) and not timer_exists(val) :
        sql = "INSERT INTO Timer VALUES (%s, %s, %s, %s)"
        start_time = math.floor(time.time_ns() / 1000000)
        db.cur.execute(sql, val + tuple([start_time]))
        db.con.commit()
        return True
    elif user.account_id_exists(val[1]):
        start_time = math.floor(time.time_ns() / 1000000)
        sql = f"UPDATE Timer SET start_time = '{start_time}' WHERE job_id = '{val[0]}' AND user_id = '{val[1]}' AND project_id = '{val[2]}';"
        db.cur.execute(sql)
        db.con.commit()
        return True
    return False


def retrieve_time(val):
    """
    Input:
    val should be of format: (job_id, user_id, project_id).

    Output:
    The start time of the job. If no timer is found, False is returned.
    """
    if timer_exists(val):
        sql = f"SELECT start_time FROM Timer WHERE job_id = '{val[0]}' AND user_id = '{val[1]}' AND project_id = '{val[2]}'"
        db.cur.execute(sql)
        res = db.cur.fetchone()
        start_time = res[0]
        return start_time
    return False


def timer_exists(val):
    """
    Input:
    Val should be of format: (job_id, user_id, project_id).

    Output:
    True if timer exists, False otherwise.
    """
    sql = f"SELECT user_id FROM Timer WHERE job_id = '{val[0]}' AND user_id = '{val[1]}' AND project_id = '{val[2]}'"
    db.cur.execute(sql)
    res = db.cur.fetchone()
    if res == None:
        return False
    else :
        return True
