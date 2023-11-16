from selenium import webdriver
from selenium.webdriver.common.by import By
import time
import requests
import random
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service as ChromeService

shieldJsText = requests.get("https://gitcode.net/mirrors/requireCool/stealth.min.js/-/raw/main/stealth.min.js?inline=false").text

option = webdriver.ChromeOptions()
# 允许root模式允许google浏览器
option.add_argument('--no-sandbox')
option.add_argument("--incognito") #开启隐身模式
option.add_experimental_option("excludeSwitches", ['enable-automation', 'enable-logging'])
#option.add_argument("--user-data-dir=C:/Users/15256/AppData/Local/Google/Chrome/User Data")  # 指定一个 Chrome 用户配置文件目录
option.add_argument("--profile-directory=Default")
# 关闭开发者模式
option.add_argument('--disable-blink-features=AutomationControlled')
# 屏蔽保存密码提示框
prefs = {'credentials_enable_service': False, 'profile.password_manager_enabled': False}
option.add_experimental_option('prefs', prefs)
# 关闭webrtc 避免找到真实IP地址
preferences = {
    "webrtc.ip_handling_policy": "disable_non_proxied_udp",
    "webrtc.multiple_routes_enabled": False,
    "webrtc.nonproxied_udp_enabled": False
}
option.add_experimental_option("prefs", preferences)
service = ChromeService(executable_path=r'E:\元宇宙\fdgfer.exe') # 配置谷歌操作驱动路径

driver = webdriver.Chrome(options=option,service=service)
driver.execute_cdp_cmd('Page.addScriptToEvaluateOnNewDocument', {'source': shieldJsText})  # 屏蔽selenium参数
script = 'Object.defineProperty(navigator, "webdriver", {get: () => false,});'
driver.execute_script(script)

time.sleep(random.randint(3, 7))
driver.get(url="https://login.tmall.com/")
driver.switch_to.frame("J_loginIframe") #登录框在iframe里，打开页面后，需要切换到iframe

time.sleep(5)
name_input_element = driver.find_element(By.ID,'fm-login-id')
time.sleep(1)
name_input_element.clear()
account = ""
for s in account:
    name_input_element.send_keys(s)
    time.sleep(random.randint(1, 4) * 0.1)

time.sleep(2)
password_input_element = driver.find_element(By.ID,'fm-login-password')
time.sleep(1)
password_input_element.clear()
password = ""
for s in password:
    password_input_element.send_keys(s)
    time.sleep(random.randint(1, 4) * 0.1)

time.sleep(10)

# 点击登陆按钮
button = driver.find_element(By.XPATH, '//*[@id="login-form"]/div[4]/button')
button.click()
time.sleep(15)

driver.refresh()
time.sleep(3)

driver.get("https://detail.tmall.com/item.htm?id=728119840758&amp;ns=1&amp;abbucket=1")
WebDriverWait(driver, 60, 2).until(EC.presence_of_element_located((By.XPATH, '//*[@id="root"]/div/div[2]/div[2]/div[1]/div/div[2]/div[1]/h1')))
driver.implicitly_wait(10)

cookies = {}
for cookieDict in driver.get_cookies():
    cookies[cookieDict["name"]] = cookieDict["value"]

print(cookies)
with open("tmallCookies.json", "a") as f:
    f.write(str(cookies) + '\n')
driver.close()
