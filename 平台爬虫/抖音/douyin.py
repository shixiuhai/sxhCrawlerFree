import json
import requests
import re
import urllib.parse
class DouYin:
    def __init__(self):
        pass

    def get_real_url(self,rid:str)->dict:
        url = 'https://live.douyin.com/{}'.format(rid)
        headers = {
            "cookie": "__ac_nonce=000000000000000000000; ",
            # "cookie": "__ac_nonce=063e4d7460011686f2fcf; ",
            "referer": "https://live.douyin.com/",
            "upgrade-insecure-requests": "1",
            "user-agent": "Mozilla/5.0(WindowsNT10.0;WOW64)AppleWebKit/537.36(KHTML,likeGecko)Chrome/86.0.4240.198Safari/537.36",
        }
        # s = requests.session()
        response = requests.get(url, headers=headers)

        text = urllib.parse.unquote(re.findall('<script id="RENDER_DATA" type="application/json">(.*?)</script>', response.text)[0])

        json_ = json.loads(text)
        try:
            # 主播昵称
            name = json_['app']['initialState']['roomStore']['roomInfo']['room']['owner']['nickname']
            roomId=rid
            flv_pull_url = json_['app']['initialState']['roomStore']['roomInfo']['room']['stream_url']['flv_pull_url']["SD2"]
            # hls_pull_url_map = json_['app']['initialState']['roomStore']['roomInfo']['room']['stream_url']['hls_pull_url_map']
            return {
                "name":name,
                "flvUrl":flv_pull_url,
                "roomId":roomId
            }
        except Exception as error:
            return None
            
import time
if __name__ == "__main__":
    douyin=DouYin()
    for i in range(1000):
        print("---")
        res= douyin.get_real_url('1234')
        time.sleep(1)
        if res:
            print(res)