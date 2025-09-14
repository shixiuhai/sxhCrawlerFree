import requests
from urllib.parse import urljoin, urlparse
from bs4 import BeautifulSoup
import time
from collections import deque
from gne import GeneralNewsExtractor
from datetime import datetime
from concurrent.futures import ThreadPoolExecutor, as_completed

def news_crawler(start_url, delay=1, max_pages=50, page_callback=None, thread_count=5):
    """
    高校新闻网站专用爬虫（线程池简化版）
    """
    domain = urlparse(start_url).netloc
    visited = set()
    queue = deque([start_url])
    
    print(f"开始爬取高校新闻网站: {start_url} (使用{thread_count}个线程)")
    start_time = time.time()
    
    def process_url(url):
        """处理单个URL的函数"""
        try:
            time.sleep(delay)
            
            headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
            response = requests.get(url, headers=headers, timeout=10)
            response.raise_for_status()
            
            # 编码处理
            if response.encoding == 'ISO-8859-1':
                response.encoding = 'utf-8'
            if not response.encoding or response.encoding.lower() not in ['utf-8', 'utf8']:
                response.encoding = response.apparent_encoding or 'utf-8'
                
            if 'text/html' in response.headers.get('Content-Type', ''):
                # 调用回调函数
                if page_callback:
                    page_callback(url, response.text)
                
                # 解析链接
                soup = BeautifulSoup(response.content, 'html.parser')
                new_links = []
                for link in soup.find_all('a', href=True):
                    absolute_url = urljoin(url, link['href'])
                    
                    if (absolute_url.startswith(('http://', 'https://')) and
                        urlparse(absolute_url).netloc == domain and
                        absolute_url not in visited):
                        new_links.append(absolute_url)
                
                # 添加新链接到队列
                for link in new_links:
                    if link not in visited and link not in queue:
                        queue.append(link)
            
            # 标记为已访问
            visited.add(url)
            
            print(f"已访问: {url} ({len(visited)}/{max_pages})")
            return True
            
        except Exception as e:
            print(f"爬取 {url} 时出错: {str(e)}")
            visited.add(url)
            return False
    
    # 使用线程池
    with ThreadPoolExecutor(max_workers=thread_count) as executor:
        while len(visited) < max_pages and queue:
            # 获取当前需要处理的URL
            current_urls = []
            while queue and len(current_urls) < thread_count and len(visited) + len(current_urls) < max_pages:
                url = queue.popleft()
                if url not in visited:
                    current_urls.append(url)
            
            if not current_urls:
                break
            
            # 提交任务到线程池
            futures = []
            for url in current_urls:
                futures.append(executor.submit(process_url, url))
            
            # 等待当前批次完成
            for future in as_completed(futures):
                try:
                    future.result()
                except Exception as e:
                    print(f"线程执行出错: {str(e)}")
    
    end_time = time.time()
    print(f"\n爬取完成! 总共访问了 {len(visited)} 个页面")
    print(f"耗时: {end_time - start_time:.2f} 秒")

# 初始化新闻提取器
extractor = GeneralNewsExtractor()

def handle_news_page(url, html_content):
    """
    简单的新闻处理回调函数
    """
    try:
        news_result = extractor.extract(html_content)
        
        if news_result and news_result.get('title') and news_result.get('content'):
            news_result['url'] = url
            news_result['crawl_time'] = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            news_content = news_result.get('content', '')
            
            print(f"\n📰 发现新闻:")
            print(f"   标题: {news_result.get('title')}")
            print(f"   时间: {news_result.get('publish_time', '未知')}")
            print(f"   作者: {news_result.get('author', '未知')}")
            print(f"   网址: {news_result.get('url')}")
            
    except Exception:
        pass

# 使用示例
if __name__ == "__main__":
    news_crawler(
        start_url="https://www.tsinghua.edu.cn/info/1177/121162.htm",
        delay=0.5,
        max_pages=30,
        page_callback=handle_news_page,
        thread_count=3
    )