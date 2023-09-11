from selenium import webdriver
# 基于requests的方案
# https://blog.csdn.net/weixin_42216028/article/details/107701421
from urllib.parse import urlparse
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.action_chains import ActionChains   
import logging
import time
# set log config
logging.basicConfig(level=logging.INFO,filename="./kuajing_detail.log",
                    format='%(asctime)s-%(levelname)s-%(message)s')
# 定义一共解析链接的类，实现任意网站的链接解析，支持登陆渲染
class ParseLink:
    def __init__(   
                self,
                url:str,
                cookies:list,
                executablePath:str,
                sourceUrl:str,
                timeOut:int=10,
                EnableLinuxRoot=False,
                Enableincogniton=False,
                EnableHeadless=False,
                EnableCookies=True
                ) -> None:
        # 创建一共option对象
        self.option = webdriver.ChromeOptions()
        
        # 设置爬取页面超市时间
        self.timeOut=timeOut
        
        # 指定的webdriver路径
        self.executablePath=executablePath
        
        # linux下允许root运行
        if EnableLinuxRoot:
            self.option.add_argument('--no-sandbox')
        # 设置无头模式
        if EnableHeadless:
            self.option.add_argument('--headless')
        # 开启无痕模式
        if Enableincogniton:
            self.option.add_argument("--incognito")
       
        # 设置关闭开发者模式防止被检测
        self.option.add_experimental_option("excludeSwitches", ['enable-automation', 'enable-logging'])
        self.option.add_argument('--disable-blink-features=AutomationControlled')
        self.browser=webdriver.Chrome(executable_path=self.executablePath,options=self.option)
        self.browser.execute_cdp_cmd("Page.addScriptToEvaluateOnNewDocument", {
            "source": """Object.defineProperty(navigator, 'webdriver', {get: () => undefined})""",
        })
        # 定义一个wait对象
        self.wait=WebDriverWait(self.browser,self.timeOut)
        # cookies
        self.cookies=cookies
        # 传入url
        self.url=url
        # print(urlparse(self.url).scheme+"//"+urlparse(self.url).netloc)
        # 手动设置cookies在主域名刷新，解决淘宝直接在detail页面设置cookie需要滑块认证解决
        if sourceUrl=="":
            self.browser.get(self.url)
        else:
            self.browser.get(sourceUrl)
        # 允许使用cookies
        if EnableCookies:
            # 添加cookies
            for cookie in self.cookies:
                self.browser.add_cookie(cookie_dict=cookie)
            # 刷新页面
            self.scrape_refresh()
            
    # 刷新页面
    def scrape_refresh(self):
        self.browser.refresh()
    # 定义一个解析页面的方法
    # condition 页面加载成功判断条件
    # locator 是定位器，通过配置查询条件和参数来获取一共或者多个节点
    # 每次爬取页面至少又一共标签需要验证一次
    def scrape_page(self,condition,locator)->bool:
        logging.info("scraping %s"%self.url)
        try:
            self.browser.get(self.url)
            self.wait.until(condition(locator))
            return True
        except TimeoutException:
            logging.error("error occurred while scraping %s",self.url,exc_info=True)
            return False
    
    def scrape_items_by_css_select(self,selectCss):
        return self.browser.find_elements(By.CSS_SELECTOR,selectCss)
    
    def scrape_item_by_css_select(self,selectCss):
        return self.browser.find_element(By.CSS_SELECTOR,selectCss)
    
    def scrape_items_by_css_name(self,selectCss):
        return self.browser.find_elements(By.CLASS_NAME,selectCss)
    
    def scrape_item_by_css_name(self,selectCss):
        return self.browser.find_element(By.CLASS_NAME,selectCss)
    
    def scrape_items_by_path(self,selectXpath):
        return self.browser.find_elements(By.XPATH,selectXpath)
    
    def scrape_item_by_path(self,selectXpath):
        return self.browser.find_element(By.XPATH,selectXpath)
    
    # 传出浏览器窗口对象，方便外部实现操作
    def get_browser(self):
        return self.browser
    
    def close_browser(self):
        self.browser.close()
    
    def huadong(self):
        spider = self.browser.find_element(By.XPATH, '//*[@id="nc_1_n1z"]')
        self.move_to_gap(spider,self.get_track(300))
    
    # 定义一共滑块随机移动步长函数
    # https://cloud.tencent.com/developer/article/1095744 鼠标点击事件方法
    # https://blog.csdn.net/qq_39377418/article/details/106954643 
    # https://www.jb51.net/article/261758.htm
    def get_track(self,distance):
        """ 模拟轨迹 假装是人在操作 """

        """ 1.设定长度比例 """
        pos = [0, 1, 2, 3, 3, 2, 1, 4, 2, 1]  # 滑动轨迹之间比例设定
        pos = [0, 5]  # 滑动轨迹之间比例设定

        """ 2. 正弦函数 """
        # pos = [random.randrange(0, 10) for i in range(10)]
        # pos.sort()
        # pos = [item / 10 * math.pi for item in pos]
        # pos = [math.sin(x) for x in pos]

        pos_sum = sum(pos)
        route = [int(int(distance) * (item / pos_sum)) for item in pos]  # 计算出移动路径

        route = route + [int(distance) - sum(route), ]
        # print('distance', distance)
        # print('sum route', sum(route))
        # print('route', route)
        return route


    
    # 极验滑块滑动
    def move_to_gap(self, slider, tracks):
        """
        拖动滑块到缺口处
        :param slider: 滑块
        :param tracks: 轨迹 
        :return:
        """
        # to_element: The WebElement to move to.

        # Move the mouse by an offset of the specified element. Offsets are relative to the in-view center point of the element.
        ActionChains(self.browser).click_and_hold(slider).perform()
        for x in tracks:
            ActionChains(self.browser).move_to_element_with_offset()
            ActionChains(self.browser).move_by_offset(xoffset=x, yoffset=0).perform()
        time.sleep(0.1)
        ActionChains(self.browser).release().perform()


if __name__ == '__main__':
    
    
    print((urlparse("https://detail.1688.com/offer/699297425649.html").scheme))
    print("开始")
    count=1
    for i in range(10000):
        try:
            count=count+1
            obj=ParseLink(url="https://detail.1688.com/offer/699297425649.html",
                        cookies=[{'domain': '.1688.com', 'expiry': 1694873969, 'httpOnly': False, 'name': 'tfstk', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': 'cefhBgbIi9JQUaNRfMOQiV1KQvJFZSweA_5N_PiAGfv2s15NiIMZ30n4SHEbYY1..'}, {'domain': '.1688.com', 'expiry': 1679926773, 'httpOnly': False, 'name': 'is_identity', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': 'buyer'}, {'domain': '.1688.com', 'expiry': 1679926773, 'httpOnly': False, 'name': 'aliwwLastRefresh', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': '1679321973471'}, {'domain': '.1688.com', 'expiry': 1694873969, 'httpOnly': False, 'name': 'l', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': 'fBE3ujjPNNMuDc6bKOfZPurza779SIRAguPzaNbMi9fP9H_B5yoCW1MToUA6CnGVFsi2R3o-P8F6BeYBqffjeFRtuQIXdpMmnmOk-Wf..'}, {'domain': '.1688.com', 'httpOnly': False, 'name': '__mwb_logon_id__', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': 'tb80111606'}, {'domain': '.1688.com', 'expiry': 1679393966, 'httpOnly': False, 'name': 'last_mid', 'path': '/', 'sameSite': 'None', 'secure': True, 'value': 'b2b-345151005463a30'}, {'domain': '.1688.com', 'httpOnly': False, 'name': '__cn_logon_id__', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': 'tb80111606'}, {'domain': '.1688.com', 'expiry': 1679329177, 'httpOnly': False, 'name': '_show_user_unbind_div_', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': 'b2b-345151005463a30_false'}, {'domain': '.1688.com', 'httpOnly': False, 'name': 'unb', 'path': '/', 'sameSite': 'None', 'secure': True, 'value': '3451510054'}, {'domain': '.1688.com', 'expiry': 1679926740, 'httpOnly': False, 'name': '_m_h5_tk', 'path': '/', 'sameSite': 'None', 'secure': True, 'value': '05a223edc1c87ddb5042e2c17ecb30dc_1679332020508'}, {'domain': '.1688.com', 'expiry': 1713881966, 'httpOnly': False, 'name': 'ali_apache_track', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': 'c_mid=b2b-345151005463a30|c_lid=tb80111606|c_ms=1'}, {'domain': '.1688.com', 'httpOnly': True, 'name': 'csg', 'path': '/', 'sameSite': 'None', 'secure': True, 'value': '71599057'}, {'domain': '.1688.com', 'httpOnly': True, 'name': 'sgcookie', 'path': '/', 'sameSite': 'None', 'secure': True, 'value': 'E100xUqn1kbQTwa92pq2qk8%2BkXlFv2mCjeEk2IGGn7T4ffkun16n6jnYr25eGpL0hxYJF3JxiJL%2FXqfeN8%2F%2Fak7LrEhaYPw4WyAopxX%2FjINUcrs%3D'}, {'domain': '.1688.com', 'httpOnly': True, 'name': 'cookie17', 'path': '/', 'sameSite': 'None', 'secure': True, 'value': 'UNQyQxMqUdx1nQ%3D%3D'}, {'domain': '.1688.com', 'expiry': 1679329177, 'httpOnly': False, 'name': '_show_force_unbind_div_', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': 'b2b-345151005463a30_false'}, {'domain': '.1688.com', 'httpOnly': True, 'name': 'cookie1', 'path': '/', 'sameSite': 'None', 'secure': True, 'value': 'U%2BGWz3AsFiX%2BQb4KVw17j51DAUP9jxfiN9Dd%2FomAUJ8%3D'}, {'domain': '.1688.com', 'httpOnly': True, 'name': 'uc4', 'path': '/', 'sameSite': 'None', 'secure': True, 'value': 'nk4=0%40FY4GsvRHfRNKE%2BdeKAb%2BB7c9OCFj&id4=0%40UgP5GPE5h%2FvopPV87sbnzF8qm8ZD'}, {'domain': '.1688.com', 'expiry': 1679926772, 'httpOnly': False, 'name': 'firstRefresh', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': '1679321972484'}, {'domain': '.1688.com', 'httpOnly': False, 'name': 'mwb', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': 'ng'}, {'domain': '.1688.com', 'expiry': 1713881983, 'httpOnly': False, 'name': 'alicnweb', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': 'touch_tb_at%3D1679321950680%7Clastlogonid%3Dtb80111606'}, {'domain': '.1688.com', 'httpOnly': False, 'name': '_csrf_token', 'path': '/', 'sameSite': 'None', 'secure': True, 'value': '1679321966667'}, {'domain': '.1688.com', 'expiry': 1679329178, 'httpOnly': False, 'name': '__rn_alert__', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': 'false'}, {'domain': '.1688.com', 'expiry': 1679329177, 'httpOnly': False, 'name': '_show_sys_unbind_div_', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': 'b2b-345151005463a30_false'}, {'domain': '.1688.com', 'expiry': 1679329174, 'httpOnly': False, 'name': '_is_show_loginId_change_block_', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': 'b2b-345151005463a30_false'}, {'domain': '.1688.com', 'expiry': 1713881943, 'httpOnly': False, 'name': 'cna', 'path': '/', 'sameSite': 'None', 'secure': True, 'value': 'VlmfHHEGT04CASe8CIWdK7cd'}, {'domain': '.1688.com', 'httpOnly': False, 'name': '_tb_token_', 'path': '/', 'sameSite': 'None', 'secure': True, 'value': 'ffb7596b3816e'}, {'domain': '.1688.com', 'httpOnly': False, 'name': '__cn_logon__', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': 'true'}, {'domain': '.1688.com', 'expiry': 1710857966, 'httpOnly': False, 'name': 'lid', 'path': '/', 'sameSite': 'None', 'secure': True, 'value': 'tb80111606'}, {'domain': '.1688.com', 'httpOnly': False, 'name': 'sg', 'path': '/', 'sameSite': 'None', 'secure': True, 'value': '641'}, {'domain': '.1688.com', 'expiry': 1679408342, 'httpOnly': False, 'name': 'xlly_s', 'path': '/', 'sameSite': 'None', 'secure': True, 'value': '1'}, {'domain': '.1688.com', 'expiry': 1694873972, 'httpOnly': False, 'name': 'isg', 'path': '/', 'sameSite': 'None', 'secure': True, 'value': 'BIqKdG5R2t1bFVZxL2XWLeoN23Asew7VWe7BXxTDNl1oxyqB_Ate5dC10zMbN4Zt'}, {'domain': '.1688.com', 'httpOnly': False, 'name': 'ali_apache_tracktmp', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': 'c_w_signed=Y'}, {'domain': '.1688.com', 'expiry': 1679926740, 'httpOnly': False, 'name': '_m_h5_tk_enc', 'path': '/', 'sameSite': 'None', 'secure': True, 'value': '3bf670c1e6240d9b6784bc494baff747'}, {'domain': '.1688.com', 'httpOnly': False, 'name': 't', 'path': '/', 'sameSite': 'None', 'secure': True, 'value': '5030ddc26b152ff4b5b7798614f9f3ff'}, {'domain': '.1688.com', 'expiry': 1679926772, 'httpOnly': False, 'name': 'lastRefresh', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': '1679321972484'}, {'domain': '.1688.com', 'httpOnly': False, 'name': '_nk_', 'path': '/', 'sameSite': 'None', 'secure': True, 'value': 'tb80111606'}, {'domain': '.1688.com', 'httpOnly': True, 'name': 'cookie2', 'path': '/', 'sameSite': 'None', 'secure': True, 'value': '1bb8189afb73e70d741d44ae714785e3'}],
                        executablePath=r"C:\Users\15256\Documents\Redis-x64-5.0.14.1\chromedriver.exe",
                        sourceUrl="https://www.1688.com/")
            # obj.scrape_page(condition=EC.visibility_of_element_located,locator=(By.XPATH,'//*[@id="hd_0_container_0"]/div[1]/div[2]/div/div[1]/div[3]/div/div[2]/a/div'))
            # 等待买家评价加载完成说明所有的信息都加载完成了
            if obj.scrape_page(condition=EC.visibility_of_element_located,locator=(By.XPATH,'//*[@id="nc_1_n1z"]')):
                obj.huadong()
            # print("滑动成功")

            # time.sleep(600)
            if obj.scrape_page(condition=EC.visibility_of_element_located,locator=(By.XPATH,'//*[@id="10811813010580"]/div/div[2]/div[1]/div/div[1]/div[1]/div/div/div/ul/li[2]/div')):
                print("加载成功")
                # 公司经营年数
                print(obj.scrape_item_by_path('//*[@id="hd_0_container_0"]/div[1]/div[2]/div/div[1]/div[3]/div/div[2]/a/div').text)
                # 公司名称
                print(obj.scrape_item_by_path('//*[@id="hd_0_container_0"]/div[1]/div[2]/div/div[1]/div[3]/div/div[1]/span').text)
                # 买家评价数
                print(obj.scrape_item_by_path('//*[@id="10811813010580"]/div/div[2]/div[1]/div/div[1]/div[1]/div/div/div/ul/li[2]/div').text)
                # 公司90天成交量                //*[@id="10811813010580"]/div/div[2]/div[1]/div/div[1]/div[1]/div/div/div/ul/li[2]/div
                print(obj.scrape_item_by_path('//*[@id="1081181308831"]/div/div/div[2]/div[1]/div/div[3]/div[1]/div[3]/span[2]').text)
            # 关闭窗口
            obj.close_browser()
            print("爬取的页面是%s"%count)
        except Exception as error:
            print(error)
            print(count)
            continue
    # select 是 css节点
    # obj.scrape_page(condition=EC.visibility_of_element_located,locator=(By.CSS_SELECTOR,'#hd_0_container_0 > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(3) > div > div:nth-child(2) > a > div'))
    # print(obj.scrape_item_by_css_select('#hd_0_container_0 > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(3) > div > div:nth-child(2) > a > div').text)
    #hd_0_container_0 > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(3) > div > div:nth-child(2) > a > div
   

    
    
        
        
        