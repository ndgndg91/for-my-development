#-*- coding: utf-8 -*-
from bs4 import BeautifulSoup 
from urllib.request import urlopen 
import re

def spider(max_pages):
	page = 358864
	while page < max_pages:
		link='http://store.musinsa.com/app/product/detail/'+str(page)+'/0'
		f=urlopen(link)
		soup=BeautifulSoup(f,'html.parser')
		soup1=BeautifulSoup(f,'html.parser')
		all_table=soup.find('table',class_='table_th_grey')
		trtr=all_table.find_all('tr')
		list(trtr)
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
		if trtr[5] in globals():
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
		else:
			break
#########################################################
		if trtr[6]in globals():
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
		else:
			break
############################################################
		if trtr[7] in globals():
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
			page +=1
		else:
			break
############################################################
		

spider(358865)