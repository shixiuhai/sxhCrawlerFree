from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.ie.options import Options
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import sys
# 系统window8.1 selenium版本3.14
# 设置 IE 的选项
options = Options()
# 启用一个干净的会话，避免使用缓存和历史记录
options.ensure_clean_session = True
# 忽略保护模式设置，确保 IE 各区的保护模式设置一致
options.ignore_protected_mode_settings = True
# 设置浏览器缩放级别为100%
options.initial_browser_url = "about:blank"  # 设置初始浏览器URL为空白页，以便后续设置缩放级别

# 创建 IE 浏览器的实例
driver = webdriver.Ie(options=options, executable_path="D:\\idm_download\\IEDriverServer_x64_4.14.0\\IEDriverServer.exe")

# 以管理员身份运行脚本
import os
if not os.geteuid() == 0:
    os.execvp("sudo", ["sudo"] + ["python"] + sys.argv)

try:
    # 打开百度主页
    driver.get('https://www.baidu.com')

    # 设置浏览器缩放级别为100%
    driver.execute_script("document.body.style.zoom='100%'")

    # 显式等待，直到搜索框加载完成
    wait = WebDriverWait(driver, 10)
    search_box = wait.until(EC.presence_of_element_located((By.ID, 'kw')))

    # 输入搜索关键词并提交
    search_box.send_keys('Selenium')
    search_box.send_keys(Keys.RETURN)

    # 等待搜索结果加载
    wait.until(EC.presence_of_element_located((By.XPATH, '//h3/a')))

    # 查找并打印搜索结果的标题
    results = driver.find_elements(By.XPATH, '//h3/a')
    for result in results[:5]:  # 仅打印前5个结果
        print(result.text)

finally:
    # 关闭浏览器
    driver.quit()
