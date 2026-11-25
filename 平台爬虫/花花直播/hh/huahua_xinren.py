import requests

cookies = {
    'acw_tc': '2f61f26916792967548221899e4bb6bc2d6e27fe5a01b622e348e3beba72cb',
}

headers = {
    'Host': 'api.appbocai.com',
    # 'Cookie': 'acw_tc=2f61f26916792967548221899e4bb6bc2d6e27fe5a01b622e348e3beba72cb',
    'version': '864',
    'channel': 'wandoujia',
    'platform': '2',
    'authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHRlbmQiOiIiLCJ1aWQiOjEwMDM2MzYxNzcsImxvZ2luVHlwZSI6InFxIiwidW5vIjoxMDAzNjM2MTc3LCJpcCI6IjExMS4yLjkxLjM4IiwiaXNzIjoiZmxhc2h3aGFsZS10ZWNoIiwic291cmNlIjoid2FuZG91amlhIiwiZGV2aWNlSWQiOiIiLCJ2ZXJzaW9uIjoiODY0IiwicGxhdGZvcm0iOiIyIiwidGltZXN0YW1wIjoxNjc5Mjk3MTc1NTIzfQ.jTbAYDGUHaIJVNB4qfXV0Rkkm-Kt-rHkVXUY_ZkjUyc',
    'content-type': 'application/json; charset=UTF-8',
    'user-agent': 'okhttp/4.2.2',
}
# jwt 第二段 {"extend":"","uid":1003636177,"loginType":"qq","uno":1003636177,"ip":"111.2.91.38","iss":"flashwhale-tech","source":"wandoujia","deviceId":"","version":"864","platform":"2","timestamp":1679297175523}
# jwt 第一段 {"typ":"JWT","alg":"HS256"}

json_data = {
    'pageIndex': 5,
    'subTab': 3,
    'tab': 0,
    'pageSize': 20,
}

response = requests.post('https://api.appbocai.com/huahua/live/roomList', cookies=cookies, headers=headers, json=json_data)
print(response.json())
# Note: json_data will not be serialized by requests
# exactly as it was in the original request.
#data = '{"pageIndex":1,"subTab":3,"tab":0,"pageSize":20}'
#response = requests.post('https://api.appbocai.com/huahua/live/roomList', cookies=cookies, headers=headers, data=data)