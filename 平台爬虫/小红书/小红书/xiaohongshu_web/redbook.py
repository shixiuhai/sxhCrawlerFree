# -*- coding: utf-8 -*-
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import time
from urllib.request import quote, unquote
from selenium.webdriver.common.by import By
import random
import requests
import os
import re
import lxml
import lxml.etree
import uuid
import hashlib
from setting import redisHost, redisPort, redisPassword
import redis
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager
import pymysql
import warnings
import urllib3
from fake_useragent import UserAgent

shieldJsText = requests.get("https://gitcode.net/mirrors/requireCool/stealth.min.js/-/raw/main/stealth.min.js?inline=false").text

#保存图片链接
conn = pymysql.connect(
    host="",
    user="",
    password="",
    database=""
)
cursor = conn.cursor()
#保存店铺id等
conn1 = pymysql.connect(
    host="",
    user="",
    password="",
    database=""
)
cursor1 = conn1.cursor()

class MyRedis():
    def __init__(self, ip, password, port=6379, db=6):  # 构造函数
        try:
            self.r = redis.Redis(host=ip, password=password, port=port, db=db)  # 连接redis固定方法,这里的值必须固定写死
        except Exception as e:
            print('redis连接失败,错误信息%s' % e)

    def str_get(self, k):
        res = self.r.get(k)  # 会从服务器传对应的值过来，性能慢
        if res:
            return res.decode()  # 从redis里面拿到的是bytes类型的数据，需要转换一下

    def str_set(self, k, v, time=None):  # time默认失效时间
        self.r.set(k, v, time)

    def delete(self, k):
        tag = self.r.exists(k)
        # 判断这个key是否存在,相对于get到这个key他只是传回一个存在火灾不存在的信息，
        # 而不用将整个k值传过来（如果k里面存的东西比较多，那么传输很耗时）
        if tag:
            self.r.delete(k)
        else:
            print('这个key不存在')

    def hash_get(self, name, k):  # 哈希类型存储的是多层字典（嵌套字典）
        res = self.r.hget(name, k)
        if res:
            return res.decode()  # 因为get不到值得话也不会报错所以需要判断一下

    def hash_set(self, name, k, v):  # 哈希类型的是多层
        self.r.hset(name, k, v)  # set也不会报错

    def hash_getall(self, name):
        res = self.r.hgetall(name)  # 得到的是字典类型的，里面的k,v都是bytes类型的
        data = {}
        if res:
            for k, v in res.items():  # 循环取出字典里面的k,v，在进行decode
                k = k.decode()
                v = v.decode()
                data[k] = v
        return data

    def hash_del(self, name, k):
        res = self.r.hdel(name, k)
        if res:
            print('删除成功')
            return 1
        else:
            print('删除失败,该key不存在')
            return 0

    @property  # 属性方法，
    # 使用的时候和变量一个用法就好比实例，A=MyRedis(), A.clean_redis使用，
    # 如果不加这个@property,使用时A=MyRedis(), A.clean_redis()   后面需要加这个函数的括号
    def clean_redis(self):
        self.r.flushdb()  # 清空 redis
        print('清空redis成功!')
        return 0

class redbookImg:
    def __init__(self, host=redisHost, port=redisPort, password=redisPassword):
        self.redisClient = MyRedis(host, password, port, db=3)
        self.option = webdriver.ChromeOptions()
        # 允许root模式允许google浏览器
        self.option.add_argument('--no-sandbox')
        self.option.add_argument("--incognito") #开启隐身模式
        self.option.add_experimental_option("excludeSwitches", ['enable-automation', 'enable-logging'])
        #option.add_argument("--user-data-dir=C:/Users/15256/AppData/Local/Google/Chrome/User Data")  # 指定一个 Chrome 用户配置文件目录
        self.option.add_argument("--profile-directory=Default")
        # 关闭开发者模式
        self.option.add_argument('--disable-blink-features=AutomationControlled')
        # 屏蔽保存密码提示框
        prefs = {'credentials_enable_service': False, 'profile.password_manager_enabled': False}
        self.option.add_experimental_option('prefs', prefs)
        # 关闭webrtc 避免找到真实IP地址
        preferences = {
            "webrtc.ip_handling_policy": "disable_non_proxied_udp",
            "webrtc.multiple_routes_enabled": False,
            "webrtc.nonproxied_udp_enabled": False
        }
        self.option.add_experimental_option("prefs", preferences)
        self.service = ChromeService(executable_path=r'C:\Users\aaa\.wdm\drivers\chromedriver\chromedriver.exe') # 配置谷歌操作驱动路径

        self.driver = webdriver.Chrome(options=self.option,service=self.service)
        self.driver.execute_cdp_cmd('Page.addScriptToEvaluateOnNewDocument', {'source': shieldJsText})  # 屏蔽selenium参数
        script = 'Object.defineProperty(navigator, "webdriver", {get: () => false,});'
        self.driver.execute_script(script)

    # 关闭浏览器
    def close_driver(self):
        self.driver.close()

    # 基于url的md5实现url去重
    def is_url_exist(self, url: str):
        urlMd5Str = hashlib.md5(url.encode()).hexdigest()
        if self.redisClient.str_get(urlMd5Str):
            return True
        self.redisClient.str_set(urlMd5Str, 1)
        return False

    def dict_cookies_to_browser(self, cookies: dict) -> list:
        cookiesBrowserList = []
        for key in cookies:
            cookiesBrowserList.append({
                "domain": ".xiaohongshu.com",
                "name": key,
                "value": cookies[key]
            })

        return cookiesBrowserList

    # 定义一个xpath的捕获异常
    def xpathExists(self, xpath):
        try:
            self.driver.find_element(By.XPATH, xpath)
            return True
        except:
            return False

    # 定义一个css_select的捕获异常
    def cssSelectExists(self, css):
        try:
            self.driver.find_element(By.CSS_SELECTOR, css)
            return True
        except:
            return False

    # 页面滚动到底部
    def scroll(self):
        for i in range(5):
            self.driver.execute_script(f'document.documentElement.scrollTop={(i + 1) * 1000}')
            time.sleep(1)

    # 刷入cookies到driver
    def init_cookies_to_driver(self, cookies: list):
        self.driver.get('https://www.xiaohongshu.com/explore')
        time.sleep(10) # 等待10s，这里有一个弹窗，需要关闭弹窗或者弹窗时间结束后才会跳转登录框
        for item in cookies:
            self.driver.add_cookie(item)
        self.driver.refresh()
        self.driver.implicitly_wait(2)
        time.sleep(3)

    #通过渲染分析得到店铺链接
    def get_target_link(self,keyword: str):
        url = f"https://www.xiaohongshu.com/search_result?keyword={keyword}"
        search_url = quote(url, safe=':/?&=')
        self.driver.get(search_url)
        time.sleep(3)
        #切换到用户
        self.driver.find_element(By.XPATH, '//*[@id="search-type"]/div[1]/div/div[4]').click()
        time.sleep(3)
        #小红书id
        user_id = self.driver.find_element(By.XPATH,'//*[@id="global"]/div[2]/div[2]/div/div[3]/div[1]/div/a/div/div[2]/span').text.replace("小红书号：", "")
        elements = self.driver.find_elements(By.XPATH,'//*[@id="global"]/div[2]/div[2]/div/div[3]/div[1]/div/a/div/div[2]/div[2]/span')
        #店铺所有笔记
        if len(elements) > 2:
            item_num = self.driver.find_element(By.XPATH,'//*[@id="global"]/div[2]/div[2]/div/div[3]/div[1]/div/a/div/div[2]/div[2]/span[3]').text.replace("笔记・", "")
        else:
            item_num = self.driver.find_element(By.XPATH,'//*[@id="global"]/div[2]/div[2]/div/div[3]/div[1]/div/a/div/div[2]/div[2]/span[2]').text.replace("笔记・", "")
        time.sleep(3)
        search_body = self.driver.execute_script("return document.documentElement.outerHTML")
        time.sleep(random.randint(3, 5))
        pattern = r'href="/user/profile/(.*?)"'
        shop_id = re.findall(pattern, search_body)
        #店铺链接
        target_link = f'https://www.xiaohongshu.com/user/profile/{shop_id[2]}'

        return user_id,item_num,target_link

    # 通过不断的向下滚动，获取新的item，直至item数量为0
    def page_items(self, link: str, num: int) -> list:
        self.driver.get(link)
        time.sleep(3)

        item_link = [] #创建一个存放商品连接的列表
        for i in range(num//10):
            #获取每次向下滑动后的html
            shop_body = self.driver.execute_script("return document.documentElement.outerHTML")
            time.sleep(random.randint(3, 5))

            pattern = r'href="/explore/(.*?)"'
            item_id = re.findall(pattern, shop_body)
            for id in item_id:
                link = "https://www.xiaohongshu.com/explore/" + id
                item_link.append(link)

            yield item_link
            self.scroll() #网页滚动需要放到最后，渲染的数据里面只有当前页面的14个商品

        return []

    # 解析每个商品里面的图片
    def get_item_html(self, items_list: list) -> str:
        img_url = [] #所有提取出来的图片链接存放列表
        for item_link in items_list:
            requestUrl = item_link
            self.driver.get(requestUrl)
            time.sleep(random.randint(3,5))
            item_body = self.driver.execute_script("return document.documentElement.outerHTML").replace("\n", "").replace(" ", "")
            if "/stream" in item_body: #判断文章内容是视频还是图文
                item_body = []
            urls = re.findall(r'background-image: url\(.*?\)', item_body)
            for url in urls:
                img_url.append(url.replace("background-image: url(&quot;", "").replace("&quot;)", ""))

            yield img_url, item_body, requestUrl

        return "当前商品信息成功返回"

    # 解析店铺名称和商品名称
    def make_dirPath(self, htmlText: str) -> str:
        # 解析商品标题
        title = "未知"
        titleList = lxml.etree.HTML(htmlText).xpath("//title/text()")
        if len(titleList) > 0:
            title = str(titleList[0]).replace(" ", "")
        title_erList = ["|", "】", "【", "/", "\\", ":", "*", "?", '"', ">", "<", "'"]  # Windows文件夹命名规则不包含的字符
        for i in title_erList:
            title = title.replace(i, "")

        return title

if __name__ == "__main__":
    # 这里使用list，dict拿到的cookies信息不全
    cookies_dict=[]

    key_word = "森女部落"

    # 创建一个通过店铺链接爬取的图片
    searchItemImg = redbookImg()
    searchItemImg.init_cookies_to_driver(cookies=cookies_dict)  # 输入到cookies到driver

    # 生成佚代器
    elements = searchItemImg.get_target_link(keyword=key_word)
    for user_id,item_num,target_link in elements:
        # 防止程序中断重启之后 表单提交遇到唯一索引报错
        try:
            sql1 = "insert into crawled_shops (`shop_name`, `shop_id`, `plant`) values ('%s', '%s', '%s')" % (key_word, user_id, "xiaohongshu")
            cursor1.execute(sql1)
            conn1.commit()
            conn1.close()
        except Exception as error:
            conn1.rollback()
            conn1.close()
            print('数据库已经有该条数据记录！')

        # 获取商品链接
        items_links = searchItemImg.page_items(link=target_link,num=int(item_num))

        # 从生成器对象中遍历列表
        for links in items_links:
            if links == []:
                print("爬取完成")
                break
            else:
                # 对原列表进行备份，遍历时遍历备份的列表
                new_links = items_links[:]
                # 判断是否需要进行去重
                for link in new_links:
                    if searchItemImg.is_url_exist(link) == True:
                        items_links.remove(link)
                        print("该商品url已经爬取过,对url进行跳过")

            # 获取item页面的内容
            result = searchItemImg.get_item_html(items_list=items_links)
            for img_list,item_body,requestUrl in result:
                if item_body == []:
                    continue
                # 获取商品标题
                item_title = searchItemImg.make_dirPath(item_body)
                # 没有爬取到内容清除redis里信息
                if img_list == []:
                    time.sleep(3)  # 没有提取到图片，跳过
                    searchItemImg.redisClient.delete(hashlib.md5(requestUrl.encode()).hexdigest())  # 没有提取到图片删除redis中这个已爬取的记录
                    print(f"跳过商品详情页url是{requestUrl}")
                    break
                else:
                    # 提交图片链接到数据库
                    for img in img_list:
                        sql = "insert into all_imgs_copy3 (`shop_name`, `item_name`, `img_link`) values ('%s', '%s', '%s')" % (key_word + '--小红书', item_title, img)
                        cursor.execute(sql)
                        conn.commit()
                    print(f"关键词{key_word}共计{len(img_list)}张关于{item_title}商品的图片已全部保存！")
                    print(f'------------提取item详情页{requestUrl}完成------------')
                    time.sleep(random.randint(15, 25))
        conn.close()

    searchItemImg.close_driver()
