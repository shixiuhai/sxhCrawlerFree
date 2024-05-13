// 打印所有的类
Java.perform(function(){
    var classz = Java.enumerateLoadedClassesSync();
    // console.log(classz)
    for(var i=0;i<classz.length;i++){
        if (classz[i].indexOf("com.babycloud.hanju.search.fragment.SearchShortVideoFragment$loadData$1$svrEncryptedBaseBean$1") != -1){
            console.log(classz[i])
            // console.log(1)
        }
    }
})

// 打印方法名称
// Java.perform(function(){
//     var MainActivity = Java.use("s4.n0");
//     var methods = MainActivity.class.getDeclaredMethods();
//     for(var i=0;i<methods.length;i++){
//         console.log(methods[i].getName())
//     }
// })

Java.perform(function(){
    let SearchShortVideoFragment$loadData$1$svrEncryptedBaseBean$1 = Java.use("com.babycloud.hanju.search.fragment.SearchShortVideoFragment$loadData$1$svrEncryptedBaseBean$1");
    SearchShortVideoFragment$loadData$1$svrEncryptedBaseBean$1["$init"].implementation = function (searchShortVideoFragment, continuation) {
        console.log(`SearchShortVideoFragment$loadData$1$svrEncryptedBaseBean$1.$init is called: searchShortVideoFragment=${searchShortVideoFragment}, continuation=${continuation}`);
        this["$init"](searchShortVideoFragment, continuation);
    };
})





