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
# driver = webdriver.Chrome(
#     executable_path=r"C:\Users\15256\Documents\Redis-x64-5.0.14.1\chromedriver.exe",
#     chrome_options=option)

driver = webdriver.Chrome(
    options=option)
cookies =[{'name': 'tfstk', 'value': 'd5bMfnbCvG-_i1f0nVL_W6kwLFrd1ATXHt3vHEp4YpJC6nJYftxcH9tVWFCOKZfOAqF6WoTcnpXZkhQcGqAVgtN6H5Zd11TXu8e8ezC11vVze8HN4a2klEy8ezUR11TfUyRxKtqC_J0E-47kpPsWqquV8rtME1oxuq7Hshm1_OltY0PpBqOUMwojchRBtLdRlfUh.', 'domain': '.taobao.com'}, {'name': 'l', 'value': 'fBElX6hPT7nkkGvtBOfaFurza77OSIRYYuPzaNbMi9fP_55B5LcGW1_M1Y86C3GVF67HR38PiVPBBeYBqQAonxv9w8VMULkmndLHR35..', 'domain': '.taobao.com'}, {'name': 'uc1', 'value': 'existShop=false&cookie21=U%2BGCWk%2F7p4mBoUyS4E9C&cookie15=V32FPkk%2Fw0dUvg%3D%3D&cookie14=Uoe9bf25cmVoxw%3D%3D&cookie16=WqG3DMC9UpAPBHGz5QBErFxlCA%3D%3D&pas=0', 'domain': '.taobao.com'}, {'name': '_nk_', 'value': 'tb80111606', 'domain': '.taobao.com'}, {'name': '_cc_', 'value': 'V32FPkk%2Fhw%3D%3D', 'domain': '.taobao.com'}, {'name': 'existShop', 'value': 'MTY5MDAwNjE2OQ%3D%3D', 'domain': '.taobao.com'}, {'name': 'isg', 'value': 'BCwse5kEZETw4ncpB9eT2fI8_Qpe5dCPWfz9eYZtOVd6kc2brPHEHo0zt1kpAgjn', 'domain': '.taobao.com'}, {'name': 'skt', 'value': '87bfd5d6920bb331', 'domain': '.taobao.com'}, {'name': 'cookie1', 'value': 'U%2BGWz3AsFiX%2BQb4KVw17j51DAUP9jxfiN9Dd%2FomAUJ8%3D', 'domain': '.taobao.com'}, {'name': '_ga', 'value': 'GA1.2.208439145.1689592688', 'domain': '.taobao.com'}, {'name': 'dnk', 'value': 'tb80111606', 'domain': '.taobao.com'}, {'name': 'cancelledSubSites', 'value': 'empty', 'domain': '.taobao.com'}, {'name': 'csg', 'value': '64006a67', 'domain': '.taobao.com'}, {'name': 'uc3', 'value': 'lg2=U%2BGCWk%2F75gdr5Q%3D%3D&vt3=F8dCsGGp77F2o5L8jF0%3D&nk2=F5RNZTse5XZpwA%3D%3D&id2=UNQyQxMqUdx1nQ%3D%3D', 'domain': '.taobao.com'}, {'name': 'unb', 'value': '3451510054', 'domain': '.taobao.com'}, {'name': '_ga_YFVFB9JLVB', 'value': 'GS1.1.1689592688.1.1.1689592747.0.0.0', 'domain': '.taobao.com'}, {'name': '_tb_token_', 'value': 'e8eb98ef6e3be', 'domain': '.taobao.com'}, {'name': '_samesite_flag_', 'value': 'true', 'domain': '.taobao.com'}, {'name': 'cookie17', 'value': 'UNQyQxMqUdx1nQ%3D%3D', 'domain': '.taobao.com'}, {'name': 'xlly_s', 'value': '1', 'domain': '.taobao.com'}, {'name': 'sg', 'value': '641', 'domain': '.taobao.com'}, {'name': 'lgc', 'value': 'tb80111606', 'domain': '.taobao.com'}, {'name': 'mt', 'value': 'ci=-1_0', 'domain': '.taobao.com'}, {'name': '_l_g_', 'value': 'Ug%3D%3D', 'domain': '.taobao.com'}, {'name': '_uetvid', 'value': '9da4f4d0249311eea044195e64d33b67', 'domain': '.taobao.com'}, {'name': 'tracknick', 'value': 'tb80111606', 'domain': '.taobao.com'}, {'name': 'thw', 'value': 'cn', 'domain': '.taobao.com'}, {'name': 'cna', 'value': 'su2QHDAXHR4BASQJiijj0y+z', 'domain': '.taobao.com'}, {'name': '_ga_JBTWV3NHSY', 'value': 'GS1.1.1689592698.1.1.1689592747.11.0.0', 'domain': '.taobao.com'}, {'name': 't', 'value': '4e400d43fbdf02c4e5bb6812c6d18547', 'domain': '.taobao.com'}, {'name': '_m_h5_tk_enc', 'value': 'c35624f3137e0bbee7898455c3c4950d', 'domain': '.taobao.com'}, {'name': '_m_h5_tk', 'value': '51e5b8f7bf80a6db4d02dc26eac8e846_1690010482339', 'domain': '.taobao.com'}, {'name': 'sgcookie', 'value': 'E100Kh2ecfBhEfYAZCBNf24clCvW0bVFNlQeWYa0%2FwMHFlebBtGZxb265UH3tOXai5vi9fOPbD%2Fnm2z4Zr5akc13bVdkM0dNqX7KrGrPjFvpxuKRfRwMLpTHzwYupZSQk27u', 'domain': '.taobao.com'}, {'name': 'uc4', 'value': 'id4=0%40UgP5GPE5h%2FvopPV87sjzI3bYxkOy&nk4=0%40FY4GsvRHfRNKE%2BdeKAjFMdIApg%2BY', 'domain': '.taobao.com'}, {'name': 'cookie2', 'value': '1991423172f6454bb50ae5e35f19b4db', 'domain': '.taobao.com'}]

b={}
    

driver.get("https://www.taobao.com")
for cookie in cookies:
    driver.add_cookie(cookie_dict=cookie)
time.sleep(3)
driver.refresh()
time.sleep(20)
# for cookieDict in driver.get_cookies():
#     b[cookieDict["name"]]=cookieDict["value"]
# print(b)
# # driver.get("https://detail.1688.com/offer/683012336121.html")
# time.sleep(100)
