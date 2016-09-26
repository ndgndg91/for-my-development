#-*- coding: utf-8 -*-
from bs4 import BeautifulSoup 
from urllib.request import urlopen 
import re
from pandas import DataFrame

def spider(max_pages):
	page = 82360
	while page < max_pages:
		url='http://www.artiq.co.kr/product/detail.html?product_no='+str(page)+'&cate_no=113&display_group=1'
		res=urlopen(url)
		soup = BeautifulSoup(res,"html.parser")
		all_font=soup.find_all('font')
		#print(all_font)
		editDataStr = str(all_font)
		p = re.compile('[a-z]|[A-Z]|\W')
		alphaBet = p.findall(editDataStr)
		for i in alphaBet:
			editDataStr = editDataStr.replace(i,'')
		#print(editDataStr)
		wannaResult = editDataStr[5:33]
		print(url)
		print('**************************************************')
		print(wannaResult)
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
		#data = {lengthdata:[lengthsize],waistdata:[wasitsize],hipdata:[hipsize],thighdata:[thighsize],hemdata:[hemsize],cratchdata:[cratchsize]}
		#frame = DataFrame(data)
		#print(frame)
		page +=1
spider(82378)