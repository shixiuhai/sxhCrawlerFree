#!/usr/bin/env python3
"""
抖音直播 - 获取直播流播放地址

功能:
  - 获取指定直播间的 FLV/HLS 播放地址
  - 支持所有清晰度: 原画/蓝光/超清/高清/流畅
  - 地址直接可播放 (VLC/ffplay/浏览器)

数据来源:
  直播流地址嵌入在页面 HTML 的 <script> 标签中
  通过 React Server Components (RSC) 流式协议传输
  数据路径: React state → stream_url → flv_pull_url
  非传统 REST API, 无独立 XHR 请求

防爬机制:
  - URL 包含 expire 时间戳 (4-8小时过期)
  - sign 参数为 MD5 签名
  - t_id 为会话级 Token, 每次不同
  - 地址动态生成, 不能缓存复用

依赖:
  pip install requests

使用:
  python get_live_url.py https://live.douyin.com/445761361541

清晰度对照:
  FULL_HD1 = 原画/蓝光 (1080p, ~7Mbps)
  HD1      = 超清 (720p, ~4Mbps)
  SD2      = 高清 (720p, ~2Mbps)
  SD1      = 流畅 (540p, ~1Mbps)
"""

import re
import json
import sys
import requests

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/130.0.0.0 Safari/537.36"
    ),
    "Referer": "https://live.douyin.com/",
}

QUALITY_MAP = {
    "FULL_HD1": "原画/蓝光 (1080p)",
    "HD1": "超清 (720p 4Mbps)",
    "SD2": "高清 (720p 2Mbps)",
    "SD1": "流畅 (540p 1Mbps)",
}


def get_web_rid(url):
    m = re.search(r'live\.douyin\.com/(\d+)', url)
    return m.group(1) if m else None


def extract_json_from_html(html, marker, max_depth=10):
    """
    在 HTML 中找到 marker 附近的 JSON 对象并解析。
    自动处理 RSC 的双重转义。
    """
    idx = html.find(marker)
    if idx < 0:
        return None, None

    # 往回找 JSON 起始 {
    brace_start = html.rfind('{', idx - 300, idx)
    if brace_start < 0:
        return None, None

    # 找匹配的 }
    depth = 0
    end = -1
    i = brace_start
    while i < len(html) and depth < max_depth * 10:
        if html[i] == '{':
            depth += 1
        elif html[i] == '}':
            depth -= 1
            if depth == 0:
                end = i + 1
                break
        elif html[i] == '\\' and i + 1 < len(html):
            i += 1  # 跳过转义
        i += 1

    if end < 0:
        return None, None

    raw = html[brace_start:end]
    raw = raw.replace('\\"', '"').replace('\\\\', '\\')
    raw = raw.replace('\\u0026', '&').replace('\\/', '/')

    try:
        return json.loads(raw), raw
    except json.JSONDecodeError:
        return None, raw


def extract_stream_urls(html):
    """
    从 HTML 中提取直播流地址。
    方法1: RSC state 中的 flv_pull_url / hls_pull_url_map
    方法2: data JSON 中的 {"common":..., "data":{...}}
    """
    result = {
        'flv_pull_url': {},
        'hls_pull_url_map': {},
        'sdk_qualities': {},
    }

    # 方法1: 从 stream_url JSON 对象中提取
    # 注意: extract_json_from_html('flv_pull_url') 返回的是整个 stream_url 对象
    # 因为它从 flv_pull_url 往回找到了更外层的 {
    stream_url_obj, _ = extract_json_from_html(html, 'flv_pull_url')
    if stream_url_obj and isinstance(stream_url_obj, dict):
        flv_obj = stream_url_obj.get('flv_pull_url', {})
        if isinstance(flv_obj, dict):
            result['flv_pull_url'] = flv_obj
        hls_obj = stream_url_obj.get('hls_pull_url_map', {})
        if isinstance(hls_obj, dict):
            result['hls_pull_url_map'] = hls_obj

    # 方法2: SDK qualities 数据 ({"common":..., "data":{...}})
    cc_idx = html.find('common')
    if cc_idx >= 0:
        brace_start = html.rfind('{', cc_idx - 200, cc_idx)
        if brace_start >= 0:
            depth = 0
            end = -1
            for i in range(brace_start, len(html)):
                if html[i] == '{':
                    depth += 1
                elif html[i] == '}':
                    depth -= 1
                    if depth == 0:
                        end = i + 1
                        break
                elif html[i] == '\\':
                    i += 1

            if end > 0:
                raw = html[brace_start:end]
                raw = raw.replace('\\"', '"').replace('\\\\', '\\')
                raw = raw.replace('\\u0026', '&').replace('\\/', '/')

                # 这个 JSON 可能是跨 script 标签的，需要确保它是完整对象
                # 有时它被截断，只保留 {"common"..}.. 部分
                # 我们尝试从 data 字段位置开始提取
                data_idx = raw.find('"data":{')
                if data_idx >= 0:
                    # 从 data 开始提取子JSON
                    brace_d = raw.find('{', data_idx)
                    if brace_d >= 0:
                        depth = 0
                        d_end = -1
                        for i in range(brace_d, len(raw)):
                            if raw[i] == '{': depth += 1
                            elif raw[i] == '}':
                                depth -= 1
                                if depth == 0:
                                    d_end = i + 1
                                    break
                        if d_end > 0:
                            data_json = raw[brace_d:d_end]
                            try:
                                data_obj = json.loads(data_json)
                                for q, info in data_obj.items():
                                    main = info.get('main', {})
                                    flv = main.get('flv', '')
                                    hls = main.get('hls', '')
                                    sp = main.get('sdk_params', '{}')
                                    try:
                                        sp_obj = json.loads(sp)
                                        res = sp_obj.get('resolution', '')
                                        br = sp_obj.get('vbitrate', 0)
                                    except (json.JSONDecodeError, TypeError):
                                        res, br = '', 0
                                    if flv:
                                        if flv.startswith('http://'):
                                            flv = flv.replace('http://', 'https://', 1)
                                        result['sdk_qualities'][q] = {
                                            'flv': flv,
                                            'hls': hls.replace('http://', 'https://', 1) if hls.startswith('http://') else hls if hls else '',
                                            'resolution': res,
                                            'bitrate': br,
                                        }
                            except json.JSONDecodeError:
                                pass

    return result


def get_live_streams(page_url):
    web_rid = get_web_rid(page_url)
    print(f"[*] 直播间: {web_rid}")

    resp = requests.get(page_url, headers=HEADERS, timeout=15)
    if resp.status_code != 200:
        print(f"[x] HTTP {resp.status_code}")
        return None

    data = extract_stream_urls(resp.text)
    streams = {}

    # 合并方法1和方法2的结果，方法1优先
    flv_urls = data.get('flv_pull_url', {})
    hls_urls = data.get('hls_pull_url_map', {})

    for key, url in flv_urls.items():
        name = QUALITY_MAP.get(key, key)
        hls = hls_urls.get(key, '')
        streams[key] = {
            'flv': url.replace('http://', 'https://', 1),
            'hls': hls.replace('http://', 'https://', 1) if hls else '',
            'name': name,
        }

    for q, info in data.get('sdk_qualities', {}).items():
        if q not in streams:
            res_info = f" ({info['resolution']})" if info['resolution'] else ''
            streams[q] = {
                'flv': info['flv'],
                'hls': info['hls'] if info['hls'] else '',
                'name': f"{q}{res_info}",
            }

    return {'web_rid': web_rid, 'streams': streams}


def display_streams(result):
    if not result or not result['streams']:
        print("[x] 未获取到流地址")
        return

    print(f"直播间: {result['web_rid']}")
    print(f"可用清晰度: {len(result['streams'])} 个\n")

    for q, info in result['streams'].items():
        print(f"  [{info['name']}]")
        if info['flv']:
            print(f"    FLV: {info['flv']}")
        if info['hls']:
            print(f"    HLS: {info['hls']}")
        print()


def main():
    if len(sys.argv) < 2:
        url = "https://live.douyin.com/445761361541"
        print(f"用法: python {sys.argv[0]} <直播间URL>")
        print(f"示例: python {sys.argv[0]} {url}\n")
    else:
        url = sys.argv[1]

    result = get_live_streams(url)
    display_streams(result)


if __name__ == "__main__":
    main()
