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
from selenium_log import get_logging
log=get_logging()
driverPath = ChromeDriverManager().install()
class SeleniumChrome:
    def __init__(self) -> None:
        global driverPath # 定义为全局变量
        self.options = webdriver.ChromeOptions() # 实列化option
        self.options.add_argument('--no-sandbox') # 禁用沙箱模式
        self.options.add_experimental_option("excludeSwitches", ['enable-automation', 'enable-logging']) # 设置开发者模式启动，该模式下webdriver属性为正常值
        self.options.add_argument('--disable-blink-features=AutomationControlled') # 屏蔽检测
        self.service = ChromeService(executable_path=driverPath) # 配置谷歌操作驱动路径
    
    # 设置代理
    def set_chrome_web_driver_proxy(self,proxy):
        self.options.add_argument('--proxy-server=' + proxy)
    
    # 初始化浏览器窗口
    def init_chrome_web_driver(self):
        try:
            self.driver = webdriver.Chrome(options=self.options,service=self.service) # 初始化操作对象
            self.wait=WebDriverWait(self.driver,1) # 定义一个wait对象
            shieldJsText=requests.get("https://gitcode.net/mirrors/requireCool/stealth.min.js/-/raw/main/stealth.min.js?inline=false").text
            self.driver.execute_cdp_cmd('Page.addScriptToEvaluateOnNewDocument', {'source': shieldJsText}) # 屏蔽selenim参数
        except Exception as error:
            log.error(f"初始化谷歌浏览器窗口失败,失败原因是{error}")
    
    # 返回窗口对象
    def get_chrome_web_driver(self):
        return self.driver
    
    # 返回等待对象
    def get_chrome_web_driver_wait(self):
        return self.wait
    
if __name__ == "__main__":
    t=SeleniumChrome()
    t.init_chrome_web_driver()
    driver=t.get_chrome_web_driver()
    driver.get("https://www.baidu.com")
    import time
    time.sleep(100)
    
    
        