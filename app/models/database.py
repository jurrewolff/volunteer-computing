import mysql.connector as connector
import os
import time
class database:
    def __init__(self):
        self.con = self.connection()
        self.cur = self.con.cursor(buffered=True)
        # TODO: buffered is niet ideaal voor grote tabellen zoals Results geloof ik

    def connection(self):

        config = {
            "user": os.environ["MYSQL_USERNAME"],
            "password": os.environ['MYSQL_ROOT_PASSWORD'],
            "host": os.environ['MYSQL_HOST'],
            "port": os.environ['MYSQL_PORT'],
            "database": os.environ['MYSQL_DB_NAME']
        }
        c = None
        tries = 0
        while True:
            try:
                c = connector.connect(**config)
            except Exception as e:

                print("connection error in databse.py")
                print(e)
                print("Sleeping for 30s")
                tries += 1
                time.sleep(30)
                # exit(1)
            if c != None:
                print("Connected to db ")
                break
            if tries > 1:
                print("Giving up connecting to the database")
                break
            
        return c

db = database()
