import csv
import pymysql

def insertdata_table2(max_pages):
	page = 358864
	fixpage = page
	#while page < max_pages:
	conn = pymysql.connect(host='localhost', port=3306, user='root', passwd='ehdrlf123^^', db='myproject') 
	cursor = conn.cursor()
	#cursor.execute("select * from search_pants")
	csv_data = csv.reader(open(str(fixpage)+'~'+str(max_pages-1)+'table2.csv'))

	cursor.execute("create table pants_musinsa(Seq MEDIUMINT NOT NULL AUTO_INCREMENT,\
	  Size int NOT NULL,\
	  Length int,\
	  Waist int, \
	  Thigh  int, \
	  Crotch int,\
	  Hem int,\
	  Link varchar(200),\
	  PantsNo int NOT NULL, \
	  CONSTRAINT pants_musinsa_PK_PantsNoandSize PRIMARY KEY(Seq) \
	  );")
  
	for row in csv_data:
		cursor.execute("INSERT INTO pants_musinsa(Size,Length,Waist,Thigh,Crotch,Hem,Link,PantsNo) VALUES(%s,%s,%s,%s,%s,%s,%s,%s)", row)
	#cursor.execute("UPDATE pants_musinsa SET pants_musinsa.Pantsno=substr(link,45,6);")
	#cursor.execute("ALTER TABLE pants_musinsa ADD CONSTRAINT pants_musinsa_PK_PantsNoandSize PRIMARY KEY(PantsNo,Size);")
	#cursor.execute("CREATE INDEX musinsa_idx_PantsNo ON pants_musinsa(PantsNo);")
	cursor.execute("ALTER TABLE pants_musinsa ADD CONSTRAINT pants_musinsa_FK_PantsNo FOREIGN KEY(PantsNo) REFERENCES table1(PantsNo);")
	#for r in cursor:
	#    print(r)		
	conn.commit()
	cursor.close()
	#page+=1
	print('Done')

insertdata_table2(358870)

#PantsNo int NOT NULL,\
#	  PRIMARY KEY(Seq,PantsNo), FOREIGN KEY(PantsNo) REFERENCES table1(PantsNo) ON DELETE CASCADE
#