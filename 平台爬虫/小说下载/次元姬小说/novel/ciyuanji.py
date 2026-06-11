import requests
# https://www.cnblogs.com/kongzhongqijing/articles/14480473.html staticmethod和classmethod区别
from lxml import etree
import pymysql
import time
# import os
# os.chdir(os.path.dirname(__file__))
import logging

'''format=%(asctime)s具体时间 %(filename)s文件名 %(lenvelname)s日志等级 %(message)s具体信息
   datemt=%a星期 %d日期 %b月份 %Y年份 %H:%M:%S时间'''
logging.basicConfig(level=logging.DEBUG, format='%(asctime)s %(filename)s %(levelname)s %(message)s',
                    datefmt='%a %d %b %Y %H:%M:%S', filename='./ciyuanji.log', filemode='w')

class CYJ:
    def __init__(self,listPage=571,host="127.0.0.1",port="3306",user="root",passwd="123456",database="test") -> None:
        self.headers={
            'authority': 'www.ciyuanji.com',
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
            'cache-control': 'max-age=0',
            'referer': 'https://www.ciyuanji.com/b_d_15618.html',
            'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'document',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-user': '?1',
            'upgrade-insecure-requests': '1',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
        }
        self.host=host
        self.port=port
        self.user=user
        self.passwd=passwd
        self.database=database
        try:
            self.db=pymysql.connect(host=self.host,port=int(self.port),user=self.user,passwd=self.passwd,database=self.database)
        except Exception as error:
            logging.error("连接mysql出现错误")
        # 列表页大小
        self.listPage=listPage
    
    # 如果列表没有元素会返回 ""
    def getListOne(self,data:list)->str:
        if len(data)>0:
            return data[0]
        else:
            return ""
    
    # 获取所有列表页
    def getNovelList(self,page:int)->list:
        url="https://www.ciyuanji.com/l_c_0_0_0_0_1_%s_10.html"%page
        try:
            # print(requests.get(url=url,headers=self.headers).text)
            respXpath=etree.HTML(requests.get(url=url,headers=self.headers).text)
            itemList=["https://www.ciyuanji.com"+ i for i in respXpath.xpath('//ul/li/div/section/a/@href')]
            # 按照原来列表顺序排序
            itemSetList=list(set(itemList))
            itemSetList.sort(key=itemList.index)
            return itemSetList
        except Exception as error:
            logging.error("获取所有列表页出错，错误内容是%s"%error)
            return []
    
    # 获取章节详情
    def getNovelChapter(self,itemUrl:str)->dict:
        try:
            respXpath=etree.HTML(requests.get(url=itemUrl,headers=self.headers).text)
            bookName=self.getListOne(respXpath.xpath('//*[@id="__next"]/div[1]/div[2]/div/div[1]/section[1]/div/h1/span/text()'))
            anchor=self.getListOne(respXpath.xpath('//*[@id="__next"]/div[1]/div[2]/div/div[1]/section[1]/div/p[1]/span[1]/text()'))
            introduction=self.getListOne(respXpath.xpath('//*[@id="article"]/text()'))
            chapterList=["https://www.ciyuanji.com"+i for i in respXpath.xpath('//div//a/@href') if 'chapter' in i]
            # 按照原来列表顺序排序
            chapterSetList=list(set(chapterList))
            chapterSetList.sort(key=chapterList.index)
            return {
                "chapterList":chapterSetList,
                "bookName":bookName,
                "anchor":anchor,
                "introduction":introduction
            }
        except Exception as error:
            logging.error("获取章节详情出现错误，错误内容是%s"%error)
            return {}
    
    # 获取各个章节详细内容
    def getChapterContent(self,chapterUrl:str)->dict:
        chapterContent=""
        respXpath=etree.HTML(requests.get(url=chapterUrl,headers=self.headers).text)
        try:
            title=respXpath.xpath('//*[@id="__next"]/div[1]/section/h1/text()')
            content=respXpath.xpath('//*[@id="__next"]/div[1]/section/article//text()')
            for i in content:
                chapterContent=chapterContent+i
            return {
                "title":self.getListOne(title),
                "content":chapterContent.replace(u'\u3000',u'').replace('\n', '').replace('\r', '').replace(" ","")
            }
        except Exception as error:
            logging.error("获取各个章节详细内容出现错误，错误内容是%s"%error)
            return {}
    
    # 数据入库
    def insertMysql(self,sql:str)->None:
        try:
            cursor=self.db.cursor()
            cursor.execute(sql)
            # 插入执行必须要提交事务
            self.db.commit()
            cursor.close()
        # pymysql.err.OperationalError: (2003, "Can't connect to MySQL server on '183.134.60.170' (timed out)")
        except Exception as error:
            logging.error("插入数据库出错，错误是%s"%error)
            # print(error.__str__())
            if "Can't connect to MySQL" in error.__str__():
                self.db=pymysql.connect(host=self.host,port=int(self.port),user=self.user,passwd=self.passwd,db=self.db)

    # 进行爬取
    # @classmethod
    def spider(self):
        # 1. 循环遍历获取所有列表页
        for page in range(1,self.listPage):
            try:
                itemList=self.getNovelList(page)
                if len(itemList)==0:
                    logging.warning("第%s页没有小说跳过"%page)
                    # print("这个小说没有章节,跳过")
                    continue
                # 遍历列表页每一本小说的详情内容链接
                for itemUrl in itemList:
                    # 获取每一本小说详情内容对象
                    chapterItem=self.getNovelChapter(itemUrl)
                    # 获取章节详情页对象
                    if chapterItem=={}:
                        logging.warning("地址为%s的小说没有详情页跳过"%itemUrl)
                        # print("没有详情页面,跳过")
                        continue
                    # 获取作者名
                    anchor=chapterItem["anchor"]
                    bookName=chapterItem["bookName"]
                    introduction=chapterItem["introduction"]
                    chapterList=chapterItem["chapterList"]
                    # 遍历一本书的每一章节  只爬取30章节就结束
                    for chapterUrl in chapterList[:30:]:
                        chaterContentItem=self.getChapterContent(chapterUrl)
                        if chaterContentItem=={}:
                            logging.warning("地址为%s的小说章节里没有内容跳过"%itemUrl)
                            # print("章节内容不存在,跳过")
                            continue
                        title=chaterContentItem["title"]
                        content=chaterContentItem["content"]
                        logging.info("开始爬取%s小说的%s章节内容,章节地址为%s"%(bookName,title,chapterUrl))
                        # print(title,content)
                        # 插入数据库
                        createdTime=time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
                        # print("开始插入数据")
                        self.insertMysql("insert into business_novel_scan \
                                        (monitoring_id,name,author,introduction,\
                                        chapter,content,url,created_time) values \
                                        ('%s','%s','%s','%s','%s','%s','%s','%s')"%
                                        (1,bookName,anchor,introduction,title,content,chapterUrl,createdTime))
                        # 45秒爬取一章
                        time.sleep(45)
            except Exception as error:
                time.sleep(45)
                logging.error("爬取出现错误，错误是%s"%error)
                
if __name__ == "__main__":
    obj=CYJ()
    obj.spider()
    # print(obj.getNovelList(2))
    # print(obj.getNovelChapter("https://www.ciyuanji.com/b_d_9613.html"))
    # print(obj.getChapterContent("https://www.ciyuanji.com/chapter/9613_3045198.html"))
    # print(obj.insertMysql("insert into business_novel_scan (monitoring_id,name,author,introduction,chapter,content,url,created_time) values ('%s','%s','%s','%s','%s','%s','%s',%s)"%(1,'女总裁的贴身兵皇','边关牧马','五年','内容','正文','yuanji.com',"2025-07-14")))
    # print(obj.insertMysql("insert into business_novel_scan (monitoring_id,name,author,introduction,chapter,content,url,created_time) values ('%s','%s','%s','%s','%s','%s','%s','%s')"%(1,'女总裁的贴身兵皇','边关牧马','五年','内容','正文','yuanji.com',"2023-09-14")))
        
        
        
