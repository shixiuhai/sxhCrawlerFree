# 抖音直播 - 获取直播流播放地址逆向分析

## 目录
1. [概述](#1-概述)
2. [逆向分析过程](#2-逆向分析过程)
3. [抓包分析](#3-抓包分析)
4. [数据提取方法](#4-数据提取方法)
5. [Python 代码解析](#5-python-代码解析)
6. [脚本使用说明](#6-脚本使用说明)
7. [常见问题](#7-常见问题)

---

## 1. 概述

### 目标
通过直播间 URL 获取该直播的 FLV/HLS 播放地址（各清晰度）。

| 项目 | 内容 |
|------|------|
| 目标平台 | 抖音直播 (live.douyin.com) |
| 数据来源 | SSR 页面 HTML（React Server Components） |
| 网络协议 | 非 XHR/Fetch API，数据嵌入在 script 标签中 |
| 视频协议 | FLV (主推) / HLS (m3u8 备选) / LLS (低延迟) |
| 防护手段 | `expire` 时间戳 + `sign` MD5 签名 |
| 依赖 | Python 3.8+, requests (无其他第三方依赖) |

### 文件说明

| 文件 | 用途 |
|------|------|
| `get_live_url.py` | 主脚本，提取并输出直播流地址 |
| `requirements.txt` | Python 依赖（仅 requests） |
| `README.md` | 本文档：逆向分析 + 使用说明 |

### 使用说明

```bash
# 安装依赖 (Python 3.8+)
pip install -r requirements.txt

# 获取直播流地址
python get_live_url.py https://live.douyin.com/445761361541
```

示例输出:
```
[*] 直播间: 445761361541
直播间: 445761361541
可用清晰度: 4 个

  [原画/蓝光 (1080p)]
    FLV: https://pull-flv-f11.douyincdn.com/third/stream-xxx_uhd.flv?expire=...&sign=...
    HLS: https://pull-hls-f11.douyincdn.com/third/stream-xxx_uhd.m3u8?expire=...&sign=...

  [超清 (720p 4Mbps)]
    FLV: https://pull-flv-f11.douyincdn.com/third/stream-xxx_hd.flv?expire=...&sign=...
    HLS: https://pull-hls-f11.douyincdn.com/third/stream-xxx_hd.m3u8?expire=...&sign=...
```

### 核心数据来源

| 数据 | 来源 | 位置 |
|------|------|------|
| FLV 地址 | `stream_url.flv_pull_url` | RSC state, script 标签中 |
| HLS 地址 | `stream_url.hls_pull_url_map` | 同上 |
| SDK 画质信息 | `{"common":..., "data":{...}}` | 同上 |

### 特点
- 数据全部 SSR 渲染到 HTML，**无额外 XHR 请求**
- 页面使用 **React Server Components (RSC)** 流式协议
- 直播流 URL 带 `expire` 时间戳和 `sign` 签名，有时效性（数小时）
- 支持 FLV（主推流）和 HLS（m3u8）两种协议
- 支持 LLS（低延迟 SDP）协议

---

## 2. 逆向分析过程

### 2.1 整体思路

```
打开直播页面 → 查看 Network 面板
                   ↓
         是否能看到获取流地址的 XHR？
                   ↓
           否 → 数据在 HTML 中 SSR 渲染
                   ↓
         搜索关键词 "flv_pull_url" / "pull-flv"
                   ↓
           发现数据在 <script> 标签中
                   ↓
         解析 RSC 数据格式 → 提取 JSON
                   ↓
         反转义 → 得到 flv_pull_url / hls_pull_url_map
                   ↓
         curl 验证 → HTTP 200 video/x-flv ✓
```

### 2.2 遇到的坑和解决方案

| 问题 | 现象 | 原因 | 解决方案 |
|------|------|------|----------|
| 没有 REST API | `webcast/room/web/stream/url` 返回 404 | 抖音已弃用 REST API，改用 SSR | 改为解析页面 HTML |
| 双层转义 | JSON 解析总是失败 | RSC 数据在 HTML 中被双重转义 (`\\"` → `\"` → `"`) | 两次 `replace()` 反转义 |
| Unicode 编码 | URL 中的 `&` 变成 `\\u0026` | RSC 协议对特殊字符做了 unicode 转义 | `replace('\\u0026', '&')` |
| 跨 script 标签 | 数据被分割在多个 RSC chunk 中 | RSC 流式协议分块传输 | 在整个 HTML 中搜索而不是某个 script 标签 |
| 花括号匹配 | 提取的 JSON 总是外层对象 | `rfind('{')` 找到的是最外层 `{` | 从返回的对象中取嵌套的 `flv_pull_url` 字段 |

### 2.3 关键技术点

**为什么不用 REST API？**
抖音直播的独立 REST API（`/webcast/room/web/stream/url`）已下线。直播流数据现在通过 React Server Components 协议直接在服务端渲染到 HTML 中，浏览器解析 HTML 后直接获取流地址并播放。

**RSC (React Server Components) 是什么？**
RSC 是 React 18+ 引入的服务端组件协议。在抖音的实现中：
- 数据以 `self.__pace_f.push([1, "...")]` 的形式嵌入在 `<script>` 标签中
- 每个 push 调用包含一个 RSC 编码的数据块
- 格式: `"ID:Type{data}"` 或 `"ID:Type[data]"`
- Type `I` 表示立即 JSON 对象
- 数据经过 JSON 序列化 → HTML 转义 → 双重编码

**数据为什么是双层转义？**
1. 第一次转义: Python `json.dumps()` 对特殊字符转义 (`"` → `\"`)
2. 第二次转义: HTML 嵌入时对 `\\` 转义 (`\"` → `\\"`)
3. 额外转义: `&` 被转成 `\\u0026`

所以反转义步骤是:
```
HTML原始: \\"flv_pull_url\\":\\{\\"FULL_HD1\\":\\"http...&sign=...
    ↓ str.replace('\\\\"', '"')
"flv_pull_url":{"FULL_HD1":"http...\\u0026sign=...
    ↓ str.replace('\\\\u0026', '&')
"flv_pull_url":{"FULL_HD1":"http...&sign=...
    ↓ json.loads()
{"flv_pull_url": {"FULL_HD1": "http...&sign=..."}} ✓
```

---

## 3. 抓包分析

### 2.1 环境准备
- 浏览器: Chrome/Firefox 开发者工具
- 目标页面: `https://live.douyin.com/445761361541`
- 抓包工具: 浏览器 Network 面板

### 2.2 步骤

#### Step 1: 打开直播页面

```
https://live.douyin.com/445761361541
```

页面加载后，观察 Network 面板。竞发现**没有**获取推流地址的 XHR/Fetch 请求。

#### Step 2: 查找直播流的证据

在 Network 面板中可以直接看到页面加载了 FLV 流：

```
GET https://pull-flv-f11.douyincdn.com/third/stream-xxx_hd.flv?expire=...&sign=...
Type: Fetch
Status: 200
Content-Type: video/x-flv
```

这说明流地址已经在前端准备好了。

#### Step 3: 查找数据位置

在 HTML 中搜索 `flv_pull_url` 或 `pull-flv`，发现数据在 `<script>` 标签中。

页面使用 **React Server Components (RSC)** 协议，所有数据通过 `self.__pace_f.push()` 推送到页面：

```javascript
self.__pace_f.push([1, "...RSC encoded data..."])
```

RSC 数据格式:
```
"ID:Type{data}"
  - ID:   数字标识
  - Type: I(JSON对象) / J(延迟JSON) / T(文本接续) / [ (数组)
  - data: 实际内容 (双层转义)
```

#### Step 4: 定位推流数据

在 RSC 组件状态中找到 `stream_url` 对象，路径:

```
state → ... → stream_url → flv_pull_url → {FULL_HD1, HD1, SD1, SD2}
                          → hls_pull_url_map → 同上
                          → live_core_sdk_data → pull_data → options → qualities
```

同时发现另一处数据结构:

```json
{"common": {"stream": "119544793521980075", ...},
 "data": {
   "sd": {"main": {"flv": "...", "hls": "...", "sdk_params": "{...}"}},
   "hd": {"main": {...}},
   "origin": {"main": {...}},
   "ld": {"main": {...}},
   "md": {"main": {...}},
   "ao": {"main": {...}}  // 仅音频
 }}
```

### 2.3 数据流图

```
用户访问 https://live.douyin.com/445761361541
                    │
                    ▼
         服务端渲染 (SSR)
                    │
                    ▼
  HTML 中包含 RSC 流数据 (__pace_f.push)
                    │
                    ▼
         浏览器运行 JS, 解析 RSC
                    │
                    ├──→ 获取 flv_pull_url 地址
                    ├──→ 创建 MSE/Video 播放器
                    └──→ 开始播放 FLV 直播流
```

---

## 3. 数据提取方法

### 3.1 RSC 数据特征

直播页面的 HTML 中有 80+ 个 `<script>` 标签。其中包含推流数据的 script 标签的特征：

```
大小约 70KB
每 ~2s 更新一次（新的 push 数据）
包含 "flv_pull_url" 和 "hls_pull_url_map"
```

原始数据经过**双层转义**:
```
HTML 原始文本: \\"flv_pull_url\\":\\{\\"FULL_HD1\\":\\"http...
               ↓ 第一层反转义 (replace \\" → ")
"flv_pull_url":{"FULL_HD1":"http...
               ↓ 第二层反转义 (\\u0026 → &)
"flv_pull_url":{"FULL_HD1":"http://...&sign=...&expire=..."
```

### 3.2 JSON 提取算法

由于 HTML 中 JSON 数据被包裹在其他 JS 代码中，不能直接 `json.loads()` 整个 script。

提取策略:
1. 在 HTML 中搜索关键 marker（如 `flv_pull_url`）
2. 从 marker 位置**往回**找第一个 `{` 作为 JSON 起始
3. 从起始位置**向前**找匹配的 `}`（考虑转义字符跳过）
4. 提取子串，反转义，JSON 解析

```python
def extract_json_from_html(html, marker):
    idx = html.find(marker)
    brace_start = html.rfind('{', idx - 300, idx)
    # 找匹配的 }
    depth = 0
    for i in range(brace_start, len(html)):
        if html[i] == '{': depth += 1
        elif html[i] == '}':
            depth -= 1
            if depth == 0:  # 找到匹配
                break
        elif html[i] == '\\': i += 1  # 跳过转义
    raw = html[brace_start:end]
    # 反转义
    raw = raw.replace('\\"', '"').replace('\\\\', '\\')
    raw = raw.replace('\\u0026', '&')
    obj = json.loads(raw)
```

注意: `extract_json_from_html('flv_pull_url')` 实际返回的是包含 `flv_pull_url` 的**外层父对象**，因为 `{` 是从最外层开始匹配的。

### 3.3 清晰度对照表

| RSC Key | SDK Key | 中文名 | 分辨率 | 码率 |
|---------|---------|--------|--------|------|
| FULL_HD1 | origin/uhd | 原画/蓝光 | 1080×1920 | 5-8 Mbps |
| HD1 | hd | 超清 | 720×1280 | 4 Mbps |
| SD2 | sd | 高清 | 720×1280 | 2 Mbps |
| SD1 | ld | 流畅 | 540×960 | 1 Mbps |
| - | md | 中等 | 360×640 | 800 Kbps |
| - | ao | 仅音频 | - | - |

---

## 4. Python 实现

### 4.1 核心函数

```python
def get_live_streams(page_url):
    """获取直播间所有清晰度的流地址"""
    resp = requests.get(page_url, headers=HEADERS, timeout=15)
    data = extract_stream_urls(resp.text)
    # 返回: {web_rid, streams: {key: {flv, hls, name}}}
```

### 4.2 数据结构

```python
{
  "web_rid": "445761361541",
  "streams": {
    "FULL_HD1": {
      "flv": "https://pull-flv-f11.douyincdn.com/third/stream-xxx_uhd.flv?expire=...&sign=...",
      "hls": "https://pull-hls-f11.douyincdn.com/third/stream-xxx_uhd.m3u8?expire=...&sign=...",
      "name": "原画/蓝光 (1080p)"
    },
    "HD1": { "flv": "...", "hls": "...", "name": "超清 (720p 4Mbps)" },
    ...
  }
}
```

### 4.3 使用示例

```python
result = get_live_streams("https://live.douyin.com/445761361541")
for key, info in result['streams'].items():
    print(f"[{info['name']}]")
    print(f"  FLV: {info['flv']}")
    print(f"  HLS: {info['hls']}")
```

---

## 5. Python 代码解析

### 5.1 整体架构

```
get_live_url.py
    │
    ├── get_web_rid(url)               # 从 URL 提取主播 ID
    ├── extract_stream_urls(html)       # 核心: 从 HTML 提取流地址
    │   ├── extract_json_from_html()    # 定位 JSON 并反转义解析
    │   └── 解析 data JSON (备用方法)
    ├── get_live_streams(page_url)      # 入口: 请求+解析+合并
    └── display_streams(result)        # 格式化输出
```

### 5.2 核心函数详解

#### `extract_json_from_html(html, marker)` — 从 HTML 中提取被转义的 JSON

这是最关键的函数。抖音页面中 JSON 数据被包裹在 HTML 转义的 script 标签中，不能直接 `json.loads()`。

```python
def extract_json_from_html(html, marker, max_depth=10):
    # 1. 定位 marker 在 HTML 中的位置
    idx = html.find(marker)

    # 2. 往回找最近的 { 作为 JSON 起始
    brace_start = html.rfind('{', idx - 300, idx)

    # 3. 向前找匹配的 } (考虑转义字符)
    depth = 0
    for i in range(brace_start, len(html)):
        if html[i] == '{': depth += 1
        elif html[i] == '}':
            depth -= 1
            if depth == 0: break  # 找到完整 JSON
        elif html[i] == '\\' and i + 1 < len(html):
            i += 1  # 跳过转义字符后的内容

    # 4. 提取并反转义
    raw = html[brace_start:end]
    raw = raw.replace('\\"', '"').replace('\\\\', '\\')
    raw = raw.replace('\\u0026', '&').replace('\\/', '/')

    # 5. JSON 解析
    return json.loads(raw)
```

**为什么用 `rfind` 而不是 `find`？** 因为 marker 所在的 JSON 对象可能嵌套在更大的 JSON 中。`rfind('{', ..., idx)` 从 marker 左侧最近的 `{` 开始，确保我们提取的是完整的 JSON 对象。

#### `extract_stream_urls(html)` — 提取所有流地址

```python
def extract_stream_urls(html):
    result = {'flv_pull_url': {}, 'hls_pull_url_map': {}, 'sdk_qualities': {}}

    # 方法1: 从 stream_url 对象中提取
    # extract_json_from_html('flv_pull_url') 实际返回整个 stream_url 对象
    stream_url_obj, _ = extract_json_from_html(html, 'flv_pull_url')
    if stream_url_obj:
        # 从外层对象中取出 flv_pull_url 和 hls_pull_url_map
        result['flv_pull_url'] = stream_url_obj.get('flv_pull_url', {})
        result['hls_pull_url_map'] = stream_url_obj.get('hls_pull_url_map', {})

    # 方法2: 从 data JSON ({"common":..., "data":{...}}) 中提取
    # 作为备选方案，解析各清晰度的 sdk_params
    ...

    return result
```

### 5.3 数据结构转换

| RSC 原始 Key | 输出 Key | 含义 |
|-------------|---------|------|
| `stream_url.flv_pull_url.FULL_HD1` | `streams["FULL_HD1"].flv` | 原画 FLV 地址 |
| `stream_url.hls_pull_url_map.HD1` | `streams["HD1"].hls` | 超清 HLS 地址 |
| `stream_url.live_core_sdk_data.pull_data.options.qualities[].sdk_key` | (清晰度信息) | 各画质的 SDK 标识 |

---

## 6. 脚本使用说明

### 6.1 脚本位置

```
sxhCrawlerFree/逆向工程/js逆向/请求体加密/抖音直播-get_stream_url/
├── get_live_url.py          # 主脚本
├── requirements.txt         # 依赖文件
└── README.md               # 本文档
```

### 6.2 安装

```bash
# Python 3.8+ 环境
pip install -r requirements.txt
```

`requirements.txt` 内容:
```
requests
```

仅依赖 `requests`，无需其他第三方库。

### 6.3 基本使用

```bash
# 获取指定直播间的流地址
python get_live_url.py https://live.douyin.com/445761361541

# 如果直播未开始，脚本会输出空结果
# 主播下线后，URL 会失效，需要重新运行
```

### 6.4 在 Python 代码中调用

```python
import sys
sys.path.insert(0, '抖音直播-get_stream_url')
from get_live_url import get_live_streams

result = get_live_streams("https://live.douyin.com/445761361541")
for key, info in result['streams'].items():
    print(f"[{info['name']}]")
    print(f"  FLV: {info['flv']}")
    print(f"  HLS: {info['hls']}")

# 取最高清晰度 FLV 地址播放
best = list(result['streams'].values())[0]
print(f"播放地址: {best['flv']}")
```

### 6.5 播放方法

| 工具 | 命令 |
|------|------|
| ffplay | `ffplay "https://...flv?expire=..."` |
| VLC | 媒体 → 打开网络串流 → 粘贴 URL |
| IINA (Mac) | `iina "https://...flv?expire=..."` |
| 浏览器 | 直接在地址栏打开 FLV URL（部分浏览器支持） |
| PotPlayer (Win) | Ctrl+U → 粘贴 URL |

### 6.6 输出说明

```
[*] 直播间: 445761361541           # 主播ID
直播间: 445761361541
可用清晰度: 4 个                   # 当前直播支持的画质数

  [原画/蓝光 (1080p)]             # 画质名称 + 分辨率
    FLV: https://...uhd.flv?...   # FLV 协议推流地址
    HLS: https://...uhd.m3u8?...  # HLS 协议地址（备选）
```

### 6.7 注意事项

1. **URL 有时效性**: `expire` 参数是 Unix 时间戳，一般是请求后 4-8 小时过期
2. **主播下线后失效**: 主播停止直播后，FLV 地址立即失效
3. **无需 Cookie**: 未登录状态即可获取
4. **不同主播格式相同**: 任何 `live.douyin.com/{id}` 页面都可解析
5. **HTTP/HTTPS**: 原始地址是 HTTP，脚本自动替换为 HTTPS

---

## 8. 常见问题

### Q1: 为什么不用 REST API 而用页面解析？

抖音的 `webcast/room/web/stream/url` REST API 端点已经关闭（返回 404），不再通过独立 API 提供服务。所有推流数据现在都通过 SSR (React Server Components) 直接渲染到 HTML 中。

### Q2: 直播流 URL 有效期多久？

URL 中的 `expire` 参数是 Unix 时间戳，一般为请求时间的 4-8 小时后过期：
```
expire=1781970814 → 2026-06-14 03:53:34 (约4小时后)
```
过期后需要重新获取。

### Q3: 为什么不需要 Cookie？

抖音直播页面在未登录状态下也可以观看。FLV URL 通过 `sign` 和 `expire` 参数鉴权，不依赖 Cookie。

### Q4: FLV 和 HLS 用哪个？

- **FLV**: 低延迟（秒级），适合实时观看
- **HLS**: 兼容性好，适合录制/分发
- **LLS**: 超低延迟 SDP 协议

推荐使用 FLV 协议。

### Q5: 脚本能拿到其他主播的直播流吗？

可以。修改 URL 中的 `web_rid` 即可：
```bash
python get_live_url.py https://live.douyin.com/其他主播ID
```

---

## 参考

- [React Server Components 协议](https://github.com/facebook/react/tree/main/packages/react-server-dom-webpack)
- `__pace_f` 是字节跳动自研的 RSC 传输框架
