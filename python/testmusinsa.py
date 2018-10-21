#-*- coding: utf-8 -*-
from bs4 import BeautifulSoup 
from urllib.request import urlopen 
import re
import csv


page=345845
link='http://store.musinsa.com/app/product/detail/'+str(page)+'/0'
f=urlopen(link)
soup=BeautifulSoup(f,'lxml')
a = soup.find_all('p',{'class':'item_categories'})
b = bool(re.search('하의',str(a)))
c = bool(soup.find('table',class_='table_th_grey'))
if b == True and c == True:
	all_table=soup.find('table',class_='table_th_grey')
	theadhead=str(all_table.find('thead'))
	tbodybody=str(all_table.find('tbody'))
	t2 = re.compile('[가-힣]')
	t3 = re.compile('<tr>|</tr>|<th>|</th>|</td>|<td class="goods_size_val">|</tbody>|<tbody>|MY|<tr id="mysize">|<td colspan="6">|~!|</a>|\?')
	t4 = re.compile('"|\'|#|:|=|;|_|<|>|/')
	t5 = re.compile('[a-z]')
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
	tbodybody = tbodybody.replace('(23)',''); tbodybody = tbodybody.replace('(6)','')
	print("----------------------------------------------")
	print(tbodybody)