#-*- coding: utf-8 -*-
from bs4 import BeautifulSoup
from urllib.request import urlopen 


link='http://www.superstari.co.kr/shop/shopdetail.html?branduid=131009&xcode=036&mcode=005&scode=&type=X&sort=manual&cur_code=036005&GfDT=bml5W1o%3D'
#print(type(link))
f=urlopen(link)
#print(type(f))

soup=BeautifulSoup(f,"html.parser")
#print(type(soup))
all_table=soup.find_all('table',class_='fabric_info')
#print(all_table[2])
trtr = all_table[2].find_all('tr')
#print(trtr)
trtr_row_col = trtr[0].find_all('th')
#print(len(trtr_row_col))


trtr_row_td1= trtr[1].find_all('td')
trtr_row_th1= trtr[1].find_all('th')
trtr_row_td2= trtr[2].find_all('td')
trtr_row_th2= trtr[2].find_all('th')
trtr_row_td3= trtr[3].find_all('td')
trtr_row_th3= trtr[3].find_all('th')
trtr_row_td4= trtr[4].find_all('td')
trtr_row_th4= trtr[4].find_all('th')
trtr_row_td5= trtr[5].find_all('td')
trtr_row_th5= trtr[5].find_all('th')
trtr_row_td6= trtr[6].find_all('td')
trtr_row_th6= trtr[6].find_all('th')
#print(headers)


headers = []

for i in range(0, len(trtr_row_col)):
	headers.append(trtr_row_col[i])
#print(len(trtr))
#print(trtr_row_col)
#print(trtr_row_th1,trtr_row_td1)
#print(trtr_row_th2,trtr_row_td2)
#print(trtr_row_th3,trtr_row_td3)
#print(trtr_row_th4,trtr_row_td4)
#print(trtr_row_th5,trtr_row_td5)

row1 = []
row2 = []
row3 = []
row4 = []

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
print(headers)
print(row1)
print(row2)
print(row3)
print(row4)