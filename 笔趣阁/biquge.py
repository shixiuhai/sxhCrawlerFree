import requests
from lxml import etree # html解析
import logging



bookChaptersRequestUrl="https://www.biqu789.com/296/296486/"
bookChaptersHeaders= {
    'authority': 'www.biqu789.com',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7',
    'cache-control': 'no-cache',
    
    'pragma': 'no-cache',
    'referer': 'https://www.biqu789.com/',
    'sec-ch-ua': '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'document',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-user': '?1',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
}
bookChaptersCookies={
    'cookie': 'check_url=yes'
}

bookChapters=requests.get(url=bookChaptersRequestUrl,
                          headers=bookChaptersHeaders,
                          cookies=bookChaptersCookies).text # 获取某本书的全部章

htmlEtree=etree.HTML(bookChapters) # 将文本解析为html结构数据

# //*[@id="list"]
bookChaptersUrl=htmlEtree.xpath('//*[@id="list"]//a/@href')[::-1] # 提取list里面所有url

# 通过结合去重提取所有的url
bookChaptersWholeUrlList=list(set(bookChaptersUrl)) # 创建了一个集合
bookChaptersWholeUrlList.sort(key=bookChaptersUrl.index)
bookChaptersWholeUrlList=['https://www.biqu789.com/'+ item for item in bookChaptersWholeUrlList][::-1]

# for bookChapterUrl in bookChaptersUrl:
#     bookChaptersWholeUrlSet.add("https://www.biqu789.com"+bookChapterUrl)
    
# 通过提取链接来提取内容 请求每章节内容
for bookChapterUrl in bookChaptersWholeUrlList:

    cookies = {
        'check_url': 'yes',
    }

    headers = {
        'authority': 'www.biqu789.com',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-control': 'no-cache',
        # 'cookie': 'check_url=yes',
        'pragma': 'no-cache',
        'referer': bookChaptersRequestUrl,
        'sec-ch-ua': '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
    }

    responseText = requests.get(bookChapterUrl, cookies=cookies, headers=headers).text
    htmlChapter=etree.HTML(responseText) # 将文本解析为html结构数据
    titleList=htmlChapter.xpath('//h1/text()')
    # 提取章节内容
    if len(titleList)>0:
        title=titleList[0]
        content=htmlChapter.xpath('//*[@id="content"]//text()')

        
    


    

    
