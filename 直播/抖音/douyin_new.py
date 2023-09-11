import requests
import re
import json

class Douyin:
    def __init__(self, rid, stream):
        self.Rid = rid
        self.Stream = stream

    def get_douyin_url(self):
        live_url = f"https://live.douyin.com/{self.Rid}"
        session = requests.Session()

        # Send initial request to obtain __ac_nonce
        headers = {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
            "Upgrade-Insecure-Requests": "1",
        }
        oresp = session.get(live_url, headers=headers)
        oresp.close()

        # Extract __ac_nonce from Set-Cookie header
        ac_nonce_match = re.search(r'(?i)__ac_nonce=(.*?);', oresp.headers.get("Set-Cookie", ""))
        if ac_nonce_match:
            ac_nonce = ac_nonce_match.group(1)
        else:
            return None

        # Set __ac_nonce cookie and send another request
        session.cookies.set("__ac_nonce", ac_nonce)
        resp = session.get(live_url, headers=headers)

        # Extract ttwid from Set-Cookie header
        ttwid_match = re.search(r'(?i)ttwid=.*?;', resp.headers.get("Set-Cookie", ""))
        if ttwid_match:
            ttwid = ttwid_match.group(0)
        else:
            return None

        # Build URL for final request
        url = f"https://live.douyin.com/webcast/room/web/enter/?aid=6383&app_name=douyin_web&live_id=1&device_platform=web&language=zh-CN&enter_from=web_live&cookie_enabled=true&screen_width=1728&screen_height=1117&browser_language=zh-CN&browser_platform=MacIntel&browser_name=Chrome&browser_version=116.0.0.0&web_rid={self.Rid}"
        headers = {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36",
            "Cookie": ttwid,
            "Accept": "*/*",
            "Host": "live.douyin.com",
            "Connection": "keep-alive",
        }

        # Send the final request
        ress = session.get(url, headers=headers)
        ress.close()

        # Parse the JSON response
        data = json.loads(ress.text)
        status = data.get("data", {}).get("data", [])[0].get("status", 0)

        if status != 2:
            return None

        real_url = ""
        stream_data = data.get("data", {}).get("data", [])[0].get("stream_url", {}).get("live_core_sdk_data", {}).get("pull_data", {}).get("stream_data", {})

        value =  json.loads(stream_data)
        if self.Stream == "flv":
            real_url = value.get("data", {}).get("origin", {}).get("main", {}).get("flv", "")
        elif self.Stream == "hls":
            real_url = value.get("data", {}).get("origin", {}).get("main", {}).get("hls", "")

        return real_url

# Example usage
douyin_obj = Douyin("448135927701", "flv")
douyin_url = douyin_obj.get_douyin_url()
print(douyin_url)
