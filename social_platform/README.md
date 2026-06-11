# social_platform

## 🎯 功能说明
社交平台爬虫合集，主要覆盖小红书平台，支持笔记数据采集、用户信息获取和 x-s/x-t 签名逆向。

## 📌 技术栈
- Python requests
- JS逆向 (x-s / x-t 签名)
- Playwright 自动化
- TLS指纹绕过

## 📁 目录结构
```
social_platform/
└── 小红书/          # 小红书数据采集
```

## ⚠️ 稳定性风险
| 风险等级 | 说明 |
|----------|------|
| 🔴 HIGH_RISK | 小红书 x-s/x-t 签名算法随时可能变更 |

## 🚀 快速开始
```bash
pip install requests pyexecjs2
```