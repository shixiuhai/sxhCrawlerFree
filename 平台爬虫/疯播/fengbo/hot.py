import requests




response = requests.get('https://app.fengbolive.com/hot', params={
    'page': '6',
    'qid': '25001',
    'reg_mac': 'd4e7d09eac09fe88',
    'token': '1c977e2bee55cc38abfbce6dbc492bd6',
    'user_id': '892921789',
    'version': '2.6.1',
    'languageCode': 'zh-CN',
    'regionCode': 'CN',
    'hot_type': '1',
}, cookies={'PHPSESSID': 'kts3v3r2cdq65vk5egmguc93n3'}, headers={'Host': 'app.fengbolive.com','accept-language': 'zh-CN,zh;q=0.8','user-agent': 'okhttp-okgo/jeasonlzy',})
print(response.json())