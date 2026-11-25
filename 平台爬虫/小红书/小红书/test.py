import requests
import json
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
    print(session)
    return session
cookies = {
    # 'xhsTrackerId': '0aa97c49-0ecc-4519-9561-6c2a9b001960',
    # 'xhsTrackerId.sig': 'AloePOx9ItgsrrdnH1g1uJdSZDXEWWbNzpRe5jF2e3U',
    # 'xsecappid': 'xhs-pc-web',
    # 'a1': '187b334463dcaf4kzy8em3ycw3ev8sttn58p4y6mn50000381150',
    # 'webId': 'b2cbb36a757bd1aa33ae163698242f5f',
    # 'gid': 'yYWDqq44q8I0yYWDqq44K2vKqfS0i4TuvYd6Y6IqvSEqdU28hYM994888qYyy288Y42qDjJf',
    # 'gid.sign': 'Ui/aW0yA8k/tuCiM1e44knL0uxg=',
    # 'xhsTracker': 'url=explore&searchengine=baidu',
    # 'xhsTracker.sig': 'u1cFYHAwm89lKbFLL1Y8vp9JcskioXWTa56RKaAB2ys',
    # 'extra_exp_ids': 'yamcha_0327_exp,h5_1208_exp3,ques_clt2',
    # 'extra_exp_ids.sig': 'ETM51AFqVyLPOioG2x0qNaEzMLVwrEIN37uTpfkLqxc',
    # 'webBuild': '2.3.1',
    'web_session': register_session(),
    # 'websectiga': '2845367ec3848418062e761c09db7caf0e8b79d132ccdd1a4f8e64a11d0cac0d',
    # 'sec_poison_id': '27a44456-bfaa-438b-bd40-07fe1b089f25',
}

headers = {
    'authority': 'edith.xiaohongshu.com',
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'content-type': 'application/json;charset=UTF-8',
    # 'cookie': 'xhsTrackerId=0aa97c49-0ecc-4519-9561-6c2a9b001960; xhsTrackerId.sig=AloePOx9ItgsrrdnH1g1uJdSZDXEWWbNzpRe5jF2e3U; xsecappid=xhs-pc-web; a1=187b334463dcaf4kzy8em3ycw3ev8sttn58p4y6mn50000381150; webId=b2cbb36a757bd1aa33ae163698242f5f; gid=yYWDqq44q8I0yYWDqq44K2vKqfS0i4TuvYd6Y6IqvSEqdU28hYM994888qYyy288Y42qDjJf; gid.sign=Ui/aW0yA8k/tuCiM1e44knL0uxg=; xhsTracker=url=explore&searchengine=baidu; xhsTracker.sig=u1cFYHAwm89lKbFLL1Y8vp9JcskioXWTa56RKaAB2ys; extra_exp_ids=yamcha_0327_exp,h5_1208_exp3,ques_clt2; extra_exp_ids.sig=ETM51AFqVyLPOioG2x0qNaEzMLVwrEIN37uTpfkLqxc; webBuild=2.3.1; web_session=0400698ec7a7d7564f7c27267f364b0c59c39b; websectiga=2845367ec3848418062e761c09db7caf0e8b79d132ccdd1a4f8e64a11d0cac0d; sec_poison_id=27a44456-bfaa-438b-bd40-07fe1b089f25',
    'origin': 'https://www.xiaohongshu.com',
    'referer': 'https://www.xiaohongshu.com/',
    'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
    # 'x-b3-traceid': '166fa4b3412931f1',
    'x-s': '1gFWsjcWsgcl025G1iOJZjAbZ2FW1gOk025Ksi1psl53',
    # 'x-s-common': '2UQAPsHC+aIjqArjwjHjNsQhPsHCH0rjNsQhPaHCH0P1PjhIHjIj2eHjwjQgynEDJ74AHjIj2ePjwjQhyoPTqBPT49pjHjIj2ecjwjHUN0P1PaHVHdWMH0ijP/W7G0PA+ec9P9z0GnGFy7kEwBpTP7S04A+S40YA4oz1+/YI+oD9JnhMPeZIPePhP/rMPsHVHdW9H0il+0WU+/DE+/c9+ecENsQh+UHCHd+8prqlPDMPPbDMGDRkprqIyfc9q9kDaDRscLlA87+Pq9qEtFRd/MpAyfPAHjIj2eWjwjQQPAYUaBzdq9k6qB4Q4fpA8b878FSet9RQzLlTcSiM8/+n4MYP8F8LagY/P9Ql4FpUzfpS2BcI8nT1GFbC/L88JdbFyrSiafprcDMra7pFLDDAa7+8J7QgabmFz7Qjp0mcwp4fanD68p40+fp8qgzELLbILrDA+9p3JpHlLLI3+LSk+d+DJfRAyfRL+gSl4bYlqg48qDQlJFShtUTozBD6qM8FyFShPo+h4g4U+obFyLS3qd4QyaRAy9+0PFSe/B8QPFRSPopFJeHIzbkA/epSzb+t8nkn4AmQynpS2b87/sTc4BRUqgziLBF78nTTpAzQ2sTkanYULdkn494NLoz8a/+zLBRUa9L9qgziagW6qA8n4BRQyLM6anSi8n4s+fp/8omiqf89q9kM4rTUnf4S8f+Uwn4fa9p8GMmAagYd8p+M4rkQz/8S8bmF/gQCy/SF8rl1agWMqA+l4bQ1GA4Spf8otFS3G74QyLYF+emj/LS9yobFLAYdanSk8dmn4FbQcFYnafuA8p+I8np3LoznagWA8/mD/7+gGAFRHjIj2eDjw0DAP0cEPAHlPaIj2erIH0ilP/SR',
    'x-t': '1682652202661',
}

data = '{"source_note_id":"643a7b950000000027010ebf"}'

response = requests.post('https://edith.xiaohongshu.com/api/sns/web/v1/feed', cookies=cookies, headers=headers, data=data).text
# a=json.loads(response)
print(json.loads(response))
