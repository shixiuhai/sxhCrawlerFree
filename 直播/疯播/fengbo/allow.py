import requests

headers = {
    'Host': 'external.fengbolive.com',
    'accept-language': 'zh-CN,zh;q=0.8',
    'user-agent': 'okhttp-okgo/jeasonlzy',
}

params = {
    'isJump': '1',
    'a': '892921789',
    'b': '883798052',
    'reg_mac': 'd4e7d09eac09fe88',
    'token': '1c977e2bee55cc38abfbce6dbc492bd6',
    'version': '2.6.1',
    'pid': '161',
    'timestamp': '1682306998',
    'sign': 'e403b0836bbac1110b2060f9ef2a000b',
    'regionCode': 'CN',
    'languageCode': 'zh-CN',
}

response = requests.get('https://external.fengbolive.com/cgi-bin/is_follow.fcgi', params=params, headers=headers)
print(response.text)