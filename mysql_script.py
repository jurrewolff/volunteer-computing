import mysql.connector as connector

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
    if check_user_exists(val[0], val[1]) == None:
        print('Added new user')
        cn = connection()
        cur = cn.cursor()
        sql = "INSERT INTO User VALUES (%s, %s, %s, %s, %s, %s)"
        cur.execute(sql, val)
        cn.commit()
    print('UserID or UserName not unique')


def check_user_exists(id, username, login=False):
    cn = connection()
    cur = cn.cursor()
    sql = f"SELECT 1 FROM User WHERE user_id = {id} OR username = '{username}'"
    cur.execute(sql)
    res = cur.fetchone()
    if login:
        sql = f"SELECT * FROM User WHERE user_id = {id} OR username = '{username}'"
        cur.execute(sql)
        res = cur.fetchone()
    return res


val = (11115, 'aaaa', 'bb', 'cc', 'dd', 22)
print(check_user_exists(1, 'a', True))
test1()