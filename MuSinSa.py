#-*- coding: utf-8 -*-
from bs4 import BeautifulSoup 
from urllib.request import urlopen 
import re
import csv

def spider(max_pages):
	page = 407836
	while page < max_pages:
		link='http://store.musinsa.com/app/product/detail/'+str(page)+'/0'
		f=urlopen(link)
		soup=BeautifulSoup(f,'lxml')
		all_table=soup.find('table',class_='table_th_grey')
		theadhead=str(all_table.find('thead'))
		tbodybody=str(all_table.find('tbody'))
		p = re.compile('[abdefghijknopqrtuvwyz]|<|>|/|\"|[0-9]|\=|\_')
		t2 = re.compile('[가-힣]')
		t3 = re.compile('tbody|id|class|td|th|tr|mysize|colspan|order_size_save|save_mysize|style|display:none')
		t4 = re.compile('save|a|href|onclick|return|false|input|name|size_info|type|\"|/|=|_')
		t5 = re.compile('~|!|<|>|\;|\?|\#|\'|MY|\(|\)')
		alphaBet = p.findall(theadhead)
		for i in alphaBet:
			theadhead = theadhead.replace(i,'')
		theadhead = theadhead.replace('clssml','')
		theadhead = theadhead.replace('m  l','')
		headers = theadhead.split()
		print(headers)
		alphaBet1 = t2.findall(tbodybody)
		alphaBet2 = t3.findall(tbodybody)
		alphaBet3 = t4.findall(tbodybody)
		alphaBet4 = t5.findall(tbodybody)
		for i in alphaBet1:
			tbodybody = tbodybody.replace(i,'')
		for i in alphaBet2:
			tbodybody = tbodybody.replace(i,'')
		for i in alphaBet3:
			tbodybody = tbodybody.replace(i,'')
		for i in alphaBet4:
			tbodybody = tbodybody.replace(i,'')
		tbodybody = tbodybody.replace('sve','')
		tbodybody = tbodybody.replace('size','')
		tbodybody = tbodybody.replace('flse','')
		tbodybody = tbodybody.replace('nmeinfo','')
		tbodybody = tbodybody.replace('hden','')
		tbodybody = tbodybody.replace('vlue','')
		tbodybody = tbodybody.replace('goodsvl','')
		tbodybody = tbodybody.replace(' 6','')
		tbodybody = tbodybody.replace('\n','  ')
		rows = tbodybody.split()
		#print(rows)
		print(link)
		
		outfile = open('out.csv','w',encoding='utf-8') 
		write_outfile = csv.writer(outfile)
		write_outfile.writerow(headers)
		#OutPutCsv.writerow(tbodybody)
		
		page+=1
		
spider(407837)
