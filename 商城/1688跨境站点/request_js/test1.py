import requests 
from urllib import parse 
import time 
import re 
import execjs 
time1 = int(time.time() * 1000) 
with open('./567.js', 'r', encoding='utf-8') as f:     
    ctx = execjs.compile(f.read()) # 执行读取的js代码 
    data = {"cid":"FactoryRankServiceWidget:FactoryRankServiceWidget","methodName":"execute","params":"{\"extParam\":\"{\\\"methodName\\\":\\\"readRelatedRankEntries\\\",\\\"cateId\\\":7,\\\"size\\\":15}\"}"} 
    headers = { 'cookie': 'xlly_s=1; cna=s+HmGas+MCYCAXHwrb3t4n2g; ali_ab=240e:383:515:6f10:7c53:a1a0:ef97:a0ef.1635751613086.3; taklid=13ffc206f13c40139dcae830da1cd7a6; _m_h5_tk=9ef09cb41d7419fc32115e5eb51faa1a_1635776795184; _m_h5_tk_enc=90cb68510dccd56f830c770f0c4c9c16; alicnweb=touch_tb_at%3D1635768129101; unb=3346228600; cookie2=1bc1323f3cdd57911a40c00689bdd4cb; t=ad0b0773e5f83f3f46a8ad3ddbfb3d0b; _tb_token_=73b3e307beabe; __cn_logon__=false; UM_distinctid=17cdb6e180d368-0dd745c063c1f4-57b193e-1fa400-17cdb6e180e8ba; _csrf_token=1635769062782; keywordsHistory=%E7%94%B5%E8%84%91%3B%E7%BE%8E%E5%A6%86%3B%E7%AC%94%E8%AE%B0%E6%9C%AC%E7%94%B5%E8%84%91%3B%E7%94%B7%E7%94%9F%E5%A4%96%E5%A5%97%3B%E7%AB%A5%E8%A3%85%3B%E6%A3%89%E8%A2%AB; tfstk=cRB1Bw2q2V0_qEVqQGZEu20xQkv1ZXiWc5TGfsOGJ1eSpeS1iDDyPyvFiqd9KH1..; l=eBOC4p3VgzVguXHhXOfwourza77t7IRAguPzaNbMiOCP9T5w5HedW6UhmPTeCnGVh6zpR3WAVUVzBeYBqojidj4Kwp0OeOkmn; isg=BOjoTlOAHfQCkTFQpHAklfc6udb6EUwbw0DEqqIZLGNW_YhnSiBDq_m79ZUNTQTz',     'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36' } 
    # token 生成 
    token = re.findall('_m_h5_tk=(.+?)_', headers['cookie'], re.S)[0] 
    appKey = "12574478" 
    p = (token + '&' + str(time1) + '&' + appKey + '&' + str(data)) 
    sign = ctx.call('h', p)
    url = f'https://h5api.m.1688.com/h5/mtop.taobao.widgetservice.getjsoncomponent/1.0/?jsv=2.4.11&appKey=12574478&t={str(time1)}&sign={sign}&api=mtop.taobao.widgetService.getJsonComponent&v=1.0&type=jsonp&isSec=0&timeout=20000&dataType=jsonp&callback=mtopjsonp9&' 
    # 需要转码  因为网页的 urldata是 转码后的 
    urls = url + 'data=' + parse.quote(str(data)) 
    # print(sign) 
    response = requests.get(urls, headers=headers).text 
    print(response)
    
