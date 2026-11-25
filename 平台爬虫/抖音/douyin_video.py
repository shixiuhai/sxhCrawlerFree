# 通过抖音获取视频
import re
import random
import requests
import http.client
from fastapi import FastAPI, Form, HTTPException
from fake_useragent import UserAgent
import time

# 修改ttwid获取，感谢https://github.com/Johnserf-Seed/TikTokDownload/blob/main/Server/Server.py
def gen_ttwid() -> str:
    try:
        """生成请求必带的ttwid
        param :None
        return:ttwid
        """
        url = 'https://ttwid.bytedance.com/ttwid/union/register/'
        data = '{"region":"cn","aid":1768,"needFid":false,"service":"www.ixigua.com","migrate_info":{"ticket":"","source":"node"},"cbUrlProtocol":"https","union":true}'
        response = requests.request("POST", url, data=data)
        # j = ttwid  k = 1%7CfPx9ZM.....
        for j, k in response.cookies.items():
            tips = {
                "status_code": "200",
                "time": {
                    "strftime": time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()),
                    "timestamp": int(round(time.time() * 1000))
                },
                "result": [{
                    "headers": {
                        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
                        "cookie": "ttwid=%s" % k
                    }
                }]
            }
        return tips["result"][0]["headers"]["cookie"]
    except Exception as error:
        print(error)
        return ""

app = FastAPI()

def parse_share_url(share_url: str) -> str:
    """
        解析分享的url指向的网页视频url
    """
    path = share_url.split("v.douyin.com")[1]
    conn = http.client.HTTPSConnection('v.douyin.com')
    headers = {
        'Host': 'v.douyin.com',
        'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'sec-fetch-site': 'none',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-user': '?1',
        'sec-fetch-dest': 'document',
        'accept-language': 'zh-CN,zh;q=0.9',
    }
    conn.request('GET', '%s' % path, headers=headers)
    response = conn.getresponse()
    response_text = response.read().decode('utf-8')
    # 使用正则表达式提取href属性
    href_match = re.search(r'href="([^"]+)"', response_text)

    try:
        # 抖音笔记链接
        href_value = href_match.group(1)
        note_id_match = re.search(r'/note/(\d+)/', href_value)
        return "https://www.douyin.com/note/" + note_id_match.group(1)
    except:
        # 抖音视频链接
        href_value = href_match.group(1)
        video_id_match = re.search(r'/video/(\d+)/', href_value)
        return "https://www.douyin.com/video/" + video_id_match.group(1)

def parse_real_imgurl(web_img_url: str) -> list:
    """
        解析抖音无水印的图片url链接
    """
    headers = {
        'authority': 'www.douyin.com',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-control': 'max-age=0',
        'cookie': '__ac_nonce=065699123009d381586b2; __ac_signature=_02B4Z6wo00f018B2sjQAAIDDQHRIdsTRgefAVraAAJV9mwEqKiH6nkUUQrGyBrGiDfnsBPKjO1nr7wf0mcwY99Taf7dL-jKNDwxtbAnJQmry4vF15.vBj4ek8wUDxp40zbuRfDGqn0m77XeOae',
        'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
    }

    response = requests.get(web_img_url, headers=headers)
    pattern = re.compile(r'src="(https\:\/\/[^"]+?tplv\-dy\-aweme\-images:[^"]+)"')

    # 提取所有的图片并去重
    img_links = pattern.findall(response.text.replace("amp;", ""))
    img_links = list(set(img_links))
    return img_links

def return_detail_url(web_video_url: str) -> str:
    """
        解析实际有用的接口链接
    """
    web_video_id = web_video_url.split("video/")[1]
    detail_url = f"https://www.douyin.com/aweme/v1/web/aweme/detail/?device_platform=webapp&aid=6383&channel=channel_pc_web&aweme_id={web_video_id}"

    return detail_url


def parse_real_video(web_video_url: str, detail_url: str, cookie: str) -> str:
    """
        解析无水印的url链接
    """
    try:
        headers = {
            "accept": "application/json, text/plain, */*",
            "cookie": cookie,
            "referer": web_video_url,
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
        }

        response = requests.post(detail_url, headers=headers)
        # print(response.json())
        real_video_id = response.json()['aweme_detail']['video']['play_addr']['uri']
        return "https://aweme.snssdk.com/aweme/v1/play/?video_id=" + real_video_id + "&ratio=720p&line=0"
    except Exception as error:
        print(error)
        return ""

@app.post('/api/return_douyin/original_url')
async def analyze_douyin(douyin_share_url: str = Form(...)):
    """
        如果返回为空字符串表示没有成功解析
    """
    # 传入参数 --> ttwid，抖音分享的url
    share_url = douyin_share_url
    print(share_url)
    web_url = parse_share_url(share_url)
    if "video" in web_url:
        detail_url = return_detail_url(web_url)
        cookie = get_ttwid()
        print(cookie)
        real_download_url = parse_real_video(web_url, detail_url, cookie)
    else:
        real_download_url = parse_real_imgurl(web_url)
    return {'exist': real_download_url}

@app.post('/api/return_redbook/video_original_url')
async def analyze_redbook(redbook_share_url: str = Form(...)):
    """
        调取静态接口解析无水印的url链接
    """
    headers = {
        'authority': 'www.xiaohongshu.com',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-control': 'max-age=0',
        'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
    }

    # 传入参数 --> 小红书分享的url
    user_input_url = redbook_share_url

    if "打开&#8203;``【oaicite:0】``&#8203;App查看精彩内容！" in user_input_url:
        url_match = re.findall(r'http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\\(\\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+', user_input_url)
        target_url = url_match[0]
    else:
        target_url = user_input_url

    img_html = requests.get(target_url, headers=headers).text.replace("\\u002F", "/").replace("\n", "").replace(" ",
                                                                                                                    "")  # 调取静态接口

    url_pattern = re.compile(r'"url":"(.*?)"')
    img_url = url_pattern.findall(img_html)
    if len(img_url) > 0:
        img_url = list(set([url for url in img_url if 'wm_1' in url]))

    return {'exist': img_url}

if __name__ == '__main__':
    import uvicorn

    uvicorn.run(app, host="127.0.0.1", port=9001)
