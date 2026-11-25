Java.perform(function() {
    // 获取 JSONObject 类的引用
    var JSONObject = Java.use("org.json.JSONObject");

    // Hook JSONObject 类的 toString 方法
    JSONObject.toString.implementation = function() {
        // 调用原始的 toString 方法并获取返回值
        var result = this.toString();

        // 输出 JSONObject 的内容
        console.log("JSONObject content:", result);

        // 返回原始方法的返回值
        return result;
    };
});


Java.perform(function() {
    // 获取 JSONObject 类的引用
    var JSONObject = Java.use("org.json.JSONObject");

    // Hook JSONObject 类的 toString 方法
    JSONObject.toString.implementation = function() {
        // 调用原始的 toString 方法并获取返回值
        var result = this.toString();

        // 输出 JSONObject 的内容
        console.log("JSONObject content:", result);

        // 返回原始方法的返回值
        return result;
    };
});



