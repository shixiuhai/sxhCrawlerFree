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

import time

cookies = {
    '_m_h5_tk': '3aa81513a98c82ab2c97ae2a5478bb56_1680530445194',
    '_m_h5_tk_enc': '3866c1ae162af3e9911371d4c36d8a2d',
    # cookie2是必须的
    'cookie2': '1085b696d1f6a676817508d84ee6c54f',
 
   
}
t=str(int(time.time())*1000)
appId=str(12574478)
data='{"componentKey":"wp_pc_common_topnav","params":"{\\"memberId\\":\\"b2b-3900072288a5cff\\"}"}'
token=re.findall('_m_h5_tk=(.+?)_', dicToStrCookies(cookies), re.S)[0]
sign=get_sign(token=token,t=t,appId=appId,data=data)