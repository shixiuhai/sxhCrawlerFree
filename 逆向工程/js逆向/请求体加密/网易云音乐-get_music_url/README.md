# 网易云音乐 - 获取 MP3 播放地址逆向分析

## 目录
1. [概述](#1-概述)
2. [抓包分析](#2-抓包分析)
3. [加密算法逆向](#3-加密算法逆向)
4. [JavaScript 加密代码追踪](#4-javascript-加密代码追踪)
5. [Python 纯代码实现](#5-python-纯代码实现)
6. [完整可用代码](#6-完整可用代码)
7. [常见问题](#7-常见问题)

---

## 1. 概述

### 目标
通过歌曲 ID 获取该歌曲的 MP3 播放地址（无损/高品/标准码率）。

### 目录文件说明

| 文件 | 说明 |
|------|------|
| `encrypt.py` | 加密算法模块：AES-128-CBC + RSA 纯 Python 实现 |
| `api.py` | API 调用封装：搜索、详情、歌词、播放地址 |
| `netease_music.py` | 命令行工具（见下方使用说明） |

### 使用说明

```bash
# 1. 安装依赖 (Python 3.8+)
pip install -r requirements.txt

# 2. 示例模式（无参数）
python netease_music.py

# 3. 搜索歌曲
python netease_music.py search 晴天

# 4. 查看歌曲详情
python netease_music.py info 3385918396

# 5. 获取所有码率播放地址
python netease_music.py url 3385918396

# 6. 显示歌词
python netease_music.py lyric 3385918396

# 7. 下载歌词文件（确认后才下载）
python netease_music.py lyric-download 3385918396

# 8. 下载 MP3（确认后才下载）
python netease_music.py download 3385918396

# 9. 调试：查看加密参数构造
python netease_music.py encrypt
```

### 核心 API
| 接口 | 方法 | 用途 |
|------|------|------|
| `https://music.163.com/weapi/song/enhance/player/url` | POST | 获取歌曲播放 URL |
| `https://music.163.com/weapi/v3/song/detail` | POST | 获取歌曲详情 |
| `https://music.163.com/weapi/song/lyric` | POST | 获取歌词 |
| `https://music.163.com/weapi/cloudsearch/get/web` | POST | 搜索歌曲 |

### 特点
- 所有 POST 请求参数经过 **两层 AES-CBC + RSA** 加密
- 加密在浏览器前端完成，服务端解密验证
- 加密函数 `window.asrsea()` 暴露在全局作用域

---

## 2. 抓包分析

### 2.1 环境准备
- 浏览器: Chrome/Firefox 开发者工具
- 目标页面: `https://music.163.com/#/song?id=3385918396`
- 抓包工具: 浏览器 Network 面板

### 2.2 步骤

#### Step 1: 打开页面并播放

```
https://music.163.com/#/song?id=3385918396

页面结构：
┌─ 顶层窗口 (music.163.com)
│  └─ <iframe id="g_iframe">  (实际内容)
│     └─ <document>
│        ├─ 顶部导航
│        ├─ 歌曲详情区域
│        └─ 底部播放器
```

观察 Network 面板，过滤 `weapi`，可以看到以下请求：

```
POST /weapi/need/login/forplay?csrf_token=
POST /weapi/copyright/pay_fee_message/config?csrf_token=
POST /weapi/v3/song/detail?csrf_token=
POST /weapi/song/enhance/player/url?csrf_token=
POST /weapi/song/lyric?csrf_token=
```

#### Step 2: 查看请求 Payload

关键发现：请求体不是明文 JSON，而是两个字段：

```
params:     "hTWKq86q3l07VlL7f4mSKst5rOltk..."
encSecKey:  "b4f3b08ca4cf5c5f10f8c5cbb5154..."
```

![请求体结构]()

这意味着参数在前端被加密后再 POST。

#### Step 3: 查找加密函数

在 Sources 面板中搜索关键字 `asrsea` 或 `encText`，定位到核心 JS 文件（通常位于合并后的 bundle 中）：

```
https://s3.music.126.net/web/s/core_xxxxx.js
```

搜索 `window.asrsea` 找到加密入口函数。

---

## 3. 加密算法逆向

### 3.1 加密流程总览

```
明文 JSON (string)
    │
    ▼
┌─────────────────────────────────┐
│  第1层: AES-128-CBC 加密         │
│  key: "0CoJUm6Qyw8W8jud"       │
│  iv:  "0102030405060708"        │
└──────────────┬──────────────────┘
               ▼
          第一层密文 (base64 string)
               │
               ▼
┌─────────────────────────────────┐
│  第2层: AES-128-CBC 加密         │
│  key: 随机16位字符串 i            │
│  iv:  "0102030405060708"        │
└──────────────┬──────────────────┘
               ▼
          第二层密文 → "params" 字段
               │
               ▼
┌─────────────────────────────────┐
│  RSA加密: 随机字符串 i            │
│  pub_key: "010001"              │
│  modulus: "00e0b509..."(256位)  │
└──────────────┬──────────────────┘
               ▼
          "encSecKey" 字段
```

### 3.2 AES-128-CBC 加密详解

```python
# 参数说明
key = "0CoJUm6Qyw8W8jud"    # 固定密钥 (16字节)
iv  = "0102030405060708"     # 固定初始向量 (16字节)
mode = AES.MODE_CBC          # CBC模式

# 填充方式: PKCS7
def pad(text):
    BS = 16
    pad_len = BS - len(text) % BS
    return text + chr(pad_len) * pad_len
```

**为什么用两层 AES？**
- 第一层用固定密钥加密明文
- 第二层用随机密钥 i 再次加密第一层结果
- 随机密钥 i 通过 RSA 加密传输
- 这样每次请求的 `params` 都不同，防止重放攻击

### 3.3 RSA 加密详解

```python
# RSA 公钥参数
pub_key = "010001"  # RSA 指数 (65537)
modulus = "00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b7251..."
         # 256字节十六进制字符串 (RSA 模数 N)

# RSA加密实现 (仅公钥加密，非标准PKCS1)
def rsa_encrypt(text):
    text = text[::-1]          # 字符串反转
    hex_text = text.encode().hex()
    result = pow(int(hex_text, 16), int(pub_key, 16), int(modulus, 16))
    return format(result, 'x').zfill(256)  # 补齐256位
```

**注意**：这不是标准的 RSA 实现，而是网易云自己的简化版本：
1. 将待加密字符串反转
2. 将反转后的字符串转成十六进制整数
3. 计算 `整数^pub_key mod modulus`
4. 结果补齐到 256 个十六进制字符

### 3.4 加密函数源码解读

从浏览器中提取到的关键加密函数代码：

```javascript
// window.asrsea 函数 (封装加密流程)
function d(d, e, f, g) {
    var h = {}, i = a(16);       // a(16): 生成16位随机字符串
    return h.encText = b(d, g),   // b = AES加密, g = second_key
    h.encText = b(h.encText, i), // 用随机字符串再次加密
    h.encSecKey = c(i, e, f),    // c = RSA加密随机字符串
    h
}

// a = 随机字符串生成函数
// b = AES加密函数
// c = RSA加密函数
```

变量对应关系：
- `window.asrsea(plaintext, pub_key, modulus, second_key)`
- 在页面中通过 `window.asrsea` 或 `ecnonasr` 调用

---

## 4. JavaScript 加密代码追踪

在浏览器 Console 中验证加密函数是否存在：

```javascript
// 在 iframe 内执行 (g_iframe.contentWindow)
var iframeWin = document.getElementById('g_iframe').contentWindow;
console.log(typeof iframeWin.asrsea);  // "function"
console.log(typeof iframeWin.ecnonasr); // "function"

// 直接调用加密函数测试
var result = iframeWin.asrsea(
    JSON.stringify({"ids":"[3385918396]","br":320000}),
    "010001",
    "00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7",
    "0CoJUm6Qyw8W8jud"
);
console.log(result.encText);   // params
console.log(result.encSecKey); // encSecKey
```

### 完整调用链路

```
页面加载 → 发送音乐列表请求
         ↓
    getData() → 调用 window.asrsea() 加密参数
         ↓
    XMLHttpRequest POST /weapi/xxx
         ↓
    服务端解密验证 → 返回加密数据
         ↓
    前端解密渲染
```

---

## 5. Python 纯代码实现

### 5.1 加密模块 (encrypt.py)

```python
import random
import string
import base64
import json
from Crypto.Cipher import AES

# 加密常量
PUB_KEY = "010001"
SECOND_KEY = "0CoJUm6Qyw8W8jud"
MODULUS = "00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7"
IV = b"0102030405060708"


def random_string(length=16):
    """生成指定长度的随机字母数字字符串"""
    return ''.join(random.choices(
        string.ascii_letters + string.digits, k=length
    ))


def aes_encrypt(text, key):
    """
    AES-128-CBC 加密
    text: 待加密文本
    key: 16字节密钥
    """
    # PKCS7 填充
    pad_len = 16 - len(text) % 16
    text += chr(pad_len) * pad_len

    cipher = AES.new(key.encode('utf-8'), AES.MODE_CBC, IV)
    encrypted = cipher.encrypt(text.encode('utf-8'))
    return base64.b64encode(encrypted).decode('utf-8')


def rsa_encrypt(text):
    """
    网易云自定义 RSA 加密
    text: 待加密的随机字符串(16位)
    """
    text = text[::-1]
    hex_text = text.encode('utf-8').hex()
    result = pow(int(hex_text, 16), int(PUB_KEY, 16), int(MODULUS, 16))
    return format(result, 'x').zfill(256)


def encrypt(data):
    """
    加密请求数据
    data: dict 类型的请求参数
    返回: {"params": "...", "encSecKey": "..."}
    """
    text = json.dumps(data, separators=(',', ':'))
    i = random_string(16)

    enc1 = aes_encrypt(text, SECOND_KEY)
    enc2 = aes_encrypt(enc1, i)
    encSecKey = rsa_encrypt(i)

    return {
        "params": enc2,
        "encSecKey": encSecKey
    }
```

### 5.2 API 请求模块

```python
import requests

BASE_URL = "https://music.163.com/weapi"
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) " 
                  "AppleWebKit/537.36 (KHTML, like Gecko) "
                  "Chrome/130.0.0.0 Safari/537.36",
    "Referer": "https://music.163.com/",
}


def call_api(path, data):
    """调用网易云加密 API"""
    encrypted = encrypt(data)
    resp = requests.post(
        f"{BASE_URL}{path}?csrf_token=",
        data=encrypted,
        headers=HEADERS,
    )
    return resp.json()


def get_song_url(song_id, br=320000):
    """
    获取歌曲播放 URL
    br: 码率 999000(无损) 320000(高品) 192000(中品) 128000(低品)
    """
    data = {
        "ids": json.dumps([song_id]),
        "br": br,  # 新版 API 使用 level, 但旧版 br 仍然可用
    }
    return call_api("/song/enhance/player/url", data)


def get_song_detail(song_id):
    """获取歌曲详情"""
    data = {"c": json.dumps([{"id": song_id}])}
    return call_api("/v3/song/detail", data)


def get_lyric(song_id):
    """获取歌词"""
    data = {"id": song_id, "lv": -1, "kv": -1, "tv": -1}
    return call_api("/song/lyric", data)


def search_songs(keyword, offset=0, limit=30):
    """搜索歌曲"""
    data = {
        "s": keyword,
        "type": 1,
        "offset": offset,
        "limit": limit,
        "total": "true",
    }
    return call_api("/cloudsearch/get/web", data)
```

### 5.3 使用示例

```python
if __name__ == "__main__":
    song_id = 3385918396

    # 1. 获取歌曲详情
    detail = get_song_detail(song_id)
    song = detail.get("songs", [{}])[0]
    print(f"歌名: {song.get('name')}")
    artists = song.get("ar", [])
    print(f"歌手: {', '.join(a['name'] for a in artists)}")

    # 2. 获取 MP3 地址
    for br, label in [(999000, "无损"), (320000, "高品"), (128000, "低品")]:
        result = get_song_url(song_id, br=br)
        data = result.get("data", [])
        if data and data[0].get("url"):
            print(f"  [{label}] {data[0]['url']}")
        else:
            code = data[0].get("code", "unknown") if data else "N/A"
            print(f"  [{label}] 不可用 (code={code})")

    # 3. 获取歌词
    lyric = get_lyric(song_id)
    lrc = lyric.get("lrc", {}).get("lyric", "")
    print(f"\n歌词预览:\n{lrc[:200]}...")
```

---

## 6. 完整可用代码

### 文件: `netease_music.py`

```python
#!/usr/bin/env python3
"""
网易云音乐 API 逆向工程 - 完整实现
支持: 搜索歌曲、获取歌曲信息、获取MP3地址、获取歌词、下载歌曲
"""

import random
import string
import base64
import json
import os
import requests
from Crypto.Cipher import AES

# ===================== 加密常量 =====================
PUB_KEY = "010001"
SECOND_KEY = "0CoJUm6Qyw8W8jud"
MODULUS = ("00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b7251"
           "52b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ec"
           "bda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d8"
           "13cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7")
IV = b"0102030405060708"
BASE_URL = "https://music.163.com/weapi"


# ===================== 加密模块 =====================
def random_string(length=16):
    return ''.join(random.choices(
        string.ascii_letters + string.digits, k=length
    ))


def aes_encrypt(text, key):
    pad_len = 16 - len(text) % 16
    text += chr(pad_len) * pad_len
    cipher = AES.new(key.encode('utf-8'), AES.MODE_CBC, IV)
    return base64.b64encode(cipher.encrypt(text.encode('utf-8'))).decode('utf-8')


def rsa_encrypt(text):
    text = text[::-1]
    hex_text = text.encode('utf-8').hex()
    result = pow(int(hex_text, 16), int(PUB_KEY, 16), int(MODULUS, 16))
    return format(result, 'x').zfill(256)


def encrypt(data):
    """加密请求体: dict -> {"params": str, "encSecKey": str}"""
    text = json.dumps(data, separators=(',', ':'))
    i = random_string(16)
    enc1 = aes_encrypt(text, SECOND_KEY)
    enc2 = aes_encrypt(enc1, i)
    enc_sec_key = rsa_encrypt(i)
    return {"params": enc2, "encSecKey": enc_sec_key}


# ===================== API 调用模块 =====================
HEADERS = {
    "User-Agent": ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                   "AppleWebKit/537.36 (KHTML, like Gecko) "
                   "Chrome/130.0.0.0 Safari/537.36"),
    "Referer": "https://music.163.com/",
}


def call_api(path, data):
    resp = requests.post(
        f"{BASE_URL}{path}?csrf_token=",
        data=encrypt(data),
        headers=HEADERS,
    )
    return resp.json()


def get_song_detail(song_id):
    return call_api("/v3/song/detail", {"c": json.dumps([{"id": song_id}])})


def get_song_url(song_id, br=320000):
    return call_api("/song/enhance/player/url", {
        "ids": json.dumps([song_id]),
        "br": br,
    })


def get_song_url_v1(song_id, level="standard"):
    """新版 API: level=standard/high/lossless/exhigh"""
    return call_api("/song/enhance/player/url/v1", {
        "ids": json.dumps([song_id]),
        "level": level,
        "encodeType": "mp3",
    })


def get_lyric(song_id):
    return call_api("/song/lyric", {"id": song_id, "lv": -1, "kv": -1, "tv": -1})


def search_songs(keyword, offset=0, limit=30):
    return call_api("/cloudsearch/get/web", {
        "s": keyword,
        "type": 1,
        "offset": offset,
        "limit": limit,
        "total": "true",
    })


# ===================== 辅助函数 =====================
def parse_song_info(detail_data):
    """从 API 返回中提取歌曲基本信息"""
    song = detail_data.get("songs", [{}])[0]
    return {
        "id": song.get("id"),
        "name": song.get("name"),
        "artists": [a["name"] for a in song.get("ar", [])],
        "album": song.get("al", {}).get("name", "N/A"),
        "duration": song.get("dt", 0) // 1000,
        "pic_url": song.get("al", {}).get("picUrl", ""),
    }


def display_song_info(info):
    print(f"  歌名: {info['name']}")
    print(f"  歌手: {', '.join(info['artists'])}")
    print(f"  专辑: {info['album']}")
    print(f"  时长: {info['duration']}秒")


def download_mp3(url, song_id, filepath=None):
    """下载 MP3 文件"""
    if not filepath:
        filepath = f"{song_id}.mp3"

    resp = requests.get(url, headers=HEADERS, stream=True)
    total_size = int(resp.headers.get('Content-Length', 0))
    downloaded = 0

    with open(filepath, 'wb') as f:
        for chunk in resp.iter_content(chunk_size=8192):
            if chunk:
                f.write(chunk)
                downloaded += len(chunk)
                if total_size:
                    pct = downloaded / total_size * 100
                    print(f"\r  下载中: {pct:.1f}%", end="")
    print(f"\n  已保存: {filepath}")
    return filepath


# ===================== 命令行入口 =====================
def main():
    print("网易云音乐 API 演示")
    print("=" * 60)

    # 1. 搜索歌曲
    print("\n1. 搜索歌曲 '晴天'")
    result = search_songs("晴天", limit=3)
    songs = result.get("result", {}).get("songs", [])
    for s in songs:
        artists = ", ".join(a["name"] for a in s.get("ar", []))
        print(f"   ID: {s['id']:>10} | {s['name']} - {artists}")

    # 2. 获取某首歌的详情和播放地址
    song_id = 3385918396
    print(f"\n2. 歌曲详情 (ID: {song_id})")
    detail = get_song_detail(song_id)
    info = parse_song_info(detail)
    display_song_info(info)

    # 3. 获取各码率播放地址
    print("\n3. 播放地址")
    for br, label in [(999000, "无损"), (320000, "高品"), (128000, "标准")]:
        result = get_song_url(song_id, br=br)
        data = result.get("data", [])
        if data and data[0].get("url"):
            # MP3 地址有时效性，附带了时间戳和 token
            print(f"   [{label}] ✓ 已获取 ({result['data'][0].get('size', 0)//1024}KB)")
        else:
            code = data[0].get("code", "N/A") if data else "N/A"
            print(f"   [{label}] ✗ code={code}")

    # 4. 歌词
    print("\n4. 歌词预览")
    lyric = get_lyric(song_id)
    lrc_text = lyric.get("lrc", {}).get("lyric", "")
    for line in lrc_text.split("\n")[:10]:
        print(f"   {line}")

    # 5. 下载示例 (注释掉以防误触)
    # print("\n5. 下载 MP3")
    # result = get_song_url(song_id, br=320000)
    # mp3_url = result["data"][0]["url"]
    # download_mp3(mp3_url, song_id)


if __name__ == "__main__":
    main()
```

---

## 7. 常见问题

### Q1: 为什么有时候拿不到 MP3 URL？

| 返回 code | 含义 | 解决办法 |
|-----------|------|---------|
| 200 | 成功 | - |
| 404 | 无版权 | 该歌曲在区域不可用 |
| -460 | 需要登录 | 部分歌曲需要登录才能获取 |
| -462 | 需要VIP | 该歌曲需要黑胶VIP才能听 |
| -404 | 下架 | 歌曲已被下架 |

### Q2: MP3 URL 能永久使用吗？

不能。MP3 URL 包含时效性 token：
- URL 中的 `20260613234152` 是时间戳
- `vuutv` 参数是签名 token
- 一般有效期数小时到1天不等

每次播放前需要重新请求。

### Q3: 新版 API `level` 参数和旧版 `br` 参数区别？

```
旧版: {"br": 999000}  → level=lossless
旧版: {"br": 320000}  → level=exhigh  
新版: {"level": "lossless"} → 无损
新版: {"level": "exhigh"}   → 极高 (320k)
新版: {"level": "high"}     → 高品 (192k)
新版: {"level": "standard"} → 标准 (128k)
```

新端点: `/weapi/song/enhance/player/url/v1`
旧端点: `/weapi/song/enhance/player/url`

### Q4: 爬虫被限制怎么办？

- 使用 Cookie 登录后可获取 VIP 歌曲
- 适当降低请求频率
- 轮换 User-Agent

---

## 参考

- [NeteaseCloudMusicApi (Binaryify)](https://github.com/Binaryify/NeteaseCloudMusicApi) - Node.js 实现
- [musicbox (darknessomi)](https://github.com/darknessomi/musicbox) - Python 终端版

---

## 同目录脚本

| 脚本 | 用途 |
|------|------|
| [`encrypt.py`](encrypt.py) | 加密引擎，独立模块，可单独运行测试 |
| [`api.py`](api.py) | API 封装，基于 encrypt.py，可单独运行演示 |
| [`netease_music.py`](netease_music.py) | CLI 工具，支持 7 个子命令 |
