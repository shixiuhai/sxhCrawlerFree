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
option.add_argument("--user-data-dir=C:/Users/15256/AppData/Local/Google/Chrome/User Data")  # 指定一个 Chrome 用户配置文件目录
option.add_argument("--profile-directory=Default"); 
# 打开无痕浏览模式
# option.add_argument("--incognito")
# 关闭开发者模式
option.add_argument('--disable-blink-features=AutomationControlled')


for i in range(1):
    driver = webdriver.Chrome(
    options=option)

    time.sleep(random.randint(3,7))
    driver.get(url="https://login.taobao.com/member/login.jhtml")

    # time.sleep(5)
    # name_input_element = driver.find_element(By.XPATH,'//*[@id="fm-login-id"]')
    # time.sleep(1)
    # name_input_element.clear()
    # name_input_element.send_keys("15256728901")

    # time.sleep(2)
    # password_input_element = driver.find_element(By.XPATH,'//*[@id="fm-login-password"]')
    # time.sleep(1)
    # password_input_element.clear()
    # password_input_element.send_keys("sxh.200008")

    # time.sleep(1)

    # 点击登陆按钮
    # //*[@id="login-form"]/div[4]/button
    button=driver.find_element(By.XPATH,'//*[@id="login-form"]/div[4]/button')
    button.click()
    time.sleep(5)

    cookies={}
    for cookieDict in driver.get_cookies():
        cookies[cookieDict["name"]]=cookieDict["value"]
        
    print(cookies)
    with open("loginCookies.json","a") as f:
        f.write(str(cookies)+'\n')
    driver.close()
