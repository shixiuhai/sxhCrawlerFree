// 在设备上运行时，请附加到目标进程。例如：frida -U -f com.example.app -l script.js
Java.perform(function() {
    // 获取 Application 类
    var Application = Java.use("com.babycloud.hanju");

    // 监听 Application 类的 attach 方法
    Application.attach.implementation = function() {
        console.log("[*] Application attached");

        // 获取所有已加载的类
        Java.enumerateLoadedClasses({
            onMatch: function(className) {
                console.log("[*] Class name: " + className);

                // 获取类的所有方法
                var clazz = Java.use(className);
                var methods = clazz.class.getDeclaredMethods();
                for (var i = 0; i < methods.length; i++) {
                    console.log("[*] Method name: " + methods[i].getName());
                }
            },
            onComplete: function() {}
        });

        // 调用原始的 attach 方法
        this.attach();
    };
});
