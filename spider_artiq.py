#-*- coding: utf-8 -*-
from bs4 import BeautifulSoup 
from urllib.request import urlopen 
import re
import csv

def spider(max_pages):
	page = 82360
	while page < max_pages:
		url='http://www.artiq.co.kr/product/detail.html?product_no='+str(page)+'&cate_no=113&display_group=1'
		res=urlopen(url)
		soup = BeautifulSoup(res,"html.parser")
		all_font=soup.find_all('font')
		#print(all_font)
		editDataStr = str(all_font)
		p = re.compile('[a-z]+|[A-Z]+|<|>|/|\=|\"|,|\;|\#|0x|000000')
		alphaBet = p.findall(editDataStr)
		for i in alphaBet:
			editDataStr = editDataStr.replace(i,'')
		p1 = re.compile('브랜드|실측|\:|비교가 사이즈 미스가 없는 가장 좋은 방법입니다|adding|0x')
		filtiering = p1.findall(editDataStr)
		for i in filtiering:
			editDataStr = editDataStr.replace(i,'')
		p2 = re.compile('3300|&|\.|HRE|치수|\(|\)|상태|\[|\]')
		filtiering2 = p2.findall(editDataStr)
		for i in filtiering2:
			editDataStr = editDataStr.replace(i,'')
		
		p3 = re.compile('8  10|5         |-')
		filtiering3 = p3.findall(editDataStr)
		for i in filtiering3:
			editDataStr = editDataStr.replace(i,'')

		headers = []
		rows = []
		#print(editDataStr)
		p4 = re.compile('[가-힣]{2,}')
		p5 = re.compile('[0-9]{2,}')
		makeheader = p4.findall(editDataStr)
		for i in makeheader:
			headers.append(i)
		makerow = p5.findall(editDataStr)
		for i in makerow:
			rows.append(i)
		print(headers)
		print(rows)
		print(url)
		outfile = open(str(page)+'.csv','w',encoding='utf-8') 
		write_outfile = csv.writer(outfile)
		#write_outfile.writerow(headers)
		write_outfile.writerow(headers)
		write_outfile.writerow(rows)
		outfile.close()
		page +=1
spider(82370)
