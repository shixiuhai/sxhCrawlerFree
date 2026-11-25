import json
import requests
import time
import schedule
class HH:
    def __init__(self) -> None:
        self.cookies = {
            'acw_tc': '2f61f26916792967548221899e4bb6bc2d6e27fe5a01b622e348e3beba72cb',
        }
        self.headers = {
            'Host': 'api.appbocai.com',
            # 'Cookie': 'acw_tc=2f61f26916792967548221899e4bb6bc2d6e27fe5a01b622e348e3beba72',
            'version': '864',
            'channel': 'wandoujia',
            'platform': '2',
            'authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHRlbmQiOiIiLCJ1aWQiOjEwMDM2MzYxNzcsImxvZ2luVHlwZSI6InFxIiwidW5vIjoxMDAzNjM2MTc3LCJpcCI6IjExMS4yLjkxLjM4IiwiaXNzIjoiZmxhc2h3aGFsZS10ZWNoIiwic291cmNlIjoid2FuZG91amlhIiwiZGV2aWNlSWQiOiIiLCJ2ZXJzaW9uIjoiODY0IiwicGxhdGZvcm0iOiIyIiwidGltZXN0YW1wIjoxNjc5Mjk3MTc1NTIzfQ.jTbAYDGUHaIJVNB4qfXV0Rkkm-Kt-rHkVXUY_ZkjUyc',
            'content-type': 'application/json; charset=UTF-8',
            'user-agent': 'okhttp/4.2.2',
        }
    
    @property
    def get_anchor(self):
        anchorList=[]
        page=1
        while True:
            json_data = {
                'pageIndex': page,
                'subTab': 0,
                'tab': 0,
                'pageSize': 20,
            }
            response=requests.post('https://api.appbocai.com/huahua/live/roomList', cookies=self.cookies, headers=self.headers, json=json_data)
            if response.json()["data"]==[]:
                break
            if response.json()["data"]!=[]:
                page=page+1
                resp=response.json()["data"]
                for item in resp[1::]:
                    returnMsg={
                            'anchorId': item["memberId"],
                            'anchorNickname':item["nick"],
                            'streamUrl':item["rtmpPlayUrl"]
                        }
                    print(anchorList)
                    anchorList.append(returnMsg)
           
            time.sleep(10)
        return anchorList
    
    # 写入到信息表里   
    def writeAnchorTxt(self,anchorList:list,path="/home/sh/huahua/all")->None:
        returnList=json.dumps(anchorList,ensure_ascii=False)
        # 将数据写入文件
        fileName=int(time.time())
        #with open("./%s"%fileName,'w',encoding='utf-8') as f:
        #    f.write(returnList)
        with open(path+"/%s"%fileName,'w',encoding='utf-8') as f:
            f.write(returnList)
def job():
    obj=HH()
    # obj.get_anchor
    obj.writeAnchorTxt(obj.get_anchor)
schedule.every(5).minutes.do(job)         
if __name__ == "__main__":
    print("开启定时任务")
    while True:
        schedule.run_pending()# 后台运行
    