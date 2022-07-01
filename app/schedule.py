import math
import os
import random
from collections import Counter

from app import app
from app.util import build_response
from http import HTTPStatus

from app.models.database import db
from app.models.jobs import increment_quorum_size, possible_jobs, job_marked_done, submitted_already_for_job
from app.models.results import save_result, get_number_of_results
from app.models.user import get_trust_level, update_trust_level
from app.models.project import get_n_open_jobs


def decide_if_work_is_trusted(job_id, project_id):
    """
    Decides if work is trusted based on the submitting users trustlevel
    """
    user_trust_level, project_trust_level = get_trust_level(job_id, project_id)
    if user_trust_level > project_trust_level:
        # dont trust host
        return False
    else:
        # host is trused
        probabilty_of_duplication = math.sqrt(
            user_trust_level / project_trust_level)
        if random.uniform(0, 1) <= probabilty_of_duplication:
            # Do a check
            return False
        return True


def job_done(project_id, job_id, correct_result):
    """
    Updates the database an filesystem when a job is done.
    """
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
    proj_dir = os.path.join(app.config["PROJECTS_DIR"], f"{project_id}")
    # app.logger.warning(f"correct_result: {correct_result}")
    with open(os.path.join(proj_dir, "output"), "a+") as file:
        file.write(f'{job_id} ' + correct_result)

    # Check if this was the last open job for this project

    if get_n_open_jobs(project_id) == 0:
        db.cur.execute(
            f"UPDATE Project SET done = 1 WHERE project_id = '{project_id}';")
        db.con.commit()
        # TODO put reseult file in correct order


def single_result_query(query):
    db.cur.execute(query)
    return db.cur.fetchone()[0]


def majority_agrees(project_id, job_id):
    db.cur.execute(
        f"Select result FROM Result WHERE job_id = '{job_id}' AND project_id = '{project_id}'")
    all_results = [x[0] for x in db.cur.fetchall()]
    c = Counter(all_results)
    try:
        most_common, second_most_common = c.most_common(2)
    except ValueError:
        most_common = c.most_common(1)[0]
        # No second_most_common, i.e. only one result
        # app.logger.warning(f"most_common: {most_common}")
        return most_common[0]
    if most_common[1] > second_most_common[1]:
        return most_common[0]
    return False


def receive_work(project_id, job_id, volunteer_id, result):
    """
    Receives a result. When enough results have been collected for a job it will be marked as done.
    :returns: a bool indicating the succes and possibly an associated error.
    """
    if job_marked_done(project_id, job_id):
        return False, build_response(HTTPStatus.BAD_REQUEST, "This jobs has already been completed.")
    if submitted_already_for_job(project_id, job_id, volunteer_id):
        return False, build_response(HTTPStatus.BAD_REQUEST, "User has already submitted a result for this jobs.")


    save_result(project_id, job_id, volunteer_id, result)
    n_results = get_number_of_results(job_id, project_id)[0]
    random_replication = single_result_query(
        f"SELECT random_validation FROM Project WHERE  project_id = '{project_id}'")
    quorum_size = single_result_query(
        f"SELECT quorum_size FROM Jobs WHERE job_id = '{job_id}' AND project_id = '{project_id}'")

    if random_replication == 1:
        trust = decide_if_work_is_trusted(job_id, project_id)
        if not trust:
            increment_quorum_size(project_id, job_id)
            # the quorum size has been increased by one, so we wait for someone to replicate it.
            return True, None
        # quorum_size 1 and we trust the result so we are done
        if quorum_size == 1:
            job_done(project_id, job_id, result)
            return True, None
        # else:
        #     # quorum not yet reached, we wait for someone to replicate the result.
        #     return True, None
    if n_results == quorum_size:
        majority_result = majority_agrees(project_id, job_id)
        if majority_result != False:
            job_done(project_id, job_id, majority_result)
            return True, None
        else:
            increment_quorum_size(project_id, job_id)
            return True, None
    return True, None


def give_work(project_id, user_id):
    """
    Gives work. Picks a random job from all open jobs where this user has not yet submitted a result.
    """
    possible = possible_jobs(project_id, user_id)
    if len(possible) == 0:
        return False, build_response(HTTPStatus.IM_A_TEAPOT, "No jobs available for this user.")
    job_id, _ = random.choice(possible)
    return True, job_id


def fill_db():
    def execute(s):
        db.cur.execute(s)
        db.con.commit()
    execute("INSERT INTO User (user_id, trust_level) VALUES (1, 0.01);")
    execute("INSERT INTO User (user_id, trust_level) VALUES (2, 0.01);")
    execute("INSERT INTO User (user_id, trust_level) VALUES (3, 0.01);")
    execute("INSERT INTO Project (project_id, owner, random_validation, quorum_size, trust_level, done) VALUES (1,1, 0, 2, 1, 0);")
    execute(
        "INSERT INTO Jobs (job_id, project_id, quorum_size, done) VALUES (1,1,2, 0);")

    print("database filled")


def test():
    # try:
    fill_db()
    # except Exception as e:
        # pass
    print("************")
    print("j1: ", receive_work(1, 1, 1, "1"))
    print("j1: ", receive_work(1, 1, 3, "1"))
    print("open jobs:,         ", get_n_open_jobs(1))
    print("************")

# try:
#     test()
# except:
#     pass