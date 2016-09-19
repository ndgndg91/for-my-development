#-*- coding: utf-8 -*-
from bs4 import BeautifulSoup
from urllib.request import urlopen 

link='http://store.musinsa.com/app/product/detail/243938/0'
f=urlopen(link)

soup=BeautifulSoup(f,'html.parser')
soup1=BeautifulSoup(f,'html.parser')
all_table=soup.find('table',class_='table_th_grey')
#print (all_table)
#print('---------------------------------------------------')
trtr=all_table.find_all('tr')
#print(trtr)

trtr_row_col = trtr[0].find_all('th')
trtr_row_th1 = trtr[3].find_all('th')
trtr_row_td1 = trtr[3].find_all('td')
trtr_row_th2 = trtr[4].find_all('th')
trtr_row_td2 = trtr[4].find_all('td')
trtr_row_th3 = trtr[5].find_all('th')
trtr_row_td3 = trtr[5].find_all('td')
trtr_row_th4 = trtr[6].find_all('th')
trtr_row_td4 = trtr[6].find_all('td')
trtr_row_th5 = trtr[7].find_all('th')
trtr_row_td5 = trtr[7].find_all('td')



headers = []

for i in range(0, len(trtr_row_col)):
	headers.append(trtr_row_col[i])



row1=[]
row2=[]
row3=[]
row4=[]
row5=[]
for i in range(0, len(trtr_row_th1)):
	row1.append(trtr_row_th1[i])
for i in range(0, len(trtr_row_td1)):
	row1.append(trtr_row_td1[i])
for i in range(0, len(trtr_row_th2)):
	row2.append(trtr_row_th2[i])
for i in range(0, len(trtr_row_td2)):
	row2.append(trtr_row_td2[i])
for i in range(0, len(trtr_row_th3)):
	row3.append(trtr_row_th3[i])
for i in range(0, len(trtr_row_td3)):
	row3.append(trtr_row_td3[i])
for i in range(0, len(trtr_row_th4)):
	row4.append(trtr_row_th4[i])
for i in range(0, len(trtr_row_td4)):
	row4.append(trtr_row_td4[i])
for i in range(0, len(trtr_row_th5)):
	row5.append(trtr_row_th5[i])
for i in range(0, len(trtr_row_td5)):
	row5.append(trtr_row_td5[i])


print(headers)
print('---------------------------------------------------')
print(row1)
print('---------------------------------------------------')
print(row2)
print('---------------------------------------------------')
print(row3)
print('---------------------------------------------------')
print(row4)
print('---------------------------------------------------')
print(row5)
