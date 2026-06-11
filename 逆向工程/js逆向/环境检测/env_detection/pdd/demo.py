import requests
import execjs
# -*- coding: utf-8 -*-

# anti_content = execjs.compile(open('get_anti_content.js', 'r').read()).call('dt')
# with open('get_anti_content.js', 'r', encoding='utf-8') as file:
#     content = file.read()
#     anti_content = execjs.eval(str(content)).call('dt')
import subprocess

# 调用命令，并捕获输出结果
result = subprocess.run(["node", ".\\get_anti_content.js"], capture_output=True, text=True)

# 检查命令是否成功执行
if result.returncode == 0:
    # 获取输出结果
    anti_content = result.stdout.strip()
    print("输出结果:", anti_content)

# anti_content = execjs.compile(open('anti_content.js', 'r', encoding='utf-8').read(), encoding='utf-8').call('dt')
headers = {
    'Accept': 'application/json, text/javascript',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
}

params = {
    'tf_id': 'TFRQ0v00000Y_13394',
    'page': '1',
    'size': '100',
    'anti_content': anti_content
}

response = requests.get('https://apiv2.pinduoduo.com/api/gindex/tf/query_tf_goods_info', params=params, headers=headers)
print(response.text)
