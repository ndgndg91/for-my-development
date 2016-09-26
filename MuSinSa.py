#-*- coding: utf-8 -*-
from bs4 import BeautifulSoup 
from urllib.request import urlopen 
import re

def spider(max_pages):
	page = 407836
	while page < max_pages:
		link='http://store.musinsa.com/app/product/detail/'+str(page)+'/0'
		f=urlopen(link)
		soup=BeautifulSoup(f,'lxml')
		soup1=BeautifulSoup(f,'lxml')
		all_table=soup.find('table',class_='table_th_grey')
		theadhead=str(all_table.find('thead'))
		tbodybody=str(all_table.find('tbody'))
		p = re.compile('[^가-힣]')
		p2 = re.compile('[^0-9|\.|>|<]')
		p3 = re.compile('<6>|<><><>')
		p4 = re.compile('><')
		alphaBet = p.findall(theadhead)
		alphaBet2 = p2.findall(tbodybody)
		for i in alphaBet:
			theadhead = theadhead.replace(i,'')
		length = theadhead[0:2]
		waist  = theadhead[2:6]
		thigh  = theadhead[6:11]
		cratch = theadhead[11:13]
		hem    = theadhead[13:17]
		print(length,waist,thigh,cratch,hem)
		for i in alphaBet2:
			tbodybody = tbodybody.replace(i,'')
		alphaBet3 = p3.findall(tbodybody)
		for i in alphaBet3:
			tbodybody = tbodybody.replace(i,'')
		alphaBet4 = p4.findall(tbodybody)
		for i in alphaBet4:
			tbodybody = tbodybody.replace(i,'')
		print(tbodybody)
		print(link)
		page+=1
spider(407840)
