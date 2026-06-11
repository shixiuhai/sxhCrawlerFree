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
option.add_experimental_option(
    "excludeSwitches", ['enable-automation', 'enable-logging'])
# 打开无痕浏览模式
# option.add_argument("--incognito")
# 关闭开发者模式
option.add_argument('--disable-blink-features=AutomationControlled')
driver = webdriver.Chrome(
    executable_path=r"C:\Users\15256\Documents\Redis-x64-5.0.14.1\chromedriver.exe",
    chrome_options=option)
cookies = [{'domain': '.yiwugo.com', 'httpOnly': True, 'name': 'JSESSIONID', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': '78AEFCB06FDB9845053D0FEF90276DA7'}, {'domain': '.yiwugo.com', 'httpOnly': False, 'name': 'yiwgugouloginid', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': '15256728901'}, {'domain': '.yiwugo.com', 'httpOnly': False, 'name': 'SERVERID', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': 'dad2d0e830de06a229275c9cdfd04373|1682592611|1682592588'}, {'domain': '.yiwugo.com', 'httpOnly': False, 'name': 'c_u_i', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': '35a1e99fd17b6e48ce761d4dfde29e32'}, {'domain': '.yiwugo.com', 'httpOnly': False, 'name': 'yiwugouid', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': '15256728901'}, {'domain': '.yiwugo.com', 'httpOnly': False, 'name': 'ZeiJ_64d8_auth', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': 'df76ZIqPqkJiMfI9THfSWnkz7QwWcP3EmjF7BLL60zSBFgD8Tr6cgEzkf%2FG5HgNeF2IAjykZaJj1P3Q8Sj91LLWY2be96w'}, {'domain': '.yiwugo.com', 'httpOnly': False, 'name': 'nick', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': '%E4%BA%A6%E7%9F%A5'}, {'domain': '.yiwugo.com', 'httpOnly': False, 'name': 'ZeiJ_64d8_saltkey', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': 'GE1DpMZ2'}, {'domain': '.yiwugo.com', 'httpOnly': True, 'name': 'yiwugouuauth', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': 'df76DQDuvo/sdzfYGhzlqGpAcubx8Cr9rmTWlWI8r0sM+4KDNOpNRROMsDS6pbz1e9qMbPBnYNQ6CNOsctqZmtf3P0bh4w'}, {'domain': '.yiwugo.com', 'httpOnly': True, 'name': 'u_c_c_a', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': '9557DfKWLEBl2RJURK1uYxJtgNTkBne71M9JV742F9UHzBhR7SsHdpAVD0XGEt+mfYRq3JKeP4NCtGDAiQ'}]

driver.get("https://www.yiwugo.com/")
for cookie in cookies:
    driver.add_cookie(cookie_dict=cookie)
time.sleep(3)
driver.refresh()
time.sleep(100)
