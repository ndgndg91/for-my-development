#-*- coding: utf-8 -*-
from bs4 import BeautifulSoup
from urllib.request import urlopen 


link='http://www.superstari.co.kr/shop/shopdetail.html?branduid=131009&xcode=036&mcode=005&scode=&type=X&sort=manual&cur_code=036005&GfDT=bml5W1o%3D'

f=urlopen(link)

soup=BeautifulSoup(f,"html.parser")
all_table=soup.find_all('table',class_='fabric_info')
print(all_table)