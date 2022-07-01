"""
Date:               01-07-2022
Contributers:       PSE Group G

File description:
This file contains all functions to insert and update information of the results table. It also
contains all functions to retrieve information from that table.
"""
import mysql.connector as connector
from itertools import count, filterfalse
import app.models.user as user
import app.models.project as project
from main import app

from app.models.database import *


def insert_result(val):
    """
    Input:
    val should is tuple of format: (user_id, project_id, block_count)

    Output:
    True if result entry is inserted. Fasle otherwise.
    """
    if (
        user.account_id_exists(val[0])
        and project.check_project_exists(val[1])
        and not result_exists((val[0], val[1]))
    ):
        sql = "INSERT INTO Result VALUES (%s, %s, %s)"
        db.cur.execute(sql, val)
        db.con.commit()
        return True
    return False


def result_exists(val):
    """
    Input:
    val is a tuple of format: (user_id, project_id).

    Output:
    True if results exists. False otherwise.
    """
    sql = f"SELECT 1 FROM Result WHERE user_id = '{val[0]}' AND project_id = '{val[1]}'"
    db.cur.execute(sql)
    res = db.cur.fetchone()
    if res == None:
        return False
    else:
        return True


def save_result(project_id, job_id, volunteer_id, result):
    """
    Description:
    Inserts the result into the Result table
    """
    query = f"INSERT INTO Result (job_id, project_id, volunteer, result) VALUES ('{job_id}','{project_id}','{volunteer_id}', '{result}')"
    db.cur.execute(query)
    db.con.commit()


def get_number_of_results(job_id, project_id):
    """
    Output:
    The number of results with the given job_id and project_id.
    """
    query = f"SELECT COUNT(*) FROM Result WHERE job_id ='{job_id}' AND project_id = '{project_id}';"
    db.cur.execute(query)
    res = db.cur.fetchone()
    return res
