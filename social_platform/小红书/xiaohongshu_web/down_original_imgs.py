import requests
from fake_useragent import UserAgent
import random
import uuid

def fetchUrl(url):
    #获取网页源码
    headers = {'user-agent': UserAgent().random}

    r = requests.get(url, headers=headers)
    return r.text


def parsing_link(html):
    #解析html文本，提取无水印图片的 url

    beginPos = html.find('imageList') + 11
    endPos = html.find(',"atUserList"')
    print(beginPos,endPos)
    imageList = eval(html[beginPos:endPos])

    for i in imageList:
        picUrl = f"https://sns-img-hw.xhscdn.com/{i['traceId']}?imageView2/2/w/1920/format/webp|imageMogr2/strip"
        yield picUrl, i['traceId']


def download(url, filename):
    headers = {'user-agent': UserAgent().random}

    with open(f'{filename}.jpg', 'wb') as v:
        try:
            r = requests.get(url, headers=headers)
            v.write(r.content)
        except Exception as error:
            print('图片下载错误！')


if __name__ == '__main__':
    original_link = 'https://www.xiaohongshu.com/explore/654f4644000000003202bc1e'
    html = fetchUrl(original_link)
    for url, traceId in parsing_link(html):
        print(f"download image {url}")
        download(url, traceId)

    print("Finished!")
