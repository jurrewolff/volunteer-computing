from models.volunteer import get_projects_of_user
import models.user as user
import models.project as project
import models.volunteer as volunteer
import os

print("user tests")
user.print_users()
print(user.insert_user((user.get_new_user_id(), "username2", "password", "test1@email.com", "fname", "lname", 0, 0)))
user.print_users()

print("\nproject tests")
print(project.get_all_projects())
project.insert_project((project.get_new_project_id(), "test_project", "this is a test project", 1, 100, 0, 100))
print(project.get_all_projects())

print("\nvolunteer tests")
print(volunteer.get_projects_of_user(1))
print(volunteer.insert_volunteer((1, 1, 0)))
print(volunteer.get_projects_of_user(1))


