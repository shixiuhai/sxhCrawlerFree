# live_platform

## 🎯 功能说明
直播平台爬虫合集，覆盖抖音/虎牙/来疯/花花等主流直播平台，支持直播流地址获取和弹幕数据采集。

## 📌 技术栈
- Python requests
- Playwright / Selenium自动化
- 直播流解析 (m3u8)
- 弹幕 WebSocket 采集

## 📁 目录结构
```
live_platform/
├── 抖音/          # 抖音直播流
├── 虎牙/          # 虎牙直播
├── 来疯直播/       # 来疯直播
├── 疯播/          # 疯播直播
└── 花花直播/       # 花花直播
```

## ⚠️ 稳定性风险
| 风险等级 | 说明 |
|----------|------|
|🟡 MONITOR | 第三方直播平台接口，需关注可用性 |

## 🚀 快速开始
```bash
pip install requests playwright
playwright install chromium
```