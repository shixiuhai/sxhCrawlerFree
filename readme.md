# sxhCrawlerFree

A comprehensive Python爬虫学习项目 covering requests/Selenium/Playwright/Scrapy/JS逆向/WASM逆向/Android逆向/验证码识别 and more.

## ⚠️ 免责声明

本仓库中的代码是根据以下条件提供的：

2. 作者不对代码的任何使用承担任何责任。作者不承担任何明示或暗示的保证，包括但不限于适销性或特定用途适用性的保证。使用本代码的风险由用户自行承担。

3. 本代码中的示例可能仅供演示和教育目的使用。在使用示例代码时，请确保了解并遵守相关法律法规和第三方服务的条款。
4. 仓库代码全部收集于互联网。
5. 如果你觉得本代码涉及侵权，请联系删除，联系方式见下。
6. 感谢 https://github.com/xishandong/crawlProject 提供的学习

##🎯 项目特性

| 技术方向 | 覆盖内容 |
|---------|---------|
| 基础爬虫 | requests / Scrapy / feapder |
| 动态渲染 | Selenium / Playwright / Splash |
| 逆向工程 | JS逆向 / WASM逆向 / TLS指纹 |
| 移动端 | Android逆向 / Frida Hook |
| 验证码 | 极验滑块 / 点选 / 文字识别 |
| 平台爬虫 | 抖音/小红书/网易云/京东/淘宝等 |

## 📂 目录索引

### 🔹 核心框架 / 基础技术
| 模块 | 技术栈 | 说明 |
|------|--------|------|
| crawlProject/ | Python/Scrapy/JS逆向 | 【重点】爬虫项目实战，基础→进阶完整学习路径 |
| selenium_wrapper/ | Selenium | Chrome自动化 API封装 |
| automation/ | Playwright/Selenium | 自动化篇，重命名为 automation/ |
| splash_solution/ | Splash | 动态渲染 Scrapy 方案 |

### 🔹 平台爬虫
| 模块 | 平台 | 说明 |
|------|------|------|
| live_platform/ | 抖音/虎牙/来疯/花花 | 直播流地址 + 弹幕获取 |
| ecommerce/ | 京东/淘宝/1688/天猫 | 电商登录/Cookie/数据爬取 |
| social_platform/ | 小红书 | x-s/x-t 签名逆向 |
| music_wangyiyun/ | 网易云音乐 | 音乐搜索 JS 逆向 |
| pinduoduo/ | 拼多多 | 反爬机制和数据采集 |
| novel/ | 各小说站 | 小说下载 |
| biquge/ | 笔趣阁 | 小说网爬虫 |
| image_platform/ | Pixiv | 图片爬虫 |
| enterprise_query/ | 行行查/企业查 | 企业信息查询 JS 逆向 |

### 🔹 逆向技术专题
| 模块 | 方向 | 说明 |
|------|------|------|
| crawlProject/advanced/js_reverse/ | JS逆向 | 请求头/请求体/WASM/浏览器指纹全套 |
| android_re/ | Android逆向 | App脱壳 + Frida Hook |
| vip_video_resolver/ | 视频解析 | im1907 视频解析逆向 + Python复现 |

### 🔹 验证码识别
| 模块 | 类型 | 说明 |
|------|------|------|
| crawlProject/captcha/ | 滑块/点选 | 极验/京东滑块/极验三代点选 |

### 🔹 工具与基础设施
| 模块 | 说明 |
|------|------|
| fingerprint/ | 浏览器指纹生成 |
| redis_dict/ | Redis字典操作 |
| mitmproxy_scripts/ | mitmproxy 抓包脚本 |
| duckduckgo_search_api/ | 搜索 API 封装 |
| baidu_qrlogin_drission/ | DrissionPage 百度扫码登录 |
| taobao_cookie_sel/ | Selenium 获取淘宝登录 Cookie |
| airtest_project/ | Airtest 自动化测试 |
| study_demo/ | 协程/视频爬取等学习代码 |
| spider_student/ | 学生练习项目 |

##🚀 快速开始

```bash
# 克隆项目
git clone https://github.com/yourname/sxhCrawlerFree.git
cd sxhCrawlerFree

# 安装基础依赖
pip install requests lxml scrapy playwright selenium ddddocr
pip install feapder pycryptodome pyexecjs2 m3u8

# 运行示例
python crawlProject/basics/request/百度网页.py
```

## 📌 命名规范

- **函数/变量**: 下划线命名法 (`snake_case`)
- **类名**: 驼峰命名法 (`CamelCase`)
- **目录**: 英文为主，中文别名为软链接

## 🔗 相关项目

- [playwright实现的浏览器动态渲染项目](https://github.com/shixiuhai/rendered-by-playwright)
- [scrapy爬虫脚手架](https://github.com/shixiuhai/scrapySpiderRedis)

## 📧 联系方式

[15256728901@163.com](mailto:15256728901@163.com) | [yuchajia@gmail.com](mailto:yuchajia@gmail.com)