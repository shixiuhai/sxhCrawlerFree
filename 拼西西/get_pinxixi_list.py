import requests

cookies = {
    'api_uid': 'Ci0wcGYuTo64uQBgBOjeAg==',
}

headers = {
    'Host': 'api-shb1.pinduoduo.com',
    # 'Cookie': 'api_uid=Ci0wcGYuTo64uQBgBOjeAg==',
    'accesstoken': 'OR7CRZ2KIZJEVKRRKSCBOKR463IIUUN4W3B5STPKPT53GMSFDZ2Q1207137',
    'referer': 'Android',
    'etag': 'bshP02m0',
    'p-appname': 'pinduoduo',
    'p-proc-time': '387828',
    # 'x-pdd-info': 'bold_free%3Dfalse%26bold_product%3D%26front%3D1%26tz%3DAsia%2FShanghai',
    # 'x-pdd-queries': 'width=1080&height=1920&net=1&brand=Android&model=SM-G973N&osv=5.1.1&appv=6.32.0&pl=2',
    # 'x-yak-llt': '1714310888679',
    # 'p-proc': 'main',
    'p-mediainfo': 'player=1.0.3&rtc=1.0.0',
    # 'x-b3-ptracer': 'hctruea55d7da7e0d14ca7bfe0a2372b',
    'user-agent': 'android Mozilla/5.0 (Linux; Android 5.1.1; SM-G973N Build/PPR1.190810.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/74.0.3729.136 Mobile Safari/537.36  phh_android_version/6.32.0 phh_android_build/cf9c25b46ca7c2db0522d96b960f54f8707c6ca1 phh_android_channel/hw pversion/0',
    'pdd-config': 'V4:001.063200',
    'multi-set': '1,1',
    'content-type': 'application/json;charset=UTF-8',
    'anti-token': '2agbsPkLB9cHpi8IZe+GVZ73YRtag2PVQAMWUQwmPs7cDsAFU6pLZCEgkqpDh9HxZkIPuA0aHWrncbAS9cCxiR2XQ==',
    'vip': '192.168.6.6',
}

params = {
    'engine_version': '2.0',
    'page_sn': '10002',
    'promotion_id': '150909',
    'group': 'home_tab_goods',
    'page_id': 'home_page_promotion.html',
    'offset': '160',
    'list_id': 'ebe4011b59',
    'page_size': '20',
    'req_action_type': '10',
    'carnival_id': '240310',
    'page_no': '2',
    'pdduid': '7356782282865',
}

json_data = {}

response = requests.post(
    'https://api-shb1.pinduoduo.com/api/carnival/goods_list/home_tab',
    params=params,
    cookies=cookies,
    headers=headers,
    json=json_data,
)
print(response.json())