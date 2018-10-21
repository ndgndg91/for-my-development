#-*- coding: utf-8 -*-
from bs4 import BeautifulSoup
from urllib.request import urlopen 
import re

link='http://store.musinsa.com/app/product/detail/243938/0'
f=urlopen(link)

soup=BeautifulSoup(f,'html.parser')
soup1=BeautifulSoup(f,'html.parser')
all_table=soup.find('table',class_='table_th_grey')
#print (all_table)
#print('---------------------------------------------------')
trtr=all_table.find_all('tr')
#print(trtr)

##################################################################
#editDataStr = str(trtr)
#p = re.compile('[a-z]|[A-Z]|\W')
#alphaBet = p.findall(editDataStr)
#for i in alphaBet:
#	editDataStr = editDataStr.replace(i,'')
#print(editDataStr)
#################################################################
trtr_row_col = str(trtr[0].find_all('th'))
p = re.compile('[a-z]|[A-Z]|\W|\d')
alphaBet = p.findall(trtr_row_col)

for i in alphaBet:
	trtr_row_col = trtr_row_col.replace(i,'')
print(trtr_row_col)

################################################################
trtr_row_th1 = str(trtr[3].find_all('th'))
p = re.compile('[a-z]|[A-Z]|\W|')
alphaBet = p.findall(trtr_row_th1)

for i in alphaBet:
	trtr_row_th1 = trtr_row_th1.replace(i,'')
#print(trtr_row_th1)
#************************************************************#

trtr_row_td1 = str(trtr[3].find_all('td'))
p = re.compile('[a-z]|[A-Z]|\s|<|>|_|/|"|=')
alphaBet = p.findall(trtr_row_td1)

for i in alphaBet:
	trtr_row_td1 = trtr_row_td1.replace(i,'')
#print(trtr_row_td1)

row1 = trtr_row_th1 + trtr_row_td1
print(row1)
##############################################################
trtr_row_th2 = str(trtr[4].find_all('th'))
p = re.compile('[a-z]|[A-Z]|\W|')
alphaBet = p.findall(trtr_row_th2)

for i in alphaBet:
	trtr_row_th2 = trtr_row_th2.replace(i,'')
#print(trtr_row_th2)
#************************************************************#

trtr_row_td2 = str(trtr[4].find_all('td'))
p = re.compile('[a-z]|[A-Z]|\s|<|>|_|/|"|=')
alphaBet = p.findall(trtr_row_td2)

for i in alphaBet:
	trtr_row_td2 = trtr_row_td2.replace(i,'')
#print(trtr_row_td2)

row2 = trtr_row_th2 + trtr_row_td2
print(row2)
#################################################################

trtr_row_th3 = str(trtr[5].find_all('th'))
p = re.compile('[a-z]|[A-Z]|\W|')
alphaBet = p.findall(trtr_row_th3)

for i in alphaBet:
	trtr_row_th3 = trtr_row_th3.replace(i,'')
#print(trtr_row_th3)
#************************************************************#
trtr_row_td3 = str(trtr[5].find_all('td'))
p = re.compile('[a-z]|[A-Z]|\s|<|>|_|/|"|=')
alphaBet = p.findall(trtr_row_td3)

for i in alphaBet:
	trtr_row_td3 = trtr_row_td3.replace(i,'')
#print(trtr_row_td3)

row3 = trtr_row_th3 + trtr_row_td3
print(row3)
#########################################################
trtr_row_th4 = str(trtr[6].find_all('th'))
p = re.compile('[a-z]|[A-Z]|\W|')
alphaBet = p.findall(trtr_row_th4)

for i in alphaBet:
	trtr_row_th4 = trtr_row_th4.replace(i,'')
#print(trtr_row_th4)
#************************************************************#
trtr_row_td4 = str(trtr[6].find_all('td'))
p = re.compile('[a-z]|[A-Z]|\s|<|>|_|/|"|=')
alphaBet = p.findall(trtr_row_td4)

for i in alphaBet:
	trtr_row_td4 = trtr_row_td4.replace(i,'')
#print(trtr_row_td4)

row4 = trtr_row_th4 + trtr_row_td4
print(row4)
############################################################
trtr_row_th5 = str(trtr[7].find_all('th'))
p = re.compile('[a-z]|[A-Z]|\W|')
alphaBet = p.findall(trtr_row_th5)

for i in alphaBet:
	trtr_row_th5 = trtr_row_th5.replace(i,'')
#print(trtr_row_th5)
#************************************************************#
trtr_row_td5 = str(trtr[7].find_all('td'))
p = re.compile('[a-z]|[A-Z]|\s|<|>|_|/|"|=')
alphaBet = p.findall(trtr_row_td5)

for i in alphaBet:
	trtr_row_td5 = trtr_row_td5.replace(i,'')
#print(trtr_row_td4)

row5 = trtr_row_th5 + trtr_row_td5
print(row5)

############################################################













####################################################################
#trtr_row_col = trtr[0].find_all('th')
#trtr_row_th1 = trtr[3].find_all('th')
#trtr_row_td1 = trtr[3].find_all('td')
#trtr_row_th2 = trtr[4].find_all('th')
#trtr_row_td2 = trtr[4].find_all('td')
#trtr_row_th3 = trtr[5].find_all('th')
#trtr_row_td3 = trtr[5].find_all('td')
#trtr_row_th4 = trtr[6].find_all('th')
#trtr_row_td4 = trtr[6].find_all('td')
#trtr_row_th5 = trtr[7].find_all('th')
#trtr_row_td5 = trtr[7].find_all('td')
#headers = []

#for i in range(0, len(trtr_row_col)):
#	headers.append(trtr_row_col[i])



#row1=[]
#row2=[]
#row3=[]
#row4=[]
#row5=[]
#for i in range(0, len(trtr_row_th1)):
#	row1.append(trtr_row_th1[i])
#for i in range(0, len(trtr_row_td1)):
#	row1.append(trtr_row_td1[i])
#for i in range(0, len(trtr_row_th2)):
#	row2.append(trtr_row_th2[i])
#for i in range(0, len(trtr_row_td2)):
#	row2.append(trtr_row_td2[i])
#for i in range(0, len(trtr_row_th3)):
#	row3.append(trtr_row_th3[i])
#for i in range(0, len(trtr_row_td3)):
#	row3.append(trtr_row_td3[i])
#for i in range(0, len(trtr_row_th4)):
#	row4.append(trtr_row_th4[i])
#for i in range(0, len(trtr_row_td4)):
#	row4.append(trtr_row_td4[i])
#for i in range(0, len(trtr_row_th5)):
#	row5.append(trtr_row_th5[i])
#for i in range(0, len(trtr_row_td5)):
#	row5.append(trtr_row_td5[i])


#print(headers)
#print('---------------------------------------------------')
#print(row1)
#print('---------------------------------------------------')
#print(row2)
#print('---------------------------------------------------')
#print(row3)
#print('---------------------------------------------------')
#print(row4)
#print('---------------------------------------------------')
#print(row5)
