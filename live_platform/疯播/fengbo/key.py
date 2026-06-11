import requests

headers = {
    'Host': 'external.fengbolive.com',
    'accept-language': 'zh-CN,zh;q=0.8',
    'user-agent': 'okhttp-okgo/jeasonlzy',
}

params = {
    'user_id': '892921789',
    'timeStamp': '1682307478',
    'token': '1c977e2bee55cc38abfbce6dbc492bd6',
    'sign': '97ae031998fa5d5ce1155715200c33f2',
}

response = requests.get('https://external.fengbolive.com/cgi-bin/get_pull_stream_key.fcgi', params=params, headers=headers)
print(response.text)
# http://hlsws.sinashow.com/live/88057518_1682252296/playlist.m3u8
# http://hdlnew.sinashow.com/live/892592144_1682307287/playlist.m3u8
# http://hdlnew.sinashow.com/live/893079589_1682306769/playlist.m3u8
# http://hdlnew.sinashow.com/live/892592144_1682307287.flv?key=22e7fa81cf942a92fe3d8b9427dde208
# http://hlsws.sinashow.com/live/892592144_1682307287/playlist.m3u8