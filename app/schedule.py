from turtle import done
from app import app
import random 
import math
###################################
# DUMMY CODE
import mysql.connector as connector

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
class database:

    def __init__(self):
        self.con = connection()
        self.cur = self.con.cursor(buffered=True)
db = database()

def dummy_create_project():
    
    # Create a table with the possible jobs.
    db.cur.execute("""
        CREATE TABLE app.jobsForProject1 (
        user_id int,
        project_id int,
        result_path varchar(255),
        PRIMARY KEY (user_id, project_id),
        FOREIGN KEY (user_id) REFERENCES User(user_id),
        FOREIGN KEY (project_id) REFERENCES Project(project_id)
        );
    """)

########################################
def increment_quorum_size(job):
    pass

def save_result(result):
    pass

def decide_if_work_is_trusted(result):
    job = None
    user_trustlevel, project_trustlevel = None, None
    if user_trustlevel > project_trustlevel:
         # dont trust host 
        increment_quorum_size(job)
        return False
    else:
        # host is trused

        probabilty_of_duplication = math.sqrt( user_trustlevel / project_trustlevel)
        if random.uniform() <= probabilty_of_duplication:
            increment_quorum_size(job)
            return False
        return True

        # host is trused
        # verify with 
def receive_work(project, job, user):
    replication_type = None
    save_result()
    if replication_type == "quorum": 
        if now results_size == quorum_size then job is done
            job_done
    if replication_type == "trust":
        trust = decide_if_work_is_trusted()
        if not trust:
            # In this case the quorum size has been increased by one, so we wait for someone to replicate it.
            return 
        if not replicated:
            job_done()
        elif now results_size == quorum_size then job is done
            job_done
        else:


        

        # decide_if_work_is_trusted()
        # if user.trustlevel > project.trustlevel:
        #     # dont trust host 
        #     job.querum_size =+ 1

        #     if result correct
        #         user trust * 0.95
        #     else
        #         user trust += 0.1

def possible_work(project, user):
    all jobs where done == false if replication == true not result from this user yet.user

def give_work():
    random from possible_work
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