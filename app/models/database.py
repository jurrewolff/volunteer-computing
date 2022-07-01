"""
Date:               01-07-2022
Contributers:       PSE Group G

File description:
When this file is imported, a db variable is available to the file that imports this file. The db variable
is an instance of the database class. This variable can be used and has the following fields:
db.con: this is the connection variable
db.cur: this is the cursor variables. The cursor is bufferd.
"""

import mysql.connector as connector
import os
import time


class database:
    def __init__(self):
        self.con = self.connection()
        self.cur = self.con.cursor(buffered=True)

    def connection(self):
        """
        Description:
        Creates a connection with the database. The connection is returned.
        """
        config = {
            "user": os.environ["MYSQL_USERNAME"],
            "password": os.environ["MYSQL_ROOT_PASSWORD"],
            "host": os.environ["MYSQL_HOST"],
            "port": os.environ["MYSQL_PORT"],
            "database": os.environ["MYSQL_DB_NAME"],
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
            if c != None:
                print("Connected to db ")
                break
            if tries > 1:
                print("Giving up connecting to the database")
                break

        return c


# Creates the db object. All files that import database.py can use the connection and
# cursosr of this object.
db = database()
