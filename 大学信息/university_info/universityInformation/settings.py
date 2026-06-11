# Scrapy settings for universityInformation project
# import sys
# sys.path.append('C:\\Users\\15256\\Desktop\\nowTime\\sxhCrawler\\universityInformation\\gerapy_selenium')
# import gerapy_selenium
# from gerapy_selenium import *
# For simplicity, this file contains only settings considered important or
# commonly used. You can find more settings consulting the documentation:
#
#     https://docs.scrapy.org/en/latest/topics/settings.html
#     https://docs.scrapy.org/en/latest/topics/downloader-middleware.html
#     https://docs.scrapy.org/en/latest/topics/spider-middleware.html


# Crawl responsibly by identifying yourself (and your website) on the user-agent
#USER_AGENT = 'universityInformation (+http://www.yourdomain.com)'



# Configure maximum concurrent requests performed by Scrapy (default: 16)
#CONCURRENT_REQUESTS = 32

# Configure a delay for requests for the same website (default: 0)
# See https://docs.scrapy.org/en/latest/topics/settings.html#download-delay
# See also autothrottle settings and docs
#DOWNLOAD_DELAY = 3
# The download delay setting will honor only one of:
#CONCURRENT_REQUESTS_PER_DOMAIN = 16
#CONCURRENT_REQUESTS_PER_IP = 16

# Disable cookies (enabled by default)
#COOKIES_ENABLED = False

# Disable Telnet Console (enabled by default)
#TELNETCONSOLE_ENABLED = False

# Override the default request headers:
#DEFAULT_REQUEST_HEADERS = {
#   'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
#   'Accept-Language': 'en',
#}

# Enable or disable spider middlewares
# See https://docs.scrapy.org/en/latest/topics/spider-middleware.html
#SPIDER_MIDDLEWARES = {
#    'universityInformation.middlewares.UniversityinformationSpiderMiddleware': 543,
#}

# Enable or disable downloader middlewares
# See https://docs.scrapy.org/en/latest/topics/downloader-middleware.html
#DOWNLOADER_MIDDLEWARES = {
#    'universityInformation.middlewares.UniversityinformationDownloaderMiddleware': 543,
#}

# Enable or disable extensions
# See https://docs.scrapy.org/en/latest/topics/extensions.html
#EXTENSIONS = {
#    'scrapy.extensions.telnet.TelnetConsole': None,
#}

# Configure item pipelines
# See https://docs.scrapy.org/en/latest/topics/item-pipeline.html
#ITEM_PIPELINES = {
#    'universityInformation.pipelines.UniversityinformationPipeline': 300,
#}

# Enable and configure the AutoThrottle extension (disabled by default)
# See https://docs.scrapy.org/en/latest/topics/autothrottle.html
#AUTOTHROTTLE_ENABLED = True
# The initial download delay
#AUTOTHROTTLE_START_DELAY = 5
# The maximum download delay to be set in case of high latencies
#AUTOTHROTTLE_MAX_DELAY = 60
# The average number of requests Scrapy should be sending in parallel to
# each remote server
#AUTOTHROTTLE_TARGET_CONCURRENCY = 1.0
# Enable showing throttling stats for every response received:
#AUTOTHROTTLE_DEBUG = False

# Enable and configure HTTP caching (disabled by default)
# See https://docs.scrapy.org/en/latest/topics/downloader-middleware.html#httpcache-middleware-settings
#HTTPCACHE_ENABLED = True
#HTTPCACHE_EXPIRATION_SECS = 0
#HTTPCACHE_DIR = 'httpcache'
#HTTPCACHE_IGNORE_HTTP_CODES = []
#HTTPCACHE_STORAGE = 'scrapy.extensions.httpcache.FilesystemCacheStorage'
# 爬虫爬取最大深度限制 -1表示不限制
# DEPTH_LIMIT = -1
# 设置网页下载延迟
DOWNLOAD_DELAY = 3
# 爬虫基础设置
BOT_NAME = 'universityInformation'

SPIDER_MODULES = ['universityInformation.spiders']
NEWSPIDER_MODULE = 'universityInformation.spiders'

# 是否遵循robots.txt的规则 
# Obey robots.txt rules
ROBOTSTXT_OBEY = False

# 配置请求头
DEFAULT_REQUEST_HEADERS ={
            'authority': 'item.taobao.com',
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7',
            'cache-control': 'max-age=0',
            # 'cookie': 'thw=cn; cna=AbGRHJxN6koCAW8CWyaOFU9H; t=5c0e77b79ca30999a50febac43117b48; lgc=tb80111606; tracknick=tb80111606; _cc_=VT5L2FSpdA%3D%3D; sgcookie=E100w%2Bvajo%2B06VFgv76h5cODFFyv%2Bsyt1j2kmGOG0X%2BR9qk1aujLoXjzlwvaAI21V6eRs4tVN1rGqG5CR9WixyPmLuxrmpvpnggWGtFIP1Xu4y4zhgbjye5CwPmjupe6CyyC; uc3=id2=UNQyQxMqUdx1nQ%3D%3D&lg2=W5iHLLyFOGW7aA%3D%3D&nk2=F5RNZTse5XZpwA%3D%3D&vt3=F8dCsGO7WCQXYRbBmfQ%3D; uc4=nk4=0%40FY4GsvRHfRNKE%2BdeKAlPibDvG5zy&id4=0%40UgP5GPE5h%2FvopPV87slT5h%2Btp8Ez; mt=ci=-1_0; cookie2=1543732a315fefad0f05b7d93ba61d92; _tb_token_=e93eeeb8177fe; xlly_s=1; _m_h5_tk=87b0be7f3547a1f72d92e1ade99f7d42_1689565190413; _m_h5_tk_enc=eb782c9f0f0a7b0250133ffaaf8d1722; uc1=cookie14=Uoe8g0xRHxRTFg%3D%3D; isg=BNzcaDMS1FsWIaAk3F4rQmZ9rfqOVYB_fCW36rbdo0eqAXyL3mVjD1LwZWn5ibjX; l=fBSck9QeNgpDvjnZBOfZPurza77TxIRAguPzaNbMi9fPObCH5RvNW1_-H7TMCnGVFsBJR3lDK4dwBeYBq_C-nxvt5mhSG5kmne_7Qn5..; tfstk=c53FBO_XveLUnNlJHP4r_Bpa7mZdZbhnZNPbxdre5VKymzZhiHB8sU3a_71NEkf..',
            'referer': 'https://uland.taobao.com/',
            'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'document',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-site': 'same-site',
            'sec-fetch-user': '?1',
            'upgrade-insecure-requests': '1',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
        }

# 配置调度器为redis
SCHEDULER = "scrapy_redis.scheduler.Scheduler"
# 配置去重类为redis
DUPEFILTER_CLASS = "scrapy_redis.dupefilter.RFPDupeFilter"
# 配置需要连接的redis
# REDIS_URL = 'redis://:foobared@127.0.0.1:6379'
REDIS_URL = 'redis://:@127.0.0.1:6379'
# 设置redis持久化
SCHEDULER_PERSIST = True
# 配置重爬取，分布式其中一台主机设置即可
SCHEDULER_FLUSH_ON_START = True
# 针对某一个域名的爬取线程数设置
CONCURRENT_REQUESTS_PER_DOMAIN = 1
# 针对某一个ip的爬取线程数量设置
CONCURRENT_REQUESTS_PER_IP=1
# 设置全局并发，100一般是一个比较合适的数值
CONCURRENT_REQUESTS = 1
# 增加Twisted IO线程池的最大量
REACTOR_THREADPOOL_MAXSIZE = 30
# 降低log等级
LOG_LEVEL = 'INFO'
# 是否禁用 cookies false 禁用，true不禁用
COOKIES_ENABLED = True
# 禁用重试
# RETRY_ENABLED = False

# 是否打开重试开关
RETRY_ENABLED = True 
#重试次数 
RETRY_TIMES = 2
#超时  
DOWNLOAD_TIMEOUT = 3
#重试代码
RETRY_HTTP_CODES = [500, 502, 503, 504, 408]
# 降低下载超时
DOWNLOAD_TIMEOUT = 15
# 重定向
REDIRECT_ENABLED = True
# 启用爬取 “Ajax 页面爬取”
AJAXCRAWL_ENABLED = True
# 爬虫中间键
# SPIDER_MIDDLEWARES = {
#    'universityInformation.middlewares.UniversityinformationSpiderMiddleware': 543,
# }
# 下载中间键
DOWNLOADER_MIDDLEWARES = {
   'universityInformation.middlewares.UniversityinformationDownloaderMiddleware': 543,
   # 'universityInformation.gerapy_selenium.downloadermiddlewares.SeleniumMiddleware': 555
   'gerapy_selenium.downloadermiddlewares.SeleniumMiddleware': 555
   # 'universityInformation.middlewares.ProxyMiddleware': 555,
   # 'scrapy_fake_useragent.middleware.RandomUserAgentMiddleware': 400 # 开启

   
}
# pipeline存储设置
ITEM_PIPELINES = {
   'universityInformation.pipelines.MysqlPipeline': 300,
}
# 设置mysql相关
MYSQL_HOST = 'localhost'
MYSQL_DATABASE = 'business_school'
MYSQL_USER = 'root'
MYSQL_PASSWORD = 'sxh.200008'
MYSQL_PORT = 3306
# 设置代理池地址
PROXY_URL="http://127.0.0.1:5010/get/"
# 设置mongoDB相关
