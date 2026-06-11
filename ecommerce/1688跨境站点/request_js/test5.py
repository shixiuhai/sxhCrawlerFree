import requests
import hashlib
import re
import time
def get_sign(token:str,t:str,appId:str,data:str)->str:
    """
    获取淘宝系列sign参数
    """
    s=token+"&"+t+"&"+appId+"&"+data
    return hashlib.md5(s.encode(encoding='utf-8')).hexdigest()

def dicToStrCookies(dicCookies)->str:
    """
    字典形式的cookies转换为浏览器的cookies
    """
    strCookies=""
    for key in dicCookies:
        strCookies=strCookies+(key+"="+dicCookies[key]+";")
    return strCookies[:-1]

# 评价数
# cookies = {
#     '_m_h5_tk': '6e86861242f7b41d01db2824dc0496eb_1680542500389',
#     '_m_h5_tk_enc': '5629b0ece3e3854c07b42eed27afc0d9',
# }
cookies = {
    '_m_h5_tk': '3aa81513a98c82ab2c97ae2a5478bb56_1680530445194',
    '_m_h5_tk_enc': '3866c1ae162af3e9911371d4c36d8a2d',
    # cookie2是必须的
    'cookie2': '1085b696d1f6a676817508d84ee6c54f',
 
   
}
data='{"fcGroup":"offer-cbu","fcName":"offerdetail-service","fcArgs":"{\\"serviceName\\":\\"offerSatisfactionService\\",\\"params\\":{\\"memberId\\":\\"b2b-3900072288a5cff\\",\\"sellerId\\":3900072288,\\"offerId\\":572160692356,\\"isSignedForTm\\":false}}"}'

t=str(int(time.time())*1000)
appId=str(12574478)
token=re.findall('_m_h5_tk=(.+?)_', dicToStrCookies(cookies), re.S)[0]
sign=get_sign(token=token,t=t,appId=appId,data=data)
headers = {
    'authority': 'h5api.m.1688.com',
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'referer': 'https://detail.1688.com/',
    'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'script',
    'sec-fetch-mode': 'no-cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
}
# print(t,sign)
params = {
    'jsv': '2.7.0',
    'appKey': '12574478',
    't': '%s'%t,
    'sign': '%s'%sign,
    'api': 'mtop.mbox.fc.common.gateway',
    'v': '1.0',
    'type': 'jsonp',
    'isSec': '0',
    'timeout': '20000',
    'dataType': 'jsonp',
    'callback': 'mtopjsonp5',
    'data': data,
}

response = requests.get(
    'https://h5api.m.1688.com/h5/mtop.mbox.fc.common.gateway/1.0/',
    params=params,
    cookies=cookies,
    headers=headers,
)
# print(response.text)
print("----")
print(response.cookies['_m_h5_tk'])
cookies['_m_h5_tk']=response.cookies['_m_h5_tk']
cookies['_m_h5_tk_enc']=response.cookies['_m_h5_tk_enc']
data='{"fcGroup":"offer-cbu","fcName":"offerdetail-service","fcArgs":"{\\"serviceName\\":\\"offerSatisfactionService\\",\\"params\\":{\\"memberId\\":\\"b2b-3900072288a5cff\\",\\"sellerId\\":3900072288,\\"offerId\\":572160692356,\\"isSignedForTm\\":false}}"}'

t=str(int(time.time())*1000)
appId=str(12574478)
token=re.findall('_m_h5_tk=(.+?)_', dicToStrCookies(cookies), re.S)[0]
sign=get_sign(token=token,t=t,appId=appId,data=data)
headers = {
    'authority': 'h5api.m.1688.com',
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'referer': 'https://detail.1688.com/',
    'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'script',
    'sec-fetch-mode': 'no-cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
}
# print(t,sign)
params = {
    'jsv': '2.7.0',
    'appKey': '12574478',
    't': '%s'%t,
    'sign': '%s'%sign,
    'api': 'mtop.mbox.fc.common.gateway',
    'v': '1.0',
    'type': 'jsonp',
    'isSec': '0',
    'timeout': '20000',
    'dataType': 'jsonp',
    'callback': 'mtopjsonp5',
    'data': data,
}

response = requests.get(
    'https://h5api.m.1688.com/h5/mtop.mbox.fc.common.gateway/1.0/',
    params=params,
    cookies=cookies,
    headers=headers,
)
print(response.text)