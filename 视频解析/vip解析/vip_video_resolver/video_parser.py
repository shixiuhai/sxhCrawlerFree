#!/usr/bin/env python3
"""
VIP视频解析工具 - 输入视频链接，解析出真实 m3u8 播放地址

============================================================
逆向分析过程说明
============================================================

目标站点: https://im1907.top/?jx=<视频链接>

--- 第1步：页面结构分析 ---
打开 im1907.top/?jx=... 发现页面只有一个 <iframe>:
  src = https://m1-z2.cloud.nnpp.vip:2223/?jx=<视频链接>
主站只是壳，核心解析逻辑在 iframe 内部。

--- 第2步：网络请求捕获 ---
通过 CDP (Chrome DevTools Protocol) 捕获浏览器网络日志，
发现 iframe 内的关键请求:
  GET https://m1-a1.cloud.nnpp.vip:2223/api/v/
      ?z=631b5f669923a20dae94bf2c5b7bd50e
      &jx=<视频链接>
      &s1ig=11401
      &g=
  POST https://um1.cloud.nnpp.vip:2223/api/send  (统计上报)

--- 第3步：验证 API 可直接调用 ---
用 curl 直接请求该 API，成功返回 JSON 格式的视频 m3u8 列表。
确认 API 是公开可调的，不需要 cookie 或额外鉴权。

--- 第4步：获取播放器页面源码 ---
iframe 页面有 top window 检测（直接访问返回空白）。
用 curl 带上 Referer: https://im1907.top/ 绕过检测，拿到完整 HTML。
发现是 React 单页应用，核心 JS 在 /static/js/main.5ed7e97d.js。

--- 第5步：逆向 JS 中的 token 生成 ---
下载 main.5ed7e97d.js (380KB)，搜索 "api/v" 定位到生成代码:

  let o = new Date();
  let s = o.getTime();
  let a = 6e4 * o.getTimezoneOffset();
  let l = new Date(s + a + 36e5 * 8);  // 转北京时间 (UTC+8)
  let c = l;
  c = c.getDate() + 9 + 9 ^ 10;        // 日号 + 18 XOR 10
  c = md5(String(c));                   // 第一次 MD5
  c = c.substring(0, 10);               // 截取前10位
  c = md5(c);                           // 第二次 MD5 → 这就是 z
  let u = l.getDay() + 11397;           // 星期几 + 11397 → s1ig

ma() 对应 __webpack_require__(466)，模块 466 即标准 MD5 实现。

--- 第6步：Python 复现验证 ---
按 JS 逻辑用 Python 实现，传入当天日期 (2026-06-11，日号=11):
  raw = 11 + 9 + 9 ^ 10 = 23
  md5("23") = "37693cfc748049e45d87b8c7d8b9aacd"
  取前10位 = "37693cfc74"
  md5("37693cfc74") = "631b5f669923a20dae94bf2c5b7bd50e"  ✅ 匹配

结论: z 基于北京时间日号派生，每日变化，同一天内不变。
============================================================
"""

import hashlib
import json
import sys
from datetime import datetime, timezone, timedelta
from urllib.parse import quote

import requests


API_BASE_V1 = "https://m1-a1.cloud.nnpp.vip:2223/api/v/"


def generate_token(dt: datetime | None = None) -> tuple[str, int]:
    """
    模拟 JavaScript 中的 token 生成逻辑

    JS 原始代码:
        let o = new Date();
        let s = o.getTime();
        let a = 6e4 * o.getTimezoneOffset();
        let l = new Date(s + a + 36e5 * 8);
        let c = l;
        c = c.getDate() + 9 + 9 ^ 10;
        c = md5(String(c));
        c = c.substring(0, 10);
        c = md5(c);
        let u = l.getDay() + 11397;

    返回: (z, s1ig)
    """
    bj = (dt or datetime.now(timezone.utc)).astimezone(timezone(timedelta(hours=8)))

    # c.getDate() + 9 + 9 ^ 10
    raw = bj.day + 9 + 9 ^ 10

    # md5(String(c)).substring(0, 10)
    h1 = hashlib.md5(str(raw).encode()).hexdigest()[:10]

    # md5(substring) = z
    z = hashlib.md5(h1.encode()).hexdigest()

    # l.getDay() (JS: 0=Sun ~ 6=Sat) + 11397
    js_weekday = (bj.weekday() + 1) % 7
    s1ig = js_weekday + 11397

    return z, s1ig


def resolve(url: str) -> dict:
    """调用解析 API 获取视频真实地址"""
    z, s1ig = generate_token()
    api_url = (
        f"{API_BASE_V1}"
        f"?z={z}&jx={quote(url)}&s1ig={s1ig}&g="
    )
    resp = requests.get(api_url, timeout=15)
    resp.raise_for_status()
    return resp.json()


def format_output(data: dict) -> str:
    """格式化输出为易读的剧集列表"""
    lines = []
    if data.get("type") == "tv" and data.get("data"):
        for season in data["data"]:
            name = season.get("name", "")
            year = season.get("year", "")
            label = f"{name} ({year})" if year else name
            for ep in season.get("source", {}).get("eps", []):
                lines.append(f"{label} - {ep['name']}: {ep['url']}")
    return "\n".join(lines) if lines else json.dumps(data, indent=2, ensure_ascii=False)


def main():
    if len(sys.argv) < 2:
        url = input("请输入视频播放页链接: ").strip()
    else:
        url = sys.argv[1]

    if not url:
        print("错误: 请输入视频链接")
        sys.exit(1)

    try:
        data = resolve(url)
    except Exception as e:
        print(f"解析失败: {e}")
        sys.exit(1)

    print(format_output(data))


if __name__ == "__main__":
    main()
