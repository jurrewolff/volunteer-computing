from app.models.database import *

#
# Val should be of format: (new_contribution, user_id, project_id)
def update_contribution(val):
    if contribution_exists((val[1], val[2])):
        sql = "UPDATE Volunteer SET contributed_time = %s WHERE user_id = %s AND project_id = %s;"
        db.cur.execute(sql, val)
        db.con.commit()
        return True
    else:
        insert_volunteer((val[1], val[2], val[0]))

    return False


# Adds a volunteer, returns True if volunteer didn't yet exist. Returns false otherwise.
# Val should be of format: (user_id, project_id, contributed_time)
def insert_volunteer(val):
    if not contribution_exists((val[0], val[1])):
        sql = "INSERT INTO Volunteer VALUES (%s, %s, %s)"
        db.cur.execute(sql, val)
        db.con.commit()
        return True
    return False


# Returns True if contribution is in table, returns False otherwise.
# Val should be of format: (user_id, project_id).
def contribution_exists(val):
    sql = f"SELECT user_id FROM Volunteer WHERE user_id = '{val[0]}' AND project_id = '{val[1]}'"
    db.cur.execute(sql)
    res = db.cur.fetchone()
    if res == None:
        return False
    else:
        return True


# Val should be of format: (user_id, project_id).
def get_contributed_time(val):
    if not contribution_exists(val):
        insert_volunteer((val[0], val[1], 0))
        return 0
    else:
        sql = f"SELECT contributed_time FROM Volunteer WHERE user_id = '{val[0]}' AND project_id = '{val[1]}'"
        db.cur.execute(sql)
        res = db.cur.fetchone()
        return res[0]
