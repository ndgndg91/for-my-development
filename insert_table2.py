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

	for row in csv_data:
		cursor.execute("INSERT INTO z_pants_musinsa VALUES(null,%s,%s,%s,%s,%s,%s)", row)

	#for r in cursor:
	#    print(r)		
	conn.commit()
	cursor.close()
	#page+=1
	print('Done')

insertdata_table2(358870)