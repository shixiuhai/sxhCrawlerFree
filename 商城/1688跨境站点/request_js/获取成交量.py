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
    '_bl_uid': 'm0lL0fdjhbgkj176tbL3lg26ywL0',
    '_csrf_token': '1679361045356',
    '_m_h5_tk': '8078ca4873e9451464851b2c3aeacd75_1679384935913',
    '_m_h5_tk_enc': '11b41d29eb383418ec4eee694335bd49',
    'alicnweb': 'touch_tb_at%3D1679382415008%7Clastlogonid%3Dtb80111606',
    'tfstk': 'cfLNBgaSXV3aOoOxewb2LbNWxMOFZFIc4y5Ajxd_Dd5TpBSGiSwAt93RT_FUnGf..',
    'l': 'fBQjVxA4NjmdJ8P8BOfwFurza77OIIRAguPzaNbMi9fPOUjB5LINW1M_TWp6CnGVFsFHJ3o-P8F6BeYBqijrQ2EQLUjDYhDmnmOk-Wf..',
    'isg': 'BEVFkaF4jd3kp6keAqxj8gETVIF_AvmUGqeezkeqD3yL3mVQDlJGZNH47AIonhFM',
}
#cookies = [{'domain': '.1688.com',  'name': 'tfstk',   'value': 'c_blBN1SSg-WwrzdhTT7SbfPJRxPZrZyFw7VuSMeonzl21_ViPiqbvHaiLe_UD1..'}, {'domain': '.1688.com',   'name': 'is_identity',  'value': 'buyer'}, {'domain': '.1688.com',  'name': 'aliwwLastRefresh',  'value': '1679217487732'}, {'domain': '.1688.com',  'name': 'mwb',  'value': 'ng'}, {'domain': '.1688.com',  'name': 'firstRefresh',  'value': '1679217486703'}, {'domain': '.1688.com',  'name': 'last_mid',  'value': 'b2b-345151005463a30'}, {'domain': '.1688.com', 'name': '__cn_logon_id__',  'value': 'tb80111606'}, {'domain': '.1688.com',  'name': 'uc4', 'value': 'id4=0%40UgP5GPE5h%2FvopPV87sbnzf8cqwZE&nk4=0%40FY4GsvRHfRNKE%2BdeKAb%2BBqEZanqS'}, {'domain': '.1688.com', 'name': '_show_user_unbind_div_',  'value': 'b2b-345151005463a30_false'}, {'domain': '.1688.com',  'name': 'unb',  'value': '3451510054'}, {'domain': '.1688.com',  'name': 'l',  'value': 'fBrWhCeVNNpWHQCkBOfwFurza77tIIRAguPzaNbMi9fPOB7p5chdW1MyNpA9CnGVFsvyR3o-P8F6BeYBqsVidj4KuQIXdpMmngzr905..'}, {'domain': '.1688.com',  'name': '__mwb_logon_id__', 'value': 'tb80111606'}, {'domain': '.1688.com',  'name': '_m_h5_tk',  'value': '98162fe66cb0984c93172076f87831d1_1679224666310'}, {'domain': '.1688.com',   'name': 'ali_apache_track',  'value': 'c_mid=b2b-345151005463a30|c_lid=tb80111606|c_ms=1'}, {'domain': '.1688.com', 'name': 'csg',  'value': '4985d3d7'}, {'domain': '.1688.com',  'name': 'sgcookie',  'value': 'E1008MgSWIwrwokjGCvsNl1u2zn73%2B50Bu2ldISMI7M286O0ny0r1f7oql70hw%2FBvucf5ATdjHf6WJi7Zqz%2FhDMp0MCPBiGxGRc8L62JRncCOUg%3D'}, {'domain': '.1688.com',  'name': 'cookie17',  'value': 'UNQyQxMqUdx1nQ%3D%3D'}, {'domain': '.1688.com','name': '_show_force_unbind_div_',  'value': 'b2b-345151005463a30_false'}, {'domain': '.1688.com',  'name': 'cookie1',  'value': 'U%2BGWz3AsFiX%2BQb4KVw17j51DAUP9jxfiN9Dd%2FomAUJ8%3D'}, {'domain': '.1688.com',  'name': 'alicnweb',   'value': 'touch_tb_at%3D1679217471072%7Clastlogonid%3Dtb80111606'}, {'domain': '.1688.com', 'name': '_csrf_token', 'value': '1679217481442'}, {'domain': '.1688.com',  'name': '__rn_alert__',  'value': 'false'}, {'domain': '.1688.com',  'name': '_show_sys_unbind_div_',  'value': 'b2b-345151005463a30_false'}, {'domain': '.1688.com', 'name': '_is_show_loginId_change_block_', 'value': 'b2b-345151005463a30_false'}, {'domain': '.1688.com',  'name': 'cna', 'value': 'O8GdHMyBOXICASe8CIUukYlA'}, {'domain': '.1688.com',  'name': '__cn_logon__',  'value': 'true'}, {'domain': '.1688.com',  'name': 'lid', 'value': 'tb80111606'}, {'domain': '.1688.com',   'name': 'xlly_s',   'value': '1'}, {'domain': '.1688.com',  'name': 'sg',   'value': '641'}, {'domain': '.1688.com', 'name': '_tb_token_',    'value': '7e85b9b509e56'}, {'domain': '.1688.com',  'name': 't', 'value': 'd2b7a2195096dbb3e2263c7c904aa947'}, {'domain': '.1688.com',   'name': 'isg',    'value': 'BGho0Zq6mB2Nt7SZAbKVL0DhOVZ6kcyb9-TjOSKZtOPWfQjnyqGcK_73cRWNzYRz'}, {'domain': '.1688.com',  'name': 'ali_apache_tracktmp',    'value': 'c_w_signed=Y'}, {'domain': '.1688.com',   'name': '_m_h5_tk_enc',    'value': '2d655479d2b87923811cfd4e78f933b2'}, {'domain': '.1688.com',   'name': 'lastRefresh',    'value': '1679217486703'}, {'domain': '.1688.com',  'name': '_nk_',   'value': 'tb80111606'}, {'domain': '.1688.com', 'name': 'cookie2',  'value': '1e276dc2818a8969861af51fe3c7f46a'}]

headers = {
    'authority': 'detail.1688.com',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'cache-control': 'max-age=0',
    # 'cookie': 'ali_ab=111.2.91.38.1678161716466.4; cna=AbGRHJxN6koCAW8CWyaOFU9H; lid=tb80111606; last_mid=b2b-345151005463a30; __last_loginid__=tb80111606; is_identity=buyer; aliwwLastNum=0; aliwwLastRefresh=1678953729515; cookie2=1b0448f1ce30484930268601ddbe4d18; sgcookie=E100DC85bOZVfIoWOZBBJsHzPU%2FGD3m%2B0I%2BixpzIuvvwrMkJIX71ifgMadX%2F7dIvzoi9Mmj5xzgPpMQSKCNSSNXN6rrj3sUJA8WDCHVdWoIyKuw%3D; t=52bc5c276688e72126801bd9a41c4cc4; _tb_token_=fe76e5ee767a5; __cn_logon__=false; xlly_s=1; __mwb_logon_id__=undefined; mwb=ng; _bl_uid=m0lL0fdjhbgkj176tbL3lg26ywL0; _csrf_token=1679361045356; _m_h5_tk=8078ca4873e9451464851b2c3aeacd75_1679384935913; _m_h5_tk_enc=11b41d29eb383418ec4eee694335bd49; alicnweb=touch_tb_at%3D1679382415008%7Clastlogonid%3Dtb80111606; tfstk=cfLNBgaSXV3aOoOxewb2LbNWxMOFZFIc4y5Ajxd_Dd5TpBSGiSwAt93RT_FUnGf..; l=fBQjVxA4NjmdJ8P8BOfwFurza77OIIRAguPzaNbMi9fPOUjB5LINW1M_TWp6CnGVFsFHJ3o-P8F6BeYBqijrQ2EQLUjDYhDmnmOk-Wf..; isg=BEVFkaF4jd3kp6keAqxj8gETVIF_AvmUGqeezkeqD3yL3mVQDlJGZNH47AIonhFM',
    'referer': 'https://food.1688.com/',
    'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'document',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'same-site',
    'sec-fetch-user': '?1',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
}

# params = {
#     'spm': 'a260c.14127409.jtqvgucl.2.62b874beaEZM5G',
# }
for i in range(1):
    import time
    time.sleep(1)
    response = requests.get('https://detail.1688.com/offer/641596282651.html', cookies=cookies, headers=headers)
    with open('成交.html',"w",encoding='utf-8') as f:
        f.write(response.text)