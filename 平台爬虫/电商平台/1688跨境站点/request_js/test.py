import re
import hashlib
# 解析出token
cookie='REDACTED_COOKIE'
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