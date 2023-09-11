## 两个源有重复的数据 http://hdlnew.sinashow.com/live/889038542_1651810815/playlist.m3u8
## url 里 hdlnew > hlsws http://hdlnew.sinashow.com/live/88235666_1651793032/playlist.m3u8
## .flv > /playlist.m3u8 "http://hdlnew.sinashow.com/live/884574666_1651811659/playlist.m3u8
# http://hdlnew.sinashow.com/live/88370915_1651799160/playlist.m3u8
# http://hdlnew.sinashow.com/live/884190261_1651811661/playlist.m3u8
## 在new里面有主播名字
import os
import time
import os
import json
import requests
from urllib.parse import unquote
returnList=[]
fileName=int(time.time())

page=1
## 热度主播
while True:
    ## 获取code状态判断是否依然拥有下一页
    code=requests.get('https://app.fengbolive.com/hot', params={
    'page': '%s'%page,
    'qid': '25001',
    'reg_mac': 'd4e7d09eac09fe88',
    'token': '1c977e2bee55cc38abfbce6dbc492bd6',
    'user_id': '892921789',
    'version': '2.6.1',
    'languageCode': 'zh-CN',
    'regionCode': 'CN',
    'hot_type': '1',
    }, cookies={'PHPSESSID': 'kts3v3r2cdq65vk5egmguc93n3'}, headers={'Host': 'app.fengbolive.com','accept-language': 'zh-CN,zh;q=0.8','user-agent': 'okhttp-okgo/jeasonlzy'}).json()["code"]
    if int(code)==0:
        # 保存内容到文件中
        break
    else:
        # 获取页面的数据
        res=requests.get('https://app.fengbolive.com/hot', params={
        'page': '%s'%page,
        'qid': '25001',
        'reg_mac': 'd4e7d09eac09fe88',
        'token': '1c977e2bee55cc38abfbce6dbc492bd6',
        'user_id': '892921789',
        'version': '2.6.1',
        'languageCode': 'zh-CN',
        'regionCode': 'CN',
        'hot_type': '1',
        }, cookies={'PHPSESSID': 'kts3v3r2cdq65vk5egmguc93n3'}, headers={'Host': 'app.fengbolive.com','accept-language': 'zh-CN,zh;q=0.8','user-agent': 'okhttp-okgo/jeasonlzy'}).json()["info"]
        for pageContent in res:
            # print(pageContent)
            # 如果 streamUrl是空跳过
            if pageContent['url']=='':
                print("url是空跳过本次的循环")
                continue
            # 如果streamUrl不是空
            else:
                # 定义返回数据

                returnMsg={
                    'anchorId': pageContent['userInfo']['user_id'],
                    'anchorNickname': pageContent['userInfo']['nick_nm'],
                    'streamUrl': pageContent['url'].replace('hdlnew','hlsws').replace('.flv','/playlist.m3u8')
                }
                print(returnMsg)
                returnList.append(returnMsg)
        page=page+1


## 最新主播
page=requests.get(
    'https://external.fengbolive.com/cgi-bin/get_new_anchor_list.fcgi?&pid=161&qid=25001&reg_mac=d4e7d09eac09fe88&user_id=892921789&ver=2.6.1&page=1&0.9950724446069701&languageCode=zh-CN&regionCode=CN',
    headers={
        'Host': 'external.fengbolive.com',
        'accept-language': 'zh-CN,zh;q=0.8',
        'user-agent': 'okhttp-okgo/jeasonlzy',
    },
).json()["pages"]

page=int(page)
for i in range(1,page+1):
    # 获取到json的列表数据
    res=requests.get(
    'https://external.fengbolive.com/cgi-bin/get_new_anchor_list.fcgi?&pid=161&qid=25001&reg_mac=d4e7d09eac09fe88&user_id=892921789&ver=2.6.1&page=%s&0.9950724446069701&languageCode=zh-CN&regionCode=CN'%page,
    headers={
        'Host': 'external.fengbolive.com',
        'accept-language': 'zh-CN,zh;q=0.8',
        'user-agent': 'okhttp-okgo/jeasonlzy',
    },
    ).json()["info"]
    for pageContent in res:
        # 如果 streamUrl是空跳过
        if pageContent['url']=='':
            print("url是空跳过本次的循环")
            continue
        # 如果streamUrl不是空
        else:
            # 定义返回数据
            returnMsg={
                'anchorId': pageContent['id'],
                'anchorNickname': unquote(pageContent['name']),
                'streamUrl': pageContent['url'].replace('hdlnew','hlsws').replace('.flv','/playlist.m3u8'),
                'associationName': pageContent['familyname']
            }
            returnList.append(returnMsg)

## 把列表数据变成json字符串
returnList=json.dumps(returnList,ensure_ascii=False)
# print(returnList)
# print(returnList)
# 将returnList写入文件
with open("/home/sh/fengbo/all/%s"%fileName,'w') as f:
    f.write(returnList)
