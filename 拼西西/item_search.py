import requests
# 请求示例 url 默认请求参数已经做URL编码
url = "https://wx19970108018/pinduoduo/item_search/?key=<您自己的apiKey>&secret=<您自己的apiSecret>&q=女装&start_price=0&end_price=0&page=1&cat=0&discount_only=&sort=&page_size="
headers = {
    "Accept-Encoding": "gzip",
    "Connection": "close"
}
if __name__ == "__main__":
    r = requests.get(url, headers=headers)
    json_obj = r.json()
    print(json_obj)
