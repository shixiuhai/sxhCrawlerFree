import cloudscraper
from bs4 import BeautifulSoup
import time
import re

# 创建 cloudscraper 实例
def create_scraper():
    """
    创建并配置 cloudscraper 实例
    """
    scraper = cloudscraper.create_scraper()
    return scraper

# 获取用户输入
detail_url = input("请输入详情页url（例如 https://www.uuks5.com/book/239411）：")
chater_number = int(input("请输入你要从第几章爬取：例如(688): "))
if chater_number < 1:
    chater_number = 1
save_file = input("请输入要保存的小说文件名称：")
time_sleep = int(input("请输入每章节爬取延迟时间秒(例如1): "))

# 创建 scraper 实例
scraper = create_scraper()

# 打开文件准备写入
wb = open(f"./{save_file}.txt", "a", encoding='utf-8')

try:
    # 获取详情页内容
    print("正在获取章节列表...")
    detail_html = scraper.get(url=detail_url).text
    detail_soup = BeautifulSoup(detail_html, "html.parser")
    
    # 解析章节列表
    chapterList = detail_soup.find("ul", id="chapterList")
    if not chapterList:
        print("未找到章节列表，请检查URL是否正确")
        exit()
        
    links = ["https://www.uuks5.com/" + li.get("href") for li in chapterList.find_all("a")]
    sorted_links = sorted(links, key=lambda x: int(re.search(r'\d+', x).group()))
    sorted_links = sorted_links[chater_number-1:]
    
    print(f"共找到 {len(sorted_links)} 个章节，从第 {chater_number} 章开始爬取")

    def spider_content(url, scraper, wb):
        """爬取单个章节内容"""
        chapter_text = scraper.get(url=url).text
        chapter_soup = BeautifulSoup(chapter_text, "html.parser")
        title = chapter_soup.find('h1')
        if title:
            print("标题:", title.get_text(strip=True))
            wb.write(title.get_text(strip=True) + "\n")
        else:
            print("未找到标题")
            wb.write("未知标题\n")
            
        txt_content_div = chapter_soup.find('div', id='TextContent')
        if txt_content_div:
            items_p = txt_content_div.find_all("p")
            for item_p in items_p:
                text = item_p.get_text(strip=True)
                if text:  # 只写入非空内容
                    wb.write(text + "\n")
            wb.write("\n")  # 章节之间空一行
        else:
            print("未找到正文内容")
            wb.write("正文内容获取失败\n\n")

    # 遍历所有章节开始爬取
    for i, link in enumerate(sorted_links, 1):
        try:
            print(f"正在爬取第 {i}/{len(sorted_links)} 章...")
            time.sleep(time_sleep)
            spider_content(link, scraper, wb)
        except Exception as error:
            print(f"{link} 出现了错误，错误原因是: {error}")
            print("正在重试...")
            try:
                time.sleep(time_sleep + 2)  # 重试前多等待2秒
                spider_content(link, scraper, wb)
                print("重试成功！")
            except Exception as error:
                print(f"重试失败: {error}")
                wb.write(f"[本章节获取失败: {link}]\n\n")
                continue

    print(f"爬取完成！内容已保存到 {save_file}.txt")

except Exception as e:
    print(f"程序执行出错: {e}")
finally:
    wb.close()
