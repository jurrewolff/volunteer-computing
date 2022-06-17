import mysql.connector as connector
import os

class database:
    def __init__(self):
        self.con = self.connection()
        self.cur = self.con.cursor(buffered=True)

    def connection(self):

        config = {
            "user": os.environ["MYSQL_USERNAME"],
            "password": os.environ['MYSQL_ROOT_PASSWORD'],
            "host": os.environ['MYSQL_HOST'],
            "port": os.environ['MYSQL_PORT'],
            "database": os.environ['MYSQL_DB_NAME']
        }
        try:
            c = connector.connect(**config)
            return c
        except:
            print("connection error")
            exit(1)


db = database()