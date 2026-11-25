import requests
import subprocess

# 调用命令，并捕获输出结果
result = subprocess.run(["node", ".\\get_anti_content.js"], capture_output=True, text=True)
# 检查命令是否成功执行
if result.returncode == 0:
    # 获取输出结果
    anti_content = result.stdout.strip()
    # print("输出结果:", anti_content)


headers = {
    'Host': 'api.pinduoduo.com',
    'accesstoken': 'ZLYRFPXDCNO2V5RRDI2QSWKO2QLBI5TABB27BZGIDKOYZF2GATSA122e12e',
    'cache-control': 'no-cache',
    'xweb_xhr': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13) XWEB/9115',
    # 'rfp': 'l3NJp7xw2x1FccFTVffGrhGDiszeXyn0',
    'content-type': 'application/json;charset=UTF-8',
    'accept': '*/*',
    'sec-fetch-site': 'cross-site',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://servicewechat.com/wx32540bd863b27570/1634/page-frame.html',
    'accept-language': 'zh-CN,zh;q=0.9',
}

params = {
    'pdduid': '9396804743905',
    'xcx': '20161201',
    'xcx_version': 'v8.3.53',
    'xcx_hash': '1714318557052W8UyAbhHTzs1GZtR',
    'page': '1',
    'size': '10',
    'requery': '0',
    'list_id': 'xcx_search_qAJI2M',
    'source': 'search',
    'sort': 'default',
    'flip': '0;0;0;0;c0eb48dc-e13c-f8ab-aa6a-ed8d31c3fa99;/20;0;0;6e819fa215f9de251188b65dc82ce8e4',
    'q': '电脑',
    'anti_content': anti_content,
}

response = requests.get('https://api.pinduoduo.com/search', params=params, headers=headers)
print(response.json())
print(response.json()["items"])
for item in response.json()["items"]:
    print(item["goods_name"])
    print(item["price_info"])
    print(item["thumb_url"])
    print(item)
# with open("1.json","w+") as f:
#     f.write(str(response.json()))