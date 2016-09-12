#-*- coding: utf-8 -*-
from bs4 import BeautifulSoup 
from urllib.request import urlopen 

res = urlopen('http://www.artiq.co.kr/product/detail.html?product_no=81496&cate_no=113&display_group=1')
#print res.read()

soup = BeautifulSoup(res,"html.parser")
#print soup.prettify()
all_font=soup.find_all('font')
#right_table=soup.find('table', class_='fabric_info')
#right_table
print(all_font)
