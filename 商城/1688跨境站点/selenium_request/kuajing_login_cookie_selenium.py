from selenium import webdriver
from lxml import etree
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
import time
import re
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.keys import Keys
from urllib import parse
import random
from selenium.common.exceptions import TimeoutException
import logging
'''format=%(asctime)s具体时间 %(filename)s文件名 %(lenvelname)s日志等级 %(message)s具体信息
   datemt=%a星期 %d日期 %b月份 %Y年份 %H:%M:%S时间'''
logging.basicConfig(level=logging.DEBUG, format='%(asctime)s %(filename)s %(levelname)s %(message)s',
                    datefmt='%a %d %b %Y %H:%M:%S', filename='1688spider.log', filemode='w')

class LGC:
    def __init__(self,
                executablePath:str,
                accountList:list="") -> None:
        self.accountList=accountList
        self.executablePath=executablePath
        self.option = webdriver.ChromeOptions()
        self.fistUrl='https://www.taobao.com'
        self.loginUrl = 'https://login.taobao.com'
        # 设置关闭开发者模式防止被检测
        self.option.add_experimental_option("excludeSwitches", ['enable-automation', 'enable-logging'])
        self.option.add_argument('--disable-blink-features=AutomationControlled')
        self.browser=webdriver.Chrome(executable_path=self.executablePath,options=self.option)
        self.browser.execute_cdp_cmd("Page.addScriptToEvaluateOnNewDocument", {
            "source": """Object.defineProperty(navigator, 'webdriver', {get: () => undefined})""",
        })
        # 定义一个wait对象
        self.wait=WebDriverWait(self.browser,20)
        self.browser.get(self.fistUrl)
    
    def login_account(self,accountItem:dict="")->None:
        # https://python3webspider.cuiqingcai.com/8.4-wei-bo-gong-ge-yan-zheng-ma-shi-bie
        self.browser.get(self.fistUrl) 
        # 隐式等待
        self.browser.implicitly_wait(10)
        self.browser.maximize_window()
        self.browser.find_element(By.XPATH,'//*[@id="J_SiteNavLogin"]/div[1]/div[1]/a[1]').click()
        # 填写用户名
        if self.detection_element(condition=EC.visibility_of_element_located,locator=(By.XPATH,'//*[@id="fm-login-id"]')):
            userName=self.browser.find_element(By.XPATH,'//*[@id="fm-login-id"]')
            userName.send_keys("15256728901")
            time.sleep(2)
           
        # 填写密码
        if self.detection_element(condition=EC.visibility_of_element_located,locator=(By.XPATH,'//*[@id="fm-login-password"]')):
            passWord=self.browser.find_element(By.XPATH,'//*[@id="fm-login-password"]')
            passWord.send_keys("sxh.200008")
            time.sleep(3)
        
       
        
        # 执行登陆操作
        if self.detection_element(condition=EC.visibility_of_element_located,locator=(By.CSS_SELECTOR,'#nc_1_n1z')):
            submit=self.browser.find_element(By.XPATH,'//*[@id="login-form"]/div[4]/button')
            submit.click()
            time.sleep(4)
            
            
        # 滑块
        if self.detection_element(condition=EC.visibility_of_element_located,locator=(By.XPATH, '//*[@id="nc_1_n1t"]')):
            slider=self.browser.find_element(By.XPATH,'//*[@id="nc_1_n1z"]')
            self.move_to_gap(slider,self.get_track(300))
            time.sleep(2)
        
        
            
        
        # # 滑块
        # if self.detection_element(condition=EC.visibility_of_element_located,locator=(By.CSS_SELECTOR, '#nc_1_n1z')):
        #     slider=self.browser.find_element(By.CSS_SELECTOR,'#nc_1_n1z')
        #     self.move_to_gap(slider,self.get_track(300))
        #     time.sleep(2)
        
        
        # # 执行登陆
        # if self.detection_element(condition=EC.visibility_of_element_located,locator=(By.XPATH,'//*[@id="login-form"]/div[4]/button')):
        #     submit=self.browser.find_element(By.XPATH,'//*[@id="login-form"]/div[4]/button')
        #     submit.click()
        
        # # 滑块
        # if self.detection_element(condition=EC.visibility_of_element_located,locator=(By.CSS_SELECTOR, '#nc_1_n1z')):
        #     slider=self.browser.find_element(By.CSS_SELECTOR,'#nc_1_n1z')
        #     self.move_to_gap(slider,self.get_track(300))
        #     time.sleep(2)
            
        # if self.detection_element(condition=EC.visibility_of_element_located,locator=(By.CSS_SELECTOR, '#nc_1_n1z')):
        #     slider=self.browser.find_element(By.CSS_SELECTOR,'#nc_1_n1z')
        #     self.move_to_gap(slider,self.get_track(300))
        #     time.sleep(2)
        
        # # # 执行登陆操作
        # if self.detection_element(condition=EC.visibility_of_element_located,locator=(By.XPATH,'//*[@id="login-form"]/div[4]/button')):
        #     submit=self.browser.find_element(By.XPATH,'//*[@id="login-form"]/div[4]/button')
        #     submit.click()
        #     time.sleep(2)
            
        # # 滑块
        # if self.detection_element(condition=EC.visibility_of_element_located,locator=(By.CSS_SELECTOR, '#nc_1_n1z')):
        #     slider=self.browser.find_element(By.CSS_SELECTOR,'#nc_1_n1z')
        #     self.move_to_gap(slider,self.get_track(300))
        #     time.sleep(2)
        
        print("结束")
        time.sleep(100)
            
    # 检测页面标签是否存在  
    def detection_element(self,condition,locator)->bool:
        logging.info("detection element ")
        try:
            self.wait.until(condition(locator))
            return True
        except TimeoutException:
            logging.error("error find element",exc_info=True)
            return False
    def get_account_cookies(self):
        pass
    
    # 生成滑动距离列表
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
            time.sleep(1)
            ActionChains(self.browser).move_by_offset(xoffset=x, yoffset=0).perform()
        time.sleep(0.1)
        ActionChains(self.browser).release().perform()
    
    
if __name__ == "__main__":
    obj=LGC(executablePath=r"C:\Users\15256\Documents\Redis-x64-5.0.14.1\chromedriver.exe")
    obj.login_account()