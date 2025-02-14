# 基于duckduckgo的搜索api封装
* 用于个大模型联网搜索使用测试
* 测试通过
* duckduckgo api可能需要使用比如cloudflare或者deno相关配置一个代理
# 部署API项目
```
pip3 install gunicorn
unicorn -w 4 -b 0.0.0.0:8000 demo:app # 其中w指的是多少进程
```
# 其他
* 这就是一个测试demo
