import requests

cookies = {
    'xhsTrackerId': '2e312fd4-079c-427b-8ad4-c712981ba32f',
    'xhsTrackerId.sig': 'Wa3qT1VDFzCEXCJrrE0nded0Ysl7GrbB1OjRK2omM0M',
    'extra_exp_ids': 'yamcha_0327_exp,h5_1208_exp3,ques_exp1',
    'extra_exp_ids.sig': 'w9AsUUGxef90M-4Z5VfjRwwhB2K939rTZnKSUXm2_EI',
    'webBuild': '2.3.1',
    'xsecappid': 'xhs-pc-web',
    'a1': '187c2d37a8ez4972sqe27iyfvwm99wa23ulzx1v8550000197937',
    'webId': '73f3028bd737e92845db326dd3d176be',
    'gid': 'yYWSJfqYJYqjyYWSJfqW07yhYdu4jWJMAdJW1Y23vihE6u28jjE0JC888yjWjqW8idYSS2dJ',
    'gid.sign': 'JN3geWfWcuopcvitgfK2pjWwakQ=',
    'web_session': '030037a37927e955d963d13532234aae1cd1b2',
    'websectiga': '2845367ec3848418062e761c09db7caf0e8b79d132ccdd1a4f8e64a11d0cac0d',
    'sec_poison_id': '50e1e535-3632-49b3-b961-937e2f2ef91c',
}

headers = {
    'authority': 'www.xiaohongshu.com',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7',
    'cache-control': 'max-age=0',
    # 'cookie': 'xhsTrackerId=2e312fd4-079c-427b-8ad4-c712981ba32f; xhsTrackerId.sig=Wa3qT1VDFzCEXCJrrE0nded0Ysl7GrbB1OjRK2omM0M; extra_exp_ids=yamcha_0327_exp,h5_1208_exp3,ques_exp1; extra_exp_ids.sig=w9AsUUGxef90M-4Z5VfjRwwhB2K939rTZnKSUXm2_EI; webBuild=2.3.1; xsecappid=xhs-pc-web; a1=187c2d37a8ez4972sqe27iyfvwm99wa23ulzx1v8550000197937; webId=73f3028bd737e92845db326dd3d176be; gid=yYWSJfqYJYqjyYWSJfqW07yhYdu4jWJMAdJW1Y23vihE6u28jjE0JC888yjWjqW8idYSS2dJ; gid.sign=JN3geWfWcuopcvitgfK2pjWwakQ=; web_session=030037a37927e955d963d13532234aae1cd1b2; websectiga=2845367ec3848418062e761c09db7caf0e8b79d132ccdd1a4f8e64a11d0cac0d; sec_poison_id=50e1e535-3632-49b3-b961-937e2f2ef91c',
    'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'document',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-user': '?1',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
}

response = requests.get('https://www.xiaohongshu.com/explore/64106122000000001203d2fb', cookies=cookies, headers=headers)
print(response.text)