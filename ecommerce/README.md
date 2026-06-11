# ecommerce

## 🎯 功能说明
电商平台爬虫合集，覆盖京东/淘宝/1688/天猫等主流电商平台，支持商品数据采集、Cookie登录和签名逆向。

## 📌 技术栈
- Python requests / Scrapy
- Selenium / Playwright 自动化
- JS逆向签名
- Cookie池管理

## 📁 目录结构
```
ecommerce/
├── 京东/           # 京东电商
├── 1688国内商城/ # 1688国内
└── 1688跨境站点/    # 1688跨境
```

## ⚠️ 稳定性风险
| 风险等级 | 说明 |
|----------|------|
| 🔴 HIGH_RISK | 电商平台反爬严格，接口随时可能失效 |

## 🚀 快速开始
```bash
pip install requests scrapy selenium
```