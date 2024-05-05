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
    'p-proc-time': '2122333',
    'x-pdd-info': 'bold_free%3Dfalse%26bold_product%3D%26front%3D1%26tz%3DAsia%2FShanghai',
    'x-pdd-queries': 'width=1080&height=1920&net=1&brand=Android&model=SM-G973N&osv=5.1.1&appv=6.32.0&pl=2',
    'x-yak-llt': '1714310888679',
    'p-proc': 'main',
    'p-mediainfo': 'player=1.0.3&rtc=1.0.0',
    'x-b3-ptracer': 'hctrue85bfa5279fc444a193214c0e4d',
    'user-agent': 'android Mozilla/5.0 (Linux; Android 5.1.1; SM-G973N Build/PPR1.190810.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/74.0.3729.136 Mobile Safari/537.36  phh_android_version/6.32.0 phh_android_build/cf9c25b46ca7c2db0522d96b960f54f8707c6ca1 phh_android_channel/hw pversion/0',
    'pdd-config': 'V4:001.063200',
    'multi-set': '1,1',
    'content-type': 'application/json;charset=UTF-8',
    # 'anti-token': '2afnpqMQXABgfiKV7AS9WD+rvuJPWeKhBHZNdo0j9VNhAUl22/R2genoonhNRBz0dw9m7VsiXK3iZRFBm0uwx7qhb1TX2pIQBESxoq5EHHOUBKqnImpuH41DDK3KBnVfbJgjw+FoVh6MHgaXrJQvbURBLlX+SFHJ6zWpQW68awZVv2oNoun0TFXc1HL9sCQI9MjxxcNG7F9CGqKlTK/0CMR80BNibg8oplqvPrdgNwUBQPMQayBp8Oyx96qWNe0dQYS8Nm1rcQRxZb+jlRWmeCwVUz/QpUTd9EgFRppDzXnQVCPmCQMF0lGsABRqvcMJ1OGorM2jHPPo5C/TLROE+8uK1PDJLZ5SQTYkeYtA+Fh4/FkYf0X4/28OoVvrO1Jl1iRDhieJFF0G0VCASWmkrbbE1bU/ZpN9/R4aU6DUty5pvSpBMzEdNOyS0kVBjNukicYQZIgpUi130EzNHeQqnIXxlpctYff5Ej6ftmOuJINwNY1frRlCEG6xzD2gZYohYCacZ6ab/3XZOryDT3u7GfrJYAAGMHA/yyV90yP2Mj+UakCY9xwE4y0mjpbKu9Gi/yVeXtmMXLxGkVl/jYSQQGQlJBxZENPOPaSIr1uBGfEWwuq2lozArgPI3ciE4yxSqltOM4aVgED0puEh3keVBkF/g==',
    'vip': '192.168.6.6',
}

params = {
    'source': 'index',
    'pdduid': '7356782282865',
}

data = '{"back_search":"false","engine_version":"2.0","page_sn":"10015","source":"index","page_id":"search_result.html","size":"20","is_new_query":"1","q":"手动刮胡刀","item_ver":"lzqq","q_search":"{\\pes_req_id\\:\\1714313497006273\\,\\dpt\\:\\1\\}","install_token":"88ed8335-5f87-4ab4-8a36-d8d550c4a71d","search_met":"search_tag_change","requery":"0","list_id":"5Z7LKlm5","track_data":"refer_page_id,10002_1714312337724_1039174032","sort":"default","page":"1"}'.encode()

response = requests.post('https://api-shb1.pinduoduo.com/search', params=params, cookies=cookies, headers=headers, data=data)

print(response.json())