#-*- coding: utf-8 -*-
import urllib.request
import requests
from bs4 import BeautifulSoup
import csv
def spider(max_pages) :
    page = 400000
    while page < max_pages :
        url = 'http://store.musinsa.com/app/product/detail/' + str(page) +'/0'
        source_code = requests.get(url)
        plain_text = source_code.text
        soup = BeautifulSoup(plain_text, 'html.parser')
        for link in soup.find_all('div',{'class':"product_left"}):
            table_body = link.find('tbody')
            editSizestr = str(table_body)
        for productName in soup.find_all('span',{'class':"txt_tit_product"}):
            editProductstr = str(productName)
            editSizestr = editSizestr.replace('<', '')
            editSizestr = editSizestr.replace('cm', '')
            editSizestr = editSizestr.replace('>', '')
            editSizestr = editSizestr.replace('tr', '')
            editSizestr = editSizestr.replace('br', '')
            editSizestr = editSizestr.replace('/p', '')
            editSizestr = editSizestr.replace('td width', '')
            editSizestr = editSizestr.replace('p align="center"', '')
            editSizestr = editSizestr.replace('td height', '')
            editSizestr = editSizestr.replace('td/', '')
            editSizestr = editSizestr.replace('=', '')
            editSizestr = editSizestr.replace('/', '')
            editSizestr = editSizestr.replace('"20"', '')
            editSizestr = editSizestr.replace('"70"', '')
            editSizestr = editSizestr.replace('tbody', '')
            editSizestr = editSizestr.replace('\n\n', ' ')
            editSizestr = editSizestr.replace('  ', '')
            editSizestr = editSizestr.replace('   ', ' ')
            editSizestr = editSizestr.replace(',,','')
            editSizestr = editSizestr.replace(',,', ',')

            editProductstr = editProductstr.replace('<span class="txt_tit_product">','')
            editProductstr = editProductstr.replace('	','')
            editProductstr = editProductstr.replace('</span>','')
            editProductstr = editProductstr.replace('\n','')


            print(editProductstr)
            data  = editProductstr + editSizestr
            name = editProductstr





            print(editSizestr)
            print(url)


        page += 1
        out = open(editProductstr.strip()+'.csv','w', encoding='utf8' )
        print(data, file=out)
        out.close()





spider(400010)
