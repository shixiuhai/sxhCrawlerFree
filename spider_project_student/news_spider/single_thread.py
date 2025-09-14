import requests
from urllib.parse import urljoin, urlparse
from bs4 import BeautifulSoup
import time
from collections import deque
from gne import GeneralNewsExtractor
from datetime import datetime

def news_crawler(start_url, delay=1, max_pages=50, page_callback=None):
    """
    高校新闻网站专用爬虫
    
    参数:
        start_url: 起始URL
        delay: 请求延迟(秒)
        max_pages: 最大爬取页面数
        page_callback: 页面处理回调函数，接收(url, response_text)
    """
    domain = urlparse(start_url).netloc
    visited = set()
    queue = deque([start_url])
    
    print(f"开始爬取高校新闻网站: {start_url}")
    start_time = time.time()
    
    while queue and len(visited) < max_pages:
        url = queue.popleft()
        
        if url in visited:
            continue
            
        try:
            time.sleep(delay)
            
            headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36'
            }
            response = requests.get(url, headers=headers, timeout=10)
            response.raise_for_status()
            # 确保使用正确的编码
            if response.encoding == 'ISO-8859-1':
                response.encoding = 'utf-8'
            
            # 手动设置编码（如果自动检测失败）
            if not response.encoding or response.encoding.lower() not in ['utf-8', 'utf8']:
                response.encoding = response.apparent_encoding or 'utf-8'
                
            
            if 'text/html' in response.headers.get('Content-Type', ''):
                # 如果有页面回调函数，调用它
                if page_callback:
                    page_callback(url, response.text)
                
                # 解析HTML查找链接
                soup = BeautifulSoup(response.content, 'html.parser')
                for link in soup.find_all('a', href=True):
                    absolute_url = urljoin(url, link['href'])
                    
                    if (absolute_url.startswith(('http://', 'https://')) and
                        urlparse(absolute_url).netloc == domain and
                        absolute_url not in visited and
                        absolute_url not in queue):
                        
                        queue.append(absolute_url)
            
            visited.add(url)
            print(f"已访问: {url} ({len(visited)}/{max_pages})")
            
        except Exception as e:
            print(f"爬取 {url} 时出错: {str(e)}")
            visited.add(url)
    
    end_time = time.time()
    print(f"\n爬取完成! 总共访问了 {len(visited)} 个页面")
    print(f"耗时: {end_time - start_time:.2f} 秒")

# 初始化新闻提取器（全局一个就够了）
extractor = GeneralNewsExtractor()

def handle_news_page(url, html_content):
    """
    简单的新闻处理回调函数
    每发现一个页面就调用这个函数
    """
    try:
        # 使用GNE提取新闻内容
        news_result = extractor.extract(html_content)
        
        # 检查是否成功提取到新闻
        if news_result and news_result.get('title') and news_result.get('content'):
            # 添加额外信息
            news_result['url'] = url
            news_result['crawl_time'] = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            news_content = news_result.get('content', '')
            
            # 打印新闻信息
            print(f"\n📰 发现新闻:")
            print(f"   标题: {news_result.get('title')}")
            print(f"   时间: {news_result.get('publish_time', '未知')}")
            print(f"   作者: {news_result.get('author', '未知')}")
            print(f"   网址: {news_result.get('url')}")
            # print(f"   内容预览: {news_content[:100]}...")  # 显示前100个字符
            print(f"   内容预览: {news_content}")  # 显示前100个字符
            
            # 这里可以添加你的处理逻辑，比如：
            # 1. 存入数据库
            # 2. 发送到其他系统
            # 3. 实时分析内容
            
    except Exception as e:
        # 如果不是新闻页面，静默跳过
        pass

# 使用示例
if __name__ == "__main__":
    # 直接使用简单的回调函数
    news_crawler(
        start_url="https://www.tsinghua.edu.cn/info/1177/118220.htm",  # 替换成你要爬的学校新闻网
        delay=1,
        max_pages=20,
        page_callback=handle_news_page  # 直接传入回调函数
    )