from DrissionPage import ChromiumPage
import time
import ddddocr
from PIL import Image   
import cv2
import numpy as np
def generate_distance_opencv():
    """
    :param bg_url: 背景图地址
    :param slice_url: 滑块图地址
    :return: distance
    :rtype: Integer
    """
    '''
    bg: 背景图片
    cut: 缺口图片
    '''
    # 读取背景图片和缺口图片
    bg_img = cv2.imread("background.png")  # 背景图片
    cut_img = cv2.imread("target.png")  # 缺口图片
 
    # 识别图片边缘
    bg_edge = cv2.Canny(bg_img, 100, 200)
    cv2.imshow("img",bg_edge)
    # time.sleep(30)
    cut_edge = cv2.Canny(cut_img, 100, 200)
 
    # 转换图片格式
    bg_pic = cv2.cvtColor(bg_edge, cv2.COLOR_GRAY2RGB)
    cut_pic = cv2.cvtColor(cut_edge, cv2.COLOR_GRAY2RGB)
 
    # 缺口匹配
    res = cv2.matchTemplate(bg_pic, cut_pic, cv2.TM_CCOEFF_NORMED)
    min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(res)  # 寻找最优匹配
    return max_loc
    # 返回缺口坐标
    
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
    return result['target']

def is_pixel_equal(img1, img2, x, y):
        """
        判断两个像素是否相同
        :param image1: 图片1
        :param image2: 图片2
        :param x: 位置x
        :param y: 位置y
        :return: 像素是否相同
        """
        # 取两个图片的像素点
        pix1 = img1.load()[x, y]
        pix2 = img2.load()[x, y]
        threshold = 60
        if (abs(pix1[0] - pix2[0] < threshold) and abs(pix1[1] - pix2[1] < threshold) and abs(
                pix1[2] - pix2[2] < threshold)):
            return True
        else:
            return False
def get_gap(img1, img2):
        """
        获取缺口偏移量
        :param img1: 不带缺口图片
        :param img2: 带缺口图片
        :return:
        """
        left = 45
        for i in range(left, img1.size[0]):
            for j in range(img1.size[1]):
                if not is_pixel_equal(img1, img2, i, j):
                    left = i
                    return left
        return left
# print(generate_distance_opencv())
# print(generate_distance())
# image1=Image.open("background.png")
# curent_img=Image.open("target.png")
# print(get_gap(image1,curent_img))
def get_distance(bg, tp):
    '''
    bg: 背景图片
    tp: 缺口图片
    out:输出图片
    '''
    # 读取背景图片和缺口图片
    bg_img = cv2.imread(bg)  # 背景图片
    tp_img = cv2.imread(tp)  # 缺口图片
    # 缺口匹配
    res = cv2.matchTemplate(bg_img, tp_img, cv2.TM_CCOEFF_NORMED)
    value = cv2.minMaxLoc(res)[2][0]
    distance = value * 278 / 360
    return int(distance)


def identify_gap():
    '''
    bg: 背景图片
    tp: 缺口图片
    out:输出图片
    '''
    # 读取背景图片和缺口图片
    bg_img = cv2.imread("background.png") # 背景图片
    tp_img = cv2.imread("target.png") # 缺口图片
    
    # 识别图片边缘
    bg_edge = cv2.Canny(bg_img, 100, 200)
    tp_edge = cv2.Canny(tp_img, 100, 200)
    
    # 转换图片格式
    bg_pic = cv2.cvtColor(bg_edge, cv2.COLOR_GRAY2RGB)
    tp_pic = cv2.cvtColor(tp_edge, cv2.COLOR_GRAY2RGB)
    
    # 缺口匹配
    res = cv2.matchTemplate(bg_pic, tp_pic, cv2.TM_CCOEFF_NORMED)
    min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(res) # 寻找最优匹配
    
    # 绘制方框
    th, tw = tp_pic.shape[:2] 
    tl = max_loc # 左上角点的坐标
    br = (tl[0]+tw,tl[1]+th) # 右下角点的坐标
    cv2.rectangle(bg_img, tl, br, (0, 0, 255), 2) # 绘制矩形
    cv2.imwrite("out.png", bg_img) # 保存在本地
    
    # 返回缺口的X坐标
    return tl[0] 
print(identify_gap())
# print(get_distance("background.png","target.png"))