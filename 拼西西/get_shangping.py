import requests

cookies = {
    'acid': '0a7af1c97ca03cb727f44576f66c0add',
    'api_uid': 'Ci0wcGYuTo64uQBgBOjeAg==',
}

headers = {
    'Host': 'api.pinduoduo.com',
    # 'Cookie': 'acid=0a7af1c97ca03cb727f44576f66c0add; api_uid=Ci0wcGYuTo64uQBgBOjeAg==',
    'accesstoken': 'OR7CRZ2KIZJEVKRRKSCBOKR463IIUUN4W3B5STPKPT53GMSFDZ2Q1207137',
    'referer': 'Android',
    'etag': 'bshP02m0',
    'p-appname': 'pinduoduo',
    'p-proc-time': '871318',
    'x-pdd-info': 'bold_free%3Dfalse%26bold_product%3D%26front%3D1%26tz%3DAsia%2FShanghai',
    'x-pdd-queries': 'width=1080&height=1920&net=1&brand=Android&model=SM-G973N&osv=5.1.1&appv=6.32.0&pl=2',
    'x-yak-llt': '1714310888679',
    'p-proc': 'main',
    'p-mediainfo': 'player=1.0.3&rtc=1.0.0',
    'x-b3-ptracer': 'hctrue17cc9855a8384e529fe907268f',
    'user-agent': 'android Mozilla/5.0 (Linux; Android 5.1.1; SM-G973N Build/PPR1.190810.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/74.0.3729.136 Mobile Safari/537.36  phh_android_version/6.32.0 phh_android_build/cf9c25b46ca7c2db0522d96b960f54f8707c6ca1 phh_android_channel/hw pversion/0',
    'p-appua': 'android Mozilla/5.0 (Linux; Android 5.1.1; SM-G973N Build/PPR1.190810.011; wv)  phh_android_version/6.32.0 phh_android_build/cf9c25b46ca7c2db0522d96b960f54f8707c6ca1 phh_android_channel/hw pversion/0',
    'pdd-config': 'V4:001.063200',
    'multi-set': '0,1',
    'content-type': 'application/json;charset=UTF-8',
    'anti-token': '2afnpqMQXABgfiKV7AS9WD+rpBXDpNcIGNoY8OHvG3QTOX1JoxRitQsSjy1Rmy0Kqj4H1jtHnY+r8qLMW2LuDLV1yh3szK6eYrtHKtR6FeevjpDbedDLTuiPUetHIikCzy2SewEuF2CsggOTtI+5QhJayfT/IszWH/2itBvMuY7qXwjTcgh3yxA725iAnyuaXt4I+zYj6GjwHjIKPE/oLdHg2v6tKvQT4Z3Qxhj99kN4X43+2hSNMT/v/QwLbnItTO0CKKx1eXNfz4xI0G9SRScK00zS0LDTc4VmXeKt+ETcALzDeLXaWRhgQJ/vItvc8aSkG4doWHhG/oki4woKzXrdtzmbC6JpXcb+4a9l4syJ5N8/wol6RjP9ael+6ymJ03gcutKyyAQWIwTJMBe26JfCSCsv+hqnMIPK3cJ1YpzPEYx4CiGRKwIaPNiMhSg9xe7FgTzS7BhLjWNHWogj7nsjzpWvav0Mvz5jo+VwXt8YcVI9+UEhzCGX4YXXOyEnlk7u8MJIXOUzRWuWTe86Obie6XACuroGroFweWKHVlxdhN6ySpHGiApHzXfM/MO14KYp790h/W3KUg6WRWYj/heUZTW06M1+ICEbtInTSIPIGiPBUvqjQTrUSTs296M3GbwW01MzmVbOdqn8rE5iewVvw==',
    'vip': '192.168.6.6',
}

params = {
    'page_sn': '10015',
    'launch_type': '2',
    'pagesn_request_count': '1',
    'pdduid': '7356782282865',
}

data = '{"page_sn":"10015","platform":0,"source":"hw","app_version":"6.32.0","launch_type":2,"exposure_count":2,"pagesn_request_count":1,"app_context":{"contacts_auth":1,"lite_mode":false,"accessible_mode":0},"ack_map":{"10002-lo_platform_login_wd-304-1|lm:0-id:eHI1714310799-":1714310800},"user_info":"{\\enable_log\\:0}","ext":"{\\rqid\\:\\94b1ce41\\}","backup_data":"{\\22\\:1714312455,\\11\\:1714312517,\\12\\:1714312517,\\35\\:1714915690,\\13\\:1714312517,\\9\\:1714312517,\\check\\:61721,\\10\\:1714312517}","page_context":"{\\page_sn\\:\\10015\\,\\page_id\\:\\10015_1714313185326_1470343520\\,\\source\\:\\index\\,\\query\\:\\\\,\\page_name\\:\\search_result\\,\\spin_show\\:\\0\\,\\last_page_sn\\:\\10015\\,\\rn\\:\\null\\,\\search_met\\:\\suggestion\\,\\search_type\\:\\goods\\,\\source_id\\:\\\\,\\source_detail\\:\\\\,\\flagship_filter\\:\\0\\,\\sort\\:\\default\\,\\price_filter\\:\\0\\}","refer_page_context":"{\\refer_page_section\\:\\main\\,\\refer_page_name\\:\\index\\,\\refer_page_sn\\:\\10002\\,\\refer_page_el_sn\\:\\501846\\,\\refer_page_id\\:\\10002_1714312337724_1039174032\\}","business_context":"{\\max_exposure_idx\\:-1,\\enter_goods_detail_time\\:1714313207,\\idx\\:-1,\\pay_status\\:0,\\notification_enabled\\:true,\\lite_mode\\:false,\\support_formats\\:1,\\notification_popup_display_count\\:0,\\idfa\\:\\\\,\\notification_popup_last_display_time\\:0,\\install_token\\:\\88ed8335-5f87-4ab4-8a36-d8d550c4a71d\\,\\android_id\\:\\c57b4d9f986819f1\\}"}'

response = requests.post(
    'https://api.pinduoduo.com/api/flow/hungary/window/global/v2',
    params=params,
    cookies=cookies,
    headers=headers,
    data=data,
)
print(response.json())