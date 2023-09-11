# adb查看正在运行的安卓apk包名
# 安装frida-server adb shell getprop ro.product.cpu.abi
# https://m.freebuf.com/articles/endpoint/214540.html hook链接
# adb连接夜神模拟器 .\adb.exe connect 127.0.0.1:62001
# adb shell dumpsys activity | grep "Run"
d={"a":"b"}
# frida -U -f com.nacai.bocai -l .\hooks.js 
a=1
if a==2 and d["f"]:
    print("---")
else:
    print("+++")