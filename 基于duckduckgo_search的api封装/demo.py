"""_summary_
感觉在实事上简介还是不够，需要添加上all_body,追求效果建议还是使用专业ai搜索API
Returns:
    _type_: _description_
"""
from duckduckgo_search import DDGS
import requests
from bs4 import BeautifulSoup
from datetime import datetime
from flask import Flask, request, jsonify

app = Flask(__name__)

def fetch_paragraph_text(query, max_results, is_all_body:bool=False):
    # 使用 DuckDuckGo 搜索接口
    results = DDGS().text(query, max_results=max_results,timelimit="d")

    final_results = []
    for result in results:
        if is_all_body:
            headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.3029.110 Safari/537.3'
            }
            try:
                response = requests.get(result['href'], headers=headers)
                response.raise_for_status()  # 检查请求是否成功
            except requests.RequestException as e:
                print(f"Error fetching {result['href']}: {e}")
                continue
            
            soup = BeautifulSoup(response.content, 'html.parser')
            
            # 提取所有常见的段落文本（<p>, <div>, <span>, <li> 标签中的内容）
            paragraphs = soup.find_all(['p', 'div', 'span', 'li'])

            # 提取段落内容并进行清理
            body_content = ' '.join(
                ''.join(filter(lambda x: x.isprintable(), para.get_text(separator=' ', strip=True)))
                for para in paragraphs
            ).strip()

            # 清理拼接后的文本
            body_content = body_content.strip()  # 去除多余空格

            # 限制返回内容的长度，避免返回过长文本
            final_result = {
                'title': result['title'],
                'href': result['href'],
                'body': result['body'],
                "now_time":f"{datetime.now().strftime("%Y-%m-%d %H:%M:%S")}",
                'all_body': body_content,  # 只返回前1000个字符作为摘要
            }
            final_results.append(final_result)
        else:
            final_result = {
                'title': result['title'],
                'href': result['href'],
                "now_time":f"{datetime.now().strftime("%Y-%m-%d %H:%M:%S")}",
                'body': result['body'],
            }
            final_results.append(final_result)

    return final_results

@app.route('/search', methods=['GET'])
def search():
    query = request.args.get('query', '世界,你好')  # 默认查询内容
    max_results = int(request.args.get('max_results', 10))  # 默认最多返回2个结果
    
    results = fetch_paragraph_text(query, max_results)
    
    return jsonify(results)

if __name__ == '__main__':
    # app.run(debug=True)
    print(fetch_paragraph_text('今天天气是啥', 10))
