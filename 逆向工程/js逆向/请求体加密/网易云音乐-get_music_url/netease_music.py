#!/usr/bin/env python3
"""
网易云音乐 API 逆向工程 - 完整命令行工具

功能:
  - 搜索歌曲
  - 查看歌曲详情
  - 获取歌词
  - 获取 MP3 播放地址 (无损/高品/标准)
  - 下载 MP3 文件

加密方式:
  两层 AES-128-CBC + RSA 公钥加密 (详见 encrypt.py)

依赖:
  pip install requests pycryptodome

使用:
  python netease_music.py                         # 示例模式
  python netease_music.py search 晴天             # 搜索
  python netease_music.py info 3385918396         # 查看详情
  python netease_music.py url 3385918396          # 获取播放地址
  python netease_music.py lyric 3385918396        # 显示歌词
  python netease_music.py lyric-download 3385918396 # 下载歌词文件
  python netease_music.py download 3385918396     # 下载 MP3 (确认后才下载)

API 端点对照表:
  POST /weapi/v3/song/detail                      # 歌曲详情
  POST /weapi/song/enhance/player/url             # 播放地址 (旧版)
  POST /weapi/song/enhance/player/url/v1          # 播放地址 (新版)
  POST /weapi/song/lyric                          # 歌词
  POST /weapi/cloudsearch/get/web                 # 搜索
"""

import sys
import os
import json

# 确保可以导入同级模块
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from encrypt import encrypt
from api import (
    get_song_detail, get_song_url, get_song_url_v1,
    get_lyric, search_songs, parse_song_info,
    format_song_info, get_url_with_all_qualities,
)
import requests


def cmd_search(keyword):
    """搜索歌曲"""
    result = search_songs(keyword, limit=10)
    songs = result.get("result", {}).get("songs", [])
    if not songs:
        print("未找到结果")
        return
    print(f"找到 {result['result']['songCount']} 条结果:\n")
    for s in songs:
        artists = ", ".join(a["name"] for a in s.get("ar", []))
        album = s.get("al", {}).get("name", "N/A")
        print(f"  ID: {s['id']:>10} | {artists} - {s['name']} [{album}]")


def cmd_info(song_id):
    """显示歌曲详情"""
    detail = get_song_detail(song_id)
    info = parse_song_info(detail)
    print(format_song_info(info))


def cmd_url(song_id):
    """获取各码率播放地址"""
    print(f"歌曲 ID: {song_id}\n")
    urls = get_url_with_all_qualities(song_id)
    for quality, data in urls.items():
        if "url" in data:
            print(f"  [{quality}]")
            print(f"    URL:  {data['url']}")
            print(f"    大小: {data['size']//1024} KB")
            print(f"    码率: {data['br']} bps")
        else:
            print(f"  [{quality}] ✗ 不可用 (code={data['error']})")
        print()


def cmd_lyric(song_id):
    """获取歌词"""
    lyric = get_lyric(song_id)
    lrc = lyric.get("lrc", {}).get("lyric", "")
    tlrc = lyric.get("tlyric", {}).get("lyric", "")

    print(f"歌曲 ID: {song_id}\n")
    print("--- 原文歌词 ---")
    print(lrc if lrc else "(无歌词)")
    if tlrc:
        print("\n--- 翻译歌词 ---")
        print(tlrc)


def cmd_download(song_id, br=320000):
    """下载 MP3 文件"""
    result = get_song_url(song_id, br=br)
    data = result.get("data", [])
    if not data or not data[0].get("url"):
        print(f"无法获取播放地址 (code={data[0].get('code', 'N/A')})")
        return

    url = data[0]["url"]
    filename = f"{song_id}.mp3"

    print(f"播放地址: {url}")
    print(f"文件大小: {data[0].get('size', 0)//1024} KB")
    print(f"保存名称: {filename}")
    confirm = input("\n是否下载? (y/N): ").strip().lower()
    if confirm != "y":
        print("已取消")
        return

    headers = {
        "User-Agent": ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                       "AppleWebKit/537.36 (KHTML, like Gecko) "
                       "Chrome/130.0.0.0 Safari/537.36"),
        "Referer": "https://music.163.com/",
    }

    resp = requests.get(url, headers=headers, stream=True)
    total = int(resp.headers.get('Content-Length', 0))
    downloaded = 0

    with open(filename, 'wb') as f:
        for chunk in resp.iter_content(chunk_size=8192):
            if chunk:
                f.write(chunk)
                downloaded += len(chunk)
                if total:
                    pct = downloaded / total * 100
                    print(f"\r  进度: {pct:.1f}% ({downloaded//1024}/{total//1024}KB)", end="")

    print(f"\n✓ 下载完成: {filename} ({total//1024}KB)")


def cmd_lyric_download(song_id):
    """下载歌词文件"""
    lyric = get_lyric(song_id)
    lrc = lyric.get("lrc", {}).get("lyric", "")
    tlrc = lyric.get("tlyric", {}).get("lyric", "")

    if not lrc:
        print("无歌词")
        return

    filename = f"{song_id}.lrc"
    line_count = len([l for l in lrc.split("\n") if l.strip()])
    print(f"歌词行数: {line_count}")
    print(f"保存名称: {filename}")
    confirm = input("\n是否下载? (y/N): ").strip().lower()
    if confirm != "y":
        print("已取消")
        return

    with open(filename, 'w', encoding='utf-8') as f:
        f.write(lrc)

    print(f"✓ 歌词已保存: {filename}")

    if tlrc:
        t_filename = f"{song_id}.tlyric.lrc"
        confirm_t = input(f"翻译歌词是否也下载? (y/N): ").strip().lower()
        if confirm_t == "y":
            with open(t_filename, 'w', encoding='utf-8') as f:
                f.write(tlrc)
            print(f"✓ 翻译歌词已保存: {t_filename}")


def cmd_encrypt_raw():
    """调试: 手动构造并加密请求"""
    print("手动加密测试\n")
    data = {"ids": "[3385918396]", "br": 320000}
    result = encrypt(data)
    print("明文参数:")
    print(f"  {json.dumps(data, indent=2)}")
    print("\n加密后:")
    print(f"  params:     {result['params']}")
    print(f"  encSecKey:  {result['encSecKey']}")


def main():
    if len(sys.argv) < 2:
        # 无参数: 运行示例
        print("网易云音乐 API 命令行工具")
        print("=" * 60)

        song_id = 3385918396

        # 详情
        print(f"\n1. 歌曲详情 (ID: {song_id})")
        detail = get_song_detail(song_id)
        info = parse_song_info(detail)
        print(f"   {info['name']} - {', '.join(info['artists'])}")
        print(f"   专辑: {info['album']}")

        # 播放地址
        print(f"\n2. 播放地址")
        result = get_song_url(song_id, br=320000)
        data = result.get("data", [])
        if data and data[0].get("url"):
            print(f"   高品音频: {data[0]['url'][:80]}...")
        else:
            print(f"   不可用: {data}")

        # 歌词预览
        print(f"\n3. 歌词预览")
        lyric = get_lyric(song_id)
        lrc = lyric.get("lrc", {}).get("lyric", "")
        for line in lrc.split("\n")[:8]:
            print(f"   {line}")

        print(f"\n完整用法: python {sys.argv[0]} --help")
        return

    cmd = sys.argv[1]

    if cmd in ("--help", "-h"):
        print(__doc__)
        return

    commands = {
        "search": ("搜索歌曲", cmd_search, 2),
        "info": ("歌曲详情", cmd_info, 2),
        "url": ("播放地址", cmd_url, 2),
        "lyric": ("显示歌词", cmd_lyric, 2),
        "lyric-download": ("下载歌词", cmd_lyric_download, 2),
        "download": ("下载MP3", cmd_download, 2),
        "encrypt": ("加密测试", cmd_encrypt_raw, 1),
    }

    if cmd in commands:
        desc, func, min_args = commands[cmd]
        if len(sys.argv) < min_args + 1:
            print(f"用法: python {sys.argv[0]} {cmd} <参数>\n")
            print(__doc__)
            return

        args = [int(a) if a.isdigit() else a for a in sys.argv[2:]]
        try:
            func(*args)
        except Exception as e:
            print(f"错误: {e}")
            import traceback
            traceback.print_exc()
    else:
        print(f"未知命令: {cmd}")
        print(f"可用命令: {', '.join(commands.keys())}")


if __name__ == "__main__":
    main()
