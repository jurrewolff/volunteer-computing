from tracemalloc import start
import mysql.connector as connector
from itertools import count, filterfalse
import app.models.user as user
import datetime
from main import app
import logging
import time
import math

from app.models.database import *

# Adds an entry to the timer table.
# Val should be of format: (job_id, user_id)
# Returns False if given job or user doesn't exists, returns True otherwise.
def insert_timer(val):
    if user.account_id_exists(val[1]):
        timestamp = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        sql = "INSERT INTO Timer VALUES (%s, %s, %s)"
        start_time = math.floor(time.time_ns() / 1000000)
        app.logger.warning(start_time)
        db.cur.execute(sql, val + tuple([start_time]))
        db.con.commit()
        return True
    return False


# Retrieves the start time of the job. After retrieving the time, the entry is removed.
# Val should be of format: (job_id, user_id)
def retrieve_time(val):
    if user.account_id_exists(val[1]):
        sql = f"SELECT start_time FROM Timer WHERE user_id = '{val[1]}'"
        db.cur.execute(sql)
        res = db.cur.fetchone()
        start_time = res[0]
        app.logger.warning("\n\start_time:")
        app.logger.warning(start_time)
        
        return start_time
    return False