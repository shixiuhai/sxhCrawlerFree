import re
import hashlib
# 解析出token
cookie='lid=tb80111606; ali_ab=2409:8a28:6ab9:3100:ed07:b541:4c1b:24db.1678108184784.2; cna=su2QHDAXHR4BASQJiijj0y+z; _bl_uid=gLlt4f188z47wjuw0ehFad3kLaqk; ali_apache_track=c_mid=b2b-345151005463a30|c_lid=tb80111606|c_ms=1; __last_loginid__=tb80111606; is_identity=buyer; aliwwLastNum=0; aliwwLastRefresh=1680087419783; alicnweb=touch_tb_at%3D1680323384754%7Clastlogonid%3Dtb80111606%7Cshow_inter_tips%3Dfalse; _m_h5_tk=3aa81513a98c82ab2c97ae2a5478bb56_1680530445194; _m_h5_tk_enc=3866c1ae162af3e9911371d4c36d8a2d; mwb=ng; t=3f67e5167347da1dd1edcce6a6d4f268; xlly_s=1; _tb_token_=e53333788f370; sg=641; unb=3451510054; __cn_logon__=true; __cn_logon_id__=tb80111606; ali_apache_tracktmp=c_w_signed=Y; _nk_=tb80111606; last_mid=b2b-345151005463a30; _csrf_token=1680523192244; __mwb_logon_id__=tb80111606; tfstk=cVAVB0AWFjh4G9Ytv_fw4nIDW1ufZTjGA77FncQRFbZ-vOXci9EOr36RzNzzjtf..; l=fB_5pERlNOhjvHozBOfaFurza77OSIRYYuPzaNbMi9fPOYBX5XpRW1iwq0xWC3GVFs5vR3o-P8F6BeYBq3tSnxv9ZflZlqMmngzr905..; isg=BDY2QaTyTqsxoTrgNpPgNamdh2w4V3qRlYrt06AfIpm049Z9COfKoZyT_7-P0HKp'
token = re.findall('_m_h5_tk=(.+?)_', cookie, re.S)[0]
# print(token) 
# 使用md5算法
# token 从 cookies中提取出
# h(d.token + "&" + i + "&" + g + "&" + c.data)
s="3aa81513a98c82ab2c97ae2a5478bb56"+"&"+"1680527099252"+"&"+"12574478"+"&"+"{\"componentKey\":\"wp_pc_common_header\",\"params\":\"{\\\"memberId\\\":\\\"b2b-3900072288a5cff\\\"}\"}"

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

import requests
import time

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
t=str(int(time.time())*1000)
appId=str(12574478)
data='{"componentKey":"wp_pc_common_topnav","params":"{\\"memberId\\":\\"b2b-3900072288a5cff\\"}"}'
token=re.findall('_m_h5_tk=(.+?)_', dicToStrCookies(cookies), re.S)[0]
sign=get_sign(token=token,t=t,appId=appId,data=data)
import requests

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
print(response.cookies)

cookies['_m_h5_tk']=response.cookies['_m_h5_tk']
cookies['_m_h5_tk_enc']=response.cookies['_m_h5_tk']
t=response.cookies['_m_h5_tk'].split("_")[1]
print(t)
# t=str(int(time.time())*1000)
appId=str(12574478)
data='{"componentKey":"wp_pc_common_topnav","params":"{\\"memberId\\":\\"b2b-3900072288a5cff\\"}"}'
token=re.findall('_m_h5_tk=(.+?)_', dicToStrCookies(cookies), re.S)[0]
sign=get_sign(token=token,t=t,appId=appId,data=data)

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