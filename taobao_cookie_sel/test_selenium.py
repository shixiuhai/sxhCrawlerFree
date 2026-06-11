from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import time
import random

# 设置Chrome选项
options = Options()
options.add_argument("--disable-blink-features=AutomationControlled")
options.add_argument("--disable-infobars")
options.add_argument("--disable-notifications")
options.add_argument("--disable-extensions")
options.add_argument("--disable-dev-shm-usage")
options.add_argument("--disable-browser-side-navigation")
options.add_argument("--disable-gpu")
options.add_argument("--disable-features=VizDisplayCompositor")
options.add_argument("--disable-features=NetworkService")

# 随机生成User-Agent
def get_random_user_agent():
    user_agents = [
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36",
        # 添加更多的User-Agent
    ]
    return random.choice(user_agents)

# 设置随机的操作延迟
def random_delay(min_delay, max_delay):
    delay = random.uniform(min_delay, max_delay)
    time.sleep(delay)

# 实例化WebDriver
driver = webdriver.Chrome(options=options)

# 设置随机的User-Agent
driver.execute_cdp_cmd('Network.setUserAgentOverride', {'userAgent': get_random_user_agent()})

# 示例代码，模拟在百度搜索Python
driver.get("https://www.baidu.com")
random_delay(2, 4)
driver.get("https://www.taobao.com")
random_delay(3,6)
driver.get("https://detail.tmall.com/item.htm?ali_refid=a3_430582_1006:1680920483:N:emtiAWsF8+zhhxaiwzc0Aw==:18f4bd2559580b24b352d434075246f6&ali_trackid=162_18f4bd2559580b24b352d434075246f6&id=713839284794&spm=a21n57.1.0.0")
random_delay(3,6)
driver.get("https://www.tmall.com")
# search_box = drive
# r.find_element_by_css_selector("#kw")
# search_box.send_keys("Python")
# random_delay(1, 2)
# search_button = driver.find_element_by_css_selector("#su")
# search_button.click()

# 等待页面加载完成
time.sleep(5)

# 关闭浏览器
driver.quit()