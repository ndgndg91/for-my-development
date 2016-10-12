import csv
import pymysql

def insertdata_table2(max_pages):
	page = 358864
	fixpage = page
	#while page < max_pages:
	conn = pymysql.connect(host='localhost', port=3306, user='root', passwd='ehdrlf123^^', db='search_for_cloth') 
	cursor = conn.cursor()
	#cursor.execute("select * from search_pants")
	csv_data = csv.reader(open(str(fixpage)+'~'+str(max_pages-1)+'table2.csv'))

	cursor.execute("create table z_pants_musinsa (  PantsNo int, Size int, Length int, Waist int, Thigh  int, Crotch int, Hem int, Link varchar(200));")

	for row in csv_data:
		cursor.execute("INSERT INTO z_pants_musinsa VALUES(null,%s,%s,%s,%s,%s,%s,%s)", row)
	cursor.execute("UPDATE z_pants_musinsa SET z_pants_musinsa.Pantsno=substr(link,45,6);")
	cursor.execute("ALTER TABLE z_pants_musinsa ADD CONSTRAINT z_pants_musinsa_PK_PantsNoandSize PRIMARY KEY(PantsNo,Size);")
	cursor.execute("ALTER TABLE z_pants_musinsa ADD CONSTRAINT z_pants_musinsa_FK_PantsNo FOREIGN KEY(PantsNo) REFERENCES z_table1(PantsNo)")
	#for r in cursor:
	#    print(r)		
	conn.commit()
	cursor.close()
	#page+=1
	print('Done')

insertdata_table2(358870)