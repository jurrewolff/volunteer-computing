"""
Date:               01-07-2022
Contributers:       PSE Group G

File description:
This file contains all functions to insert and update information of the volunteer table. It also
contains all functions to retrieve information from that table.
"""

from main import app

from app.models.database import *

def update_contribution(val):
    """
    Input:
    val should be a tuple of format: (new_contribution, user_id, project_id).

    Output:
    True if contribution has been updated. False if new volunteer has been inserted.

    Description:
    If the contribution doesn't yet exists, a volunteer entry is inserted with the given
    new_contribution. Otherwise, the existing volunteer is updated with the given new_contribution.
    """
    if contribution_exists((val[1], val[2])):
        sql = "UPDATE Volunteer SET contributed_time = %s WHERE user_id = %s AND project_id = %s;"
        db.cur.execute(sql, val)
        db.con.commit()
        return True
    else:
        insert_volunteer((val[1], val[2], val[0]))

    return False


def insert_volunteer(val):
    """
    Input:
    val should be a tuple of format: (user_id, project_id, contributed_time).

    Output:
    True if the user didn't yet exist and a new entry has been added. False otherwise.

    Description:
    Inserts a volunteer with the given values.
    """
    if not contribution_exists((val[0], val[1])):
        sql = "INSERT INTO Volunteer VALUES (%s, %s, %s)"
        db.cur.execute(sql, val)
        db.con.commit()
        return True
    return False


def contribution_exists(val):
    """
    Input:
    val should be a tuple of format: (user_id, project_id).

    Output:
    True if contribution exists. False otherwise.
    """
    sql = f"SELECT user_id FROM Volunteer WHERE user_id = '{val[0]}' AND project_id = '{val[1]}'"
    db.cur.execute(sql)
    res = db.cur.fetchone()
    if res == None:
        return False
    else :
        return True


def get_contributed_time(val):
    """
    Input:
    val should be a tuple of format: (user_id, project_id).

    Output:
    The time the volunteer has contributed to the given project.

    Description:
    Returns the time a volunteer has contributed to the given project. If no
    volunteer entry has been found. A volunteer is inserted into the database with
    a contributed_time of 0.
    """
    if not contribution_exists(val):
        insert_volunteer((val[0], val[1], 0))
        return 0
    else:
        sql = f"SELECT contributed_time FROM Volunteer WHERE user_id = '{val[0]}' AND project_id = '{val[1]}'"
        db.cur.execute(sql)
        res = db.cur.fetchone()
        return res[0]


