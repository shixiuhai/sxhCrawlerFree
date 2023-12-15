import json
import requests
from fastapi import FastAPI, BackgroundTasks
import uvicorn
import asyncio
import time
from concurrent.futures import ThreadPoolExecutor
import execjs

app = FastAPI()


class GetMusic:
    def __init__(self):
        self.cookies = {
            '_iuqxldmzr_': '32',
            '_ntes_nnid': '0fd74720d9ffb9daebb1ac288550f0ec,1691471933489',
            '_ntes_nuid': '0fd74720d9ffb9daebb1ac288550f0ec',
            'WEVNSM': '1.0.0',
            'WNMCID': 'ifscil.1691471934744.01.0',
            'WM_TID': '2LSd709SxqtAUFFRRELVkrdKw3YvasSj',
            'ntes_utid': 'tid._.MNiPDCnpvqpEUxQRFAaAwvILljYq557r._.0',
            'sDeviceId': 'YD-hZT1MPE5gZlFBkUFVFLVx%2BNfkmJu8%2BFV',
            'NMTID': '00OqMdP43MJmP-_m0uosE9xiFHL_i0AAAGJ05V-Ag',
            'nts_mail_user': '15256728901@163.com:-1:1',
            'NTES_P_UTID': 'M0yynRmkWXoj4OAJ6EJDFwVmhcy2fkpa|1699495334',
            'P_INFO': 'm15256728901_2@163.com|1699495334|1|mail163|00&99|zhj&1695956345&nsh#zhj&330700#10#0#0|152901&1|newsclient|15256728901@163.com',
            'WM_NI': 'lqYDHWsHus2wnHRsknm4YItfBPt7VjTIDkxYMbw6T6vQxlXGqkHNy7tJ8Yub%2BB5RzTOEur4nxvNW9wdfX3LtHRKcprrPUoeQFA022Qr2g3NGu96p6ECKe%2FrMyy6szPh9YjQ%3D',
            'WM_NIKE': '9ca17ae2e6ffcda170e2e6eed9ea4db4be9bb5b733b5eb8ba7c15f978a9b86d83395b2a5bae96b9390add8f52af0fea7c3b92ab0af97a5cb5db198bb94b17dae989e94ea66afec97aaf76e8290bcd8d56298978c8cfb538fbeb9d7d73eb68fb88ddb4db3b588affc3db896f8baf86ae99efbb3f9608d9bbb93b766bcaa82b8bc7da8ba98d4cf808c8e8584f37ab2909b90e85b869f00d3b15bb2eea9d4cd4db7e7fa91b54f8195abd0f147bba7fa94f95cace7978bd437e2a3',
            '__snaker__id': 'acb4UUR9LQ5cg1mt',
            'gdxidpyhxdE': '%2BP2kR1kb3cGj7fRAfRHftScQzsP%5CK6G0N%2FUZo%2BWvdtzUlhYul2U5I8N1QUgyV%5CfvyneaaUNxu50Ed%2BsLnpC%5CEbG%5CJmyI%2FJ3tRGc9AIVvI3%5CYGqtGXUt%5CNX9Zo2AfC%2F2D1%5C5B193GIp3oPR%2FyX%2BbQl%2Fr6%5CMXvymrXXe%2FHO8duKoNIy5Ng%3A1702625585549',
            'MUSIC_U': '006E7C3579E85A3B621AE140D02E1071DDDC03B9A433AA6786AAAF6225DE1F3B7AC0517BCF96D609228996D223AB093B1F5DE6D40D08DB8B5685F6B9347C4571B93AEF56E3514BC06E001EC4701DBD4B79ECDB4186E6B01FC851DE6AE586362D62BBF3F8643079337AA43153B046A7A3EF102850BE0BD7F4F9E71AC47E2E96FB1818CE8B4C62DCB4C642C5E0096FEB1B450E683A9663D1AE9863C0FE20FCE22FCEA37C1FA434B2520ABC9F18F52E60988368DB5B20A4BD8E6118EB198993363990CBB31D68A7703DF7DD8F3C17DD1BAEA31591C8A0E150D8D2849CFCC5DE8BCDFCAFE80EFC947D7632F6DB55FB703C5B396F17DD4EA6C05346649786FAF57585372EC4A822516DC892E200545B486DD38AA5DD3F04FC35AE0B0778F7D056801ED186563D7CB490A75132E88BADCBCD7F6CEFACA62E554AD0CD1F4AE62101101FBB13948000A5DAF9B3211F2114ECC1949E28A8DFF5D662756A030349D1ED4B6B13',
            '__csrf': '7f36153eb9531019bcae3de10e098903',
            'ntes_kaola_ad': '1',
            'JSESSIONID-WYYY': 'dEHrY8VpcrPShWKhjZrrfYoEtq6dgHwq%2BnDJjpgjXQkqIUBnwSEIFemb5coyqUQH2g84rzrpOthvBB4kiASgBReOsTVS5HljUQBKxHHyqdYlq3lsHp%2BX6c0n%2F8GI1rJxj42bPGoqAgMs0cZU%5CajH%5CB6My6M%2Ba63WlzjeDz%2Bcs5%2BOAR9n%3A1702629868310',
        }
        self.headers = {
            # 'authority': 'music.163.com',
            # 'accept': '*/*',
            # 'accept-language': 'zh-CN,zh;q=0.9',
            # 'content-type': 'application/x-www-form-urlencoded',
            # 'cookie': '_iuqxldmzr_=32; _ntes_nnid=0fd74720d9ffb9daebb1ac288550f0ec,1691471933489; _ntes_nuid=0fd74720d9ffb9daebb1ac288550f0ec; WEVNSM=1.0.0; WNMCID=ifscil.1691471934744.01.0; WM_TID=2LSd709SxqtAUFFRRELVkrdKw3YvasSj; ntes_utid=tid._.MNiPDCnpvqpEUxQRFAaAwvILljYq557r._.0; sDeviceId=YD-hZT1MPE5gZlFBkUFVFLVx%2BNfkmJu8%2BFV; NMTID=00OqMdP43MJmP-_m0uosE9xiFHL_i0AAAGJ05V-Ag; nts_mail_user=15256728901@163.com:-1:1; NTES_P_UTID=M0yynRmkWXoj4OAJ6EJDFwVmhcy2fkpa|1699495334; P_INFO=m15256728901_2@163.com|1699495334|1|mail163|00&99|zhj&1695956345&nsh#zhj&330700#10#0#0|152901&1|newsclient|15256728901@163.com; WM_NI=lqYDHWsHus2wnHRsknm4YItfBPt7VjTIDkxYMbw6T6vQxlXGqkHNy7tJ8Yub%2BB5RzTOEur4nxvNW9wdfX3LtHRKcprrPUoeQFA022Qr2g3NGu96p6ECKe%2FrMyy6szPh9YjQ%3D; WM_NIKE=9ca17ae2e6ffcda170e2e6eed9ea4db4be9bb5b733b5eb8ba7c15f978a9b86d83395b2a5bae96b9390add8f52af0fea7c3b92ab0af97a5cb5db198bb94b17dae989e94ea66afec97aaf76e8290bcd8d56298978c8cfb538fbeb9d7d73eb68fb88ddb4db3b588affc3db896f8baf86ae99efbb3f9608d9bbb93b766bcaa82b8bc7da8ba98d4cf808c8e8584f37ab2909b90e85b869f00d3b15bb2eea9d4cd4db7e7fa91b54f8195abd0f147bba7fa94f95cace7978bd437e2a3; __snaker__id=acb4UUR9LQ5cg1mt; gdxidpyhxdE=%2BP2kR1kb3cGj7fRAfRHftScQzsP%5CK6G0N%2FUZo%2BWvdtzUlhYul2U5I8N1QUgyV%5CfvyneaaUNxu50Ed%2BsLnpC%5CEbG%5CJmyI%2FJ3tRGc9AIVvI3%5CYGqtGXUt%5CNX9Zo2AfC%2F2D1%5C5B193GIp3oPR%2FyX%2BbQl%2Fr6%5CMXvymrXXe%2FHO8duKoNIy5Ng%3A1702625585549; MUSIC_U=006E7C3579E85A3B621AE140D02E1071DDDC03B9A433AA6786AAAF6225DE1F3B7AC0517BCF96D609228996D223AB093B1F5DE6D40D08DB8B5685F6B9347C4571B93AEF56E3514BC06E001EC4701DBD4B79ECDB4186E6B01FC851DE6AE586362D62BBF3F8643079337AA43153B046A7A3EF102850BE0BD7F4F9E71AC47E2E96FB1818CE8B4C62DCB4C642C5E0096FEB1B450E683A9663D1AE9863C0FE20FCE22FCEA37C1FA434B2520ABC9F18F52E60988368DB5B20A4BD8E6118EB198993363990CBB31D68A7703DF7DD8F3C17DD1BAEA31591C8A0E150D8D2849CFCC5DE8BCDFCAFE80EFC947D7632F6DB55FB703C5B396F17DD4EA6C05346649786FAF57585372EC4A822516DC892E200545B486DD38AA5DD3F04FC35AE0B0778F7D056801ED186563D7CB490A75132E88BADCBCD7F6CEFACA62E554AD0CD1F4AE62101101FBB13948000A5DAF9B3211F2114ECC1949E28A8DFF5D662756A030349D1ED4B6B13; __csrf=7f36153eb9531019bcae3de10e098903; ntes_kaola_ad=1; JSESSIONID-WYYY=dEHrY8VpcrPShWKhjZrrfYoEtq6dgHwq%2BnDJjpgjXQkqIUBnwSEIFemb5coyqUQH2g84rzrpOthvBB4kiASgBReOsTVS5HljUQBKxHHyqdYlq3lsHp%2BX6c0n%2F8GI1rJxj42bPGoqAgMs0cZU%5CajH%5CB6My6M%2Ba63WlzjeDz%2Bcs5%2BOAR9n%3A1702629868310',
            # 'nm-gcore-status': '1',
            # 'origin': 'https://music.163.com',
            'referer': 'https://music.163.com/search/',
            # 'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            # 'sec-ch-ua-mobile': '?0',
            # 'sec-ch-ua-platform': '"Windows"',
            # 'sec-fetch-dest': 'empty',
            # 'sec-fetch-mode': 'cors',
            # 'sec-fetch-site': 'same-origin',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        }


        self.session = requests.Session()
        self.session.headers = self.headers
        self.session.cookies.update(self.cookies)

        self.conmment_url = 'https://music.163.com/weapi/v1/resource/comments/R_SO_4_{}?csrf_token='  # 评论
        self.lyric_url = 'https://music.163.com/weapi/song/lyric?csrf_token='  # 歌词
        self.music_url = 'https://music.163.com/weapi/song/enhance/player/url?csrf_token='  # 歌曲
        self.url = 'https://music.163.com/weapi/cloudsearch/get/web?csrf_token='  # 搜索歌曲列表，无歌曲链接

    def get_params_and_encSecKey(self, song=None, page=1, size=30):
        '''
        获取什么就返回所需要两个参数
        1. 歌曲
        2. 歌词
        3. 评论  默认
        4. 搜索的歌曲列表
        :param song:
        :return:
        '''
        if isinstance(song, int):
            data = {"ids": [song], "br": 128000, "csrf_token": ""}
        elif isinstance(song, str) and song.isdigit():
            data = {"id": song, "lv": -1, "tv": -1, "csrf_token": ""}
        elif song == None:
            data = {}
        else:
            data = {"hlpretag": "<span class=\"s-fc7\">", "hlposttag": "</span>", "s": song, "type": "1", "offset": "%s"%(page-1),
                    "total": "true", "limit": "%s"%size, "csrf_token": ""}
           
        # song = str(data)
        song = json.dumps(data)
        # print(song)
        # song = data
        with open('params_sxh.js', 'r', encoding='UTF-8') as f:
            js_code = f.read()
            context = execjs.compile(js_code,"./")
            # print(context)
            result = context.call("myFunction", song)
            print(result)
        # result = {'params': 'L/udE/D+1GPdsBA69qgvPZRSezkGyTaEvdk9nAWU2ixRGucShwkhJART7kS65p+ZLea5pDDpRbB+tDMwTJq0xyed9D/MaKXkhKUgDkoIIkAJcpR4Gi5KwfV1wcA6x0AJymFB16IIu9QtzYEk+6mDpKkdISPHkxAq+J8bPDLz7b9M1DMOpkMrBOG5dGuYZhSc1hacmkn/E2c9cPPwprFbiTApN3LIr8hhR38Sp/2UNHnE77aC200xFktJqgSBWfGu7WCduj2yW+X2Wy+RKZTde07oCyo/8v1kdx/oXdPrOU+LwgNFachNIFfmlM9pSljj', 'encSecKey': 'd34f73db17e6979105b5d9a097b7ef40fc267f9e0868ad94c23c2a2db1782bed12444d12c304c3f3a9b4e5ca97794839befaa2cbf9e889f2be6cf015e2ac604eb816dff8e67fe69c4509d7b8b22a9b550d0d3b62c0e324204211ff91158d7273e134192bd1cd6c0851083f56087db2b9926a02a3f57488c737eec5850134f1ab'}
        return {
            'params': result["encText"],
            'encSecKey': result["encSecKey"]
        }

    def get_music_list_info(self, name:str, page:int=1, size:int=10):
        '''
        获取歌曲详情：歌名+歌曲id+作者
        :param name:
        :return:
        '''
        data = self.get_params_and_encSecKey(name,page,size)
        res = self.session.post(self.url, data=data)  # 歌曲
        song_info = res.json()['result']['songs']
        count = res.json()['result']['songCount']
        return {
            "song_info": song_info,
            "count":  count
        }
        # print(song_info)
        # 所有的歌曲
        # for song in song_info:
        #     song_name = song['name']
        #     song_id = song['id']
        #     songer = song['ar'][0]['name']
        #     print(song_name, '\t', song_id, '\t', songer)
        #     # self.get_music_url(song_id)
        #     # self.get_music_lyric(song_id)
        #     # self.get_music_comment(song_id)
        #     break

    def get_music_url(self, id):
        '''
        获取歌曲URL链接
        :param id:
        :return:
        '''
        data = self.get_params_and_encSecKey(id)
        res = self.session.post(self.music_url, data=data)
        song_url = res.json()['data'][0]['url']
        print(song_url)

    def get_music_lyric(self, id_str):
        '''
        获取歌词
        :param id_str:
        :return:
        '''
        data = self.get_params_and_encSecKey(str(id_str))
        res = self.session.post(self.lyric_url, data=data)
        lyric = res.json()['lrc']['lyric']
        print(lyric)

    def get_music_comment(self, song_id):
        '''
        获取歌曲评论: 评论人+内容+头像
        :param song_id:
        :return:
        '''
        data = self.get_params_and_encSecKey()
        comment = self.session.post(self.conmment_url.format(str(song_id)), data=data)
        com_list = comment.json()['hotComments']
        for com in com_list:
            content = com['content']
            nickname = com['user']['nickname']
            user_img = com['user']['avatarUrl']
            print(nickname, '!!!!' + content + '!!!!', user_img)





@app.get("/")
def read_item(name:str, page:int=1, size:int=10):
    Msuic = GetMusic()
    print(name, page, size)
    return Msuic.get_music_list_info(name, page, size)

def backgroud_task_sync():
    while True:
        try:
            time.sleep(3600)
            requests.get("http://127.0.0.1:9001?name='这世界'&page=1&size=10")
        except Exception as error:
            print(error)
            time.sleep(3600)

async def run_sync_background_task_in_executor():
    """
    通过线上实现异步里调用同步服务
    """
    with ThreadPoolExecutor() as executor:
        await asyncio.get_event_loop().run_in_executor(executor,  backgroud_task_sync())


# 定义个启动自启动服务
async def startup_event():
    # Add the background task when the application starts
    asyncio.gather(run_sync_background_task_in_executor())
    # asyncio.create_task(background_task_by_update_ktv_song())
    # await background_task_by_update_ktv_song()
    
# app.add_event_handler("startup", startup_event)

if __name__ == '__main__':
    # uvicorn.run("search_wangyiyun:app", host="0.0.0.0", port=9001, workers=1)
    Msuic = GetMusic()
    print(Msuic.get_music_list_info("这世界", 1, 30))
    
    