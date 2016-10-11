#-*- coding: utf-8 -*-
from bs4 import BeautifulSoup 
from urllib.request import urlopen 
import re
import csv

def spider(max_pages):
	page = 358864
	fixpage = page
	while page < max_pages:
		link='http://store.musinsa.com/app/product/detail/'+str(page)+'/0'
		f=urlopen(link)
		soup=BeautifulSoup(f,'lxml')
		a = soup.find_all('p',{'class':'item_categories'})
		b = bool(re.search('하의',str(a)))
		if b == True:
			spanspan =soup.find_all('span',class_='product-img')
			span = str(spanspan)
			
			span = span.replace('[','');span = span.replace(']','');span = span.replace('"','')
			span = span.replace('<','');span = span.replace('>','');span = span.replace('&','')
			span = span.replace('(','');span = span.replace(')','');span = span.replace('\'','')
			span = span.replace('=','');span = span.replace(';','');span = span.replace('//','')
			span = span.replace('-','');span = span.replace(',','');span = span.replace(' ','')
			span = span.replace('image_zoom','')
			#print(span)
			q = re.compile('image.musinsa.com/images/goods_img/[0-9]{8}/'+str(page)+'/'+str(page)+'_[0-9]_[0-9]{3}.jpg')
			imrl = re.search(q,span)
			imgurlsource = imrl.group()
			#print(imgurlsource)
			imgurl = []
			imgurl.append(imgurlsource)
			#print(imgurl)


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
			if len(headers)==6:
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
				tbodybody = tbodybody.replace('sve','');tbodybody = tbodybody.replace('size','')
				tbodybody = tbodybody.replace('flse','');	tbodybody = tbodybody.replace('nmeinfo','')
				tbodybody = tbodybody.replace('hden','');tbodybody = tbodybody.replace('vlue','')
				tbodybody = tbodybody.replace('goodsvl','');tbodybody = tbodybody.replace(' 6','')
				tbodybody = tbodybody.replace('\n','  ')
				rows = tbodybody.split()
				#print(rows)
				row1 = rows[0:6]
				row1.append(link)
				row2 = rows[6:12]
				row2.append(link)
				print(row1)
				print(row2)
				if len(rows)>12:
					row3 = rows[12:18]
					row3.append(link)
					print(row3)
				if len(rows)>18:
					row4 = rows[18:24]
					row4.append(link)
					print(row4)
				if len(rows)>24:
					row5 = rows[24:30]
					row5.append(link)
					print(row5)
				if len(rows)>30:
					row6 = rows[30:36]
					row6.append(link)
					print(row6)
		
		
				#print(link)
				page+=1
				outfile = open(str(fixpage)+'~'+str(max_pages-1)+'table2.csv','a',encoding='utf-8') 
				write_outfile = csv.writer(outfile)
				#write_outfile.writeheader(headers)
				write_outfile.writerow(row1)
				write_outfile.writerow(row2)
				if len(rows)>12:
					write_outfile.writerow(row3)
				if len(rows)>18:
					write_outfile.writerow(row4)
				if len(rows)>24:
					write_outfile.writerow(row5)
				if len(rows)>30:
					write_outfile.writerow(row6)
				#OutPutCsv.writerow(tbodybody)
				outfile.close()

				table1_row = []
				table1_row.append(imgurlsource)
				table1_row.append(link)
				print(table1_row)

				outfile2 = open(str(fixpage)+'~'+str(max_pages-1)+'table1.csv','a',encoding='utf-8')
				write_outfile2 = csv.writer(outfile2)
				write_outfile2.writerow(table1_row)
				outfile2.close()
		else:
			print("This page is not about pants and i'm gonna scrap next page")
			page+=1
		
spider(358870)
