import models.user as user
import models.project as project


user.print_users()
user.insert_user((user.get_new_user_id(), "password", "username3", "test1@email.com", "fname", "lname", 0))
user.print_users()

print(project.get_all_projects())
project.insert_project((project.get_new_project_id(), "test_project", "this is a test project", 1, 100))
print(project.get_all_projects())

