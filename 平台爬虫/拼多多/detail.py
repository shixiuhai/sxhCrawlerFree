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
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13) XWEB/9129',
    'rfp': 'l3NJp7xw2x1FccFTVffGrhGDiszeXyn0',
    'content-type': 'application/json;charset=UTF-8',
    'accept': '*/*',
    'sec-fetch-site': 'cross-site',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://servicewechat.com/wx32540bd863b27570/1635/page-frame.html',
    'accept-language': 'zh-CN,zh;q=0.9',
}

params = {
    'pdduid': '9396804743905',
    'xcx': '20161201',
    'xcx_version': 'v8.3.54',
    'xcx_hash': '1715598262199zwYnEq0OuQDl2wdm',
}

json_data = {
    'goods_id': '361723630371',
    'page_from': '23',
    'page_version': 7,
    'client_time': 1715598262199,
    'page_sn': 10014,
    '_oak_rcto': 'YWLo-7S7GqJ50tm49vwdQBIFawXiRbGkxI4',
    '_oc_trace_mark': '199',
    '_oc_adinfo': 'eyJzY2VuZV9pZCI6Mn0',
    '_oak_gallery': 'https://img.pddpic.com/mms-material-img/2023-02-20/871814dd-b870-46fb-a343-32426025bcb6.jpeg',
    '_oak_gallery_token': '34850147cf3db81fadb7f3ae52ca2c9d',
    '_oc_refer_ad': '1',
    'refer_page_sn': 10015,
    'anti_content': anti_content,
    'xcx_version': 'v8.3.54',
}

response = requests.post('https://api.pinduoduo.com/api/oak/integration/render', params=params, headers=headers, json=json_data)
print(response.json())
# Note: json_data will not be serialized by requests
# exactly as it was in the original request.
#data = '{"goods_id":"361723630371","page_from":"23","page_version":7,"client_time":1715598262199,"page_sn":10014,"_oak_rcto":"YWLo-7S7GqJ50tm49vwdQBIFawXiRbGkxI4","_oc_trace_mark":"199","_oc_adinfo":"eyJzY2VuZV9pZCI6Mn0","_oak_gallery":"https://img.pddpic.com/mms-material-img/2023-02-20/871814dd-b870-46fb-a343-32426025bcb6.jpeg","_oak_gallery_token":"34850147cf3db81fadb7f3ae52ca2c9d","_oc_refer_ad":"1","refer_page_sn":10015,"anti_content":"3akAfx5e-eCEX5CEs9yXe9YXp_qc04yn0P8O0TaX0mqyYdynYTj2TSe-eFDBcO9tTXIxor4hzNHCKUgJ1meLjM1Bw1dF8W-KA_7sJmS325rAwzEv3TDvwZLf_ArVE_FKDU7eDZre2e7Kded3VFX11bs9PL868UI","xcx_version":"v8.3.54"}'
#response = requests.post('https://api.pinduoduo.com/api/oak/integration/render', params=params, headers=headers, data=data)