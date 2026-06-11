# im1907.top VIP视频解析 逆向分析报告

## 目标
破解 `https://im1907.top/?jx=<视频链接>` 的解析接口，实现输入优酷/腾讯/爱奇艺等视频链接，直接获取真实 m3u8 播放地址。

## 逆向过程

### 第1步：页面结构分析
打开 `im1907.top/?jx=...`，发现页面只有一个 `<iframe>`：
```
src = https://m1-z2.cloud.nnpp.vip:2223/?jx=<视频链接>
```
主站只是壳，核心解析逻辑在 iframe 内部。

### 第2步：网络请求捕获
通过 CDP (Chrome DevTools Protocol) 捕获浏览器网络日志，发现 iframe 内的关键请求：
```
GET https://m1-a1.cloud.nnpp.vip:2223/api/v/
    ?z=631b5f669923a20dae94bf2c5b7bd50e
    &jx=<视频链接>
    &s1ig=11401
    &g=

POST https://um1.cloud.nnpp.vip:2223/api/send  (统计上报)
```

### 第3步：验证 API
用 curl 直接请求该 API，成功返回 JSON 格式的视频 m3u8 列表，确认 API 是公开可调的。

### 第4步：获取播放器页面源码
iframe 页面有 top window 检测（直接访问返回空白）。用 curl 带上 `Referer: https://im1907.top/` 绕过检测，拿到完整 HTML。发现是 React SPA，核心 JS 在 `/static/js/main.5ed7e97d.js`。

### 第5步：逆向 token 生成
下载 main.5ed7e97d.js (380KB)，用 `js-beautify` 格式化后搜索 "api/v" 定位到关键代码（详见 `player_formatted.js` 第 14228-14260 行）：

```javascript
// 获取北京时间 (UTC+8)
let o = new Date();
let s = o.getTime();
let a = 6e4 * o.getTimezoneOffset();
let l = new Date(s + a + 36e5 * 8);

// 生成 z token
let c = l;
c = c.getDate() + 9 + 9 ^ 10;    // 日号 + 18 XOR 10
c = md5(String(c));               // 第一次 MD5
c = c.substring(0, 10);           // 截取前10位
c = md5(c);                       // 第二次 MD5 → z

// 生成 s1ig
let u = l.getDay() + 11397;       // 星期几 + 11397

// 拼接 API URL
d = r + "api/v/?z=" + c + "&jx=" + i;
d += "&s1ig=" + u;
// 可选: d += "&g=" + cookies

// 发起请求
g = await fetch(d, { credentials: "include", headers: y });
v = await g.json();
// v.type: "movie" | "tv"
// v.data[].source.eps[].url → m3u8 地址
```

`ma()` 对应 `__webpack_require__(466)`，模块 466 即标准 MD5 实现。

### 第6步：Python 复现验证
```
raw = day + 9 + 9 ^ 10               # 例: 11 + 18 XOR 10 = 23
h1 = md5(str(raw))[:10]              # md5("23")[:10] = "37693cfc74"
z  = md5(h1)                         # md5("37693cfc74") = "631b5f669923a20dae94bf2c5b7bd50e"
s1ig = js_weekday + 11397            # 周四=4 → 11401
```

## 文件说明

| 文件 | 说明 |
|------|------|
| `video_parser.py` | 解析脚本，输入视频链接输出 m3u8 地址 |
| `player.js` | 原始未格式化 JS (380KB) |
| `player_formatted.js` | js-beautify 格式化后的 JS (740KB，14712行) |
| `REVERSE_README.md` | 本文件 |

## API 详情

**端点**: `https://m1-a1.cloud.nnpp.vip:2223/api/v/`

**参数**:
| 参数 | 说明 | 示例 |
|------|------|------|
| `z` | 基于日期派生的 token，每日变化 | `631b5f669923a20dae94bf2c5b7bd50e` |
| `jx` | 视频播放页链接 (URL编码) | `https://v.youku.com/...` |
| `s1ig` | 基于星期几派生 | `11401` |
| `g` | 可选，cookie/额外数据 | |

**返回格式**:
```json
{
  "type": "tv",
  "data": [
    {
      "name": "荒野求生 第四季",
      "year": "2009",
      "source": {
        "eps": [
          { "name": "第01集", "url": "https://...m3u8" }
        ]
      }
    }
  ]
}
```

## 使用方式

```bash
python3 video_parser.py "https://v.youku.com/v_show/id_xxx.html"
# 或直接运行，交互式输入链接
python3 video_parser.py
```
