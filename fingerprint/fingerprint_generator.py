from playwright.sync_api import sync_playwright
from urllib.parse import urlparse
from datetime import datetime

class BrowserFingerprintGenerator:
    def __init__(self):
        self.fp = {
            "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36",
            "platform": "Win32",
            "language": "zh-CN",
            "timezone": "Asia/Shanghai",
            "width": 1920,
            "height": 1080,
            "device_memory": 8,
            "hardware_concurrency": 4,
            "pixel_ratio": 1,
            "color_depth": 24,
            "webgl_vendor": "Google Inc. (Microsoft)",
            "webgl_renderer": "ANGLE (Microsoft, D3D11)",
        }

    def build_headers(self, url):
        host = urlparse(url).netloc
        return {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
            "Accept-Language": "zh-CN,zh;q=0.9",
            "Cache-Control": "max-age=0",
            "Connection": "keep-alive",
            "Host": host,
            "Upgrade-Insecure-Requests": "1",
        }

    def js_inject(self):
        """所有 JS 指纹注入（核心）"""
        return f"""
// ===== navigator =====
Object.defineProperty(navigator, 'platform', {{ get: () => '{self.fp["platform"]}' }});
Object.defineProperty(navigator, 'language', {{ get: () => '{self.fp["language"]}' }});
Object.defineProperty(navigator, 'languages', {{ get: () => ['zh-CN','zh'] }});
Object.defineProperty(navigator, 'deviceMemory', {{ get: () => {self.fp["device_memory"]} }});
Object.defineProperty(navigator, 'hardwareConcurrency', {{ get: () => {self.fp["hardware_concurrency"]} }});
Object.defineProperty(navigator, 'webdriver', {{ get: () => undefined }});

// ===== screen =====
Object.defineProperty(screen, 'colorDepth', {{ get: () => {self.fp["color_depth"]} }});
Object.defineProperty(window, 'devicePixelRatio', {{ get: () => {self.fp["pixel_ratio"]} }});

// ===== Canvas 指纹 =====
const _toDataURL = HTMLCanvasElement.prototype.toDataURL;
HTMLCanvasElement.prototype.toDataURL = function () {{
    return "data:image/png;base64,3BA4E184985E66BC";
}};

// ===== WebGL 指纹 =====
const getParameter = WebGLRenderingContext.prototype.getParameter;
WebGLRenderingContext.prototype.getParameter = function (param) {{
    if (param === 37445) return "{self.fp["webgl_vendor"]}";
    if (param === 37446) return "{self.fp["webgl_renderer"]}";
    return getParameter.call(this, param);
}};

// ===== Audio 指纹 =====
const getChannelData = AudioBuffer.prototype.getChannelData;
AudioBuffer.prototype.getChannelData = function () {{
    const data = getChannelData.apply(this, arguments);
    for (let i = 0; i < data.length; i += 100) {{
        data[i] += 0.0000001;
    }}
    return data;
}};
"""

def run():
    url = "https://www.baidu.com"
    gen = BrowserFingerprintGenerator()

    with sync_playwright() as p:
        browser = p.chromium.launch(
            headless=False,
            args=[
                "--disable-blink-features=AutomationControlled",
                "--disable-infobars"
            ]
        )

        context = browser.new_context(
            user_agent=gen.fp["user_agent"],
            locale="zh-CN",
            timezone_id=gen.fp["timezone"],
            viewport={"width": gen.fp["width"], "height": gen.fp["height"]},
            extra_http_headers=gen.build_headers(url)
        )

        # 🔥 指纹注入（页面 JS 执行前）
        context.add_init_script(gen.js_inject())

        page = context.new_page()
        page.goto(url, wait_until="networkidle")
        page.wait_for_timeout(10000)

        browser.close()

if __name__ == "__main__":
    run()
