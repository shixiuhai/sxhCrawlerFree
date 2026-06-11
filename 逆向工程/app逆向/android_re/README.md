# android_re

## 🎯 功能说明
Android逆向工程专题，覆盖App脱壳、Frida Hook和参数提取。

## 📌 技术栈
- Frida Hook
- App脱壳
- Android逆向

## 📁 目录结构
```
android_re/
└── app脱壳/
    └── frida_dump/
        └── frida-server-16.2.4-android-x86_64  # 大型二进制文件，不进git
```

## ⚠️ 稳定性风险
| 风险等级 | 说明 |
|----------|------|
| 🟡 MONITOR | Android版本更新可能导致Frida脚本失效 |

## 🚀 快速开始
```bash
# frida-server 下载地址说明
# 请访问 https://github.com/frida/frida/releases 下载对应版本
adb push frida-server /local/data/local/tmp
adb shell "/data/local/tmp/frida-server &"
```