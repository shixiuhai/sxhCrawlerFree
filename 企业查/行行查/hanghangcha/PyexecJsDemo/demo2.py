# -*- coding: utf-8 -*-
# @Author   : HeLaoshi
# @Time     : 2022/10/18 21:00
# @File     : demo2.py
# @Project  : pythonProject
import requests
import execjs  # pip install  pyexecjs2


w_uuid = execjs.compile(open('./cookie逆向.js', 'r', encoding='utf-8').read()).call('b')
cookies = {
    '.thumbcache_de0d870e3139ba2368b2e7ea8f11063c': 'qZ2vGet5/3PmF9RjSnxWiTvv8LD78gV6iWcbOfLQ5kBT6VBUBtYAoV3eebIwVZTYRemP0T/6plYzFM6LiHPPxg%3D%3D',
    '_bl_uid': 'ddlsX76zyL3kz46m9l6m0ke041Rh',
    'wz_uuid': f'X%2F{w_uuid}',
    'sajssdk_2015_cross_new_user': '1',
    'sensorsdata2015jssdkcross': '%7B%22distinct_id%22%3A%22183ea0bc0002e-0a03cae759203c8-7b555476-2073600-183ea0bc00116d5%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTgzZWEwYmMwMDAyZS0wYTAzY2FlNzU5MjAzYzgtN2I1NTU0NzYtMjA3MzYwMC0xODNlYTBiYzAwMTE2ZDUifQ%3D%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%2C%22%24device_id%22%3A%22183ea0bc0002e-0a03cae759203c8-7b555476-2073600-183ea0bc00116d5%22%7D',
    'sensorsdata2015jssdkchannel': '%7B%22prop%22%3A%7B%22_sa_channel_landing_url%22%3A%22%22%7D%7D',
    'Hm_lvt_eee25c1d7326569aba0ef6948ffdad95': '1666078982',
    'acw_tc': 'd9dbf33e16660966802121022a2a877b822e9f0d68d0971f415ff7c38a6c76',
    'Hm_lpvt_eee25c1d7326569aba0ef6948ffdad95': '1666097029',
    'x-web-ip': '113.246.104.117, 120.78.44.153, 100.121.108.243',
}

headers = {
    'authority': 'patents.qizhidao.com',
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
    'cache-control': 'no-cache',
    # Already added when you pass json=
    # 'content-type': 'application/json',
    # Requests sorts cookies= alphabetically
    # 'cookie': '.thumbcache_de0d870e3139ba2368b2e7ea8f11063c=qZ2vGet5/3PmF9RjSnxWiTvv8LD78gV6iWcbOfLQ5kBT6VBUBtYAoV3eebIwVZTYRemP0T/6plYzFM6LiHPPxg%3D%3D; _bl_uid=ddlsX76zyL3kz46m9l6m0ke041Rh; wz_uuid=X%2F105851262793e6d6b944fbeab0b867cc; sajssdk_2015_cross_new_user=1; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22183ea0bc0002e-0a03cae759203c8-7b555476-2073600-183ea0bc00116d5%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTgzZWEwYmMwMDAyZS0wYTAzY2FlNzU5MjAzYzgtN2I1NTU0NzYtMjA3MzYwMC0xODNlYTBiYzAwMTE2ZDUifQ%3D%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%2C%22%24device_id%22%3A%22183ea0bc0002e-0a03cae759203c8-7b555476-2073600-183ea0bc00116d5%22%7D; sensorsdata2015jssdkchannel=%7B%22prop%22%3A%7B%22_sa_channel_landing_url%22%3A%22%22%7D%7D; Hm_lvt_eee25c1d7326569aba0ef6948ffdad95=1666078982; acw_tc=d9dbf33e16660966802121022a2a877b822e9f0d68d0971f415ff7c38a6c76; Hm_lpvt_eee25c1d7326569aba0ef6948ffdad95=1666097029; x-web-ip=113.246.104.117, 120.78.44.153, 100.121.108.243',
    'device-id': 'BqZ2vGet5/3PmF9RjSnxWiTvv8LD78gV6iWcbOfLQ5kBT6VBUBtYAoV3eebIwVZTYRemP0T/6plYzFM6LiHPPxg==',
    'eagleeye-pappname': 'fyw9n1jhpf@545ab88155a2a87',
    'eagleeye-sessionid': 'm3lOq9zXegt7yw5v2iqhxd6nq3jR',
    'eagleeye-traceid': 'a2e7a6a216660980079361026a2a87',
    'origin': 'https://patents.qizhidao.com',
    'pragma': 'no-cache',
    'referer': 'https://patents.qizhidao.com/search/simple-result?from=simple&searchBtntype=searchBtn&businessSource=PC%E6%9F%A5%E4%B8%93%E5%88%A9&statement=%E5%8D%8E%E4%B8%BA&current=1&sortType=0',
    'sec-ch-ua': '"Chromium";v="106", "Microsoft Edge";v="106", "Not;A=Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'sensordeviceid': '183ea0bc0002e-0a03cae759203c8-7b555476-2073600-183ea0bc00116d5',
    'sensorsdistinctid': '183ea0bc0002e-0a03cae759203c8-7b555476-2073600-183ea0bc00116d5',
    'signature': '6ae36eecb843b43c65fe31c5203b4050.vC7d0A',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36 Edg/106.0.1370.47',
    'user-agent-web': 'X/105851262793e6d6b944fbeab0b867cc',
    'x-web-ip': '113.246.104.117, 120.78.44.143, 100.121.108.228',
}

json_data = {
    'text_ver': 'N',
    'subWordSwitch': None,
    'sortColumns': [
        {
            'columnName': 'app_date',
            'shortName': 'AD',
            'sortType': 0,
        },
    ],
    'listColumns': [
        {
            'name': '标题',
            'shortName': 'TI',
            'columnName': 'patent_name',
        },
        {
            'name': '公开(公告)号',
            'shortName': 'PN',
            'columnName': 'out_num',
        },
        {
            'name': '摘要',
            'shortName': 'ABS',
            'columnName': 'patent_brief',
        },
        {
            'name': '摘要附图',
            'shortName': 'IMAGE',
            'columnName': 'patent_img',
        },
        {
            'name': '当前权利人',
            'shortName': 'ASP',
            'columnName': 'patent_person',
        },
        {
            'name': '发明(设计)人',
            'shortName': 'IN',
            'columnName': 'designer',
        },
        {
            'name': '申请日',
            'shortName': 'AD',
            'columnName': 'app_date',
        },
        {
            'name': '公开(公告)日',
            'shortName': 'PD',
            'columnName': 'out_date',
        },
        {
            'name': '申请号',
            'shortName': 'AN',
            'columnName': 'app_num_standard',
        },
    ],
    'columnType': 1,
    'simpleVersion': True,
    'current': 1,
    'pageSize': 10,
    'statement': '华为',
    'filter': '',
    'pageCount': 18732,
    'checkResult': True,
}

response = requests.post('https://patents.qizhidao.com/api/qzd-bff-patent/patent/simple-version/search', cookies=cookies, headers=headers, json=json_data).json()
data1 = response['data1']

e = "xc46VoB49X3PGYAg"
ctx = execjs.compile(open('./demo2.js', 'r', encoding='utf-8').read()).call('decrypt123', data1, e)
print(ctx)
