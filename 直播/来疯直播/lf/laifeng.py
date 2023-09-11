import requests
import execjs
import json
import time
import os
import schedule
#os.chdir(os.path.dirname(__file__))
class LF:
    def __init__(self) -> None:
        # 默认传递使用的cookie
        self.broCookies={
            'mk': '339201ea4efa4d25ac12010539b1ce4a',
            'uk': '2080306434',
            'xlly_s': '1',
            'anchor-task-tips': 'vistived',
            'fansTuan-tips': 'vistived',
            'cna': 'NKWNHIfYgzcCAW8CWyb3taec',
            '_m_h5_tk': 'e6099cf2a63171c02027e25d21f6fb34_1678415547138',
            '_m_h5_tk_enc': '8752b6179c76b95f7ecc5f9c66550974',
            'isg': 'BJOTx03w87BV3bg71pM1er4DIhe9SCcKraQmm0WwdrLpxLJmzRl4WmJc-jSq5H8C',
            '__ysuid': '1678411168839Ipl',
            'imk': 'MjA4MDMwNjQzNC0wLTE2Nzg0MTExNzAyNjMtMTY3ODQ5NzU3MDI2Mw%3D%3D-960F99893B38D34CDB89867DA1D47635',
        }   
    def dicToStrCookies(self)->str:
        strCookies=""
        for key in self.broCookies:
            strCookies=strCookies+(key+"="+self.broCookies[key]+";")
        return strCookies[:-1]
    # 获取主播信息
    def getAnchor(self):
        anchorList=[]
        anchorCount=0
        page=1
        while True:
            params = {
                'categoryId': '-1',
                'sort': '0',
                'page': '%s'%page,
                '_': '{}'.format(int(time.time())*1000),
            }
            headers = {
                'authority': 'www.laifeng.com',
                'accept': 'application/json, text/javascript, */*; q=0.01',
                'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
                # 'cookie': 'mk=3a62ce2042dc46d296e25f500d0d3404; uk=2083661611; anchor-task-tips=vistived; fansTuan-tips=vistived; cna=AbGRHJxN6koCAW8CWyaOFU9H; _m_h5_tk=dafd6cd9ba7399ec4aec6be8ea0292af_1678674883199; _m_h5_tk_enc=8f378e69378c7e0cfec37129ea0fb2f5; xlly_s=1; isg=BKWlk1ENLapp1kny8c0dMTustGHf4ll07-5wbaeKYVzrvsUwbzJpRDNfSCLIvnEs; imk=MjA4MzY2MTYxMS0wLTE2Nzg2NzA0NzkyMzktMTY3ODc1Njg3OTIzOQ%3D%3D-DADBF812B63830DDE51744FCA4BDF70F; __ysuid=1678670479503cpC',
                'referer': 'https://www.laifeng.com/category/center?spm=a2h55.8996835.lf_header_nav.5~5~5~1~3!2~5~A',
                'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-origin',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
                'x-requested-with': 'XMLHttpRequest',
            }
            # 第一次请求
            response = requests.get('https://www.laifeng.com/category/detail', params=params,  headers=headers)
            # 当请求成功时
            if response.json()['response']["msg"]=="成功":
                anchorItems=response.json()['response']['data']['data']['items']
                for anchorItem in anchorItems:
                    time.sleep(0.3)
                    if anchorItem["liveStatus"]==1:
                        anchorVideo=self.getAnchorVideo(anchorItem["roomId"])
                        if anchorVideo=="":
                            break
                        returnMsg={
                            'anchorId': anchorItem["anchorId"],
                            'anchorNickname':anchorItem["nickName"],
                            'streamUrl':anchorVideo["playUrl"]
                        }
                        anchorList.append(returnMsg)
            anchorCount=len(anchorList)
            if anchorCount/(40*page)>1:
                page=page+1
            else:
                break
        # 写入文本中
        self.writeAnchorTxt(anchorList)
    # 获取主播房间信息
    def getAnchorRoom(self):
        pass
    # 获取sign函数
    def getSign(self,cookies:str,requestData:dict)->type:
        # 调用js
        with open('laifengsign.js', 'r', encoding='UTF-8') as f:
            js_code = f.read()
            context = execjs.compile(js_code)
            result = context.call("getSign",json.dumps(requestData),cookies).split("_")
            # print(result)
            sign=result[0]
            t=result[1]
        return (sign,t)
    # 获取主播视频流信息
    # @staticmethod
    def getAnchorVideo(self,liveId:str)->dict:
        try:
            data={"liveId":liveId,"ccode":"live05010101laifeng","app":"Pc"}
            # '{"liveId":"8122883","ccode":"live05010101laifeng","app":"Pc"}'
            headers = {
                'authority': 'acs.laifeng.com',
                'accept': 'application/json',
                'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
                'content-type': 'application/x-www-form-urlencoded',
                # 'cookie': 'mk=339201ea4efa4d25ac12010539b1ce4a; uk=2080306434; xlly_s=1; anchor-task-tips=vistived; fansTuan-tips=vistived; cna=NKWNHIfYgzcCAW8CWyb3taec; _m_h5_tk=e6099cf2a63171c02027e25d21f6fb34_1678415547138; _m_h5_tk_enc=8752b6179c76b95f7ecc5f9c66550974; isg=BAEBfOidAVqCUWqxMHWHoLANEE0bLnUg09pUkWNW_YhnSiEcq36F8C9YKr4M2Q1Y; __ysuid=1678413341369tef; imk=MjA4MDMwNjQzNC0wLTE2Nzg0MTMzNDU0MTgtMTY3ODQ5OTc0NTQxOA%3D%3D-8BE01DF063243D7A646B6FAA0ADF2197',
                'origin': 'https://v.laifeng.com',
                'referer': 'https://v.laifeng.com/',
                'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-site',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36'}
            ## 第一次请求
            sign,t = self.getSign(self.dicToStrCookies(),data)
            params = {
                'jsv': '2.6.1',
                'appKey': '24679788',
                't': '%s'%t,
                'sign': '%s'%sign,
                'type': 'originaljson',
                'dataType': 'json',
                'api': 'mtop.youku.laifeng.live.center.liveplaycontrol',
                'v': '1.0',
                'data': json.dumps(data),
            }
            response = requests.get(
                'https://acs.laifeng.com/h5/mtop.youku.laifeng.live.center.liveplaycontrol/1.0/',
                params=params,
                cookies=self.broCookies,
                headers=headers,
            )
            # 第一次请求失败
            if response.json()['ret']==['FAIL_SYS_TOKEN_EXOIRED::令牌过期']:
                print("--------------token 过期--------------")
                # 第一次请求失败第二次请求
                # 重新赋值cookies的关键参数
                self.broCookies['_m_h5_tk']=response.cookies['_m_h5_tk']
                self.broCookies['_m_h5_tk_enc']=response.cookies['_m_h5_tk_enc']
                # 重新获取sign和t参数
                sign,t = self.getSign(self.dicToStrCookies(),data)
                # 进行params重新提交
                params = {
                    'jsv': '2.6.1',
                    'appKey': '24679788',
                    't': '%s'%t,
                    'sign': '%s'%sign,
                    'type': 'originaljson',
                    'dataType': 'json',
                    'api': 'mtop.youku.laifeng.live.center.liveplaycontrol',
                    'v': '1.0',
                    'data': json.dumps(data),
                }
                
                response = requests.get(
                    'https://acs.laifeng.com/h5/mtop.youku.laifeng.live.center.liveplaycontrol/1.0/',
                    params=params,
                    cookies=self.broCookies,
                    headers=headers,
                )
                if response.json()["ret"]==['SUCCESS::成功']:
                    return {
                            "playUrl":response.json()["data"]["data"]["micInfo"]["mcs"][0]["ms"]["playInfo"]["hls"][0]["Url"]
                        }
            else:
                if response.json()["ret"]==['SUCCESS::成功']:
                    return {
                            "playUrl":response.json()["data"]["data"]["micInfo"]["mcs"][0]["ms"]["playInfo"]["hls"][0]["Url"]
                        }
        except Exception as error:
            #print(error)
            return ""
    def writeAnchorTxt(self,anchorList:list)->None:
        returnList=json.dumps(anchorList,ensure_ascii=False)
        # 将数据写入文件
        fileName=int(time.time())
        #with open("./%s"%fileName,'w',encoding='utf-8') as f:
        #    f.write(returnList)
        with open("/home/sh/laifeng/all/%s"%fileName,'w',encoding='utf-8') as f:
            f.write(returnList)

        
def job():
    obj=LF()
    obj.getAnchor()

schedule.every(5).minutes.do(job)
if __name__ == '__main__':
    print("开启定时任务")
    while True:
        schedule.run_pending()# 后台运行任
    #obj=LF()
    # # print(obj.dicToStrCookies())
    # print(obj.getAnchorVideo("8143331"))
    # print(obj.getAnchorVideo("8143331"))
    # print(obj.getAnchorVideo("8143331"))
    #obj.getAnchor()
    
    # time.sleep(2)
    # print(obj.getAnchorVideo({"liveId":"8122883","ccode":"live05010101laifeng","app":"Pc"}))
