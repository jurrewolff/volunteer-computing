import mysql.connector as connector
from itertools import count, filterfalse

def connection():

    config = {
        "user": "root",
        "password": "admin",
        "host": "mysql",
        "port": 3306,
        "database": "app"
    }
    try:
        c = connector.connect(**config)
        return c
    except:
        print("connection error")
        exit(1)

def print_users(): # For testing purpuses.
    db.cur.execute("SELECT * FROM User")
    res = db.cur.fetchall()
    for x in res:
        print(x)

# Adds a user to the User table.
# val should be of format: (id, username, email, first_name, last_name, score).
def insert_user(val):
    if check_user_exists(val[1]) == None:
        sql = "INSERT INTO User VALUES (%s, %s, %s, %s, %s, %s)"
        db.cur.execute(sql, val)
        db.con.commit()
        return True
    return False

# Returns true if user exists based on username, returns false otherwise.
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

def check_project_exists(project_id):
    sql = f"SELECT 1 FROM Project WHERE project_id = '{project_id}'"
    db.cur.execute(sql)
    if db.cur.fetchone() == None:
        return False
    return True

def insert_project(val):
    if not check_project_exists(val[0]):
        sql = "INSERT INTO Project VALUES (%s, %s, %s, %s)"
        db.cur.execute(sql, val)
        db.con.commit()
        return True
    return False

def get_new_project_id():
    sql = f"SELECT project_id FROM Project"
    db.cur.execute(sql)
    ids_taken = [x[0] for x in db.cur.fetchall()]
    return next(filterfalse(set(ids_taken).__contains__, count(1)))

def get_all_projects():
    projects = []
    sql = f"SELECT * FROM Project"
    db.cur.execute(sql)
    res = db.cur.fetchall()
    for x in res:
        projects.append(x)
    return projects

class database:

    def __init__(self):
        self.con = connection()
        self.cur = self.con.cursor(buffered=True)


db = database()