Java.perform(function () {
    // 获取 RecommendApi2 接口类
    var RecommendApi2 = Java.use("p2474s4.RecommendApi2");

    // hook mo193993c 方法
    RecommendApi2.mo193993c.overload('int', 'kotlin.coroutines.Continuation').implementation = function (i, continuation) {
        // 调用原始方法
        var result = this.mo193993c(i, continuation);

        // 打印原始结果
        console.log("Original result:", result);

        // 修改结果
        // 例如，你可以在这里修改返回的 SvrEncryptedBaseBean 对象

        // 返回修改后的结果
        return result;
    };
});
