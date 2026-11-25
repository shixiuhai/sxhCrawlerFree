"""
网易云音乐 API 调用模块
基于 encrypt.py 加密模块，封装了所有核心 API 的调用
"""

import json
import requests
from encrypt import encrypt

BASE_URL = "https://music.163.com/weapi"
HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/130.0.0.0 Safari/537.36"
    ),
    "Referer": "https://music.163.com/",
}


def call_api(path, data):
    """
    通用 API 调用

    流程:
        1. 用 encrypt() 加密 data
        2. POST 到 BASE_URL + path
        3. 返回 JSON 响应

    参数:
        path: API 路径 (如 "/v3/song/detail")
        data: dict 类型的请求参数

    返回:
        dict: API 响应
    """
    encrypted = encrypt(data)
    resp = requests.post(
        f"{BASE_URL}{path}?csrf_token=",
        data=encrypted,
        headers=HEADERS,
    )
    return resp.json()


# ==================== 歌曲相关 API ====================


def get_song_detail(song_id):
    """
    获取歌曲详情

    请求参数:
        {"c": '[{"id": 3385918396}]'}

    返回包含:
        - songs[0].name       : 歌曲名
        - songs[0].ar         : 歌手列表 [{id, name}]
        - songs[0].al         : 专辑信息 {id, name, picUrl}
        - songs[0].dt         : 时长(毫秒)
    """
    return call_api("/v3/song/detail", {"c": json.dumps([{"id": song_id}])})


def get_song_url(song_id, br=320000):
    """
    (旧版API) 获取歌曲播放 URL

    参数:
        song_id: 歌曲 ID
        br: 码率
            - 999000: 无损 (需VIP)
            - 320000: 极高品质
            - 192000: 高品质
            - 128000: 标准品质

    请求参数:
        {"ids": "[3385918396]", "br": 320000}
    """
    return call_api("/song/enhance/player/url", {
        "ids": json.dumps([song_id]),
        "br": br,
    })


def get_song_url_v1(song_id, level="standard"):
    """
    (新版API) 获取歌曲播放 URL

    参数:
        song_id: 歌曲 ID
        level: 音质等级
            - "lossless": 无损
            - "exhigh":   极高 (320kbps)
            - "high":     高品 (192kbps)
            - "standard": 标准 (128kbps)

    请求参数:
        {"ids": "[3385918396]", "level": "exhigh", "encodeType": "mp3"}
    """
    return call_api("/song/enhance/player/url/v1", {
        "ids": json.dumps([song_id]),
        "level": level,
        "encodeType": "mp3",
    })


def get_lyric(song_id):
    """
    获取歌词

    请求参数:
        {"id": 3385918396, "lv": -1, "kv": -1, "tv": -1}

    返回包含:
        - lrc.lyric   : 原文歌词 (LRC格式)
        - tlyric.lyric: 翻译歌词 (如有)
        - klyric.lyric: 音译歌词 (如有)
    """
    return call_api("/song/lyric", {
        "id": song_id,
        "lv": -1,
        "kv": -1,
        "tv": -1,
    })


# ==================== 搜索 API ====================


def search_songs(keyword, offset=0, limit=30):
    """
    搜索歌曲

    参数:
        keyword: 搜索关键词
        offset:  分页偏移量
        limit:   每页数量

    请求参数:
        {"s": "晴天", "type": 1, "offset": 0, "limit": 30}
    """
    return call_api("/cloudsearch/get/web", {
        "s": keyword,
        "type": 1,
        "offset": offset,
        "limit": limit,
        "total": "true",
    })


# ==================== 辅助函数 ====================


def parse_song_info(detail_data):
    """从 API 返回中提取格式化的歌曲信息"""
    song = detail_data.get("songs", [{}])[0]
    return {
        "id": song.get("id"),
        "name": song.get("name"),
        "artists": [a["name"] for a in song.get("ar", [])],
        "album": song.get("al", {}).get("name", "N/A"),
        "album_pic": song.get("al", {}).get("picUrl", ""),
        "duration": song.get("dt", 0) // 1000,
    }


def format_song_info(info):
    """格式化歌曲信息为可读文本"""
    return (
        f"  歌名: {info['name']}\n"
        f"  歌手: {', '.join(info['artists'])}\n"
        f"  专辑: {info['album']}\n"
        f"  时长: {info['duration']}秒"
    )


def get_url_with_all_qualities(song_id):
    """一次获取所有码率的播放地址"""
    qualities = {
        "无损": 999000,
        "高品": 320000,
        "标准": 128000,
    }
    results = {}
    for label, br in qualities.items():
        result = get_song_url(song_id, br=br)
        data = result.get("data", [])
        if data and data[0].get("url"):
            results[label] = {
                "url": data[0]["url"],
                "size": data[0].get("size", 0),
                "br": data[0].get("br", br),
            }
        else:
            code = data[0].get("code", "N/A") if data else "N/A"
            results[label] = {"error": code}
    return results


# ==================== 测试入口 ====================
if __name__ == "__main__":
    import time

    song_id = 3385918396

    print("=" * 60)
    print("网易云音乐 API 示例")
    print("=" * 60)

    # 1. 搜索
    print("\n1. 搜索歌曲 '晴天'")
    search_result = search_songs("晴天", limit=3)
    songs = search_result.get("result", {}).get("songs", [])
    for s in songs:
        artists = ", ".join(a["name"] for a in s.get("ar", []))
        print(f"   ID: {s['id']:>10} | {s['name']} - {artists}")

    # 2. 歌曲详情
    print(f"\n2. 歌曲详情 (ID: {song_id})")
    detail = get_song_detail(song_id)
    info = parse_song_info(detail)
    print(format_song_info(info))

    # 3. 播放地址
    print("\n3. 播放地址")
    urls = get_url_with_all_qualities(song_id)
    for quality, data in urls.items():
        if "url" in data:
            print(f"   [{quality}] ✓ {data['size']//1024}KB")
        else:
            print(f"   [{quality}] ✗ {data['error']}")

    # 4. 歌词
    print("\n4. 歌词预览")
    lyric = get_lyric(song_id)
    lrc_text = lyric.get("lrc", {}).get("lyric", "")
    for line in lrc_text.split("\n")[:10]:
        print(f"   {line}")

    print("\n提示: MP3 URL 可以通过 result['data'][0]['url'] 获取")
