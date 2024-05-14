from airtest.core.api import *
from poco.drivers.android.uiautomation import AndroidUiautomationPoco
import logging
# from loguru import logger
import time
import random
logging.getLogger("airtest").setLevel(logging.WARNING) 
import json
import os

poco = AndroidUiautomationPoco(
    use_airtest_input=True, screenshot_each_action=False)
window_width, window_height = poco.get_screen_size() # 初始化poco

PACKAGE_NAME = 'com.xunmeng.pinduoduo'

def scroll_up():
    swipe((window_width * 0.5, window_height * 0.8),
          vector=[0, -0.5], duration=1)

def scrape_index():
    """_summary_
    获取列表
    Returns:
        _type_: _description_
    """
    elements = poco(f"{PACKAGE_NAME}:id/pdd",type="android.widget.ImageView")
    elements.wait_for_appearance(20)
    return elements


def scrape_detail(element):
    try:
        element.click()
        pannel = poco(f"{PACKAGE_NAME}:id/pdd",type="android.support.v7.widget.RecyclerView")
        pannel.wait_for_appearance()
        title=poco(f"{PACKAGE_NAME}:id/tv_title",type="android.view.ViewGroup").attr("desc")
        print(title)
        scrape_sku()
        #  type :  android.view.ViewGroup 
        #  name :  com.xunmeng.pinduoduo:id/tv_title 
        poco("com.android.systemui:id/back",type="android.widget.ImageView").click()
    except Exception as error:
        print(error)
        
def scrape_sku():
    try:
        poco(text="发起拼单").click()
        time.sleep(1)
#          type :  android.widget.ImageView 
# 	  name :  com.android.systemui:id/back 
        poco("com.android.systemui:id/back",type="android.widget.ImageView").click()
    except Exception as error:
        print(error)
def main():
    init_device("Android") 
    stop_app(PACKAGE_NAME) # 停止APP
    time.sleep(2)
    start_app(PACKAGE_NAME) # 开启APP
    poco(text="数位板").click()
    poco(text="搜索").click()
    elements = scrape_index()
    print(f"长度是多少{len(elements)}")
    while True:
        time.sleep(random.randint(1,5)/10)
        for element in elements:
            _, element_y = element.get_position()
            if element_y < 0.2:
                continue
            if element_y > 0.8:
                scroll_up()
            
            scrape_detail(element)

            logging.debug(f"{element}")
        
if __name__ == "__main__":
    main()

















