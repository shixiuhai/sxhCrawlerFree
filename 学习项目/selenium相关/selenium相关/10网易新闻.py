import random
import time

from selenium.webdriver import Chrome
from selenium.webdriver.common.by import By


def window_top_to_bottom(driver, stop_length=None, step_length=500):
    '''
    :param driver:
    :param stop_length: 滑动的距离
    :param step_length: 每次滑动的步长
    :return:
    '''
    top = 0  # 判断能不能滑动的标志
    while True:
        # 判断当前 stop_length 为真还是为假 也就是是否还有滑动距离
        if stop_length:
            if stop_length - step_length < 0:
                driver.execute_script("window.scrollBy(0,{})".format(stop_length))
                break
            # 每次减去滚动的距离
            stop_length -= step_length
        # 开始滚动
        driver.execute_script("window.scrollBy(0,{})".format(step_length))
        time.sleep(random.random() + 0.5)
        # 获取一下当前浏览器滚动条的高度
        check_height = driver.execute_script(
            'return document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;')
        if check_height == top:
            break
        top = check_height
    print('不在滑动')


driver = Chrome()
driver.get('https://news.163.com/')
# 写一个程序   处理滚动条向下滑动

for i in range(1, 5):
    try:
        # 向下滚动操作
        window_top_to_bottom(driver, 20000, 1000)
        # 走到这里 证明该点击了
        more = driver.find_element(By.XPATH, '//*[@id="index2016_wrap"]/div[2]/div[2]/div[3]/div[2]/div[5]/div/a[3]')
        # 坑  因为有些点击按钮上面会有遮罩，我们看不到，点击会报错   需要js进行处理
        # more.click()
        # 使用js进行点击
        driver.execute_script('arguments[0].click();', more)
        time.sleep(random.random() + 0.5)
        print(f'第{i}次点击')
    except:
        print('已经加载更多了')
        break
# print(driver.page_source)
time.sleep(100)