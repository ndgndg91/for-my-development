import csv
import pymysql

def insertdata_table1(max_pages):
	page = 358864
	fixpage = page
	#while page < max_pages:
	conn = pymysql.connect(host='localhost', port=3306, user='root', passwd='ehdrlf123^^', db='search_for_cloth') 
	cursor = conn.cursor()
	#cursor.execute("select * from search_pants")
	csv_data = csv.reader(open(str(fixpage)+'~'+str(max_pages-1)+'table1.csv'))


	cursor.execute("create table z_table1 (PantsNo int,  Img_URL varchar(500),  Link varchar(500));")
	for row in csv_data:
		cursor.execute("INSERT INTO z_table1(Img_URL,Link) VALUES(%s,%s)", row)
	cursor.execute("UPDATE z_table1 SET z_table1.Pantsno=substr(link,45,6);")
	cursor.execute("ALTER TABLE z_table1 ADD CONSTRAINT z_table1_PK_PantsNo PRIMARY KEY(PantsNo);")

	#for r in cursor:
	#    print(r)		
	conn.commit()
	cursor.close()
	#page+=1
	print('Done')

insertdata_table1(358870)