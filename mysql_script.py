import mysql.connector as connector
from itertools import count, filterfalse

def connection():

    config = {
        "user": "root",
        "password": "admin",
        "host": "localhost",
        "port": 3306,
        "database": "app"
    }
    try:
        c = connector.connect(**config)
        return c
    except:
        print("connection error")
        exit(1)

def test(): # error method
    cur= connection().cursor()
    cur.execute("SELECT * FROM User")
    print(cur.fetchone())

def test1(): #no error method
    cn = connection()
    cur = cn.cursor()
    cur.execute("SELECT * FROM User")
    res = cur.fetchall()
    for x in res:
        print(x)




def insert_user(val):
    if check_user_exists(val[1]) == None:
        cn = connection()
        cur = cn.cursor()
        sql = "INSERT INTO User VALUES (%s, %s, %s, %s, %s, %s)"
        cur.execute(sql, val)
        cn.commit()
        return True
    return False


def check_user_exists(username, login=False):
    cn = connection()
    cur = cn.cursor()
    sql = f"SELECT 1 FROM User WHERE username = '{username}'"
    cur.execute(sql)
    res = cur.fetchone()
    if login:
        sql = f"SELECT * FROM User WHERE username = '{username}'"
        cur.execute(sql)
        res = cur.fetchone()
    return res

def get_new_id():
    cn = connection()
    cur = cn.cursor()
    sql = f"SELECT user_id FROM User"
    cur.execute(sql)
    ids_taken = [x[0] for x in cur.fetchall()]
    return next(filterfalse(set(ids_taken).__contains__, count(1)))


val = (1, 'hoi2', 'bb', 'cc', 'dd', 22)

insert_user(val)
# res = check_user_exists('aaaa', True)
# if res:
#   print(res)

print(get_new_id())