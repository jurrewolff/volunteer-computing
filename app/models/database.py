import mysql.connector as connector

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
        try:
            c = connector.connect(**config)
            return c
        except:
            print("connection error")
            exit(1)


db = database()