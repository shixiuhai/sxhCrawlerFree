import requests
from urllib.parse import quote
import json
import base64
# lua = '''
# function main(splash, args)
#   local treat = require("treat")
#   local response = splash:http_get("https://s.1688.com/selloffer/offer_search.htm?keywords=%CD%E0%D7%D3&spm=a26352.13672862.searchbox.input&beginPage=1#sm-filtbar")
#     return {
#         png = splash:png(),
#         html=treat.as_string(response.body),
#         url=response.url,
#         status=response.status
#     }
# end
# '''
lua1="""
function main(splash, args)  
    splash:set_custom_headers({["user-agent"] = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
                              ["cookie"]='__wpkreporterwid_=48fccfaa-c12f-4330-8d1b-c424bce69eb7; lastRefresh=1678953403976; aliwwLastRefresh=1678953404827; ali_ab=111.2.91.38.1678161716466.4; cna=AbGRHJxN6koCAW8CWyaOFU9H; t=52bc5c276688e72126801bd9a41c4cc4; _tb_token_=e386ae713e135; xlly_s=1; _csrf_token=1678939125070; sg=641; lid=tb80111606; unb=3451510054; _nk_=tb80111606; last_mid=b2b-345151005463a30; __cn_logon_id__=tb80111606; __last_loginid__=tb80111606; __cn_logon__=true; firstRefresh=1678939155042; is_identity=buyer; __rn_alert__=false; aliwwLastNum=0; __mwb_logon_id__=tb80111606; mwb=ng; alicnweb=touch_tb_at%3D1678941868891%7Clastlogonid%3Dtb80111606; _m_h5_tk=fd2ece8af22eee49e1546cffe8ddb84b_1678959224686; _m_h5_tk_enc=a4efc084cfd6ca51bcd5c8aecab66e0a; _is_show_loginId_change_block_=b2b-345151005463a30_false; _show_force_unbind_div_=b2b-345151005463a30_false; _show_sys_unbind_div_=b2b-345151005463a30_false; _show_user_unbind_div_=b2b-345151005463a30_false; lastRefresh=1678953726639; aliwwLastRefresh=1678953729515; tfstk=c5XVBgDQM-eqxmITJLvNTgTbSxyAaQRMTY-9iPNNNJbiYSRW8sYsW3Y8p3-K4VAc.; l=fBQjVxA4NjmdJgXBBOfwPurza77OSIRAguPzaNbMi9fPOs1J58ARW1M2pTLvC3GVFsnwR3ub1k7yBeYBq7NSnxvTydDOgskmnmOk-Wf..; isg=BJGRxWtBkbLRP_2yViDvVh1XoJ0r_gVw4wrkIXMmjdh3GrFsu04VQD_6uO78Ep2o',
  })
  splash:go("https://s.1688.com/selloffer/offer_search.htm?keywords=%CD%E0%D7%D3&spm=a26352.13672862.searchbox.input&beginPage=1#sm-filtbar")
  
  return {
      html=splash:html(),
      png=splash:png(),
      url=splash:url(),
      cookies=splash:get_cookies()
      }
end
"""
# User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36
url = 'http://192.168.42.130:8050/execute?lua_source=' + quote(lua1)
response = requests.get(url)
print(response.json()['cookies'])
# print(response.json()['html'])
with open('taobao.png', 'wb') as f:
    f.write(base64.b64decode(response.json()['png']))
# import requests
# url = 'http://192.168.42.130:8050/render.png?url=https://www.taobao.com&wait=5&width=1000&height=700'
# response = requests.get(url)
# with open('taobao.png', 'wb') as f:
#     f.write(response.content)