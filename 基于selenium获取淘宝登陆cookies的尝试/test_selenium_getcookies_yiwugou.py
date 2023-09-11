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
driver = webdriver.Chrome(
    executable_path=r"C:\Users\15256\Documents\Redis-x64-5.0.14.1\chromedriver.exe",
    chrome_options=option)

driver.get("https://user.yiwugo.com/login?done=https%3A%2F%2Fwork.yiwugo.com%2Findex.htm%3Fspm%3Dd3d3Lnlpd3Vnby5jb20v")
time.sleep(30)
driver.refresh()
time.sleep(1)
# print(driver.get_cookies())
with open("yiwugou_cookies.json","w",encoding="utf-8") as f:
    f.write(str(driver.get_cookies()))
