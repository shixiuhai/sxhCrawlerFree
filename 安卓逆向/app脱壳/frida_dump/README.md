# 测试一下frida 逆向 
1. 项目整体式在frida_dump这个git项目下的
2. platform-tools 是安卓adb工具
3. 夜神模拟器安装frida-server 教程参考 https://blog.csdn.net/zaq977684/article/details/126601114
4. 查看全部在运行的应用 frida-ps -U -a
5. 进行脱壳  frida -U -f com.babycloud.hanju -l .\dump_dex.js 
6. 下载脱壳dex 到本地 .\adb5\adb.exe pull /data/data/com.babycloud.hanju/files ./dexes