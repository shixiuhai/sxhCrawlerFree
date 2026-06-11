import requests
import execjs
import random

def register_Id(c=32):
    s = "abcdef0123456789"
    webId = ''
    for i in range(c):
        webId += random.choice(s)
    return webId

def register_session():
    url = 'https://edith.xiaohongshu.com/api/sns/web/v1/login/activate'
    headers = {
        "accept": "application/json, text/plain, */*",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-US;q=0.7",
        "cache-control": "no-cache",
        "content-type": "application/json;charset=UTF-8",
        "cookie": f"a1=1879883dcb2xqzqkj7hhp1wtwys56f4jl7omndiyd50000102326; webId={register_Id()}; gid=yYWjYYqdyd1jyYWjYYqfSWf3DJCAuATVWxxUlvfyE9EvM6282Ki4VI888y8JqJK84SqKdfJq; gid.sign=IaDqCp2Q97+mPBsh9MZLtE69xs4=",
        "origin": "https://www.xiaohongshu.com",
        "pragma": "no-cache",
        "referer": "https://www.xiaohongshu.com/",
        "sec-ch-ua": "\"Not_A Brand\";v=\"99\", \"Google Chrome\";v=\"109\", \"Chromium\";v=\"109\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
        "x-b3-traceid":"453f324415a7086f",
        "x-s-common": "2UQAPsHC+aIjqArjwjHjNsQhPsHCH0rjNsQhPaHCH0P1PjhIHjIj2eHjwjQgynEDJ74AHjIj2ePjwjQhyoPTqBPT49pjHjIj2ecjwjHUN0Z1+UHVHdWMH0ijP/W7w/WhP9z0G0Qhqgkly9i7yBYIPg4F47SA+/8f+BkV+9RTJfzk2ncMPeZIPerIP0PU+jHVHdW9H0il+0WlweDlPerEPerUNsQh+UHCHDRd4A8A8AzpP/Q7c0mdzfSA8MzgqMSl40bd/FQOcd4sq9lOp/mxqF4A8FGAHjIj2eWjwjQQPAYUaBzdq9k6qB4Q4fpA8b878FSet9RQzLlTcSiM8/+n4MYP8F8LagY/P9Ql4FpUzfpS2BcI8nT1GFbC/L88JdbFyrSiafp/JDMra7pFLDDAa7+8J7QgabmFz7Qjp0mcwp4fanD68p40+fp8qgzELLbILrDA+9p3JpHlLLI3+LSk+d+DJfRAyfRL+gSl4bYlqg48qDQlJFShtUTozBD6qM8FyFShPo+h4g4U+obFyLS3qd4QyaRAy9+0PFSe/B8QPFRSPopFJeHIzbkA/epSzb+t8nkn4AmQynpS2b87/sTc4BRUqgziLrSN8gY8wBRQcMHlaLpUL94n4FQoqgzaagYbGnpr8Bpn4g4xaLPIqAbl4BEQy7mNanYgnfpSP7+88Fq9GMLMqMSl4okYzBzS8dklPgkDN9pgpF8wagWM8n8M4sRQzLES8SmFcgQCqfYOJM8oag8d8nSl4oL6nn4S2BklJLS3/o4QyLzcz9bTyDS9yBF3a/WhanSC4LQn49lQ4D4B+Bp98Lz/+9Ll4gzeaLP7qFz0O/FjNsQhwaHCP/L9Per9+/cANsQhP/Zjw0rIKc==",
        "x-s": "Ogw6sg4U12wB0gFisgTWsYqv1gOBOBwBslOU0jsGsgF3",
        "x-t": "1681891019012"
    }
    session = requests.post(url,data='{}',headers=headers).json()['data']['session']
    return session

def feed(source_note_id):
    headers = {
        "accept":"application/json, text/plain, */*",
        "accept-encoding":"gzip, deflate, br",
        "accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-US;q=0.7",
        "cache-control":"no-cache",
        "content-type":"application/json;charset=UTF-8",
        "cookie":f"web_session={register_session()}",  # web_session和当前IP或者环境绑定，重新注册后浏览器中的ID也会更新
        "origin":"https://www.xiaohongshu.com",
        "pragma":"no-cache",
        "referer":"https://www.xiaohongshu.com/",
        "sec-ch-ua":"\"Not_A Brand\";v=\"99\", \"Google Chrome\";v=\"109\", \"Chromium\";v=\"109\"",
        "sec-ch-ua-mobile":"?0",
        "sec-ch-ua-platform":"\"Windows\"",
        "sec-fetch-dest":"empty",
        "sec-fetch-mode":"cors",
        "sec-fetch-site":"same-site",
        "user-agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
        "x-s":"1lqJsBVUOjsiO6dk1BspOg9G16O6sgAWslOJ1gkvOgF3",
        "x-t":"1675387207946"
    }
    with open('x-s-t.js', 'r', encoding='utf-8') as f:
        js = f.read()
    crt = execjs.compile(js)
    data = '{"source_note_id":"%s"}'%source_note_id
    # print(data)
    result = crt.call('sign','/api/sns/web/v1/feed',{"source_note_id":"%s"%source_note_id})
    x_s = result["X-s"]
    x_t = result["X-t"]
    headers["x-s"]=x_s
    headers["x-t"]=str(x_t)
    # print(headers)
    feed = 'https://edith.xiaohongshu.com/api/sns/web/v1/feed'
    return requests.post(url=feed, data=data, headers=headers).json()

if __name__ == '__main__':
    #print(register_session())
    result=feed("64106122000000001203d2fb")
    print(result)