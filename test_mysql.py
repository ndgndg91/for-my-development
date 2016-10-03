import csv
import pymysql

def insertdata(max_pages):
	page = 299432
	while page < max_pages:
		conn = pymysql.connect(host='localhost', port=3306, user='root', passwd='ehdrlf123^^', db='search_for_cloth') 
		cursor = conn.cursor()
		#cursor.execute("select * from search_pants")
		csv_data = csv.reader(open(str(page)+'.csv'))

		for row in csv_data:
			cursor.execute("INSERT INTO search_pants_musinsa VALUES(%s,%s,%s,%s,%s,%s)", row)

		#for r in cursor:
		#    print(r)		
		conn.commit()
		cursor.close()
		page+=1
		print('Done')

insertdata(299433)