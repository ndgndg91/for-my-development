#-*- coding: utf-8 -*-
from bs4 import BeautifulSoup 
from urllib.request import urlopen 
import re
import csv

def spider(max_pages):
	page = 320000
	fixpage = page
	while page < max_pages:
		link='http://store.musinsa.com/app/product/detail/'+str(page)+'/0'
		pantsno=link[44:50]
		f=urlopen(link)
		soup=BeautifulSoup(f,'lxml')
		a = soup.find_all('p',{'class':'item_categories'})
		b = bool(re.search('하의',str(a)))
		c = bool(soup.find('table',class_='table_th_grey'))
		if b == True and c == True:
			#--------------------------------316744~~~
			soupmeta = soup.head
			allmeta = soupmeta.find_all('meta')
			imghtml = str(allmeta[6])
			imghtml = imghtml.replace('<meta content="','')
			imghtml = imghtml.replace('" id="fbOgImage" property="og:image"/>','')
			#q = re.compile('image.musinsa.com/images/goods_img/[0-9]{8}/'+str(page)+'/'+str(page)+'_[0-9]_[0-9]{3}.jpg')
			#imrl = re.search(imghtml,span)
			#imgurl = []
			#imgurlsource = imrl.group()
			#imgurl.append(imgurlsource)
			p = re.compile('[abdefghijknopqrtuvwyz]|<|>|/|\"|[0-9]|\=|\_')
			t2 = re.compile('<td class="goods_size_val">|<th>|</th>|<td>|</td>|<tr>|</tr>|<tbody>|</tbody>|MY')
			brandmeta = allmeta[2]
			strbrandmeta = str(brandmeta); strbrandmeta = strbrandmeta.replace('제품번호','')
			strbrandmeta = strbrandmeta.replace(' ','')
			splitbrandmeta = strbrandmeta.split(':')
			brand = splitbrandmeta[2]
			#brand-------------------------------------------------------------------------------------
			all_table=soup.find('table',class_='table_th_grey')
			theadhead=str(all_table.find('thead'))
			tbodybody=str(all_table.find('tbody'))
			tbodybody=tbodybody.replace('<td class="goods_size_val"></td>','<td class="goods_size_val">000</td>')
			tbodybody=tbodybody.replace('<th>옵션없음</th>','<th>free</th>')
			tbodybody=tbodybody.replace('<th>1 (M)</th>','<th>M</th>')
			tbodybody=tbodybody.replace('<th>2 (L)</th>','<th>L</th>')
			tbodybody=tbodybody.replace('<th>3 (XL)</th>','<th>XL</th>')
			tbodybody=tbodybody.replace(' - ','-');tbodybody=tbodybody.replace('MAN ','MAN') 
			tbodybody=tbodybody.replace('<th>S ','<th>S')
			tbodybody=tbodybody.replace('<th>M ','<th>M')
			tbodybody=tbodybody.replace('<th>L ','<th>L')
			tbodybody=tbodybody.replace('<th>XL ','<th>XL')
			tbodybody=tbodybody.replace(' (S)</th>','(S)</th>')
			tbodybody=tbodybody.replace(' (M)</th>','(M)</th>')
			tbodybody=tbodybody.replace(' (L)</th>','(L)</th>')
			tbodybody=tbodybody.replace(' (XL)</th>','(XL)</th>')
			tbodybody=tbodybody.replace('<th>ONE SIZE</th>','<th>ONESIZE</th>')
			tbodybody=tbodybody.replace(' 플래그링 ','플래그링');tbodybody=tbodybody.replace('WOMAN ','WOMAN') 
			tbodybody=tbodybody.replace('MELANGE GREY','MELANGEGREY');tbodybody=tbodybody.replace(' NAVY','NAVY') 
			alphaBet = p.findall(theadhead)
			for i in alphaBet:
				theadhead = theadhead.replace(i,'')
			theadhead = theadhead.replace('clssml','')
			theadhead = theadhead.replace('m  l','')
			headers = theadhead.split()
			#header number count
			if len(headers)==6:
				print(headers)
				alphaBet1 = t2.findall(tbodybody)
				for i in alphaBet1:
					tbodybody = tbodybody.replace(i,'')
				tbodybody = tbodybody.replace('<tr id="mysize">','');tbodybody = tbodybody.replace('<td colspan="6">가지고 계신 제품의 실측을 입력해 보세요~!','')
				tbodybody = tbodybody.replace('<tr class="order_size_save" id="save_mysize" style="display:none">','')
				tbodybody = tbodybody.replace('<a href="#" onclick="save_size(\'6\'); return false;">위 구매 내역의 사이즈를 저장','')
				tbodybody = tbodybody.replace('<a href="#" onclick="save_size(\'23\'); return false;">위 구매 내역의 사이즈를 저장','')
				tbodybody = tbodybody.replace('<td colspan="6">','');tbodybody = tbodybody.replace('하시겠습니까?</a>','')
				tbodybody = tbodybody.replace('<input name="size_info" type="hidden" value=""/>','')
				#print(tbodybody)
				rows = tbodybody.split()
				#print(rows)
				row1 = rows[0:6]
				row1.append(link); row1.append(pantsno)
				print(row1)
				if len(rows)>6:
					row2 = rows[6:12]
					row2.append(link); row2.append(pantsno)
					print(row2)
				if len(rows)>12:
					row3 = rows[12:18]
					row3.append(link); row3.append(pantsno)
					print(row3)
				if len(rows)>18:
					row4 = rows[18:24]
					row4.append(link); row4.append(pantsno)
					print(row4)
				if len(rows)>24:
					row5 = rows[24:30]
					row5.append(link); row5.append(pantsno)
					print(row5)
				if len(rows)>30:
					row6 = rows[30:36]
					row6.append(link); row6.append(pantsno)
					print(row6)
		
		
				#print(link)
				page+=1
				outfile = open('table2.csv','a',encoding='utf-8')
				#outfile = open(str(fixpage)+'~'+str(max_pages-1)+'table2.csv','a',encoding='utf-8')
				write_outfile = csv.writer(outfile)
				#write_outfile.writeheader(headers)
				write_outfile.writerow(row1)
				if len(rows)>6:
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
				table1_row.append(imghtml)
				table1_row.append(link)
				table1_row.append(pantsno)
				table1_row.append(brand)
				print(table1_row)

				outfile2 = open('table1.csv','a',encoding='utf-8')
				#outfile2 = open(str(fixpage)+'~'+str(max_pages-1)+'table1.csv','a',encoding='utf-8')
				write_outfile2 = csv.writer(outfile2)
				write_outfile2.writerow(table1_row)
				outfile2.close(); print("Ok! Done!")
			else:
				print("Column is not matching,, Maybe This is not pants?")
				page+=1
		else:
			print("This page is not about pants and i'm gonna scrap next page")
			page+=1
		
spider(325000)
