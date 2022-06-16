import mysql.connector as connector
import time
class database:

    def __init__(self):
        self.con = self.connection()
        self.cur = self.con.cursor(buffered=True)

    def connection(self):

        config = {
            "user": "root",
            "password": "admin",
            "host": "mysql",
            "port": 3306,
            "database": "app"
        }
        def tmp():
            c = connector.connect(**config)
            return c
        try:
            tmp()
        except:
            time.sleep(50)
            try:
                tmp()
            except:

                print("connection error")
                exit(1)



def connect():
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
        print("connnnection error")
        exit(1)

db = connect()
db.cur = db.cursor(buffered=True)
#db = database()