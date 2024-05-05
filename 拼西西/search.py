import requests

cookies = {
    'acid': '0a7af1c97ca03cb727f44576f66c0add',
    'api_uid': 'Ci0wcGYuTo64uQBgBOjeAg==',
}

headers = {
    'Host': 'api.pinduoduo.com',
    # 'Cookie': 'acid=0a7af1c97ca03cb727f44576f66c0add; api_uid=Ci0wcGYuTo64uQBgBOjeAg==',
    'accesstoken': 'OR7CRZ2KIZJEVKRRKSCBOKR463IIUUN4W3B5STPKPT53GMSFDZ2Q1207137',
    'content-type': 'application/json;charset=UTF-8',
    'referer': 'Android',
    'etag': 'bshP02m0',
    'p-appname': 'pinduoduo',
    'p-proc-time': '868986',
    'x-pdd-info': 'bold_free%3Dfalse%26bold_product%3D%26front%3D1%26tz%3DAsia%2FShanghai',
    'x-pdd-queries': 'width=1080&height=1920&net=1&brand=Android&model=SM-G973N&osv=5.1.1&appv=6.32.0&pl=2',
    'x-yak-llt': '1714310888679',
    'p-proc': 'main',
    'p-mediainfo': 'player=1.0.3&rtc=1.0.0',
    'x-b3-ptracer': 'hctrue5d5d5341e96f42ab97ed725f05',
    'user-agent': 'android Mozilla/5.0 (Linux; Android 5.1.1; SM-G973N Build/PPR1.190810.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/74.0.3729.136 Mobile Safari/537.36  phh_android_version/6.32.0 phh_android_build/cf9c25b46ca7c2db0522d96b960f54f8707c6ca1 phh_android_channel/hw pversion/0',
    'pdd-config': 'V4:001.063200',
    'multi-set': '1,1',
    'vip': '192.168.6.6',
}

params = {
    'sug_srch_type': '2',
    'goods_id_list': '',
    'source': 'index',
    'is_change': '0',
    'query': '手机',
    'search_type': '0',
    'pdduid': '7356782282865',
}

response = requests.get('https://api.pinduoduo.com/search_suggest', params=params, cookies=cookies, headers=headers)

print(response.json())