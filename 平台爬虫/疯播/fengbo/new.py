import requests

response = requests.get(
    'https://external.fengbolive.com/cgi-bin/get_new_anchor_list.fcgi?&pid=161&qid=25001&reg_mac=d4e7d09eac09fe88&user_id=892921789&ver=2.6.1&page=1&0.9950724446069701&languageCode=zh-CN&regionCode=CN',
    headers={
        'Host': 'external.fengbolive.com',
        'accept-language': 'zh-CN,zh;q=0.8',
        'user-agent': 'okhttp-okgo/jeasonlzy',
    },
)
print(response.text)