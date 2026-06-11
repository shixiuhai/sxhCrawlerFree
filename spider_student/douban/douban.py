import requests
from bs4 import BeautifulSoup
import time
import re

def extract_movie_info(html_content):
    """
    从HTML内容中提取电影信息
    """
    soup = BeautifulSoup(html_content, 'html.parser')
    movies = []
    
    # 查找所有的电影项目
    items = soup.find_all('div', class_='item')
    
    for item in items:
        try:
            # 提取电影链接
            link_tag = item.find('a')
            movie_link = link_tag['href'] if link_tag else None
            time.sleep(1)
            
            movie_summary= extract_summary_from_url(movie_link)
            
            # 提取电影名称信息
            title_tag = item.find('span', class_='title')
            chinese_title = title_tag.get_text(strip=True) if title_tag else None
            
            # 提取英文名称
            english_title_tag = title_tag.find_next_sibling('span', class_='title')
            english_title = english_title_tag.get_text(strip=True).replace('/', '').strip() if english_title_tag else None
            
            # 提取其他名称
            other_title_tag = item.find('span', class_='other')
            other_title = other_title_tag.get_text(strip=True).replace('/', '').strip() if other_title_tag else None
            
            # 提取导演和主演信息
            bd = item.find('div', class_='bd')
            director_actors_info = bd.find('p').get_text(strip=True) if bd and bd.find('p') else ''
            
            # 使用正则表达式提取导演和主演
            director_match = re.search(r'导演:\s*(.*?)\s*主演:', director_actors_info)
            if director_match:
                director = director_match.group(1).strip()
            else:
                # 如果没有主演信息，尝试另一种模式
                director_match2 = re.search(r'导演:\s*(.*?)(?:\d{4}|$)', director_actors_info)
                director = director_match2.group(1).strip() if director_match2 else None
            
            actors_match = re.search(r'主演:\s*(.*?)(?:\d{4}|$)', director_actors_info)
            actors = actors_match.group(1).strip() if actors_match else None
            
            # 提取年份、国家和类型
            year_country_genre_match = re.search(r'(\d{4})\s*/\s*([^/]+)\s*/\s*(.+)', director_actors_info)
            if year_country_genre_match:
                year = year_country_genre_match.group(1)
                country = year_country_genre_match.group(2).strip()
                genre = year_country_genre_match.group(3).strip()
            else:
                year = country = genre = None
            
            # 提取评分
            rating_tag = item.find('span', class_='rating_num')
            rating = rating_tag.get_text(strip=True) if rating_tag else None
            
            # 提取评价人数
            eval_num_tag = item.find('span', string=re.compile(r'人评价'))
            eval_num = eval_num_tag.get_text(strip=True) if eval_num_tag else None
            if eval_num:
                eval_num = re.search(r'(\d+)', eval_num.replace(',', '')).group(1)
            
            # 提取引用/简介
            quote_tag = item.find('p', class_='quote')
            quote = quote_tag.find('span').get_text(strip=True) if quote_tag and quote_tag.find('span') else None
            
            # 构建电影信息字典
            movie_info = {
                'chinese_title': chinese_title,
                'english_title': english_title,
                'other_title': other_title,
                'director': director,
                'actors': actors,
                'year': year,
                'country': country,
                'genre': genre,
                'rating': rating,
                'evaluation_count': eval_num,
                'quote': quote,
                'detail_link': movie_link,
                'movie_summary':movie_summary
            }
            print(movie_info)
            
            movies.append(movie_info)
            
        except Exception as e:
            print(f"提取电影信息时出错: {e}")
            continue
    
    return movies

def extract_summary_from_url(url):
    """
    从给定的URL中提取属性为property="v:summary"的span标签内的文本内容。
    
    参数:
    url (str): 要抓取的详情页链接
    
    返回:
    str: 提取到的摘要文本，如果未找到则返回None
    """
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        # 发送GET请求获取页面内容
        response = requests.get(url,headers=headers)
        response.raise_for_status()  # 检查请求是否成功
        
        # 使用BeautifulSoup解析HTML内容
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # 查找属性为property="v:summary"的span标签
        summary_span = soup.find('span', {'property': 'v:summary'})
        
        # 如果找到标签，提取文本内容并去除首尾空白
        if summary_span:
            summary_text = summary_span.get_text(strip=True)
            return summary_text
        else:
            print("未找到属性为'v:summary'的span标签")
            return None
            
    except requests.RequestException as e:
        print(f"请求出错: {e}")
        return None
    except Exception as e:
        print(f"处理过程中发生错误: {e}")
        return None

def display_movies(movies, page_num):
    """显示电影信息"""
    print(f"\n{'='*80}")
    print(f"第 {page_num} 页电影信息")
    print(f"{'='*80}")
    
    for i, movie in enumerate(movies, 1):
        print(f"\n{(page_num-1)*25 + i}. {movie['chinese_title']}")
        if movie['english_title']:
            print(f"   英文名: {movie['english_title']}")
        if movie['other_title']:
            print(f"   其他名: {movie['other_title']}")
        print(f"   导演: {movie['director']}")
        print(f"   主演: {movie['actors']}")
        print(f"   年份: {movie['year']}")
        print(f"   国家: {movie['country']}")
        print(f"   类型: {movie['genre']}")
        print(f"   评分: {movie['rating']}")
        print(f"   评价人数: {movie['evaluation_count']}")
        if movie['quote']:
            print(f"   简介: {movie['quote']}")
        print(f"   详情页: {movie['detail_link']}")
        print(f"电影总结: {movie['movie_summary']}")
        print("-" * 80)

def scrape_douban_top250(start=0, max_movies=50):
    """
    爬取豆瓣Top250电影信息，每爬取一页显示一次
    """
    all_movies = []
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
    
    page_num = 1
    
    while start < max_movies:
        url = f'https://movie.douban.com/top250?start={start}&filter='
        print(f"正在爬取第 {page_num} 页: {url}")
        
        try:
            response = requests.get(url, headers=headers)
            response.raise_for_status()
            
            # 解析HTML
            movies = extract_movie_info(response.text)
            all_movies.extend(movies)
            
            # 显示当前页的电影信息
            display_movies(movies, page_num)
            
            print(f"已爬取第 {page_num} 页的 {len(movies)} 部电影，总计 {len(all_movies)} 部")
            
            # 如果已经达到或超过最大数量，停止爬取
            if len(all_movies) >= max_movies:
                break
                
            # 翻页
            start += 25
            page_num += 1
            
            # 添加延迟，避免请求过于频繁
            time.sleep(2)
            
        except requests.RequestException as e:
            print(f"请求失败: {e}")
            break
        except Exception as e:
            print(f"处理页面时出错: {e}")
            break
    
    return all_movies[:max_movies]

# 使用示例
if __name__ == "__main__":
    # 从网络爬取电影信息，每爬取一页显示一次
    all_movies = scrape_douban_top250(start=0, max_movies=25)
    
    # 如果需要保存到JSON文件，可以取消下面的注释
    # with open('douban_top25_movies.json', 'w', encoding='utf-8') as f:
    #     json.dump(all_movies, f, ensure_ascii=False, indent=2)
    # print("数据已保存到 douban_top25_movies.json")