import scrapy
import time
import re
from gerapy_selenium import SeleniumRequest
from universityInformation.items import UniversityinformationItem
class UniversalSpider(scrapy.Spider):
    name = 'Universal'
    allowed_domains = ['taobao.com','tmall.com']
    start_urls = ['https://www.taobao.com']
    
    # scrapy 默认调用的提取函数
    # def start_requests(self):
        # loginUrl="https://login.taobao.com/member/login.jhtml"
        # cookies={'l': 'fB_GD4YmN3KgHnwBBOfaFurza77OSIRYYuPzaNbMi9fPOy1B5DZlW1_rDbY6C3GVFs6HR3lDK4dwBeYBq7Vonxv9w8VMULkmndLHR35..', 'tfstk': 'cIgCBA9qX9XBcu8l-JOZfDR9tQURwCJ_sHwKOKpBc4TUS-1mMZyXUIolIzP81', 'uc1': 'cookie16=WqG3DMC9UpAPBHGz5QBErFxlCA%3D%3D&cookie14=Uoe8g08IZiyFpQ%3D%3D&pas=0&cookie15=U%2BGCWk%2F75gdr5Q%3D%3D&existShop=false&cookie21=V32FPkk%2FgihF%2FS5nr3O5', 'dnk': 'tb80111606', 'cancelledSubSites': 'empty', 'cookie1': 'U%2BGWz3AsFiX%2BQb4KVw17j51DAUP9jxfiN9Dd%2FomAUJ8%3D', '_l_g_': 'Ug%3D%3D', '_nk_': 'tb80111606', 'existShop': 'MTY4OTY4NzY4Mw%3D%3D', 'csg': '3890b79f', 'uc3': 'lg2=U%2BGCWk%2F75gdr5Q%3D%3D&vt3=F8dCsGGudw%2BcATXUl2Y%3D&nk2=F5RNZTse5XZpwA%3D%3D&id2=UNQyQxMqUdx1nQ%3D%3D', 'unb': '3451510054', 'sg': '641', 'lgc': 'tb80111606', 'isg': 'BA8PUtuwt7B7MrNMhzWwHtUDnqMZNGNWg1RE4yEcp36E8C7yNAdbpyFy9CDOkzvO', 'skt': '695af83aa7e0a435', 'uc4': 'id4=0%40UgP5GPE5h%2FvopPV87slSIqXsVl5v&nk4=0%40FY4GsvRHfRNKE%2BdeKAlO2PEx8O%2Fb', 'cookie2': '102bbe1de11332b957118989e3144b2f', 'sgcookie': 'E100XAb2oVmA%2BtvJLFkgADjCkdFH7ZxQ%2B0p1Jej2%2BH%2FdZ52dr2d86ZbHryHPh1XIKmW3FaAxV7WFqm3YqWKsn3U24ShQFNG5kCR4%2F0lEPgJyWefVmhlasfAo1D7mUgQuPb6B', '_cc_': 'U%2BGCWk%2F7og%3D%3D', 'cookie17': 'UNQyQxMqUdx1nQ%3D%3D', 'xlly_s': '1', 'tracknick': 'tb80111606', 'cna': 'eIQ9Hd/ms0kCASe3l+lWZFYB', 't': 'd2acf66ee724a13d35fb856cfe0c76f4', '_tb_token_': 'e13e81aee37ab', '_samesite_flag_': 'true'}
        # yield scrapy.Request(url=loginUrl,callback=self.parse)
        # item=UniversityinformationItem()
        # # 获取访问链接
        # item['visitLink']=response.url
        # # 获取网页源代码
        # item['pageSoure']=response.text
        # # 同时提取 标题 时间 正文内容
        # titleTimeContent=self.parse_article(response.text)
        # # 获取网页发布文章标题
        # item['contentTitle']=titleTimeContent['title']
        # # 获取网页发布文章时间
        # item['contentPublishTime']=titleTimeContent['publish_time']
        # # 获取网页发布文章正文内容
        # item['content']=titleTimeContent['content']
        # yield item
        # allLink=response.xpath('//a/@href')
        # print("===========")
        # print(allLink)
        # print("===========")
        # 对可访问的链接进行处理
        # allLink=self.parse_link(response.url,allLink.extract())
        # # 遍历网页中获取的所有链接
        # print("提取的新页面链接个数是%s"%len(allLink))
        # for link in allLink:
        #     count=count+1
        #     # 通过scrapy引擎对每个链接发起请求
        #     yield scrapy.Request(link, callback=self.parse)
        # print("爬取的总页面是%s"%count)
        # for i in range(10):
        #     yield scrapy.Request("http://news.ustc.edu.cn/zgkdb/zgkdb{}.htm".format(i), callback=self.parse)

    def parse(self, response):
        item=UniversityinformationItem()
        item["lunboImgList"]=[1,2,3]
        print("请求结果状态%s"%response.status)
        yield item
        print(self.pattern_response(response.text))
        # if "detail.tmall.com" in response.url:
        #     with open("out.html","w") as f:
        #         f.write(response.text)
        #         return
        for i in range(10000):
            # yield scrapy.Request(url="https://detail.tmall.com/item.htm?ali_refid=a3_430582_1006:1106131692:N:qw1MaXfjoYIJqPXwLNBiKA==:13f80f5037f1957719d4489d346fc5c6&ali_trackid=162_13f80f5037f1957719d4489d346fc5c6&id=675197979733&spm=a21n57.1.0.0",dont_filter=True,callback=self.parse,meta={"selenium":{"wait_for":'//*[@id="root"]/div/div[2]/div[2]/div[1]/div/div[1]/div/div/img'}})
            yield scrapy.Request(url="https://detail.tmall.com/item.htm?ali_refid=a3_430582_1006:1106131692:N:qw1MaXfjoYIJqPXwLNBiKA==:13f80f5037f1957719d4489d346fc5c6&ali_trackid=162_13f80f5037f1957719d4489d346fc5c6&id=675197979733&spm=a21n57.1.0.0",dont_filter=True,callback=self.parse)
        
        
    
    def pattern_response(self,returnText:str):
        print(returnText)
        
    # 定义一个提取网页标题，发布时间，正文内容的函数
    def parse_article(self,pageSource:str)->dict:
        html=pageSource
        pass
    
    # 定义一个通用链接处理函数
    def parse_link(self,url,linkList:list)->list:
        pass
            
