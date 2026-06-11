# sudo apt update
# sudo apt install -y fonts-wqy-zenhei fonts-wqy-microhei xfonts-wqy
# sudo apt install -y language-pack-zh-hans
# sudo locale-gen zh_CN.UTF-8


from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
# google-chrome-stable --user-data-dir=/home/shixiuhai/python/user_data --no-sandbox

# 创建Chrome参数
chrome_options = Options()
chrome_options.add_argument("--start-maximized")  # 启动时最大化
chrome_options.add_argument("--no-sandbox")

chrome_options.add_argument(f"--user-data-dir=/home/shixiuhai/python/user_data")
# chrome_options.add_argument("--headless")  # 无头模式，可选

# 使用 webdriver_manager 自动下载匹配的 chromedriver
# service = Service(ChromeDriverManager().install())
service = Service("/home/shixiuhai/python/chromedriver-linux64/chromedriver")


# 启动浏览器
driver = webdriver.Chrome(service=service, options=chrome_options)

# 打开百度
driver.get("https://www.baidu.com") 

print(driver.title)

# 等待一会再退出（可选）
input("按回车退出浏览器...")
driver.quit()
