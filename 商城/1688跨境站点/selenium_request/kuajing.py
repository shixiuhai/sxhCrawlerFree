import requests
import logging
import time
import json
import pymysql
from kuajing_detail import ParseLink
from concurrent.futures import ThreadPoolExecutor,ProcessPoolExecutor
import queue
# 重新封装线程池类
class ThreadPoolExecutor(ThreadPoolExecutor):
    """
    重写线程池修改队列数
    """
    def __init__(self, max_workers=None, thread_name_prefix=''):
        super().__init__(max_workers, thread_name_prefix)
        # 队列大小为最大线程数的两倍
        self._work_queue = queue.Queue(self._max_workers * 2)
threadPool=ThreadPoolExecutor(max_workers=3)
# 基于requests的方案
# https://blog.csdn.net/weixin_42216028/article/details/107701421
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
logging.basicConfig(level=logging.INFO,filename="./kuajing.log",
                    format='%(asctime)s-%(levelname)s-%(message)s')
class KJ:
    def __init__(self,host="127.0.0.1",port="3306",user="root",passwd="sxh.200008",database="goods") -> None:
        self.headers = {
            'authority': 'widget.1688.com',
            'accept': '*/*',
            'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
            'referer': 'https://kj.1688.com/',
            'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'script',
            'sec-fetch-mode': 'no-cors',
            'sec-fetch-site': 'same-site',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
        }
        # mysql初始化
        self.host=host
        self.port=port
        self.user=user
        self.passwd=passwd
        self.database=database
        # # 标题级别初始化
        # self.cateLevel=1
        # # 初始化parenteid
        # self.parentId=0
        try:
            self.db=pymysql.connect(host=self.host,port=int(self.port),user=self.user,passwd=self.passwd,database=self.database)
        except Exception as error:
            print("连接数据库失败")
            logging.error("连接数据库失败")
        # 初始标题级别
        # self.cateIdList=[]
    # 如果列表没有元素会返回 ""
    def get_list_one(self,data:list)->str:
        if len(data)>0:
            return data[0]
        else:
            return ""
    
    # 获取标题
    def get_goods_cate(self,parentId:int,cateLevel:int)->dict:
        params = {
            'callback': 'jQuery3600825913373777599_1678969977563',
            'namespace': 'getAliRankCateData',
            'widgetId': 'getAliRankCateData',
            'methodName': 'execute',
            'cateLevel': '%s'%cateLevel,
            'parentId': '%s'%parentId,
            # '_tb_token_': 'e6e1b1eaea59',
            '_': '%s'%(int(time.time())*1000),
        }
        try:
            return {
                "parentId":parentId,
                "cate":json.loads(
                requests.get(url="https://widget.1688.com/front/getJsonComponent.json",
                params=params,headers=self.headers).text.
                replace("jQuery3600825913373777599_1678969977563","").replace("(","").
                replace(")","").replace(" ","").replace("，",","))["content"]
            }
        except Exception as error:
            logging.error("获取索引出现错误，错误是%s"%error)
            return {}
        
    # 获取每页所有商品信息
    # rankType hot rising
    def get_goods_list(self,cateLevel:int,cateId:int,pageNo:int,rankType:str)->dict:
        params = {
            'callback': 'jQuery36008223910503795178_1678971098945',
            'namespace': 'getAliRankDataByCateId',
            'widgetId': 'getAliRankDataByCateId',
            'methodName': 'execute',
            'cateId': '%s'%cateId,
            'cateLevel': '%s'%cateLevel,
            'type': '%s'%rankType,
            'pageNo': '%s'%pageNo,
            'pageSize': '20',
            '_': '%s'%(int(time.time())*1000),
        }
        try:
            return json.loads(
                    requests.get(url="https://widget.1688.com/front/getJsonComponent.json",
                    params=params,headers=self.headers).text.
                    replace("jQuery36008223910503795178_1678971098945","").replace("(","").
                    replace(")","").replace(" ","").replace("，",","))["content"]
        except Exception as error:
            logging.error("获取该页商品数据出现错误，错误是%s"%error)
            return {}
    # sql 的增 删 改 
    def exec_mysql(self,sql:str)->None:
        try:
            cursor=self.db.cursor()
            cursor.execute(sql)
            # 插入执行必须要提交事务
            self.db.commit()
            cursor.close()
        # pymysql.err.OperationalError: (2003, "Can't connect to MySQL server on '183.134.60.170' (timed out)")
        except Exception as error:
            logging.error("执行语句出错，错误是%s"%error)
            # print(error.__str__())
            if "Can't connect to MySQL" in error.__str__():
                self.db=pymysql.connect(host=self.host,port=int(self.port),user=self.user,passwd=self.passwd,db=self.db)
    
    # sql 插入 返回 插入id
    def exec_mysql_id(self,sql:str)->int:
        try:
            cursor=self.db.cursor()
            cursor.execute(sql)
            insertId=self.db.insert_id()
            # 插入执行必须要提交事务
            self.db.commit()
            cursor.close()
            return insertId
        # pymysql.err.OperationalError: (2003, "Can't connect to MySQL server on '183.134.60.170' (timed out)")
        except Exception as error:
            logging.error("执行语句出错，错误是%s"%error)
            # print(error.__str__())
            if "Can't connect to MySQL" in error.__str__():
                self.db=pymysql.connect(host=self.host,port=int(self.port),user=self.user,passwd=self.passwd,db=self.db)
            return 0
    
    # sql的查询
    def select_mysql(self,sql:str)->list:
        try:
            cursor=self.db.cursor()
            cursor.execute(sql)
            return list(cursor.fetchall())
        except Exception as error:
            logging.error("查询语句出错，错误是%s"%error)
            # print(error.__str__())
            if "Can't connect to MySQL" in error.__str__():
                self.db=pymysql.connect(host=self.host,port=int(self.port),user=self.user,passwd=self.passwd,db=self.db)
            return []
        
    # 保存标题到数据库
    def save_cate(self,taskId):
        fistCateInformation=self.get_goods_cate(parentId=0,cateLevel=1)
        if fistCateInformation!={}:
            for fistCateItem in fistCateInformation["cate"]["result"]:
                cateName=fistCateItem["cateName"]
                cateId=fistCateItem["cateId"]
                parentId=fistCateInformation["parentId"]
                # sql插入一级标题
                createdTime=time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
                time.sleep(0.2)
                self.exec_mysql("insert into 1688_kj_commodity_index \
                                 (parent_id,cate_id,cate_name,created_time,cate_level,task_id)\
                                 values ('%s','%s','%s','%s','%s','%s')"%(parentId,cateId,cateName,createdTime,1,taskId))
                
                secondCateInformation=self.get_goods_cate(parentId=cateId,cateLevel=2)
                if secondCateInformation!={}:
                    for secondCateItem in secondCateInformation["cate"]["result"]:
                        cateName=secondCateItem["cateName"]
                        cateId=secondCateItem["cateId"]
                        parentId=secondCateInformation["parentId"]
                        # print(parentId,cateId,cateName)
                        # sql插入二级标题
                        time.sleep(0.2)
                        self.exec_mysql("insert into 1688_kj_commodity_index \
                                 (parent_id,cate_id,cate_name,created_time,cate_level,task_id)\
                                 values ('%s','%s','%s','%s','%s','%s')"%(parentId,cateId,cateName,createdTime,2,taskId))
                
                        threeCateInformation=self.get_goods_cate(parentId=cateId,cateLevel=3)
                        if threeCateInformation!={}:
                            for threeCateItem in threeCateInformation["cate"]["result"]:
                                cateName=threeCateItem["cateName"]
                                cateId=threeCateItem["cateId"]
                                parentId=threeCateInformation["parentId"]
                                # print(parentId,cateId,cateName)
                                # sql插入三级标题
                                time.sleep(0.2)
                                self.exec_mysql("insert into 1688_kj_commodity_index \
                                 (parent_id,cate_id,cate_name,created_time,cate_level,task_id)\
                                 values ('%s','%s','%s','%s','%s','%s')"%(parentId,cateId,cateName,createdTime,3,taskId))
                                
                                fourCateInformation=self.get_goods_cate(parentId=cateId,cateLevel=4)
                                if fourCateInformation!={}:
                                    for fourCateItem in fourCateInformation["cate"]["result"]:
                                        cateName=fourCateItem["cateName"]
                                        cateId=fourCateItem["cateId"]
                                        parentId=fourCateItem["parentId"]    
                                        print(parentId,cateId,cateName)
                                        time.sleep(0.2)
                                        # sql插入四级标题
                                        self.exec_mysql("insert into 1688_kj_commodity_index \
                                        (parent_id,cate_id,cate_name,created_time,cate_level,task_id)\
                                        values ('%s','%s','%s','%s','%s','%s')"%(parentId,cateId,cateName,createdTime,4,taskId))
    
    # 从mysql中查询所有的最后一级标题信息
    def get_last_cate(self,taskId)->list:
        result=self.select_mysql("SELECT id,cate_name,cate_id,cate_level,task_id \
                                FROM 1688_kj_commodity_index  WHERE cate_id NOT IN \
                                ( SELECT parent_id FROM 1688_kj_commodity_index) and task_id=%s"%taskId)
        return result
        
    # 定义一共创建任务的方法
    def created_index_task(self,tasktype:int=2)->int:
        taskId=0
        # 任务创建时间
        createdTime=time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
        if tasktype==1:
            describe="手动爬取任务："
            yourInput=input("请输入你对任务的描述")
            describe=describe+yourInput
            # 创建任务
            taskId=self.exec_mysql_id("insert into 1688_kj_commodity_task (created_time,type,task_describe) values ('%s','%s','%s')"%(createdTime,tasktype,describe))
            if taskId==0:
                logging.error("爬取任务启动失败")
            else:
                self.spider_index(taskId=taskId)
        if tasktype==2:
            describe="自动爬取任务"
            taskId=self.exec_mysql_id("insert into 1688_kj_commodity_task (created_time,type,task_describe) values ('%s','%s','%s')"%(createdTime,tasktype,describe))
            if taskId==0:
                logging.error("爬取任务启动失败")
            else:
                self.spider_index(taskId=taskId)
        print("-----------------------------")
        print("该最新任务的taskId是%s"%taskId)
        print("-----------------------------")
        
                
    # 定义一个保存到商品信息表的方法
    def save_commodity(self,item:dict):
        # qmarks = ', '.join(['%s'] * len(item))
        # columns = ', '.join(item.keys())
        self.exec_mysql("insert into 1688_kj_commodity (`index_id`, `cate_level`, `cate_id`, `cate_name`, `gmt_create`, `offer_picurl`, `price`, `good_subject`, `offer_id`, `offer_url`, `created_time`, `total_page`, `task_id`, `rank`) \
                        values ('%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s')"\
                        %(item["index_id"],item["cate_level"],item["cate_id"],item["cate_name"],item["gmt_create"],item["offer_picurl"],item["price"],item["subject"],item["offer_id"],item["offer_url"],item["created_time"],item["total_page"],item["task_id"],item["rank"]))
    
    # 定义一个获取商品信息表的方法
    def get_commodity(self,taskId):
        result=self.select_mysql("SELECT commod.id,commod.offer_url,commod.rank FROM 1688_kj_commodity commod where id NOT IN (SELECT commodity_id FROM 1688_kj_commodity_detail ) and task_id='%s' order by commod.rank"%taskId)
        return result
    
    # 定义一个保存到商品详情表的方法
    def save_detail(self,item:dict):
        self.exec_mysql("insert into 1688_kj_commodity_detail (`commodity_id`,`business_name`,`business_year`,`user_evaluate`,`turnover`,`created_time`,`task_id`, `rank`) \
                        values ('%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s')"\
                        %(item["commodity_id"],item["business_name"],item["business_year"],item["user_evaluate"],item["turnover"],item["created_time"],item["task_id"],item["rank"]))
    
    # 定义一个爬取商品信息的方法
    def spider_goods_list(self,indexId,cateName,cateId,cateLevel,taskId):
        try:
            # 第一类是hot 
            resp=self.get_goods_list(cateLevel=cateLevel,cateId=cateId,pageNo=1,rankType="hot")
            if resp!={}:
                totalPage=int(resp["page"]["total"]/resp["page"]["pageSize"])
                for pageNo in range(1,totalPage+1):
                    time.sleep(0.3)
                    try:
                        resp=self.get_goods_list(cateLevel=cateLevel,cateId=cateId,pageNo=pageNo,rankType="hot")
                        # 从resp里提取商品信息
                        for oneItem in resp["result"]:
                            try:
                                gmtCreate=oneItem["gmt_create"]
                                offerPicurl=oneItem["offerPicUrl"]
                                price=oneItem["price"]
                                subject=oneItem["subject"]
                                offerId=oneItem["offerId"]
                            except Exception as error:
                                logging.error("提取数据搓洗错误错误是%s"%error)
                                continue
                            offerUrl="https://detail.1688.com/offer/"+str(offerId)+".html"
                            createdTime=time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
                            totalPage=totalPage
                            indexId=indexId
                            cateName=cateName
                            cateId=cateId
                            cateLevel=cateLevel
                            taskId=taskId
                            rank=1
                            item={"index_id":indexId,
                                "cate_level":cateLevel,
                                "cate_id":cateId,
                                "cate_name":cateName,
                                "gmt_create":gmtCreate,
                                "offer_picurl":offerPicurl,
                                "price":price,
                                "subject":subject,
                                "offer_id":offerId,
                                "offer_url":offerUrl,
                                "created_time":createdTime,
                                "total_page":totalPage,
                                "task_id":taskId,
                                "rank":rank}
                            # 存库
                            self.save_commodity(item=item)
                    except Exception as error:
                        print(error)
                        logging.error("爬取页面出现错误,错误是%s"%error)
                        continue
            
            # 第二类是rising
            resp=self.get_goods_list(cateLevel=cateLevel,cateId=cateId,pageNo=1,rankType="rising")
            if resp!={}:
                totalPage=int(resp["page"]["total"]/resp["page"]["pageSize"] )
                for pageNo in range(1,totalPage+1):
                    time.sleep(0.3)
                    try:
                        resp=self.get_goods_list(cateLevel=cateLevel,cateId=cateId,pageNo=pageNo,rankType="rising")
                        # 从resp里提取商品信息
                        for oneItem in resp["result"]:
                            try:
                                gmtCreate=oneItem["gmt_create"]
                                offerPicurl=oneItem["offerPicUrl"]
                                price=oneItem["price"]
                                subject=oneItem["subject"]
                                offerId=oneItem["offerId"]
                            except Exception as error:
                                logging.error("提取数据搓洗错误错误是%s"%error)
                                continue
                            offerUrl="https://detail.1688.com/offer/"+str(offerId)+".html"
                            createdTime=time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
                            totalPage=totalPage
                            indexId=indexId
                            cateName=cateName
                            cateId=cateId
                            cateLevel=cateLevel
                            taskId=taskId
                            rank=2
                            item={"index_id":indexId,
                                "cate_level":cateLevel,
                                "cate_id":cateId,
                                "cate_name":cateName,
                                "gmt_create":gmtCreate,
                                "offer_picurl":offerPicurl,
                                "price":price,
                                "subject":subject,
                                "offer_id":offerId,
                                "offer_url":offerUrl,
                                "created_time":createdTime,
                                "total_page":totalPage,
                                "task_id":taskId,
                                "rank":rank}
                            # 存库
                            self.save_commodity(item=item)
                    except Exception as error:
                        print(error)
                        logging.error("爬取页面出现错误，错误是%s"%error)
                        continue
        except Exception as error:
            logging.error("获取商品信息出现错误，错误是%s"%error)
              
    # 爬取信息，目前考虑到最多四级目录
    def spider_index(self,taskId:int):
        # 保存所有标题信息到index表
        self.save_cate(taskId)
        # 从index获取最后一级标题信息
        lastCateList=self.get_last_cate(taskId)
        if len(lastCateList)!=0:
            for lastCateItem in lastCateList:
                # id,cate_name,cate_id,cate_level,task_id
                indexId=lastCateItem[0]
                cateName=lastCateItem[1]
                cateId=lastCateItem[2]
                cateLevel=lastCateItem[3]
                taskId=lastCateItem[4]
                # 进行爬取任务
                self.spider_goods_list(indexId,cateName,cateId,cateLevel,taskId)
    # 爬取详情页
    def spider_detail(self,taskId:int,cookies:list=[{'domain': '.1688.com', 'expiry': 1694873969, 'httpOnly': False, 'name': 'tfstk', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': 'cefhBgbIi9JQUaNRfMOQiV1KQvJFZSweA_5N_PiAGfv2s15NiIMZ30n4SHEbYY1..'}, {'domain': '.1688.com', 'expiry': 1679926773, 'httpOnly': False, 'name': 'is_identity', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': 'buyer'}, {'domain': '.1688.com', 'expiry': 1679926773, 'httpOnly': False, 'name': 'aliwwLastRefresh', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': '1679321973471'}, {'domain': '.1688.com', 'expiry': 1694873969, 'httpOnly': False, 'name': 'l', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': 'fBE3ujjPNNMuDc6bKOfZPurza779SIRAguPzaNbMi9fP9H_B5yoCW1MToUA6CnGVFsi2R3o-P8F6BeYBqffjeFRtuQIXdpMmnmOk-Wf..'}, {'domain': '.1688.com', 'httpOnly': False, 'name': '__mwb_logon_id__', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': 'tb80111606'}, {'domain': '.1688.com', 'expiry': 1679393966, 'httpOnly': False, 'name': 'last_mid', 'path': '/', 'sameSite': 'None', 'secure': True, 'value': 'b2b-345151005463a30'}, {'domain': '.1688.com', 'httpOnly': False, 'name': '__cn_logon_id__', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': 'tb80111606'}, {'domain': '.1688.com', 'expiry': 1679329177, 'httpOnly': False, 'name': '_show_user_unbind_div_', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': 'b2b-345151005463a30_false'}, {'domain': '.1688.com', 'httpOnly': False, 'name': 'unb', 'path': '/', 'sameSite': 'None', 'secure': True, 'value': '3451510054'}, {'domain': '.1688.com', 'expiry': 1679926740, 'httpOnly': False, 'name': '_m_h5_tk', 'path': '/', 'sameSite': 'None', 'secure': True, 'value': '05a223edc1c87ddb5042e2c17ecb30dc_1679332020508'}, {'domain': '.1688.com', 'expiry': 1713881966, 'httpOnly': False, 'name': 'ali_apache_track', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': 'c_mid=b2b-345151005463a30|c_lid=tb80111606|c_ms=1'}, {'domain': '.1688.com', 'httpOnly': True, 'name': 'csg', 'path': '/', 'sameSite': 'None', 'secure': True, 'value': '71599057'}, {'domain': '.1688.com', 'httpOnly': True, 'name': 'sgcookie', 'path': '/', 'sameSite': 'None', 'secure': True, 'value': 'E100xUqn1kbQTwa92pq2qk8%2BkXlFv2mCjeEk2IGGn7T4ffkun16n6jnYr25eGpL0hxYJF3JxiJL%2FXqfeN8%2F%2Fak7LrEhaYPw4WyAopxX%2FjINUcrs%3D'}, {'domain': '.1688.com', 'httpOnly': True, 'name': 'cookie17', 'path': '/', 'sameSite': 'None', 'secure': True, 'value': 'UNQyQxMqUdx1nQ%3D%3D'}, {'domain': '.1688.com', 'expiry': 1679329177, 'httpOnly': False, 'name': '_show_force_unbind_div_', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': 'b2b-345151005463a30_false'}, {'domain': '.1688.com', 'httpOnly': True, 'name': 'cookie1', 'path': '/', 'sameSite': 'None', 'secure': True, 'value': 'U%2BGWz3AsFiX%2BQb4KVw17j51DAUP9jxfiN9Dd%2FomAUJ8%3D'}, {'domain': '.1688.com', 'httpOnly': True, 'name': 'uc4', 'path': '/', 'sameSite': 'None', 'secure': True, 'value': 'nk4=0%40FY4GsvRHfRNKE%2BdeKAb%2BB7c9OCFj&id4=0%40UgP5GPE5h%2FvopPV87sbnzF8qm8ZD'}, {'domain': '.1688.com', 'expiry': 1679926772, 'httpOnly': False, 'name': 'firstRefresh', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': '1679321972484'}, {'domain': '.1688.com', 'httpOnly': False, 'name': 'mwb', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': 'ng'}, {'domain': '.1688.com', 'expiry': 1713881983, 'httpOnly': False, 'name': 'alicnweb', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': 'touch_tb_at%3D1679321950680%7Clastlogonid%3Dtb80111606'}, {'domain': '.1688.com', 'httpOnly': False, 'name': '_csrf_token', 'path': '/', 'sameSite': 'None', 'secure': True, 'value': '1679321966667'}, {'domain': '.1688.com', 'expiry': 1679329178, 'httpOnly': False, 'name': '__rn_alert__', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': 'false'}, {'domain': '.1688.com', 'expiry': 1679329177, 'httpOnly': False, 'name': '_show_sys_unbind_div_', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': 'b2b-345151005463a30_false'}, {'domain': '.1688.com', 'expiry': 1679329174, 'httpOnly': False, 'name': '_is_show_loginId_change_block_', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': 'b2b-345151005463a30_false'}, {'domain': '.1688.com', 'expiry': 1713881943, 'httpOnly': False, 'name': 'cna', 'path': '/', 'sameSite': 'None', 'secure': True, 'value': 'VlmfHHEGT04CASe8CIWdK7cd'}, {'domain': '.1688.com', 'httpOnly': False, 'name': '_tb_token_', 'path': '/', 'sameSite': 'None', 'secure': True, 'value': 'ffb7596b3816e'}, {'domain': '.1688.com', 'httpOnly': False, 'name': '__cn_logon__', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': 'true'}, {'domain': '.1688.com', 'expiry': 1710857966, 'httpOnly': False, 'name': 'lid', 'path': '/', 'sameSite': 'None', 'secure': True, 'value': 'tb80111606'}, {'domain': '.1688.com', 'httpOnly': False, 'name': 'sg', 'path': '/', 'sameSite': 'None', 'secure': True, 'value': '641'}, {'domain': '.1688.com', 'expiry': 1679408342, 'httpOnly': False, 'name': 'xlly_s', 'path': '/', 'sameSite': 'None', 'secure': True, 'value': '1'}, {'domain': '.1688.com', 'expiry': 1694873972, 'httpOnly': False, 'name': 'isg', 'path': '/', 'sameSite': 'None', 'secure': True, 'value': 'BIqKdG5R2t1bFVZxL2XWLeoN23Asew7VWe7BXxTDNl1oxyqB_Ate5dC10zMbN4Zt'}, {'domain': '.1688.com', 'httpOnly': False, 'name': 'ali_apache_tracktmp', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': 'c_w_signed=Y'}, {'domain': '.1688.com', 'expiry': 1679926740, 'httpOnly': False, 'name': '_m_h5_tk_enc', 'path': '/', 'sameSite': 'None', 'secure': True, 'value': '3bf670c1e6240d9b6784bc494baff747'}, {'domain': '.1688.com', 'httpOnly': False, 'name': 't', 'path': '/', 'sameSite': 'None', 'secure': True, 'value': '5030ddc26b152ff4b5b7798614f9f3ff'}, {'domain': '.1688.com', 'expiry': 1679926772, 'httpOnly': False, 'name': 'lastRefresh', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': '1679321972484'}, {'domain': '.1688.com', 'httpOnly': False, 'name': '_nk_', 'path': '/', 'sameSite': 'None', 'secure': True, 'value': 'tb80111606'}, {'domain': '.1688.com', 'httpOnly': True, 'name': 'cookie2', 'path': '/', 'sameSite': 'None', 'secure': True, 'value': '1bb8189afb73e70d741d44ae714785e3'}]):
        commodList=self.get_commodity(taskId=taskId)
        for commodItem in commodList:
            commodId=commodItem[0]
            commodUrl=commodItem[1]
            rank=commodItem[2]
            # print(commodId,commodUrl)
            # 这个地方可以考虑多线程
            threadPool.submit(self.parse_detail,commodId,commodUrl,cookies,rank,taskId)
            #self.parse_detail(commodId=commodId,commodUrl=commodUrl,cookies=cookies,rank=rank,taskId=taskId)
    # pass exit quit   
    def parse_detail(self,commodId:int,commodUrl:str,cookies:list,rank:int,taskId:int)->None:
        obj=ParseLink(url="%s"%commodUrl,
                        cookies=cookies,
                        executablePath=r"C:\Users\15256\Documents\Redis-x64-5.0.14.1\chromedriver.exe",
                        sourceUrl="https://www.1688.com/")
        
        if obj.scrape_page(condition=EC.visibility_of_element_located,locator=(By.XPATH,'//*[@id="10811813010580"]/div/div[2]/div[1]/div/div[1]/div[1]/div/div/div/ul/li[2]/div')):
                print("详情页%s加载成功"%commodUrl)
                try:
                    # 公司经营年数
                    businessYear=obj.scrape_item_by_path('//*[@id="hd_0_container_0"]/div[1]/div[2]/div/div[1]/div[3]/div/div[2]/a/div').text
                    # 公司名称
                    businessName=obj.scrape_item_by_path('//*[@id="hd_0_container_0"]/div[1]/div[2]/div/div[1]/div[3]/div/div[1]/span').text
                    # 买家评价数
                    userEvaluate=obj.scrape_item_by_path('//*[@id="10811813010580"]/div/div[2]/div[1]/div/div[1]/div[1]/div/div/div/ul/li[2]/div').text
                    # 公司90天成交量                //*[@id="10811813010580"]/div/div[2]/div[1]/div/div[1]/div[1]/div/div/div/ul/li[2]/div
                    turnover=obj.scrape_item_by_path('//*[@id="1081181308831"]/div/div/div[2]/div[1]/div/div[3]/div[1]/div[3]/span[2]').text
                    commodId=commodId
                    createdTime=time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
                    item={
                        "commodity_id":commodId,
                        "business_name":businessName,
                        "business_year":businessYear,
                        "user_evaluate":userEvaluate,
                        "turnover":turnover,
                        "created_time":createdTime,
                        "task_id":taskId,
                        "rank":rank
                    }
                    self.save_detail(item)
                except Exception as error:
                    logging.error("爬取详情页%s出现的错误是%s"%(commodUrl,error))
                
                
        
        # 详情页数据入库
        pass
                                        
if __name__ == '__main__':
    obj=KJ()
    # print(obj.get_last_cate(14))
    # 开启爬取目录任务
    #obj.created_index_task()
    task=input("请输入你的爬取需求 1. 爬取商品信息，2. 爬取详情页信息：")
    if int(task)==1:
        obj.created_index_task()
    elif int(task)==2:
        # taskId输入你最新任务的taskId
        taskId=int(input("请输入你需要爬取的详情页关联的taskId："))
        print(obj.spider_detail(taskId))
    
    # obj.spider_detail()
    #print(obj.get_last_cate())
    # obj.spider_goods_list(5389,'机械门锁',1033168,3,1)
    # print(obj.created_task())
    # print(obj.get_goods_cate(2,2))
    # obj.spider()
    #obj.save_cate(1)
    # print(obj.getgoodsIndex(4))
    # print(obj.get_goods_list(2,97,3))