Java.perform(function () {
    // com.babycloud.hanju.search.activity.SearchActivity@6320322
    let SearchApi = Java.use("com.babycloud.hanju.search");
    SearchApi["d"].implementation = function (str, str2, i10, i11, continuation) {
        console.log(`SearchApi.mo194065d is called: str=${str}, str2=${str2}, i10=${i10}, i11=${i11}, continuation=${continuation}`);
        let result = this["d"](str, str2, i10, i11, continuation);
        console.log(`SearchApi.mo194065d result=${result}`);
        return result;
    };
});
