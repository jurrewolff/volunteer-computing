from app import app
import random 
import math
import os
from app.models.database import db

def increment_quorum_size(project_id, job_id):
    query = f"""
    UPDATE Jobs
    SET quorum_size = quorum_size + 1
    WHERE job_id = '{job_id}' AND project_id = '{project_id}'
    """
    db.cur.execute(query)
    # check if succes 
def save_result(project_id, job_id, volunteer_id, result):
    # Write to filesystem, maybe async
    # save to db 
    # with open( os.path.join(app.config['RESULT_FOLDER'], f"{project_id}_{job_id}"), "a+") as file:
    #     file.write(result)
    query = f"INSERT INTO Result (job_id, project_id, volunteer, result) VALUES ('{job_id}','{project_id}','{volunteer_id}', '{result}')"
    db.cur.execute(query)

def get_volunteer(job_id, project_id): 
    query = f"SELECT volunteer FROM Result WHERE job_id = '{job_id}' AND project_id = '{project_id}'"
    db.cur.execute(query)
    res = db.cur.fetchone()
    return res

def get_trust_level(job_id, project_id):
    user_id = get_volunteer(job_id, project_id)[0]
    print("user_id", user_id)
    query = f"SELECT (SELECT trust_level FROM User WHERE  user_id = '{user_id}'),(SELECT trust_level FROM Project WHERE  project_id = '{project_id}') FROM DUAL"
    db.cur.execute(query)
    res = db.cur.fetchone()
    return res

def decide_if_work_is_trusted(job_id, project_id):
    user_trust_level, project_trust_level = get_trust_level(job_id, project_id)
    print("project_trust_level", project_trust_level)
    if user_trust_level > project_trust_level:
         # dont trust host 
        # increment_quorum_size(job)
        return False
    else:
        # host is trused
        probabilty_of_duplication = math.sqrt( user_trust_level / project_trust_level)
        if random.uniform(0,1) <= probabilty_of_duplication:
            # Do a check
            # increment_quorum_size(job)
            return False
        return True
def job_done(project_id, job_id):
    query = f""""
    UPDATE Job
    SET done = 1
    WHERE job_id = '{job_id}' AND project_id = '{project_id}'"""
    db.cur.execute(query)
    # TODO remove cached results form db
    # TODO write majority agreed result to fs

def get_number_of_results(job_id, project_id):

    query = f"SELECT COUNT(*) FROM Result WHERE job_id ='{job_id}' AND project_id = '{project_id}';"
    db.cur.execute(query)
    res = db.cur.fetchone()
    return res

def get_repl_type_and_quorum_size(project_id, job_id):
    query = f"SELECT random_validation, quorum_size FROM Project WHERE  project_id = '{project_id}'"
    db.cur.execute(query)
    res = db.cur.fetchone()
    return res

def update_trust_level(correct, user_id):
    if correct:
        query = f""""
        UPDATE User
        SET trust_level = trust_level * 0.95
        WHERE user_id = '{user_id}'"""
        db.cur.execute(query)
    else:
        query = f""""
        UPDATE User
        SET trust_level = trust_level += 0.1
        WHERE user_id = '{user_id}'"""
        db.cur.execute(query)

def majority_agrees(project_id, job_id):
    return True
    
def receive_work(project_id, job_id, volunteer_id, result):
    save_result(project_id, job_id, volunteer_id, result)
    n_results = get_number_of_results(job_id, project_id)
    random_replication, quorum_size = get_repl_type_and_quorum_size(project_id, job_id)
    if n_results == quorum_size:
        if majority_agrees():
            job_done(project_id, job_id)
        else:
            increment_quorum_size(project_id, job_id) 
            return
    if random_replication == 0:
        trust = decide_if_work_is_trusted(job_id, project_id)
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
        # if user.trust_level > project.trust_level:
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
    WHERE  project_id = '{project_id}' AND Jobs.done = 0 AND '{user_id}' NOT IN (
        SELECT volunteer
        FROM Result
        WHERE Result.job_id = Jobs.job_id AND project_id = '{project_id}'
    )
    """
    db.cur.execute(query)
    res = db.cur.fetchall()
    return res
    # all jobs where done == false if replication == true not result from this user yet.user

def give_work(project_id, user_id):
    job_id, project_id = random.choice(possible_jobs(project_id, user_id))
    print(f"do job {job_id} for project {project_id}")

def fill_db():
    def execute(s):
        db.cur.execute(s)
        db.con.commit()
    execute ("INSERT INTO User (user_id, trust_level) VALUES (1, 1);")
    execute ("INSERT INTO Project (project_id, owner, random_validation, quorum_size, trust_level) VALUES (1,1, 0, 1, 1);")
    execute ("INSERT INTO Jobs (job_id, project_id, quorum_size, done) VALUES (1,1,1, 0);")
    execute ("INSERT INTO Volunteer (user_id, project_id, contribution) VALUES (1,1,1);")
    # db.cur.execute(query, multi=True)
    # db.con.commit()
    print("database filled")

def test():
    try:
        fill_db()
    except Exception as e:
        pass
    # try:
    give_work(1, 1)
    # except Exception as e:
        # print(e)
    receive_work(1, 1, 1, "1")
# test()

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