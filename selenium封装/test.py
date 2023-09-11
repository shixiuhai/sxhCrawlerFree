from selenium import webdriver
from lxml import etree
from selenium.webdriver.common.by import By
import time
import re
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
driverPath = ChromeDriverManager().install()
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
"""
防止被检测js https://gitcode.net/mirrors/requireCool/stealth.min.js?utm_source=csdn_github_accelerator
user_accounts_data 要设置管理员权限,不只是能读权限
突破selenium淘宝 https://blog.51cto.com/csnd/5983926
"""
class BaseLogin:
    def __init__(self) -> None:
        global driverPath
        self.options = webdriver.ChromeOptions() # 实列化option
        self.options.add_argument('--no-sandbox') # 允许root模式允许google浏览器
        # self.options.add_argument('--incognito') # 开启无痕模式
        self.options.add_experimental_option("excludeSwitches", ['enable-automation', 'enable-logging']) # 设置开发者模式启动，该模式下webdriver属性为正常值
        # self.options.add_argument('--disable-web-security') # 关闭浏览器安全认证
        self.options.add_argument('--disable-blink-features=AutomationControlled') # 屏蔽检测
        # self.options.add_argument("--remote-debugging-port=9222")
        # self.options.add_experimental_option("remoteDebuggingPort","9222")
        # self.options.add_argument("C:\\Users\\15256\\Desktop\\nowTime\\sxhCrawler\\商城\\淘宝国内商城\\taobao\\taobao_cookies_pool\\taobao_login\\user_accounts_data\\{}".format(userData))  # 指定一个 Chrome 用户配置文件目录
        # self.options.add_argument("--profile-directory=Default")
        # self.options.binary_location=CHROME_CONFIG["chromePath"] # 配置谷歌浏览器路径
        service = ChromeService(executable_path=driverPath) # 配置谷歌操作驱动路径
        
        self.driver = webdriver.Chrome(options=self.options,service=service) # 初始化操作对象
        
        self.wait=WebDriverWait(self.driver,1) # 定义一个wait对象
        with open('stealth.min.js', 'r') as f:
            jsCode = f.read()
        self.driver.execute_cdp_cmd('Page.addScriptToEvaluateOnNewDocument', {'source': jsCode}) # 屏蔽selenim参数
        
    def login(self,username:str,password:str)->dict:
        raise NotImplementedError
            
class TBLogin(BaseLogin):
    def __init__(self) -> None:
        super().__init__()
        
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
    
    # 检测页面标签是否存在  
    def detection_element(self,condition,locator)->bool:
        logging.info("detection element ")
        try:
            self.wait.until(condition(locator))
            return True
        except TimeoutException:
            logging.error("error find element",exc_info=True)
            return False
    
    def login(self,username:str,password:str)->dict:
        print("登陆代码")
        self.driver.get("https://login.taobao.com/member/login.jhtml") # 调用登陆url
        time.sleep(random.randint(3,5)) # 等待3-5秒
        name_input_element = self.driver.find_element(By.XPATH,'//*[@id="fm-login-id"]')
        name_input_element.clear()
        # 延迟输入用户名
        for s in username:
            name_input_element.send_keys(s)
            time.sleep(random.randint(1,4)*0.1)
        # 延迟输入密码
        password_input_element = self.driver.find_element(By.XPATH,'//*[@id="fm-login-password"]')
        password_input_element.clear()
        for s in password:
            password_input_element.send_keys(s)
            time.sleep(random.randint(1,4)*0.1)
            
        # 进行是否要滑动滑块判断
        if self.detection_element(condition=EC.visibility_of_element_located,locator=(By.XPATH, '//*[@id="nc_1_n1z"]')):
            slider=self.driver.find_element(By.XPATH,'//*[@id="nc_1_n1z"]')
            self.move_to_gap(slider,self.get_track(300))
            time.sleep(1)
            
        # 再点击按钮前做个随机延迟
        time.sleep(random.randint(5,15)*0.1)

        # 点击登陆按钮
        # //*[@id="login-form"]/div[4]/button
        button=self.driver.find_element(By.XPATH,'//*[@id="login-form"]/div[4]/button')
        button.click()
        time.sleep(3)
        cookies={}
        for cookieDict in self.driver.get_cookies():
            cookies[cookieDict["name"]]=cookieDict["value"]
        return cookies
    
    def return_driver(self):
        return self.driver
    
if __name__ == "__main__":
    driverList=set()
    tBLogin=TBLogin()
    tBLogin.login('15256728901','sxh.200008')
    driverList.add(tBLogin.return_driver())
    time.sleep(3)
    tBLogin1=TBLogin()
    tBLogin1.login('15256728901','sxh.200008')
    driverList.add(tBLogin1.return_driver())
    
    for item in driverList:
        item.get("https://huodong.taobao.com/wow/a/act/tao/dailyact/4634/wupr?spm=a21bo.jianhua.201867-main.1.5af92a89R09SB8&wh_pid=dailyAct-257518")
        time.sleep(30)
        
    
    




