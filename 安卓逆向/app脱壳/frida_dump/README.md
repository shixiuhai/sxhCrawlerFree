# 测试一下frida 逆向 
1. 项目整体式在frida_dump这个git项目下的
2. platform-tools 是安卓adb工具
3. 夜神模拟器安装frida-server 教程参考 https://blog.csdn.net/zaq977684/article/details/126601114
```
# 运行frida-server
.\adb5\adb.exe connect 127.0.0.1:60001
.\adb5\adb.exe push ./frida-server-16.1.10-android-x86 /data/local/tmp
.\adb5\adb.exe pull ./frida-server-16.1.10-android-x86 /data/local/tmp
.\adb5\adb.exe  shell     
cd /data/local/tmp
./frida-server-16.1.10-android-x86  & 
```

4. 查看全部在运行的应用 frida-ps -U -a
5. 进行脱壳  frida -U -f com.babycloud.hanju -l .\dump_dex.js 
6. 下载脱壳dex 到本地 .\adb5\adb.exe pull /data/data/com.babycloud.hanju/files ./dexes

```
frida 热注入
通常使用 Frida 客户端直接连接到目标应用程序，并使用 attach 方法将 JavaScript 代码注入到目标进程中。
frida -U -f com.example.target_app -l script.js

frida 冷注入
无法对已经运行的应用程序进行冷注入，需要等待目标应用程序重新启动或系统重启。
frida -l path/to/script.js -f com.example.target_app --no-pause

```