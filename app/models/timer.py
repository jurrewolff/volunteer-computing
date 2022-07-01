import app.models.user as user
from main import app
import math

from app.models.database import *

# Adds an entry to the timer table.
# Val should be of format: (job_id, user_id, project_id)
# Returns False if given job or user doesn't exists, returns True otherwise.
def insert_timer(val):
    if user.account_id_exists(val[1]) and not timer_exists(val):
        sql = "INSERT INTO Timer VALUES (%s, %s, %s, %s)"
        start_time = math.floor(time.time_ns() / 1000000)
        db.cur.execute(sql, val + tuple([start_time]))
        db.con.commit()
        return True
    elif user.account_id_exists(val[1]):
        app.logger.warning("timer is being updated")
        app.logger.warning(val)
        start_time = math.floor(time.time_ns() / 1000000)
        app.logger.warning(start_time)
        sql = f"UPDATE Timer SET start_time = '{start_time}' WHERE job_id = '{val[0]}' AND user_id = '{val[1]}' AND project_id = '{val[2]}';"
        db.cur.execute(sql)
        db.con.commit()
        return True
    return False


# Retrieves the start time of the job. After retrieving the time, the entry is removed.
# Val should be of format: (job_id, user_id, project_id)
def retrieve_time(val):
    if timer_exists(val):
        sql = f"SELECT start_time FROM Timer WHERE job_id = '{val[0]}' AND user_id = '{val[1]}' AND project_id = '{val[2]}'"
        db.cur.execute(sql)
        res = db.cur.fetchone()
        start_time = res[0]
        return start_time
    return False


# Returns True if timer is in table, returns False otherwise.
# Val should be of format: (job_id, user_id, project_id).
def timer_exists(val):
    sql = f"SELECT user_id FROM Timer WHERE job_id = '{val[0]}' AND user_id = '{val[1]}' AND project_id = '{val[2]}'"
    db.cur.execute(sql)
    res = db.cur.fetchone()
    if res == None:
        return False
    else:
        return True
