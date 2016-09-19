#-*- coding: utf-8 -*-
from bs4 import BeautifulSoup 
from urllib.request import urlopen 
import re

res = urlopen('http://www.artiq.co.kr/product/detail.html?product_no=81496&cate_no=113&display_group=1')
#print res.read()

soup = BeautifulSoup(res,"html.parser")
#print soup.prettify()
all_font=soup.find_all('font')
#right_table=soup.find('table', class_='fabric_info')
#right_table
print(all_font)
#print('---------------------------------------------------------')
editDataStr = str(all_font)
#editDataStr = editDataStr.replace('<','')
#editDataStr = editDataStr.replace('>','')
#editDataStr = editDataStr.replace('font','')
#editDataStr = editDataStr.replace('[','')
#editDataStr = editDataStr.replace(']','')
#editDataStr = editDataStr.replace('/','')
#editDataStr = editDataStr.replace('=','')
#editDataStr = editDataStr.replace('"','')
#editDataStr = editDataStr.replace(',','')
#print(editDataStr)

print('--------------------------------------------------------')

p = re.compile('[a-z]|[A-Z]|\W')
alphaBet = p.findall(editDataStr)
#print(alphaBet)

for i in alphaBet:
	editDataStr = editDataStr.replace(i,'')

#editDataStr = editDataStr.replace('3300','')
#editDataStr = editDataStr.replace(str(alphaBet),'')


print(editDataStr)
print('--------------------------------------------------------')
wannaResult = editDataStr[5:32]
print(wannaResult)
print(type(wannaResult))

from pandas import DataFrame

lengthdata = wannaResult[0:3]
lengthsize = wannaResult[3:5]
waistdata = wannaResult[5:7]
wasitsize = wannaResult[7:9]
hipdata = wannaResult[9:12]
hipsize = wannaResult[12:14]
thighdata = wannaResult[14:17]
thighsize = wannaResult[17:19]
hemdata =  wannaResult[19:21]
hemsize = wannaResult[21:23]
cratchdata = wannaResult[23:25]
cratchsize = wannaResult[25:27]
print(lengthdata,lengthsize,waistdata,wasitsize)
print(hipdata,hipsize,thighdata,thighsize)
print(hemdata,hemsize,cratchdata,cratchsize)

data = {lengthdata:[lengthsize],waistdata:[wasitsize],hipdata:[hipsize],thighdata:[thighsize],hemdata:[hemsize]
         ,cratchdata:[cratchsize]}
frame = DataFrame(data)
print(frame)