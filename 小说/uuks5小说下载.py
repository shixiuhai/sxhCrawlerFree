import requests
from bs4 import BeautifulSoup
import time
import re

# 设置请求头
headers = {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "en,zh-CN;q=0.9,zh;q=0.8",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "priority": "u=0, i",
    "sec-ch-ua": '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    "sec-ch-ua-arch": '"x86"',
    "sec-ch-ua-bitness": '"64"',
    "sec-ch-ua-full-version": '"131.0.6778.205"',
    "sec-ch-ua-full-version-list": '"Google Chrome";v="131.0.6778.205", "Chromium";v="131.0.6778.205", "Not_A Brand";v="24.0.0.0"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-model": '""',
    "sec-ch-ua-platform": '"Windows"',
    "sec-ch-ua-platform-version": '"10.0.0"',
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "none",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
}

# cookie 字符串转字典
def parse_cookie_string(cookie_string):
    """
    将 Cookie 字符串解析为字典
    :param cookie_string: 浏览器导出的 Cookie 字符串 (key=value; key=value; ...)
    :return: Python 字典形式的 Cookie
    """
    cookies = {}
    # 按分号分割每个键值对
    for item in cookie_string.split("; "):
        key, value = item.split("=", 1)  # 仅分割第一个等号，避免值中包含等号的问题
        cookies[key] = value
    return cookies

# 构造一共长连session
session=requests.Session()
session.headers.update(headers) # 更新session头
cookies=parse_cookie_string(input("请输入cookie字符串："))
detail_url = input("请输入详情业url（例如 https://www.uuks5.com/book/239411）：")
chater_number = int(input("请输入你要从第几章爬取：例如(688): "))
if chater_number<1:
    chater_number=1
session.cookies.update(cookies) # 更新cloudflare的cookie

save_file=input("请输入要保存的小说文件名称：")
time_sleep=int(input("请输入每章节爬取延迟时间秒(例如1): "))

wb=open(f"./{save_file}.txt","a",encoding='utf-8')
detail_html=session.get(url=detail_url).text
detail_soup=BeautifulSoup(detail_html,"html.parser") 
chapterList = detail_soup.find("ul",id="chapterList")
links =  ["https://www.uuks5.com/" + li.get("href") for li in chapterList.find_all("a")]
sorted_links = sorted(links, key=lambda x: int(re.search(r'\d+', x).group()))
sorted_links=sorted_links[chater_number-1::]
def spider_content(url,session,wb):
    chapter_text = session.get(url=url).text
    chapter_soup = BeautifulSoup(chapter_text,"html.parser")
    title = chapter_soup.find('h1')
    print("标题:", title.get_text(strip=True))  # 打印 h1 标签中的标题内容
    wb.write(title.get_text(strip=True)+"\n")
    txt_content_div = chapter_soup.find('div', id='TextContent')
    if txt_content_div:
        items_p=txt_content_div.find_all("p")
        for item_p in items_p:
            wb.write(item_p.getText()+"\n")
        
# 遍历所有章节开始爬取
for link in sorted_links:
    try:
        time.sleep(time_sleep)
        spider_content(link,session,wb)
    except Exception as error:
        print(f"{link}出现了错误，错误原因是:{error}")
        cookies=parse_cookie_string(input("请更换cookie字符串继续爬取："))
        session.cookies.update(cookies) # 更新cloudflare的cookie
        spider_content(link,session,wb)
wb.close()

            
        


            
