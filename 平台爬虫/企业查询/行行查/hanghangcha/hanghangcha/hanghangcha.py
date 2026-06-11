import requests
import time
import execjs 

cookies = {
    '_ACCOUNT_': 'NDE0MzIxMDk2MTJhNDNmOTkzMTc1ZjcwMDdlYmE4NmElNDAlNDBtb2JpbGU6MTY2NzQ2MjY2MTE1NjphZmI4YmFmOTEwYTA3ZjljNGZmN2Q5ZGI5NDM1YzA3Mw',
}

headers = {
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Auth-Plus': '',
    'Connection': 'keep-alive',
    # Requests sorts cookies= alphabetically
    # 'Cookie': 'UM_distinctid=183ef305e96301-0aed925846f1ba-26021f51-1fa400-183ef305e97371; Hm_lvt_1521e0fb49013136e79181f2888214a7=1666165278,1666237487; Hm_lpvt_1521e0fb49013136e79181f2888214a7=1666237487; JSESSIONID=EA82221E022565EBAE54B3B214529B98; WX_OPEN=evBOgogRjOEnSuEoIrRu99tTB2aZaA7na5SM+aRiE/QeG4xUWmb31IyszD9gj0c/zWSPCg373f5U/+HiOqFcBIWdlHC4v0gfWbi4FCk5yzCwQXjYHAGgIb6frPb2ty3o; _ACCOUNT_=NDE0MzIxMDk2MTJhNDNmOTkzMTc1ZjcwMDdlYmE4NmElNDAlNDBtb2JpbGU6MTY2NzQ0NzEyMzI1ODo1NjJhOTBiYzU1YjAxYzNmYmRjODJlYjM4Zjg2N2YzZQ',
    'Origin': 'https://www.hanghangcha.com',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest',
    'clientInfo': 'web',
    'clientVersion': '1.0.0',
    'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

params = {
    'filter': '{"skip":0,"limit":1000,"order":"weight asc"}',
}

for i in range(1,100):
    time.sleep(1)
    response = requests.get('https://api.hanghangcha.com/hhc/api/member/tag_configs', params=params, cookies=cookies, headers=headers).json()['data']
    # print(response)
    data = execjs.compile(open('./hanghangcha.js', 'r', encoding='utf-8').read()).call('abc',response,"3sd&d24h@$udD2s*")
    print(data)
