from turtle import done
from app import app
import random 
import math
###################################
# DUMMY CODE
# import mysql.connector as connector

# def connection():
#         config = {
#             "user": "root",
#             "password": "admin",
#             "host": "mysql",
#             "port": 3306,
#             "database": "app"
#         }
#         try:
#             c = connector.connect(**config)
#             return c
#         except:
#             print("connection error")
#             exit(1)
# class database:

#     def __init__(self):
#         self.con = connection()
#         self.cur = self.con.cursor(buffered=True)
# db = database()

# def dummy_create_project():
    
#     # Create a table with the possible jobs.
#     db.cur.execute("""
#         CREATE TABLE app.jobsForProject1 (
#         user_id int,
#         project_id int,
#         result_path varchar(255),
#         PRIMARY KEY (user_id, project_id),
#         FOREIGN KEY (user_id) REFERENCES User(user_id),
#         FOREIGN KEY (project_id) REFERENCES Project(project_id)
#         );
#     """)

########################################

db = None
def increment_quorum_size(project_id, job_id):
    query = f"""
    UPDATE Jobs
    SET quorum_size = quorum_size + 1
    WHERE job_id = '{job_id}' AND project_id = '{project_id}'
    """
    db.cur.execute(query)
    # check if succes 
def save_result(result):
    pass

def get_volunteer(job_id, project_id): 
    query = f"SELECT volunteer FROM result WHERE job_id = '{job_id}' AND project_id = '{project_id}'"
    db.cur.execute(query)
    res = db.cur.fetchone()
    return res

def get_trustlevels(job_id, project_id):
    user = get_volunteer(job_id, project_id)

    query = f""""
    SELECT (SELECT trustlevel
        FROM   User
        WHERE  user_id = '{user_id}'),
       (SELECT trustlevel
        FROM   Project
        WHERE  project_id = '{project_id}') 
    FROM DUAL
    """
    db.cur.execute(query)
    res = db.cur.fetchall()
    return res

def decide_if_work_is_trusted(job_id, project_id):
    user = get_volunteer(job_id, project_id)

    user_trustlevel, project_trustlevel = get_trustlevels(job_id, project_id)
    if user_trustlevel > project_trustlevel:
         # dont trust host 
        # increment_quorum_size(job)
        return False
    else:
        # host is trused
        probabilty_of_duplication = math.sqrt( user_trustlevel / project_trustlevel)
        if random.uniform() <= probabilty_of_duplication:
            # Do a check
            # increment_quorum_size(job)
            return False
        return True
def job_done(project_id, job_id):
    query = f""""
    UPDATE Jobs
    SET done = 1
    WHERE job_id = '{job_id}' AND project_id = '{project_id}'"""
    db.cur.execute(query)

def get_number_of_results(job_id, project_id):

    query = f""""
    SELECT COUNT(*) FROM Results WHERE job_id ='{job_id}' AND project_id = '{project_id}'
    """
    db.cur.execute(query)
    res = db.cur.fetchone()
    return res

def get_repl_type_and_quorum_size(project_id, job_id):
    query = f""""
    SELECT replication_type, quorum_size
    FROM   Project
    WHERE  project_id = '{project_id}'
    """
    res = db.cur.fetchall()
    return res
def receive_work(project_id, job_id):
    save_result()
    n_results = get_number_of_results(job_id, project_id)
    replication_type, quorum_size = get_repl_type_and_quorum_size(project_id, job_id)
    # if all results agree
    if n_results == quorum_size:
        job_done()
    if replication_type == "trust":
        trust = decide_if_work_is_trusted()
        if not trust:
            increment_quorum_size(project_id, job_id)
            # the quorum size has been increased by one, so we wait for someone to replicate it.
            return 
        # quorum_size 1 and we trust the result so we are done
        if quorum_size == 1:
            job_done()

        else:
            # quorum not yet reached we wait for someone to replicate the result.
            return 


        

        # decide_if_work_is_trusted()
        # if user.trustlevel > project.trustlevel:
        #     # dont trust host 
        #     job.querum_size =+ 1

        #     if result correct
        #         user trust * 0.95
        #     else
        #         user trust += 0.1

def possible_jobs(project_id, user_id):
    query = f"""
    SELECT job_id, project_id
    FROM Jobs
    WHERE  project_id = '{project_id} AND done = 0 AND '{user_id}' NOT IN (
        SELECT volunteer
        FROM Results
        WHERE Results.job_id = Jobs.job_id AND project_id = '{project_id}
    )
    """
    res = db.cur.fetchall()
    # all jobs where done == false if replication == true not result from this user yet.user

def give_work(project_id, user_id):
    job_id, project_id = random.choice(possible_jobs(project_id, user_id))
    print(f"do job {job_id} for project {project_id}")
    # random from possible_work
# BOINC maintains an estimate E(H) of host H's recent error rate.
# This is maintained as follows:

#  * It is initialized to 0.1
#  * It is multiplied by 0.95 when H reports a correct (replicated) result.
#  * It is incremented by 0.1 when H reports an incorrect (replicated) result.

# Thus, it takes a long time to earn a good reputation
# and a short time to lose it.

# The adaptive replication policy is as follows.

#  * Each job is initially marked as unreplicated.
#  * On each request, the scheduler decides whether to trust the host as follows:
#   * If E(H) > A, don't trust the host.
#   * Otherwise, trust the host with probability 1 - sqrt( E(H)/A ).
#  * If we decide to trust the host, preferentially send it unreplicated jobs.
#  * Otherwise, p