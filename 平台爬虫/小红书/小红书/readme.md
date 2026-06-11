## 小红书逆向
* 运行的主代码是xiaohongshu.py

### 功能说明

* 获取接口调用里面需要传入的 web_session,x-s,x-t

### 系统说明

* 采用了requests实现请求模拟 pip3 install requests 

* 采用了PyexecJs模拟js运算 pip3 install  PyExecJS 

* 安装部署了nodejs服务 npm install crypto或者npm install crypto-js 

### 补充说明
* 主要扣下来了网页的sign函数
I web_session依赖webId,调用激活接口获取结果
* nodejs里自执行函数执行可能存在部分问题
* 浏览器网页变量可以console打印直接右击复制，或者 变量名.copy复制到剪切版
* 这里js补环境只用到了window
* 常用的js补环境有  navigator,window,location,document 
* 简单的js补环境方法 常用 https://lzc6244.github.io/2020/11/22/jsdom-%E8%A7%A3%E5%86%B3-nodejs-%E6%89%A7%E8%A1%8C%E5%90%AB%E6%9C%89-document-%E6%88%96-window-%E7%AD%89%E6%B5%8F%E8%A7%88%E5%99%A8%E5%AF%B9%E8%B1%A1%E7%9A%84-js-%E4%BB%A3%E7%A0%81.html
* 精细的补nodejs环境 https://juejin.cn/post/7175071596976013369

