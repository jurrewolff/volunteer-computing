from lib2to3.refactor import get_all_fix_names
import mysql_script

print(mysql_script.get_new_project_id())
mysql_script.print_users()

print(mysql_script.get_all_projects())
print(mysql_script.get_new_project_id())
mysql_script.insert_project((mysql_script.get_new_project_id(), "test", "test", 1))
# print(mysql_script.get_new_id())
# print(mysql_script.insert_user((mysql_script.get_new_id(), "username1", "test@email.com", "fname", "lname", 0)))
# print(mysql_script.get_new_id())
# print("test4")
