# vip_video_resolver

## 🎯 功能说明
VIP视频解析工具，基于 im1907 接口的视频解析服务，支持优酷/爱奇艺/腾讯视频等平台。

## 📌 技术栈
- Python requests
- im1907 API
- 双重MD5+日期派生 token算法

## 📁 目录结构
```
vip_video_resolver/
├── video_parser.py     # 解析器主脚本
├── REVERSE_README.md   # 逆向分析文档
└── evidence/           # JS分析文件（不进git）
```

## ⚠️ 稳定性风险
| 风险等级 | 说明 |
|----------|------|
| 🔴 HIGH_RISK | im1907 接口域名和 token 算法随时可能变更 |

- **当前状态**: 🔴 HIGH_RISK - 接口域名和token算法随时可能变更
- **监控建议**: 建议自建解析服务或购买VIP接口

## 🚀 快速开始
```bash
python3 vip_video_resolver/video_parser.py "https://v.youku.com/v_show/id_XNjUyNzYwMDg0OA==.html" --list
```

## 📌 参考文献
- im1907 分析成果见 `REVERSE_README.md`
- token算法: 双重MD5 + 日期派生
- API端点: im1907.com 相关接口