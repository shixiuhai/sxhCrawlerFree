import requests
from bs4 import BeautifulSoup
import random
import time
import re
headers={
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36"
}
detail_url = input("请输入详情业url（例如 https://www.uuks5.com/book/239411）：")
save_file=input("请输入要保存的小说文件名称：")
time_sleep=int(input("请输入每章节爬取延迟时间秒(例如1): "))
wb=open(f"./{save_file}.txt","w",encoding='utf-8')
detail_html=requests.get(url=detail_url,headers=headers).text
detail_soup=BeautifulSoup(detail_html,"html.parser") 
chapterList = detail_soup.find("ul",id="chapterList")
links =  ["https://www.uuks5.com/" + li.get("href") for li in chapterList.find_all("a")]
sorted_links = sorted(links, key=lambda x: int(re.search(r'\d+', x).group()))

for link in sorted_links:
    try:
        chapter_text = requests.get(url=link,headers=headers).text
        time.sleep(time_sleep)
        chapter_soup = BeautifulSoup(chapter_text,"html.parser")
        title = chapter_soup.find('h1')
        print("标题:", title.get_text(strip=True))  # 打印 h1 标签中的标题内容
        wb.write(title.get_text(strip=True)+"\n")
        txt_content_div = chapter_soup.find('div', id='TextContent')
        if txt_content_div:
            items_p=txt_content_div.find_all("p")
            for item_p in items_p:
                wb.write(item_p.getText()+"\n")
    except Exception as error:
        print(f"{link}出现了错误，错误原因是:{error}")
wb.close()


                    
            
        


            

