from selenium import webdriver
from lxml import etree
from selenium.webdriver.common.by import By
import time
import re
import os
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
from urllib import parse
from selenium.webdriver.chrome.service import Service as ChromeService
import random
import logging
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.wait import WebDriverWait
from selenium import webdriver
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.support import expected_conditions as EC
import requests

driverPath = ChromeDriverManager().install()
print(driverPath)
# from setting import CHROME_CONFIG
import sys

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - [%(levelname)s] - %(message)s',
    handlers=[
        logging.StreamHandler(sys.stdout),
        logging.FileHandler('cookies_pool.log')
    ]
)
jsCode = requests.get(
    "https://gitcode.net/mirrors/requireCool/stealth.min.js/-/raw/main/stealth.min.js?inline=false").text


def add_js_to_browser(driver):  # 防止网站反爬
    driver.execute_cdp_cmd('Page.addScriptToEvaluateOnNewDocument', {'source': jsCode})  # 屏蔽selenim参数


options = webdriver.ChromeOptions()  # 实列化option
options.add_argument('--no-sandbox')  # 允许root模式允许google浏览器
options.add_experimental_option("excludeSwitches",
                                ['enable-automation', 'enable-logging'])  # 设置开发者模式启动，该模式下webdriver属性为正常值
options.add_argument('--disable-blink-features=AutomationControlled')  # 屏蔽检测
service = ChromeService(executable_path=driverPath)  # 配置谷歌操作驱动路径
driver = webdriver.Chrome(options=options, service=service)  # 初始化操作对象

add_js_to_browser(driver)  # 每次进入网页前刷入一下屏蔽js
driver.get(
    url="https://accounts.pixiv.net/login?return_to=https%3A%2F%2Fwww.pixiv.net%2F&lang=zh&source=pc&view_type=page")
options = webdriver.ChromeOptions()  # 实列化option
options.add_argument('--no-sandbox')  # 允许root模式允许google浏览器
options.add_experimental_option("excludeSwitches",
                                ['enable-automation', 'enable-logging'])  # 设置开发者模式启动，该模式下webdriver属性为正常值
options.add_argument('--disable-blink-features=AutomationControlled')  # 屏蔽检测
service = ChromeService(executable_path=driverPath)  # 配置谷歌操作驱动路径
driver = webdriver.Chrome(options=options, service=service)  # 初始化操作对象

add_js_to_browser(driver)  # 每次进入网页前刷入一下屏蔽js




def log_in():  # 登录函数
    driver.get(
        url="https://accounts.pixiv.net/login?return_to=https%3A%2F%2Fwww.pixiv.net%2F&lang=zh&source=pc&view_type"
            "=page")  # 登录网址
    time.sleep(2)
    account = "ckeealry198542ibo@hotmail.com"
    password = "Huuakiscd"
    account_element = driver.find_element(By.CSS_SELECTOR,
                                          '#app-mount-point > div > div > div > div.sc-2oz7me-0.fJsfdC > '
                                          'div.sc-fg9pwe-2.gZSHsw > div > div > div > form > '
                                          'fieldset.sc-bn9ph6-0.kJkgq.sc-2o1uwj-2.dNokDr > label > input')  # 选择账号输入框
    account_element.send_keys(account)  # 输入账号
    password_element = driver.find_element(By.CSS_SELECTOR,
                                           '#app-mount-point > div > div > div > div.sc-2oz7me-0.fJsfdC > '
                                           'div.sc-fg9pwe-2.gZSHsw > div > div > div > form > '
                                           'fieldset.sc-bn9ph6-0.kJkgq.sc-2o1uwj-3.iA-DYnj > label > input')  # 选择密码输入框
    password_element.send_keys(password)  # 输入密码
    button_element = driver.find_element(By.XPATH,
                                         '//*[@id="app-mount-point"]/div/div/div[3]/div[1]/div['
                                         '2]/div/div/div/form/button')
    button_element.click()  # 点击登陆按钮
    time.sleep(2)
    ct = driver.find_element(By.XPATH, '//*[@id="app-mount-point"]/div/div/div[2]/div/div[2]/a[2]')  # 定位按钮
    ct.click()  # 点击跳过
    print('----登录成功----')


def topic():  # 话题模式
    print('----话题模式----')
    global Url
    while 1:
        global Url
        Url = 'https://www.pixiv.net/tags/'
        try:
            a = input('请输入话题:')
            print(f'----请选择类型----\n插画[1]\n漫画[2]\n小说(不可用)[3]')
            b = int(input('请输入选项:'))
            print(f'----请选择排序方式----\n按热门排序[1]\n按新排序[2]\n按旧排序[3]')
            c = int(input('请输入选项:'))
            print(f'----请选择类型----\n全部[1]\n全年龄[2]\nR-18[3]')
            d = int(input('请输入选项:'))
            Url = Url + a
            if b == 1:
                Url = Url + '/illustrations'  # 加入插画选项
            elif b == 2:
                Url = Url + '/manga'  # 加入漫画选项
            elif b == 3:
                Url = Url + '/novels'  # 加入小说选项
            else:
                print('!!!!输入存在异常，请重新输入!!!!')
                continue
            if c == 1:
                Url = Url + '?order=popular_d'  # 加入热门选项
            elif c == 2:
                Url = Url + ''  # 加入按新选项
                if d == 2:
                    Url = Url + '?mode=safe'  # 加入全年龄选项
                    break
                if d == 3:
                    Url = Url + '?mode=r18'  # 加入r18# 选项
                    break
                else:
                    print('!!!!输入存在异常，请重新输入!!!!')
                    continue
            elif c == 3:
                Url = Url + '?order=date'  # 加入按旧选项
            else:
                print('!!!!输入存在异常，请重新输入!!!!')
                continue
            if d == 1:
                Url = Url + ''  # 加入全部选项
                break
            elif d == 2:
                Url = Url + '&mode=safe'  # 加入全年龄选项
                break
            elif d == 3:
                Url = Url + '&mode=r18'  # 加入r18# 选项
                break
            else:
                print('!!!!输入存在异常，请重新输入!!!!')
                continue
        except:
            print('!!!!输入存在异常，请重新输入!!!!')
            continue


def painter():  # 画师模式
    print('----画师模式----')
    global allUrl
    global Url
    Url = 'https://www.pixiv.net/users/'
    uid = str(input('请输入画师uid:'))
    Url = Url + uid + '/illustrations'


def our_url():  # 列出所有页数
    global allUrl
    if '?' in Url:
        a = Url + '&p='
    else:
        a = Url + '?p='
    for i in range(1, 9999):
        global allUrl
        b = a + str(i)
        allUrl.append(b)


def details_page1(oneUrl: str):  # 列出话题模式页面所有作品的详情页url
    driver.get(url=oneUrl)
    time.sleep(1)
    pageUrl = list()
    for link in driver.find_elements(By.XPATH,
                                     '//*[@id="root"]/div[2]/div/div[3]/div/div/div[6]/section/div[2]/div['
                                     '1]/ul//li/div/div[1]/div//a[@href]'):
        pageUrl.append(str(link.get_attribute('href')))
    return pageUrl


def details_page2(oneUrl: str):  # 列出画师模式页面所有作品的详情页url
    driver.get(url=oneUrl)
    time.sleep(1)
    pageUrl = list()
    for link in driver.find_elements(By.XPATH,#
                                     '//*[@id="root"]/div[2]/div/div[3]/div/div/div[2]/div[3]/div/div/section/div[3]/div/ul//li/div/div[1]/div//a[@href]'):
        pageUrl.append(str(link.get_attribute('href')))
    return pageUrl


def picture(page: str):  # 列出详情页内所有图片url
    driver.get(url=page)
    time.sleep(1)
    picUrl = list()
    try:
        allPic = driver.find_element(By.CSS_SELECTOR,
                                     '#root > div.charcoal-token > div > div:nth-child(3) > div > div > div.sc-1nr368f-3.dkdRNk > main > section > div.sc-171jvz-0.gcrJTU > div > div.sc-rsntqo-0.fPeueM > div > div.sc-ye57th-1.lbzRfC > button > div.sc-emr523-2.wEKy')
        allPic.click()
        for i in range(7):
            driver.execute_script(f'document.documentElement.scrollTop={(i + 1) * 1000}')
            time.sleep(0.6)

    except:
        print("作品为单图")
    for link in driver.find_elements(By.XPATH,#
                                         '//*[@id="root"]/div[2]/div/div[3]/div/div/div[1]/main/section/div['
                                         '1]/div/figure/div[1]//a[@href]'):
        a = str(link.get_attribute('href'))
        if '.' in a:
            picUrl.append(a)
        else:
            continue
    return picUrl


def download(picUrl: str, name: str):  # 下载函数
    headers = {
        'authority': 'i.pximg.net',
        # 'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,
        # */*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-control': 'max-age=0',
        # 'if-modified-since': 'Sat, 19 Aug 2023 06:09:23 GMT',
        'referer': 'https://www.pixiv.net/',
        'sec-ch-ua': '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
    }
    r = requests.get(url=picUrl, headers=headers, stream=True)
    if r.status_code == 200:
        open(f'D:\\pixiv\\{name}{picUrl[-4:]}', 'wb').write(r.content)  # 将内容写入图片{picUrl[-4:]}
        print("下载成功")
    else:
        print("下载异常")


log_in()
while 1:
    Url = ''
    allUrl = list()
    ggbond = 0
    print("----请选择模式----\n话题模式[1]\n画师模式[2]")
    n = str(input("请选择:"))
    if n == '1':
        topic()
        our_url()
        ggbond_2 = int(input("请输入下载数"))
        for z in allUrl:
            aaa = details_page1(oneUrl=z)
            if len(aaa) == 0:
                print("图片数量不足，已结束下载")
                break
            for i_1 in aaa:
                time.sleep(1)
                bbb = picture(page=i_1)
                if len(bbb) == 0:
                    print("此类型不可下载")
                    continue
                for i_2 in bbb:
                    ggbond = ggbond + 1
                    print(f"正在下载第{ggbond}张")
                    try:
                        download(picUrl=i_2, name=ggbond)
                    except:
                        print("下载失败")
                        ggbond = ggbond - 1
                        continue
                    if ggbond == ggbond_2:
                        print("下载完成")
                        break
                if ggbond == ggbond_2:
                    break
            if ggbond == ggbond_2:
                break
    elif n == '2':
        painter()
        our_url()
        ggbond_2 = int(input("请输入下载数"))
        for z in allUrl:
            aaa = details_page2(oneUrl=z)
            if len(aaa) == 0:
                print("图片数量不足，已结束下载")
                break
            for i_1 in aaa:
                time.sleep(1)
                bbb = picture(page=i_1)
                if len(bbb) == 0:
                    print("此类型不可下载")
                    continue
                for i_2 in bbb:
                    ggbond = ggbond + 1
                    print(f"正在下载第{ggbond}张")
                    try:
                        download(picUrl=i_2, name=ggbond)
                    except:
                        print("下载失败")
                        ggbond = ggbond - 1
                        continue
                    if ggbond == ggbond_2:
                        print("下载完成")
                        break
                if ggbond == ggbond_2:
                    break
            if ggbond == ggbond_2:
                break
    else:
        continue




