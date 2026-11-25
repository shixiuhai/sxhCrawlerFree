from aiohttp import ClientSession
from aiohttp import ClientTimeout
from aiohttp import ServerTimeoutError
import asyncio
from re import compile

def format_url(url: str) -> str:
        return bytes(url, "utf-8").decode("unicode_escape")

def get_video_link(html: str) -> list:
        reg = compile(r'"originVideoKey":"(\S+?\\u002F\S+?)"')
        #  (t := reg.search(html)) 如果返回内容为空那么reg.search(html)返回的值就是None 就会触发else
        # return [format_url(f"https://sns-video-hw.xhscdn.com/{t.group(1)}")] if (t := reg.search(html)) else []
        # 使用正则表达式搜索 HTML 中的匹配项
        match = reg.search(html)
        # 如果找到匹配项，返回包含格式化后的 URL 的列表；否则，返回空列表
        if match:
            return [format_url(f"https://sns-video-hw.xhscdn.com/{match.group(1)}")]
        else:
            return []

async def parse_real_url(url:str)->list:
    try:
        async with ClientSession(headers={"Referer": "https://www.xiaohongshu.com/"}) as session:
            async with session.get(url) as response:
                html = await response.text()
                return get_video_link(html)
    except Exception as error:
        return []

async def main():
    resp = await parse_real_url("https://www.xiaohongshu.com/explore/65530b3b0000000032026b1a")
    print(resp)
    

    
if __name__ == "__main__":
    loop = asyncio.get_event_loop()
    loop.run_until_complete(main())

    
