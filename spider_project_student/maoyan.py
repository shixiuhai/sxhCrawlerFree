"""
1. S - 静态工具类
javascript
var S = {
    get: function(e) { ... },
    set: function(e, t, n, r, o, i) { ... },
    getExpire: function(e, t, n) { ... }
};
特点：

✅ 直接调用：S.get('cookieName')

✅ 无需实例化：不需要 new S()

✅ 无状态：方法不依赖实例属性

✅ 工具函数：提供通用的Cookie操作能力

使用方式：

javascript
// 直接调用静态方法
var cookieValue = S.get('__mta');
S.set('test', 'value', S.getExpire(7, 0, 0));
2. N - 需要实例化的类
javascript
var N = function() {
    function UserTracker() {
        // 实例属性
        this.uuid = null;
        this.visit_id = null;
        this.isFirstVisit = false;
        // 初始化逻辑
        this._setCookie();
    }
    
    // 实例方法
    UserTracker.prototype.getInfo = function() { ... };
    UserTracker.prototype._setCookie = function() { ... };
    
    return UserTracker;
}();
特点：

✅ 需要实例化：var tracker = new N()

✅ 有状态：每个实例有自己的属性值

✅ 有生命周期：构造函数中执行初始化逻辑

✅ 业务逻辑：封装复杂的用户跟踪业务

使用方式：

javascript
// 必须先创建实例
var userTracker = new N();  // ← 必须用 new

// 然后调用实例方法
var userInfo = userTracker.getInfo();
3. 两者的关系 - 依赖调用
javascript
// N 类内部依赖 S 工具类
UserTracker.prototype._setCookie = function() {
    // 使用静态工具类 S
    var existingCookie = S.get(this._COOKIE_USER_TRACKING);  // ← 调用静态方法
    var expireTime = S.getExpire(720, 0, 0);                // ← 调用静态方法
    
    if (existingCookie) {
        // 更新逻辑...
        S.set(this._COOKIE_USER_TRACKING, newValue, expireTime); // ← 调用静态方法
    } else {
        // 创建逻辑...
        S.set(this._COOKIE_USER_TRACKING, initialValue, expireTime);
    }
};    
"""
def generate_mta_cookies():
    import random
    import string
    """生成MTA相关的cookies"""
    current_time = int(time.time() * 1000)  # 毫秒时间戳
    
    # 生成 __mta cookie
    hash_value = str(random.randint(10000000, 99999999))  # 模拟hash值
    mta_value = f"{hash_value}.{current_time}.{current_time}.{current_time}.1"
    
    # 生成 _lxsdk_cuid (格式: 16位hex-随机字符串)
    cuid_part1 = ''.join(random.choices('0123456789abcdef', k=16))
    cuid_part2 = ''.join(random.choices(string.ascii_lowercase + string.digits, k=25))
    lxsdk_cuid = f"{cuid_part1}-{cuid_part2}"
    
    # 生成 _lxsdk (与uuid相同)
    lxsdk = "4A46AC609CD811F0AD0261206EEB9C61DCF69E7FD56441EAB0D8A90A08539296"
    
    # 生成 _csrf (32位hex)
    csrf = ''.join(random.choices('0123456789abcdef', k=32))
    
    cookies = {
        'uuid_n_v': 'v1',
        'uuid': '4A46AC609CD811F0AD0261206EEB9C61DCF69E7FD56441EAB0D8A90A08539296',
        '_csrf': csrf,
        'Hm_lvt_e0bacf12e04a7bd88ddbd9c74ef2b533': '1759111323',
        'Hm_lpvt_e0bacf12e04a7bd88ddbd9c74ef2b533': str(int(time.time())),
        'HMACCOUNT': '1015DCC6AE772F93',
        '_lxsdk_cuid': lxsdk_cuid,
        '_lxsdk': lxsdk,
        '_ga_WN80P4PSY7': 'GS2.1.s1759111324$o1$g0$t1759111324$j60$l0$h0',
        '_ga': 'GA1.1.1432371223.1759111325',
        '__mta': mta_value,
        '_lxsdk_s': '19993349edd-bce-3a1-10d%7C%7C2'
    }
    
    return cookies


def page_to_offse(page_num:int=1):
    """_summary_
    页码和offset的关系
    Args:
        page_num (int, optional): _description_. Defaults to 1.

    Returns:
        _type_: _description_
    """
    return (page_num-1)*10
    
def spider_maoyan(offset:int=0):
    """_summary_
    通过offset获取某页猫眼电影数据
    Args:
        offset (int, optional): _description_. Defaults to 0.

    Returns:
        _type_: _description_
    """
    url = f"https://www.maoyan.com/board/4?offset={offset}"
    import requests
    cookies = {
        # '__mta': '150917641.1758623097941.1759058545559.1759058583645.10',
        # 'uuid_n_v': 'v1',
        # 'uuid': '8BF75120986711F0902B919AF33308787303AABCDC774651BA3D956014C40CD2',
        # '_lxsdk_cuid': '197aab401a3c8-055f843fe44a37-26011e51-e1500-197aab401a3c8',
        # '_lxsdk': '8BF75120986711F0902B919AF33308787303AABCDC774651BA3D956014C40CD2',
        # '_ga': 'GA1.1.983670985.1758623098',
        # '_ga_WN80P4PSY7': 'GS2.1.s1758802916$o6$g1$t1758802924$j52$l0$h0',
        # '_csrf': 'e9bb1f1687c72591029f19c034ace3cbff98fff1e150b419308010f38c869f4c',
        # 'Hm_lvt_e0bacf12e04a7bd88ddbd9c74ef2b533': '1758623096,1758795773,1758798715,1759055071',
        # 'HMACCOUNT': 'A323F2971E2D6DB7',
        # 'Hm_lpvt_e0bacf12e04a7bd88ddbd9c74ef2b533': '1759058582',
        # '_lxsdk_s': '1999002008b-38f-7f1-adc%7C%7C15',
    }

    headers = {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-User': '?1',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Chromium";v="140", "Not=A?Brand";v="24", "Google Chrome";v="140"',
        # 'sec-ch-ua-mobile': '?0',
        # 'sec-ch-ua-platform': '"Windows"',
        # 'Cookie': '__mta=150917641.1758623097941.1759058545559.1759058583645.10; uuid_n_v=v1; uuid=8BF75120986711F0902B919AF33308787303AABCDC774651BA3D956014C40CD2; _lxsdk_cuid=197aab401a3c8-055f843fe44a37-26011e51-e1500-197aab401a3c8; _lxsdk=8BF75120986711F0902B919AF33308787303AABCDC774651BA3D956014C40CD2; _ga=GA1.1.983670985.1758623098; _ga_WN80P4PSY7=GS2.1.s1758802916$o6$g1$t1758802924$j52$l0$h0; _csrf=e9bb1f1687c72591029f19c034ace3cbff98fff1e150b419308010f38c869f4c; Hm_lvt_e0bacf12e04a7bd88ddbd9c74ef2b533=1758623096,1758795773,1758798715,1759055071; HMACCOUNT=A323F2971E2D6DB7; Hm_lpvt_e0bacf12e04a7bd88ddbd9c74ef2b533=1759058582; _lxsdk_s=1999002008b-38f-7f1-adc%7C%7C15',
    }

    # resp  = requests.get(url=url,headers=headers,cookies=cookies)
    resp  = requests.get(url=url,headers=headers,cookies=cookies)

    # print(type(resp))
    # text:str = resp.text
    # f=open("maoyan_requests.html","w",encoding="utf-8")
    # f.write(text)
    # f.close()
    html_str = resp.text

    # html_str是一个字符串
    from bs4 import BeautifulSoup

    # 需要bs4 操作，我们需要 把字符串变成一个bs4的专有对象
    html_obj = BeautifulSoup(html_str,"lxml")

    movie_items = html_obj.find_all(name="dd")
    # print(movie_items)
    # print(len(movie_items))
    movies_list  = []
    for movie_item in movie_items:
        
        # 加个异常捕获
        try:
            # break
            cover_url_tag = movie_item.find(name="img",class_="board-img")
            cover_url = ""
            if cover_url_tag and cover_url_tag.has_attr("src"):
                cover_url = cover_url_tag["src"].strip()
                
            # 取出放映时间
            release_date=""
            release_date_tag= movie_item.find(name="p",class_="releasetime")
            if release_date_tag:
                release_date = release_date_tag.text.strip()
                release_date = release_date.replace("上映时间：","")
                
            # 取出电影名
            name=""
            name_tag = movie_item.find(name="a",attrs={'data-act':'boarditem-click'})
            if name_tag:
                name = name_tag.get("title").strip()
            # print(cover_url,release_date)
            
            # 主演
            star=""
            star_tag=movie_item.find(name="p",class_="star")
            if star_tag:
                star = star_tag.text.replace("主演：","").strip()
            
            # 评分
            score=""
            score_1_tag = movie_item.find(name="i",class_="integer")
            score_2_tag = movie_item.find(name="i",class_="fraction")
            if score_1_tag and score_2_tag:
                score_1 = score_1_tag.text.strip()
                score_2 = score_2_tag.text.strip()
                score = score_1 + score_2
            
            result = {
                "cover_url":cover_url,
                "release_date":release_date,
                "name":name,
                "star":star,
                "score":score
            }
            movies_list.append(result)
        except Exception as error:
            print(f"出现了错误，错误内容是{error}")
        # finally:
        #     pass
    return movies_list
if __name__ == "__main__":
    all_movie_list = []
    for page in range(1,11):
        offset:int = page_to_offse(page) # 某页对应的offset
        import time
        time.sleep(4)
        result:list = spider_maoyan(20) # 某页的结果
        print(f"正在爬取第{page}页数据，内容是{result}")    
        # print(f"正在爬取第{page}页数据，内容长度是{len(result)}")    
        all_movie_list.extend(result)
        
    print(all_movie_list)
    
            
        
   
