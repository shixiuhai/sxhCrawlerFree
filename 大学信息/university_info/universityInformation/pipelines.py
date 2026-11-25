# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html
# useful for handling different item types with a single interface
import pymongo
import pymysql
import tldextract
from pymysql.converters import escape_string

# class UniversityinformationPipeline:
#     def process_item(self, item, spider):
#         return item

## 暂时没有写
class MongoPipeline(object):
    def __init__(self, mongo_uri, mongo_db):
        self.mongo_uri = mongo_uri
        self.mongo_db = mongo_db
    
    @classmethod
    def from_crawler(cls, crawler):
        return cls(
            mongo_uri=crawler.settings.get('MONGO_URI'),
            mongo_db=crawler.settings.get('MONGO_DB')
        )
    
    def open_spider(self, spider):
        self.client = pymongo.MongoClient(self.mongo_uri)
        self.db = self.client[self.mongo_db]
    
    def process_item(self, item, spider):
        name = item.collection
        self.db[name].insert(dict(item))
        return item
    
    def close_spider(self, spider):
        self.client.close()


## 重写过
class MysqlPipeline():
    def __init__(self, host, database, user, password, port):
        self.host = host
        self.database = database
        self.user = user
        self.password = password
        self.port = port
    
    @classmethod
    def from_crawler(cls, crawler):
        return cls(
            host=crawler.settings.get('MYSQL_HOST'),
            database=crawler.settings.get('MYSQL_DATABASE'),
            user=crawler.settings.get('MYSQL_USER'),
            password=crawler.settings.get('MYSQL_PASSWORD'),
            port=crawler.settings.get('MYSQL_PORT'),
        )
    
    def open_spider(self, spider):
        # self.db = pymysql.connect(host=self.host, user=self.user, password=self.password, database=self.database, charset='utf8',
        #                           port=self.port)
        # self.cursor = self.db.cursor()
        pass
    
    def close_spider(self, spider):
        # self.db.close()
        pass
    
    # 定义一个获取主域名的函数
    def get_domain(self,url:str)->str:
        return tldextract.extract(url).domain+ "."+tldextract.extract(url).suffix
    
    # 定义一个是否满足插入条件的函数进行数据简单清洗
    # def clean_data(slef,item:dict)->bool:
    #     # if item["contentPublishTime"]=='':
    #     #     item["contentPublishTime"]='2000-01-01'
            
    #     if item['contentTitle'] !='':
    #         return True
    
    def process_item(self, item, spider):
        print("item的url内容是  %s"%item['lunboImgList'])
        # # 学校名称
        # schoolName=scrapy.Field()
        # # 访问链接
        # visitLink=scrapy.Field()
        # # 网页源代码
        # pageSoure=scrapy.Field()
        # # 网页发布文章标题
        # contentTitle=scrapy.Field()
        # # 网页发布文章时间
        # contentPublishTime=scrapy.Field()
        # # 网页发布文章正文内容
        # content=scrapy.Field()
        # print(item['title'])
        # data = dict(item)
        # if self.clean_data(item):
            # 给schoolName赋值
            # item['schoolName']=get_university_information("schoolDomainName")[self.get_domain(item["visitLink"])]
            # try:
                # sql = "insert into %s (school_name,visit_link,page_soure,content_title,content_publishTime,content) values ('%s','%s','%s','%s','%s','%s')" % (item.table,item["schoolName"],item["visitLink"],escape_string(item["pageSoure"]),item["contentTitle"],item["contentPublishTime"],escape_string(item["content"]))
                # self.cursor.execute(sql)
                # self.db.commit()
                # print(item)
            # except Exception as error:
                # print(error)
        return item

