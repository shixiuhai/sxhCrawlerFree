# sxhCrawlerFree

A comprehensive Python爬虫学习项目 covering requests/Selenium/Playwright/Scrapy/JS逆向/WASM逆向/Android逆向/验证码识别 and more.

## ⚠️ 法律声明与免责条款

### 重要提醒

本仓库所有代码**仅用于学习和技术研究**。使用者必须遵守以下条款，如不同意请立即停止使用。

### 1. 禁止行为

- **不得**用于任何商业用途或盈利行为
- **不得**对任何第三方平台发起超出合理频次的请求（如高频爬取、CC攻击、DDoS）
- **不得**将获取的数据用于转售、分发、建立竞争性数据库或 AI 训练
- **不得**破解、绕过或破坏第三方平台的安全措施、访问控制、付费墙
- **不得**逆向工程用于开发竞争性产品或替代服务
- **不得**违反《中华人民共和国网络安全法》《中华人民共和国数据安全法》《中华人民共和国个人信息保护法》《计算机软件保护条例》等法律法规
- **不得**违反目标网站的 Robots 协议、服务条款（ToS）或使用条款

### 2. 风险自担

本仓库代码按"**原样**"提供，**无任何明示或暗示的保证**，包括但不限于：

- 代码的完整性、正确性、可靠性或适用性
- 代码不侵犯第三方权利
- 代码不违反任何法律或法规

**因使用本仓库代码导致的任何直接或间接损失，包括但不限于：**
- 账号封禁、IP封禁、法律诉讼、行政处罚
- 服务器/网络设备损坏、数据丢失
- 商业机会损失

**均由使用者自行承担，作者及贡献者概不负责。**

### 3. 知识产权

- 本仓库中的**分析文档、教程、技术说明**归作者所有
- 各平台（抖音、网易云音乐、新浪微博等）的 API、数据、品牌、商标归其各自权利人所有
- 仓库中的逆向分析是通过**公开可访问的网页内容**进行的**技术研究**，不涉及对受保护代码的非法复制或分发

### 4. 侵权处理

如您认为本仓库中的内容侵犯了您的合法权益（包括但不限于著作权、商标权、专利权），请通过下方联系方式提供权利证明，我们将在核实后 **立即删除** 相关内容。

### 5. 代码来源说明

- 部分代码来源于学习实践和开源社区
- 感谢 [xishandong/crawlProject](https://github.com/xishandong/crawlProject) 提供的学习参考

### 6. 使用即同意

**一旦您克隆、下载、使用或修改本仓库的任何代码，即视为您已阅读、理解并同意上述全部条款。**

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