import requests

cookies = {
    'ali_ab': '111.2.91.38.1678161716466.4',
    'cna': 'AbGRHJxN6koCAW8CWyaOFU9H',
    'lid': 'tb80111606',
    'last_mid': 'b2b-345151005463a30',
    '__last_loginid__': 'tb80111606',
    'is_identity': 'buyer',
    'aliwwLastNum': '0',
    'aliwwLastRefresh': '1678953729515',
    'cookie2': '1b0448f1ce30484930268601ddbe4d18',
    'sgcookie': 'E100DC85bOZVfIoWOZBBJsHzPU%2FGD3m%2B0I%2BixpzIuvvwrMkJIX71ifgMadX%2F7dIvzoi9Mmj5xzgPpMQSKCNSSNXN6rrj3sUJA8WDCHVdWoIyKuw%3D',
    't': '52bc5c276688e72126801bd9a41c4cc4',
    '_tb_token_': 'fe76e5ee767a5',
    '__cn_logon__': 'false',
    'xlly_s': '1',
    '__mwb_logon_id__': 'undefined',
    'mwb': 'ng',
    '_csrf_token': '1679361045356',
    '_m_h5_tk': '8078ca4873e9451464851b2c3aeacd75_1679384935913',
    '_m_h5_tk_enc': '11b41d29eb383418ec4eee694335bd49',
    'alicnweb': 'touch_tb_at%3D1679382415008%7Clastlogonid%3Dtb80111606',
    'x5sec': '7b226d746f703b32223a226463373336633665363563376433396164356432373563633437633863363266434a6d7635614147454c4c4b724c61636b4d7a4361786f4d4d7a51314d5455784d4441314e4473784d4c71737a49514751414d3d227d',
    'isg': 'BEFBnYXUwYkYUC2iprC_pu2nUI1bbrVghvMaUqOWM8inimFc6r6KMG3LaP7Mgk2Y',
    'l': 'fBQjVxA4NjmdJT4xBOfwFurza77OIIRAguPzaNbMi9fPOUIB5LINW1M_TWv6CnGVFsepJ3o-P8F6BeYBqgI-nxvTLUjDYHkmngzr905..',
    'tfstk': 'cjYRBVcbHxDkQMHhuan0LgPxe6kdZ1aRp76aJFY47XOgfpUdihTMWRdnV1BNejC..',
}

headers = {
    'authority': 'h5api.m.1688.com',
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    # 'cookie': 'ali_ab=111.2.91.38.1678161716466.4; cna=AbGRHJxN6koCAW8CWyaOFU9H; lid=tb80111606; last_mid=b2b-345151005463a30; __last_loginid__=tb80111606; is_identity=buyer; aliwwLastNum=0; aliwwLastRefresh=1678953729515; cookie2=1b0448f1ce30484930268601ddbe4d18; sgcookie=E100DC85bOZVfIoWOZBBJsHzPU%2FGD3m%2B0I%2BixpzIuvvwrMkJIX71ifgMadX%2F7dIvzoi9Mmj5xzgPpMQSKCNSSNXN6rrj3sUJA8WDCHVdWoIyKuw%3D; t=52bc5c276688e72126801bd9a41c4cc4; _tb_token_=fe76e5ee767a5; __cn_logon__=false; xlly_s=1; __mwb_logon_id__=undefined; mwb=ng; _csrf_token=1679361045356; _m_h5_tk=8078ca4873e9451464851b2c3aeacd75_1679384935913; _m_h5_tk_enc=11b41d29eb383418ec4eee694335bd49; alicnweb=touch_tb_at%3D1679382415008%7Clastlogonid%3Dtb80111606; x5sec=7b226d746f703b32223a226463373336633665363563376433396164356432373563633437633863363266434a6d7635614147454c4c4b724c61636b4d7a4361786f4d4d7a51314d5455784d4441314e4473784d4c71737a49514751414d3d227d; isg=BEFBnYXUwYkYUC2iprC_pu2nUI1bbrVghvMaUqOWM8inimFc6r6KMG3LaP7Mgk2Y; l=fBQjVxA4NjmdJT4xBOfwFurza77OIIRAguPzaNbMi9fPOUIB5LINW1M_TWv6CnGVFsepJ3o-P8F6BeYBqgI-nxvTLUjDYHkmngzr905..; tfstk=cjYRBVcbHxDkQMHhuan0LgPxe6kdZ1aRp76aJFY47XOgfpUdihTMWRdnV1BNejC..',
    'referer': 'https://detail.1688.com/',
    'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'script',
    'sec-fetch-mode': 'no-cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
}

params = {
    'jsv': '2.7.0',
    'appKey': '12574478',
    't': '1679382469848',
    'sign': 'd852269cb09861f5bfe4add9b1d46b5a',
    'api': 'mtop.mbox.fc.common.gateway',
    'v': '1.0',
    'type': 'jsonp',
    'isSec': '0',
    'timeout': '20000',
    'dataType': 'jsonp',
    'callback': 'mtopjsonp5',
    'data': '{"fcGroup":"offer-cbu","fcName":"offerdetail-service","fcArgs":"{\\"serviceName\\":\\"offerSatisfactionService\\",\\"params\\":{\\"memberId\\":\\"b2b-4140837522b9d5d\\",\\"sellerId\\":4140837522,\\"offerId\\":644699678066,\\"isSignedForTm\\":true}}"}',
}

response = requests.get(
    'https://h5api.m.1688.com/h5/mtop.mbox.fc.common.gateway/1.0/',
    params=params,
    cookies=cookies,
    headers=headers,
)