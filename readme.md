# sxhCrawlerFree

A comprehensive Python爬虫学习项目 covering requests/Selenium/Playwright/Scrapy/JS逆向/WASM逆向/Android逆向/验证码识别 and more.

## ⚠️ 免责声明

本仓库中的代码是根据以下条件提供的：

1. 代码仅供学习交流使用，请勿用于任何商业或非法用途。
2. 作者不对代码的任何使用承担任何责任。作者不承担任何明示或暗示的保证，包括但不限于适销性或特定用途适用性的保证。使用本代码的风险由用户自行承担。
3. 本代码中的示例可能仅供演示和教育目的使用。在使用示例代码时，请确保了解并遵守相关法律法规和第三方服务的条款。
4. 仓库代码全部收集于互联网。
5. 如果你觉得本代码涉及侵权，请联系删除，联系方式见下。
6. 感谢 https://github.com/xishandong/crawlProject 提供的学习

## 🎯 项目特性

| 技术方向 | 覆盖内容 |
|---------|---------|
| 基础爬虫 | requests / Scrapy / feapder |
| 动态渲染 | Selenium / Playwright / Splash |
| 逆向工程 | JS逆向 / WASM逆向 / TLS指纹 |
| 移动端 | Android逆向 / Frida Hook |
| 验证码 | 极验滑块 / 点选 / 文字识别 |
| 平台爬虫 | 抖音/小红书/网易云/京东/淘宝等 |

## 📂 目录结构

```
sxhCrawlerFree/
├── 基础入门/                    # 基础教程
│   ├── requests/              # requests基础
│   ├── scrapy/                # Scrapy 框架
│   ├── 异步爬虫/ # 协程/异步
│   └── xpath正则/              # xpath 和正则
│
├── 平台爬虫/                    # 各平台爬虫
│   ├── 抖音/                   # 抖音直播流
│   ├── 虎牙/                   # 虎牙直播
│   ├── 来疯/                   # 来疯直播
│   ├── 疯播/                   # 疯播直播
│   ├── 花花直播/               # 花花直播
│   ├── 电商平台/               # 京东/1688/天猫
│   ├── 网易云音乐/             # 网易云音乐
│   ├── 拼多多/                 # 拼多多
│   ├── 小说下载/                # 小说下载
│   ├── 小红书/                  # 小红书
│   ├── 图片下载/                # 图片爬虫
│   └── 企业查询/                # 企业信息查询
│
├── 逆向工程/                    # 逆向技术专题
│   ├── js逆向/                 # JS逆向
│   │   ├── 请求体加密/
│   │   ├── 环境检测/
│   │   ├── wasm逆向/
│   │   ├── webpack逆向/
│   │   └── tls指纹/
│   ├── app逆向/                # Android逆向
│   │   └── frida脚本/
│   └── 浏览器指纹/             # 浏览器指纹
│
├── 自动化工具/                  # 浏览器自动化
│   ├── selenium/              # Selenium
│   ├── playwright/           # Playwright
│   └── splash/               # Splash
│
├── 验证码识别/                  # 验证码解决方案
│   ├── 滑块验证/              # 滑块验证码
│   ├── 点选验证/              # 点选验证码
│   └── 验证码相关/             # 其他验证码
│
├── 视频解析/                    # VIP视频解析
│   └── vip解析/               # VIP视频解析
│
├── 工具集/                     # 工具脚本
│   ├── 指纹生成/              # 浏览器指纹生成
│   ├── redis工具/            # Redis工具
│   ├── mitmproxy脚本/        # mitmproxy脚本
│   ├── 搜索API/              # 搜索API
│   ├── 百度扫码登录/          # 百度扫码登录
│   ├── 淘宝cookie/           # 淘宝Cookie
│   └── selenium_ie/          # Selenium IE
│
├── 学习项目/                   # 学习代码
│   ├── 学生练习/              # 学生练习
│   ├── 协程相关/              # 协程相关
│   ├── 视频爬取/              # 视频爬取
│   ├── selenium相关/          # Selenium相关
│   └── xpath相关/            # xpath相关
│
├── 移动端自动化/               # Airtest
│   └── airtest项目/           # Airtest项目
│
├── 综合案例/                   # 高级综合案例
│   ├── 抖音全站爬取/
│   ├── 微博全站爬取/
│   ├── bilibili/
│   ├── 蛋蛋看/
│   ├── instagram/
│   └── 语音爬虫/
│
├── feapder框架/               # feapder 专项
│   └── 小红书/
│
├── 大学信息/                   # 大学信息
│
└── 爬虫轮子/                   # 常用工具封装
    └── crawl工具/
```

## 🚀 快速开始

```bash
# 克隆项目
git clone https://github.com/yourname/sxhCrawlerFree.git
cd sxhCrawlerFree

# 安装基础依赖
pip install requests lxml scrapy playwright selenium ddddocr
pip install feapder pycryptodome pyexecjs2 m3u8

# 运行示例
python 基础入门/requests/百度网页.py
```

## 📌 命名规范

- **函数/变量**: 下划线命名法 (`snake_case`)
- **类名**: 驼峰命名法 (`CamelCase`)
- **目录**: 中文命名

## 🔗 相关项目

- [playwright实现的浏览器动态渲染项目](https://github.com/shixiuhai/rendered-by-playwright)
- [scrapy爬虫脚手架](https://github.com/shixiuhai/scrapySpiderRedis)

## 📧 联系方式

[15256728901@163.com](mailto:15256728901@163.com) | [yuchajia@gmail.com](mailto:yuchajia@gmail.com)