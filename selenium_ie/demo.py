from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
# %systemroot%\system32\f12\IEChooser.exe  打开ie调试
# 创建 IE WebDriver
driver = webdriver.Ie(executable_path=r"D:\idm_download\IEDriverServer_x64_4.14.0\IEDriverServer.exe")

# 打开百度首页
driver.get("https://www.baidu.com")

# 找到搜索框并输入搜索词
search_box = driver.find_element(By.ID, 'kw')
search_box.send_keys('你好')

# 点击搜索按钮
search_box.send_keys(Keys.RETURN)

# 关闭浏览器
driver.quit()
