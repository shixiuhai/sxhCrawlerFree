# https://developer.aliyun.com/article/1167237
# https://blog.csdn.net/weixin_40704848/article/details/134375384
# https://blog.csdn.net/weixin_44388373/article/details/136647829
# https://blog.csdn.net/davice_li/article/details/135713351
# https://blog.csdn.net/up1292/article/details/130145537 详细使用
# https://rpa.bazhuayu.com/helpcenter/docs/mcQFLM 详细使用
# https://blog.csdn.net/weixin_44388373/article/details/136647829 循环重试
# https://www.drissionpage.cn/ChromiumPage/ele_operation/ 官网教程
from DrissionPage import ChromiumPage
from DrissionPage.common import Actions
import time
import ddddocr
import cv2
import os
import numpy as np
import base64
import pyautogui
from PIL import Image
import io
page = ChromiumPage()

# 移动滑块
def dealVerify(move):
    drag_btn = pyautogui.locateOnScreen(r'C:\Users\15256\Desktop\nowTime\python\sxhCrawlerFree\last.png', confidence=0.5, grayscale=True)
    if drag_btn is not None:
 
        pyautogui.moveTo(drag_btn, duration=1)
 
        pyautogui.dragRel(move, 0, duration=1, button='left')
    else:
        print('未识别到图标')

def save_base64_image(base64_data, file_path):
    """
    保存 base64 编码的图像数据为图像文件
    
    :param base64_data: base64 编码的图像数据
    :param file_path: 要保存的图像文件路径
    """
    # 解码 base64 数据
    image_data = base64.b64decode(base64_data.split(",")[1])  # 去除前缀部分 'data:image/png;base64,'

    # 将二进制数据转换为 PIL 图像对象
    image = Image.open(io.BytesIO(image_data))

    # 保存图像文件
    image.save(file_path, "PNG")

    print(f"Image saved as '{file_path}'")

def input_user_information():
    """_summary_
    填写账号信息
    """
    page.wait.load_start()
    page.ele('@id:loginname').clear()
    page.ele('@id:loginname').input('15256728904')  
    time.sleep(1)
    page.ele('@id:nloginpwd').clear()
    page.ele('@id:nloginpwd').input('sxacvdd\n')
    time.sleep(2)
    page.ele('@id:loginsubmit').click()
    time.sleep(0.3)

def generate_distance():
    """
    :param bg_url: 背景图地址
    :param slice_url: 滑块图地址
    :return: distance
    :rtype: Integer
    """
    slide = ddddocr.DdddOcr(det=False, ocr=False, show_ad=False)
    with open("target.png","rb") as f:
        target_bytes = f.read()
    with open("background.png","rb") as f:
        bg_image = f.read()
    result = slide.slide_match(target_bytes, bg_image, simple_target=True)
    return result['target'][0] * 242.4 / 360


def generate_distance_opencv():
    '''
    bg: 背景图片
    tp: 缺口图片
    out:输出图片
    '''
    # 读取背景图片和缺口图片
    bg_img = cv2.imread("background.png")  # 背景图片
    tp_img = cv2.imread("target.png")  # 缺口图片
    bg_edge = cv2.Canny(bg_img, 100, 200)
    cut_edge = cv2.Canny(tp_img, 100, 200)
 
    # 转换图片格式
    bg_pic = cv2.cvtColor(bg_edge, cv2.COLOR_GRAY2RGB)
    cut_pic = cv2.cvtColor(cut_edge, cv2.COLOR_GRAY2RGB)
 
    # 缺口匹配
    # res = cv2.matchTemplate(bg_pic, cut_pic, cv2.TM_CCOEFF_NORMED)
    # min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(res)  # 寻找最优匹配

    # 缺口匹配
    res = cv2.matchTemplate(bg_pic, cut_pic, cv2.TM_CCOEFF_NORMED)
    value = cv2.minMaxLoc(res)[2][0]
    distance = value * 242.4 / 360
    return distance

def get_track(distance):
    """
    根据偏移量获取移动轨迹
    :param distance: 偏移量
    :return: 移动轨迹
    """
    # 移动轨迹
    track = []
    # 当前位移
    current = 0
    # 减速阈值
    mid = distance * 4 / 5
    # 计算间隔
    t = 0.2
    # 初速度
    v = 0

    while current < distance:
        if current < mid:
            # 加速度为正 2
            a = 2
        else:
            # 加速度为负 3
            a = -3
        # 初速度 v0
        v0 = v
        # 当前速度 v = v0 + at
        v = v0 + a * t
        # 移动距离 x = v0t + 1/2 * a * t^2
        move = v0 * t + 1 / 2 * a * t * t
        # 当前位移
        current += move
        # 加入轨迹
        track.append(round(move))
    return track

def compute_move_postion():
    """_summary_
    计算滑块移动距离
    """
    # page.wait.load_start()
    # target_Img = page.ele('@class:JDJRV-smallimg')
    # print(target_Img)    //*[@id="JDJRV-wrap-loginsubmit"]/div/div/div/div[1]/div[2]/div[1]/img
    target_img_btn =  page.ele('xpath:/html/body/div[4]/div/div/div/div[1]/div[2]/div[2]', timeout=2)
    # btn.get_screenshot('target.png')
    back_img_btn = page.ele('xpath:/html/body/div[4]/div/div/div/div[1]/div[2]/div[1]', timeout=2)
    target_img_btn_base64 = target_img_btn.child().attr("src")
    back_img_btn_base64 = back_img_btn.child().attr("src")
    save_base64_image(target_img_btn_base64,"target.png")
    save_base64_image(back_img_btn_base64,"background.png")
    
    distance = generate_distance_opencv() 
    distance1 = generate_distance()
    print(distance,distance1)
    
    # ac.hold("xpath:/html/body/div[4]/div/div/div/div[2]/div[3]")
    # ac.move(distance1-0.16,0)
    # ac.release("xpath:/html/body/div[4]/div/div/div/div[2]/div[3]")
    # submit_btn = page.ele('xpath:/html/body/div[4]/div/div/div/div[2]/div[3]')
    # submit_btn.click()
    # submit_btn.drag(distance1-0.15,duration=1)
    # target_img_btn.click()
    # target_img_btn.drag(offset_x=distance1,duration=0.2)
    # dealVerify(distance1-0.16)
    # btn = page.ele("xpath:/html/body/div[4]/div/div/div/div[2]/div[3]")
    
    
    # total_distance = 7  # 总共需要滑动的段数
    # tracks = get_track(distance1)
    ac = Actions(page)
    ac.hold("xpath:/html/body/div[4]/div/div/div/div[2]/div[3]")
    ac.right(distance1-0.16)
    time.sleep(2)
    ac.release("xpath:/html/body/div[4]/div/div/div/div[2]/div[3]")
    # page.ele("xpath:/html/body/div[4]/div/div/div/div[2]/div[3]").click()
    # ac.hold("xpath:/html/body/div[4]/div/div/div/div[2]/div[3]")
    # btn.drag(distance1,0,1)
    # for i in tracks:
    #     # 模拟滑动操作
    #     ac.move(i,0,0)
    # time.sleep(0.1)
    # ac.release("xpath:/html/body/div[4]/div/div/div/div[2]/div[3]")

page.get('https://passport.jd.com/uc/login?ltype=logout')
input_user_information()
compute_move_postion()
print(page.cookies())
# print()





# 切换到 s 模式
# page.change_mode()  
