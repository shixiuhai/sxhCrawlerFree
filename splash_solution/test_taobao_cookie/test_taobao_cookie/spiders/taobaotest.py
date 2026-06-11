import scrapy
import logging

class TaobaotestSpider(scrapy.Spider):
    name = "taobaotest"
    allowed_domains = ["www.taobao.com"]
    start_urls = ["http://www.taobao.com/"]

    def parse(self, response):
        pass
        logging.info(response)

