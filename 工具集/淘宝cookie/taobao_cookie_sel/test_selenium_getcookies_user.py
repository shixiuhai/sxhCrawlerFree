from selenium import webdriver
from lxml import etree
from selenium.webdriver.common.by import By
import time
import re
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
from urllib import parse
import random
import logging

'''format=%(asctime)s具体时间 %(filename)s文件名 %(lenvelname)s日志等级 %(message)s具体信息
   datemt=%a星期 %d日期 %b月份 %Y年份 %H:%M:%S时间'''
logging.basicConfig(level=logging.DEBUG, format='%(asctime)s %(filename)s %(levelname)s %(message)s',
                    datefmt='%a %d %b %Y %H:%M:%S', filename='1688spider.log', filemode='w')

option = webdriver.ChromeOptions()
# 无头模式
# option.add_argument('--headless')
# 允许root模式允许google浏览器
option.add_argument('--no-sandbox')
# option.add_argument('--headless')
option.add_experimental_option("excludeSwitches", ['enable-automation', 'enable-logging'])
# 打开无痕浏览模式
# option.add_argument("--incognito")
# 关闭开发者模式
option.add_argument('--disable-blink-features=AutomationControlled')
option.add_argument("--user-data-dir=C:/Users/15256/AppData/Local/Google/Chrome/User Data")  # 指定一个 Chrome 用户配置文件目录
option.add_argument("--profile-directory=Default"); 
# option.add_argument("--remote-debugging-port=5000") 
driver = webdriver.Chrome(
    options=option)

driver.get("https://www.taobao.com")
time.sleep(2)
driver.refresh()
time.sleep(6)
# print(driver.get_cookies())
with open("taobao_cookies.json","w",encoding="utf-8") as f:
    f.write(str(driver.get_cookies()))
# _host:
# detail033053238075.center.na610
# Ali-Swift-Global-Savetime:
# 1689770078
# At_alis:
# 1_2207514861828
# At_autype:
# 5_256406032
# At_cat:
# item_50001865
# At_isb:
# 0
# At_itemid:
# 692819561564
# At_nick:
# %E5%AD%9D%E5%A4%95%E9%98%B3%E8%80%81%E4%BA%BA%E9%9E%8B%E5%BA%97
# Content-Encoding:
# gzip
# Content-Language:
# zh-CN
# Content-Type:
# text/html;charset=gb18030
# Date:
# Wed, 19 Jul 2023 12:34:38 GMT
# Eagleeye-Traceid:
# 700f671f16897700780775985e
# Eagleid:
# 700f671f16897700780775985e
# Server:
# Tengine
# Strict-Transport-Security:
# max-age=31536000
# Timing-Allow-Origin:
# *, *
# Ufe-Result:
# A6
# Vary:
# Accept-Encoding
# Vary:
# Accept-Encoding
# Via:
# aliswift.033080058222.na610[42,200-0,M], aliswift.033061161254.na610[200], cache5.cn2942[144,167,200-0,M], cache11.cn2942[170,0]
# X-Cache:
# MISS TCP_MISS dirn:-2:-2
# X-Category:
# /cat/50008163
# X-Swift-Cachetime:
# 0
# X-Swift-Savetime:
# Wed, 19 Jul 2023 12:34:38 GMT


