"""_summary_
安装selenium4  selenium-4.38.0 pip install selenium
"""
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support import expected_conditions  
from selenium.webdriver.support.ui import WebDriverWait
from selenium import webdriver
from selenium.common.exceptions import StaleElementReferenceException
import time
# https://www.suning.com/ 抓取价格 商品名 链接
def scroll_to_bottom(max_scroll_attempts=10, scroll_delay=1):
    """
    可靠地滚动到页面底部，处理动态加载内容
    
    Args:
        max_scroll_attempts: 最大滚动尝试次数
        scroll_delay: 每次滚动后的等待时间
    """
    last_height = browser.execute_script("return document.body.scrollHeight")
    scroll_attempts = 0
    
    while scroll_attempts < max_scroll_attempts:
        # 滚动到当前底部
        browser.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        time.sleep(scroll_delay)
        
        # 获取新的滚动高度
        new_height = browser.execute_script("return document.body.scrollHeight")
        
        # 检查是否已经滚动到底部
        if new_height == last_height:
            # 再尝试一次更激进的滚动
            browser.execute_script("window.scrollTo(0, document.body.scrollHeight + 1000);")
            time.sleep(scroll_delay)
            new_height = browser.execute_script("return document.body.scrollHeight")
            
            if new_height == last_height:
                print(f"已滚动到底部，尝试次数: {scroll_attempts + 1}")
                break
        
        last_height = new_height
        scroll_attempts += 1
        print(f"滚动进度: 高度 {new_height}px, 尝试 {scroll_attempts}/{max_scroll_attempts}")
    
    # 最终确认滚动到底部
    browser.execute_script("window.scrollTo(0, document.body.scrollHeight);")

def scroll_to_element(element):
    """将页面滚动到元素位置，触发懒加载"""
    try:
        browser.execute_script("arguments[0].scrollIntoView({behavior: 'smooth', block: 'center'});", element)
        time.sleep(0.5)  # 等待图片加载
        return True
    except:
        return False
def safe_get_element_text(parent_element, by, value, default=''):
    """安全地获取元素文本，处理StaleElementReferenceException异常"""
    try:
        return parent_element.find_element(by, value).text
    except StaleElementReferenceException:
        return default

def safe_get_element_attribute(parent_element, by, value, attribute, default=''):
    """安全地获取元素属性，处理StaleElementReferenceException异常"""
    try:
        element = parent_element.find_element(by, value)
        attr_value = element.get_attribute(attribute)
        # 如果src为空，尝试获取data-src或其他延迟加载属性
        return attr_value 
    except StaleElementReferenceException:
        return default

# 配置一下我们刚刚下载的chromedriver的路径
chromedriver_path = r'C:\Users\walker\Desktop\project2\chromedriver-win64\chromedriver-win64\chromedriver.exe'
chrome_options = Options() # 创建一个Chrome的配置对象
# chrome_options.add_argument('--headless') # 无头模式就是后台执行不打开浏览器窗口
                           # --disable-blink-features=AutomationControlled
# 屏蔽自动化检测
chrome_options.add_argument('--disable-blink-features=AutomationControlled') # 屏蔽自动化检测
chrome_options.add_experimental_option('excludeSwitches',["enable-automation"]) 
chrome_options.add_experimental_option('useAutomationExtension', False)

chrome_options.add_argument('--disable-gpu') # 关闭图形加速
chrome_options.add_argument("--ignore-certificate-errors") # 忽略一些ssl证书错误
chrome_options.add_argument("--disable-popup-blocking") # 禁止弹窗阻止
chrome_options.add_argument("--no-sandbox") # 禁用沙盒模式
# 把我们的chromedirver路径配置到chromeDrive
service = Service(chromedriver_path)

# 创建一个chrome访问对象
browser = webdriver.Chrome(service=service, options=chrome_options) # 创建一个chrome访问对象
wait = WebDriverWait(browser, 15) # 超时时间
browser.execute_script("""Object.defineProperty(navigator, 'webdriver', {get: () => undefined})""") # 设置浏览器环境属性
# 打开一个网页访问
browser.get('https://www.suning.com/')

# 等待web页面加载完成
wait.until(lambda browser: browser.execute_script("return document.readyState") == "complete")
scroll_to_bottom() # 滚动函数

# /html/body/div[11]/div[2]/ul/li[1]
# /html/body/div[11]/div[2]/ul/li[5]
# /html/body/div[11]/div[2]/ul/li[2]
def scroll_to_bottom(max_scroll_attempts=10, scroll_delay=1):
    """
    可靠地滚动到页面底部，处理动态加载内容
    
    Args:
        max_scroll_attempts: 最大滚动尝试次数
        scroll_delay: 每次滚动后的等待时间
    """
    last_height = browser.execute_script("return document.body.scrollHeight")
    scroll_attempts = 0
    
    while scroll_attempts < max_scroll_attempts:
        # 滚动到当前底部
        browser.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        time.sleep(scroll_delay)
        
        # 获取新的滚动高度
        new_height = browser.execute_script("return document.body.scrollHeight")
        
        # 检查是否已经滚动到底部
        if new_height == last_height:
            # 再尝试一次更激进的滚动
            browser.execute_script("window.scrollTo(0, document.body.scrollHeight + 1000);")
            time.sleep(scroll_delay)
            new_height = browser.execute_script("return document.body.scrollHeight")
            
            if new_height == last_height:
                print(f"已滚动到底部，尝试次数: {scroll_attempts + 1}")
                break
        
        last_height = new_height
        scroll_attempts += 1
        print(f"滚动进度: 高度 {new_height}px, 尝试 {scroll_attempts}/{max_scroll_attempts}")
    
    # 最终确认滚动到底部
    browser.execute_script("window.scrollTo(0, document.body.scrollHeight);")

def scroll_to_element(element):
    """将页面滚动到元素位置，触发懒加载"""
    try:
        browser.execute_script("arguments[0].scrollIntoView({behavior: 'smooth', block: 'center'});", element)
        time.sleep(0.5)  # 等待图片加载
        return True
    except:
        return False
def safe_get_element_text(parent_element, by, value, default=''):
    """安全地获取元素文本，处理StaleElementReferenceException异常"""
    try:
        return parent_element.find_element(by, value).text
    except StaleElementReferenceException:
        return default

def safe_get_element_attribute(parent_element, by, value, attribute, default=''):
    """安全地获取元素属性，处理StaleElementReferenceException异常"""
    try:
        element = parent_element.find_element(by, value)
        attr_value = element.get_attribute(attribute)
        # 如果src为空，尝试获取data-src或其他延迟加载属性
        return attr_value 
    except StaleElementReferenceException:
        return default

# 获取商品列表
current_shop_list = browser.find_elements(By.XPATH, '/html/body/div[11]/div[2]/ul/li')

return_list = []
for i in range(len(current_shop_list)):
    # 重新获取列表以防止元素过期
    try:
        current_shop_list = browser.find_elements(By.XPATH, '/html/body/div[11]/div[2]/ul/li')
        if i >= len(current_shop_list):
            break
        
        print(f"正在处理第 {i+1} 个商品...")
        
        # 滚动到当前商品位置触发图片加载
        scroll_to_element(current_shop_list[i])
            
        # 只获取一次href_a元素
        href_a = current_shop_list[i].find_element(By.TAG_NAME, 'a')
        
        # 使用同一个父元素获取所有信息，减少查找次数
        title = safe_get_element_text(href_a, By.CLASS_NAME, "title")
        price = safe_get_element_text(href_a, By.CLASS_NAME, "price-box").replace('¥','')
        detail_url = href_a.get_attribute('href')
        conver_url = safe_get_element_attribute(href_a, By.CLASS_NAME, "lazy-loading", "src")
        cx_icon = safe_get_element_text(href_a, By.CLASS_NAME, "cxIcon")
        
        item = {
            "title": title,
            "price": price,
            "conver_url": conver_url,
            "detail_url": detail_url,
            "cx_icon": cx_icon
        }
        print(item)
        return_list.append(item)
    except StaleElementReferenceException:
        print(f"跳过第{i}个商品，因为元素已过期")
        continue

# 保存到img文件夹里封面url，文件名是商品名_价格
for item in return_list:
    conver_url = item.get("conver_url")
    if(conver_url!=""):
        pass








