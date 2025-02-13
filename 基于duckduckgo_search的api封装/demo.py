from duckduckgo_search import DDGS
import requests
from bs4 import BeautifulSoup
import json
from flask import Flask, request, jsonify

app = Flask(__name__)

def fetch_paragraph_text(query, max_results):
    # 使用 DuckDuckGo 搜索接口
    results = DDGS().text(query, max_results=max_results)

    final_results = []
    for result in results:
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
            'all_body': body_content,  # 只返回前1000个字符作为摘要
        }
        final_results.append(final_result)

    return final_results

@app.route('/search', methods=['GET'])
def search():
    query = request.args.get('query', '世界,你好')  # 默认查询内容
    max_results = int(request.args.get('max_results', 2))  # 默认最多返回2个结果
    
    results = fetch_paragraph_text(query, max_results)
    
    return jsonify(results)

if __name__ == '__main__':
    # app.run(debug=True)
    print(fetch_paragraph_text('北京现在几点了', 2))
