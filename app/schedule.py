import math
import os
import random
from collections import Counter

from app import app
from app.models.database import db


def increment_quorum_size(project_id, job_id):
    query = f"""
    UPDATE Jobs
    SET quorum_size = quorum_size + 1
    WHERE job_id = '{job_id}' AND project_id = '{project_id}'
    """
    db.cur.execute(query)
    db.con.commit()
    # check if succes

def save_result(project_id, job_id, volunteer_id, result):
    # save to db
    query = f"INSERT INTO Result (job_id, project_id, volunteer, result) VALUES ('{job_id}','{project_id}','{volunteer_id}', '{result}')"
    db.cur.execute(query)
    db.con.commit()


def get_volunteer(job_id, project_id):
    query = f"SELECT volunteer FROM Result WHERE job_id = '{job_id}' AND project_id = '{project_id}'"
    db.cur.execute(query)
    res = db.cur.fetchone()
    return res


def get_trust_level(job_id, project_id):
    user_id = get_volunteer(job_id, project_id)[0]
    query = f"SELECT (SELECT trust_level FROM User WHERE  user_id = '{user_id}'),(SELECT trust_level FROM Project WHERE  project_id = '{project_id}') FROM DUAL"
    db.cur.execute(query)
    res = db.cur.fetchone()
    return res


def decide_if_work_is_trusted(job_id, project_id):
    user_trust_level, project_trust_level = get_trust_level(job_id, project_id)
    if user_trust_level > project_trust_level:
        # dont trust host
        # increment_quorum_size(job)
        return False
    else:
        # host is trused
        probabilty_of_duplication = math.sqrt(
            user_trust_level / project_trust_level)
        if random.uniform(0, 1) <= probabilty_of_duplication:
            # Do a check
            # increment_quorum_size(job)
            return False
        return True

def job_done(project_id, job_id, correct_result):
    query = f"UPDATE Jobs SET done = 1 WHERE job_id = '{job_id}' AND project_id = '{project_id}'"
    db.cur.execute(query)
    db.con.commit()

    # TODO remove cached results form db
    db.cur.execute(
        f"""SELECT volunteer, result FROM Result WHERE job_id ='{job_id}' AND project_id = '{project_id}' ;""")
    results = db.cur.fetchall()

    for user_id, result in results:
        if result == correct_result:
            update_trust_level(user_id, 'trust_level * 0.95')
        else:
            update_trust_level(user_id, 'trust_level + 0.1')

    # write majority agreed result to fs
    with open(os.path.join(app.config['RESULT_FOLDER'], f"{project_id}_{job_id}"), "a+") as file:
        file.write(f'{job_id} ' + correct_result)


def get_number_of_results(job_id, project_id):
    query = f"SELECT COUNT(*) FROM Result WHERE job_id ='{job_id}' AND project_id = '{project_id}';"
    db.cur.execute(query)
    res = db.cur.fetchone()
    return res


def single_result_query(query):
    db.cur.execute(query)
    return db.cur.fetchone()[0]


def update_trust_level(user_id, update_rule):
    query = f"UPDATE User SET trust_level = {update_rule} WHERE user_id = '{user_id}';"
    db.cur.execute(query)
    db.con.commit()


def majority_agrees(project_id, job_id):
    db.cur.execute(
        f"Select result FROM Result WHERE job_id = '{job_id}' AND project_id = '{project_id}'")
    all_results = db.cur.fetchall()
    c = Counter(all_results)
    try:
        most_common, second_most_common = c.most_common(2)
    except ValueError:
        most_common =  c.most_common(1)
        # No second_most_common, i.e. only one result
        return most_common[0]
    if most_common[1] > second_most_common[1]:
        return most_common[0]
    return False

def receive_work(project_id, job_id, volunteer_id, result):
    save_result(project_id, job_id, volunteer_id, result)
    n_results = get_number_of_results(job_id, project_id)[0]
    random_replication = single_result_query(
        f"SELECT random_validation FROM Project WHERE  project_id = '{project_id}'")
    quorum_size = single_result_query(
        f"SELECT quorum_size FROM Jobs WHERE job_id = '{job_id}' AND project_id = '{project_id}'")

    if random_replication == 0:
        trust = decide_if_work_is_trusted(job_id, project_id)
        if not trust:
            increment_quorum_size(project_id, job_id)
            # the quorum size has been increased by one, so we wait for someone to replicate it.
            return
        # quorum_size 1 and we trust the result so we are done
        if quorum_size == 1:
            job_done(project_id, job_id, result)

        else:
            # quorum not yet reached, we wait for someone to replicate the result.
            pass
    if n_results == quorum_size:
        majority_result = majority_agrees(project_id, job_id)
        if majority_result != False:
            job_done(project_id, job_id, majority_result[0])
        else:
            increment_quorum_size(project_id, job_id)
            return
    return


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
    return job_id


def fill_db():
    def execute(s):
        db.cur.execute(s)
        db.con.commit()
    execute("INSERT INTO User (user_id, trust_level) VALUES (1, 0);")
    execute("INSERT INTO User (user_id, trust_level) VALUES (2, 0);")
    execute("INSERT INTO User (user_id, trust_level) VALUES (3, 0);")
    execute("INSERT INTO Project (project_id, owner, random_validation, quorum_size, trust_level) VALUES (1,1, 0, 2, 1);")
    execute(
        "INSERT INTO Jobs (job_id, project_id, quorum_size, done) VALUES (1,1,3, 0);")

    print("database filled")


def test():
    try:
        fill_db()
    except Exception as e:
        pass
    receive_work(1, 1, 1, "1")
    receive_work(1, 1, 2, "2")
    receive_work(1, 1, 3, "1")
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
