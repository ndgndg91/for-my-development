import pymysql


conn = pymysql.connect(host='localhost', port=3306, user='root', passwd='ehdrlf123^^', db='')
cursor = conn.cursor()

#cursor.execute("CREATE DATABASE myproject CHARACTER SET utf8 COLLATE utf8_general_ci;")
cursor.execute("use myproject;")
cursor.execute("show databases;")
cursor.execute("show tables;")
cursor.execute("select * from pants_musinsa;")

rows = cursor.fetchall()
print(rows)

conn.close()