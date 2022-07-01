"""
Date:               01-07-2022
Contributers:       PSE Group G

File description:
This file contains all functions to insert and update information in the project table. It also
contains all functions to retrieve information from that table.
"""

from itertools import count, filterfalse
from main import app

from app.models.database import *
import app.models.user as user
import math


def project_exists(project_id):
    """
    Ouput:
    True if project exists. False otherwise.
    """
    sql = f"SELECT 1 FROM Project WHERE project_id = '{project_id}'"
    db.cur.execute(sql)
    if db.cur.fetchone() == None:
        return False
    return True


def insert_project(dic):
    """
    Input:
    dictionary should contain the key: project_id, name, description, block_size, trust_level,
    owner, random_validation, runtime, quorum.

    Output:
    True if project is inserted. False if project wasn't inserted because it allready existed.
    """
    if not project_exists(dic["project_id"]):
        sql = "INSERT INTO Project VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
        val = (
            dic["project_id"],
            dic["name"],
            dic["description"],
            dic["block_size"],
            dic["trust_level"],
            dic["owner"],
            dic["random_validation"],
            dic["runtime"],
            dic["quorum"],
            0,
            0,
        )
        db.cur.execute(sql, val)
        db.con.commit()
        return True
    return False


def get_new_project_id():
    """
    Output:
    The first not in use id in the project table.
    """
    sql = f"SELECT project_id FROM Project"
    db.cur.execute(sql)
    ids_taken = [x[0] for x in db.cur.fetchall()]
    return next(filterfalse(set(ids_taken).__contains__, count(1)))


def get_all_projects():
    """
    Output:
    All projects stored in a list in which each project is represented as a dictionary with the following keys:
    project_id, name, description.
    """
    sql = f"SELECT * FROM Project WHERE done = 0"
    db.cur.execute(sql)
    res = db.cur.fetchall()
    return [{"project_id": x[0], "name": x[1], "description": x[2]} for x in res]


def get_project_time(project_id):
    """
    Output:
    The total time that has been contributed to the given project by all participating volunteers.
    """
    sql = f"SELECT contributed_time FROM Volunteer WHERE project_id = '{project_id}'"
    db.cur.execute(sql)
    res = db.cur.fetchall()
    contributed_time = 0
    for time in res:
        contributed_time += time[0]
    return contributed_time


def update_project_time(project_id, time=-1):
    """
    TODO write documentation
    """
    if time == -1:
        time = get_project_time(project_id)
    query = f"UPDATE Project SET runtime = '{time}' WHERE project_id = '{project_id}';"
    db.cur.execute(query)
    db.con.commit()


def get_projects_researcher(user_id):
    """
    Output:
    A list with all projects of a researcher. A dictionary per list is stored in the list. The dictionary has the keys:
    project_id, name, description, runtime (seconds), done, progress (percentage integer).
    """
    if user.account_id_exists(user_id):
        sql = f"SELECT * FROM Project WHERE owner = '{user_id}'"
        db.cur.execute(sql)
        projects = []
        res = db.cur.fetchall()
        for x in res:
            project = {
                "project_id": x[0],
                "name": x[1],
                "description": x[2],
                "runtime": math.floor(x[7] / 1000),
                "done": x[9],
                "progress": x[10],
            }
            update_project_time(x[0])
            projects.append(project)
        return projects
    else:
        return False


def get_project(project_id):
    """
    Output:
    The project with the given project_id. The project is returned as a dictionary with the following keys:
    project_id, name, description, block_size, owner, random_validation, runtime, quorum_size, done, progress.
    False is returned if the project doesn't exist.
    """
    if project_exists(project_id):
        sql = f"SELECT * FROM Project WHERE project_id = '{project_id}'"
        db.cur.execute(sql)
        res = db.cur.fetchone()
        return {
            "project_id": res[0],
            "name": res[1],
            "description": res[2],
            "block_size": res[3],
            "trust_level": res[4],
            "owner": res[5],
            "random_validation": res[6],
            "runtime": res[7],
            "quorum_size": res[8],
            "done": res[9],
            "progress": res[10],
        }
    else:
        return False


def get_n_open_jobs(project_id):
    """
    Output:
    the number of a project not yet done.
    """
    query = f"""
    SELECT COUNT(*)
    FROM Jobs
    WHERE  project_id = '{project_id}' AND Jobs.done = 0
    """
    db.cur.execute(query)
    return db.cur.fetchone()[0]


def possible_jobs(project_id, user_id):
    """
    Output:
    TODO write documentation
    """
    query = f"""
    SELECT job_id, project_id
    FROM Jobs
    WHERE  project_id = '{project_id}' AND Jobs.done = 0 AND '{user_id}' NOT IN (
        SELECT volunteer
        FROM Result
        WHERE Result.job_id = Jobs.job_id AND project_id = '{project_id}'
    )
    """
    db.cur.execute(query)
    res = db.cur.fetchall()
    return res


def get_projects_from_user(user_id):
    """
    Output:
    Returns a list with all projects a user has participated in. The projects are stored in the list as a dictionary with
    the following keys: project_id, name, description, done, progress, contributed_time.
    False is returned if the user doesn't exist.
    """
    if user.account_id_exists(user_id):
        sql = f"""
            SELECT p.project_id, p.name, p.description, p.done, p.progress, Volunteer.contributed_time
            FROM Project AS p
            INNER JOIN Volunteer on p.project_id = Volunteer.project_id
            WHERE Volunteer.user_id = '{user_id}';
            
            """
        db.cur.execute(sql)
        projects = []
        res = db.cur.fetchall()
        for x in res:
            project = {
                "project_id": x[0],
                "name": x[1],
                "description": x[2],
                "done": x[3],
                "progress": x[4],
                "contributed_time": math.floor(x[5] / 1000),
            }
            update_project_time(x[0])
            projects.append(project)
        return projects
    else:
        return False
