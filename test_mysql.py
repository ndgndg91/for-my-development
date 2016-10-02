import csv
import pymysql
#pymysql
conn = pymysql.connect(host='localhost', port=3306, user='root', passwd='ehdrlf123^^', db='search_for_cloth') 
cursor = conn.cursor()
#cursor.execute("select * from search_pants")
csv_data = csv.reader(open('299432.csv'))

for row in csv_data:
	cursor.execute("INSERT INTO search_pants VALUES(%s,%s,%s,%s,%s,%s)", row)

#for r in cursor:
#    print(r)		
conn.commit()
cursor.close()
print('Done')