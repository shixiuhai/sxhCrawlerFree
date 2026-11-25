# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class UniversityinformationItem(scrapy.Item):
    lunboImgList=scrapy.Field()
    # define the fields for your item here like:
    # name = scrapy.Field()
    # table="university_info"
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
