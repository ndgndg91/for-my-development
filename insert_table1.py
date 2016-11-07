import csv
import pymysql

def insertdata_table1(max_pages):
	page = 358864
	fixpage = page
	#while page < max_pages:
	conn = pymysql.connect(host='localhost', port=3306, user='root', passwd='ehdrlf123^^', db='myproject') 
	cursor = conn.cursor()
	#cursor.execute("select * from search_pants")
	csv_data = csv.reader(open(str(fixpage)+'~'+str(max_pages-1)+'table1.csv'))


	cursor.execute("create table table1 (No MEDIUMINT NOT NULL AUTO_INCREMENT, PantsNo int,  Img_URL varchar(500),  Link varchar(500), PRIMARY KEY(No));")
	for row in csv_data:
		cursor.execute("INSERT INTO table1(Img_URL,Link) VALUES(%s,%s)", row)
	cursor.execute("UPDATE table1 SET table1.Pantsno=substr(link,45,6);")
	#cursor.execute("ALTER TABLE table1 ADD CONSTRAINT table1_PK_No PRIMARY KEY(No);")

	#for r in cursor:
	#    print(r)		
	conn.commit()
	cursor.close()
	#page+=1
	print('Done')

insertdata_table1(358870)