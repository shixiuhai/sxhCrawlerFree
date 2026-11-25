import requests

# cookies = {
#     # 'lid': 'tb80111606',
#     # 'ali_ab': '2409:8a28:6ab9:3100:ed07:b541:4c1b:24db.1678108184784.2',
#     # 'cna': 'su2QHDAXHR4BASQJiijj0y+z',
#     'can':'ksz3G0BvnjYBASQJiihwJBCs'
#     # '_bl_uid': 'gLlt4f188z47wjuw0ehFad3kLaqk',
#     # 'ali_apache_track': 'c_mid=b2b-345151005463a30|c_lid=tb80111606|c_ms=1',
#     # '__last_loginid__': 'tb80111606',
#     # 'is_identity': 'buyer',
#     # 'aliwwLastNum': '0',
#     # 'aliwwLastRefresh': '1680087419783',
#     # 'mwb': 'ng',
#     # 't': '3f67e5167347da1dd1edcce6a6d4f268',
#     # 'xlly_s': '1',
#     # 'cookie2': '1085b696d1f6a676817508d84ee6c54f',
#     # 'sgcookie': 'E100g9J%2B78BjmmVCKlKBp15FtX9ZgJdQWpeaTH9jgKuM6iPRBjg7Kjk87s4sG0%2FGn2bfqFT0pAq%2B0crGD%2F4e0UulUSx%2FwtkDKNZxxiK3qAV9%2B1k%3D',
#     # '_tb_token_': 'e53333788f370',
#     # 'csg': 'dcddac38',
#     # 'uc4': 'id4=0%40UgP5GPE5h%2FvopPV87slbXXiXW9ea&nk4=0%40FY4GsvRHfRNKE%2BdeKAlHul09uIRj',
#     # 'ali_apache_tracktmp': 'c_w_signed=Y',
#     # 'last_mid': 'b2b-345151005463a30',
#     # '_csrf_token': '1680523192244',
#     # '_m_h5_tk': '6e86861242f7b41d01db2824dc0496eb_1680542500389',
#     # '_m_h5_tk_enc': '5629b0ece3e3854c07b42eed27afc0d9',
#     # '__cn_logon__': 'false',
#     # '__mwb_logon_id__': 'undefined',
#     # 'alicnweb': 'touch_tb_at%3D1680533520626%7Clastlogonid%3Dtb80111606%7Cshow_inter_tips%3Dfalse',
#     # 'tfstk': 'clAAByY470mm--iGasHubukYwsYAZM4AjrsT6BfmbJOrx6VOiGdH9DMmhNSFD4C..',
#     # 'l': 'fB_5pERlNOhjvODSBOfwPurza77OSIRAguPzaNbMi9fPOn1J50H5W1iwggLvC3GVFs26R3o-P8F6BeYBq3tSnxvOkkyzrzDmnmOk-Wf..',
#     # 'isg': 'BJmZvf3CGSIP48WZzeI3zOK8qIVzJo3YLgvySrtOFUA_wrlUA3adqAfSwIa0-iUQ',
# }
cookies = {
    # 'lid': 'tb80111606',
    'cna': 'ksz3G0BvnjYBASQJiihwJBCs',
    # '_bl_uid': 'jhl7vfw09UCrn9aw9bpCdebfbzXL',
    # '__mwb_logon_id__': 'undefined',
    # '_m_h5_tk': 'a45cc0532078b0e3ce34b748c23a0c36_1680544012086',
    # '_m_h5_tk_enc': 'b95241f802bc53fba5392e1a8c80e1d8',
    # 'mwb': 'ng',
    # '_csrf_token': '1680534654686',
    # 'xlly_s': '1',
    # 'sgcookie': 'E100WCw7P8ZXQ9q3DnLiue3wR%2BuuHXJ7RgSBOR604wz7W2Fj5ar9O9%2F05JdsJd2e6ViFAA78K0aDyVvHblSCRsgoJY3sXa2yP1HaYPBIgw1pluM%3D',
    # '__cn_logon__': 'false',
    # 'cookie2': '17e082bca018a80e82285f6cadbde239',
    # 't': '63ae5af51f0a4c9b3fb187be18705748',
    # '_tb_token_': 'f653e0333e5be',
    # 'taklid': 'cc143af6376b45f8962cb9883b5cc3c7',
    # 'tfstk': 'c_11BOqPpcm6d-VmshaFO1XWauR1ZTqB-RtO5lPkfJeKgUQ1i0GyV_ZRnDA2ke1..',
    # 'l': 'fB_5pERlNOhjvnwhKOfwPurza77OSIRAguPzaNbMi9fPOK5W5ngfW1iwZCYXC3GVFsNHR3PxtFdXBeYBqsY7m72AlzmNZ_DmnmOk-Wf..',
    # 'isg': 'BIiIbmt5eIGTw5QqAisq8qeuWfaaMew789oXEUI51IP2HSiH6kG8yx5blfVtLaQT',
}


headers = {
    'authority': 'detail.1688.com',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'cache-control': 'max-age=0',
    # 'cookie': 'lid=tb80111606; ali_ab=2409:8a28:6ab9:3100:ed07:b541:4c1b:24db.1678108184784.2; cna=su2QHDAXHR4BASQJiijj0y+z; _bl_uid=gLlt4f188z47wjuw0ehFad3kLaqk; ali_apache_track=c_mid=b2b-345151005463a30|c_lid=tb80111606|c_ms=1; __last_loginid__=tb80111606; is_identity=buyer; aliwwLastNum=0; aliwwLastRefresh=1680087419783; mwb=ng; t=3f67e5167347da1dd1edcce6a6d4f268; xlly_s=1; cookie2=1085b696d1f6a676817508d84ee6c54f; sgcookie=E100g9J%2B78BjmmVCKlKBp15FtX9ZgJdQWpeaTH9jgKuM6iPRBjg7Kjk87s4sG0%2FGn2bfqFT0pAq%2B0crGD%2F4e0UulUSx%2FwtkDKNZxxiK3qAV9%2B1k%3D; _tb_token_=e53333788f370; csg=dcddac38; uc4=id4=0%40UgP5GPE5h%2FvopPV87slbXXiXW9ea&nk4=0%40FY4GsvRHfRNKE%2BdeKAlHul09uIRj; ali_apache_tracktmp=c_w_signed=Y; last_mid=b2b-345151005463a30; _csrf_token=1680523192244; _m_h5_tk=6e86861242f7b41d01db2824dc0496eb_1680542500389; _m_h5_tk_enc=5629b0ece3e3854c07b42eed27afc0d9; __cn_logon__=false; __mwb_logon_id__=undefined; alicnweb=touch_tb_at%3D1680533520626%7Clastlogonid%3Dtb80111606%7Cshow_inter_tips%3Dfalse; tfstk=clAAByY470mm--iGasHubukYwsYAZM4AjrsT6BfmbJOrx6VOiGdH9DMmhNSFD4C..; l=fB_5pERlNOhjvODSBOfwPurza77OSIRAguPzaNbMi9fPOn1J50H5W1iwggLvC3GVFs26R3o-P8F6BeYBq3tSnxvOkkyzrzDmnmOk-Wf..; isg=BJmZvf3CGSIP48WZzeI3zOK8qIVzJo3YLgvySrtOFUA_wrlUA3adqAfSwIa0-iUQ',
    'referer': 'https://show.1688.com/',
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

response = requests.get(
    'https://detail.1688.com/offer/617199723214.html',
    cookies=cookies,
    headers=headers,
)
print(response.text)
with open("out.html","w",encoding='utf-8') as f:
    f.write(response.text)