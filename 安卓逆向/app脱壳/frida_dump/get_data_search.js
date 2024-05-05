Java.perform(function () {
    // 获取接口类
    var SearchApi = Java.use("s4.n0");

    // hook 目标方法
    SearchApi.d.overload('java.lang.String', 'java.lang.String', 'int', 'int', 'kotlin.coroutines.Continuation').implementation = function (str, str2, i10, i11, continuation) {
        // 调用原始方法
        var result = this.d(str, str2, i10, i11, continuation);

        // 打印原始结果
        console.log("Original result:", result);

        // 修改结果
        // 例如，你可以在这里修改返回的 SvrEncryptedBaseBean 对象

        // 返回修改后的结果
        return result;
    };
});
