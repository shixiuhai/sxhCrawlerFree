import subprocess
import time
import random
from selenium.webdriver.common.by import By
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from webdriver_manager.chrome import ChromeDriverManager

# -----------------------------
# 1️⃣ 启动 debug-port 浏览器
# -----------------------------
def start_chrome_debug():
    cmd = [
        "google-chrome",
        "--remote-debugging-port=9222",
        "--user-data-dir=/tmp/selenium-profile",
        "--no-first-run",
        "--no-default-browser-check",
        "--disable-blink-features=AutomationControlled",
        "--no-sandbox"
    ]
    return subprocess.Popen(cmd)

# -----------------------------
# 2️⃣ Selenium 接管
# -----------------------------
def attach_selenium():
    options = Options()
    options.debugger_address = "127.0.0.1:9222"

    # 防检测参数
    options.add_argument("--disable-blink-features=AutomationControlled")
    # options.add_experimental_option("excludeSwitches", ["enable-automation"])
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-extensions")

    # service = Service(ChromeDriverManager().install())
    service = Service("/home/shixiuhai/python/chromedriver-linux64/chromedriver")
    driver = webdriver.Chrome(service=service, options=options)

    # 注入高级防检测 JS
    # driver.execute_cdp_cmd("Page.addScriptToEvaluateOnNewDocument", {
    #     "source": """
    #     // ===== 基础防检测 =====
    #     Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
    #     window.chrome = { runtime: {} };
    #     Object.defineProperty(navigator, 'languages', { get: () => ['zh-CN','zh'] });
    #     Object.defineProperty(navigator, 'plugins', { get: () => [1,2,3] });
    #     Object.defineProperty(navigator, 'userAgent', { get: () => navigator.userAgent.replace('Headless','') });

    #     // ===== Canvas 指纹随机扰动 =====
    #     const originalGetContext = HTMLCanvasElement.prototype.getContext;
    #     HTMLCanvasElement.prototype.getContext = function(type, ...args){
    #         const ctx = originalGetContext.apply(this, [type, ...args]);
    #         if(type==='2d'){
    #             const originalFillText = ctx.fillText;
    #             ctx.fillText = function(text,x,y,...params){
    #                 const noise = Math.random()*0.0002;
    #                 return originalFillText.apply(this, [text, x+noise, y+noise, ...params]);
    #             }
    #         }
    #         return ctx;
    #     };

    #     // ===== WebGL 指纹伪造 =====
    #     const getParameter = WebGLRenderingContext.prototype.getParameter;
    #     WebGLRenderingContext.prototype.getParameter = function(param){
    #         if(param === 37445 || param === 37446){ // VENDOR & RENDERER
    #             const vendors = ["Intel Inc.", "AMD", "NVIDIA"];
    #             return vendors[Math.floor(Math.random()*vendors.length)];
    #         }
    #         return getParameter.call(this, param);
    #     };

    #     // ===== AudioContext 指纹随机扰动 =====
    #     const AudioContext = window.OfflineAudioContext || window.webkitOfflineAudioContext;
    #     if(AudioContext){
    #         const origCreateAnalyser = AudioContext.prototype.createAnalyser;
    #         AudioContext.prototype.createAnalyser = function(){
    #             const analyser = origCreateAnalyser.apply(this, arguments);
    #             // 可进一步加入随机噪声模拟
    #             return analyser;
    #         };
    #     }

    #     """
    # })
    return driver

# -----------------------------
# 3️⃣ 人类行为模拟函数
# -----------------------------
def human_like_scroll(driver, times=5):
    """随机滚动，模拟真实用户上下滑动"""
    for _ in range(times):
        scroll_amount = random.randint(200, 1000)
        driver.execute_script(f"window.scrollBy(0, {scroll_amount});")
        time.sleep(random.uniform(0.5, 1.5))

def human_like_mouse(driver, element):
    """随机移动鼠标到元素上"""
    actions = ActionChains(driver)
    size = element.size
    offset_x = random.randint(1, max(1, size['width']-1))
    offset_y = random.randint(1, max(1, size['height']-1))
    actions.move_to_element_with_offset(element, offset_x, offset_y)
    # 小幅抖动，模拟真实鼠标轨迹
    for _ in range(random.randint(1,3)):
        actions.move_by_offset(random.randint(-3,3), random.randint(-3,3)).pause(random.uniform(0.05,0.2))
    actions.perform()

def human_like_typing(element, text):
    """逐字随机输入，模拟人工打字"""
    for char in text:
        element.send_keys(char)
        time.sleep(random.uniform(0.05, 0.25))

def human_like_click(driver, element):
    """模拟人类点击"""
    human_like_mouse(driver, element)
    element.click()
    time.sleep(random.uniform(0.2, 0.7))

# -----------------------------
# 4️⃣ 主程序示例
# -----------------------------
if __name__ == "__main__":
    chrome_proc = start_chrome_debug()
    time.sleep(3)  # 等待浏览器启动

    driver = attach_selenium()
    driver.get("https://www.baidu.com")
    # 等待页面加载完成
    wait = WebDriverWait(driver, 10)


    # 模拟滚动浏览
    human_like_scroll(driver, times=7)

     # 更精确地定位textarea输入框
    input_box = wait.until(
        EC.element_to_be_clickable((By.CSS_SELECTOR, "#chat-textarea"))
    )
    
    # 3. 点击输入框并输入内容
    human_like_click(driver, input_box)
    human_like_typing(input_box, "你好")
    
    # 4. 定位并点击发送按钮
    send_btn = wait.until(
        EC.element_to_be_clickable((By.CSS_SELECTOR, "#chat-submit-button"))
    )
    human_like_click(driver, send_btn)

    print(driver.title)
    # driver.quit()
