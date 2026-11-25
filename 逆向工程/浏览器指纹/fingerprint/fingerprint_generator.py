from playwright.sync_api import sync_playwright
from urllib.parse import urlparse

TARGET_URL = "https://www.toolhelper.cn/Html/TextToTable"

# ===============================
# 你的指纹数据（原样整理）
# ===============================
FINGERPRINT = {
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36",
    "platform": "Win32",
    "language": "zh-CN",
    "languages": ["zh-CN", "zh"],
    "timezone": "Asia/Shanghai",
    "width": 1920,
    "height": 1080,
    "pixel_ratio": 1,
    "color_depth": 24,
    "device_memory": 8,
    "hardware_concurrency": 4,
    "max_touch_points": 0,
    "webgl_vendor": "Google Inc. (Microsoft)",
    "webgl_renderer": "ANGLE (Microsoft, Microsoft Basic Render Driver (0x0000008C) Direct3D11)",
    "canvas_hash": "3BA4E184985E66BC",
    "audio_hash": "1550FB5EEF25D1FC",
}

# ===============================
# JS 指纹注入（核心）
# ===============================
def build_fingerprint_js(fp: dict) -> str:
    return f"""
// ===== webdriver 隐藏 =====
Object.defineProperty(navigator, 'webdriver', {{
    get: () => undefined
}});

// ===== navigator 基本属性 =====
Object.defineProperty(navigator, 'platform', {{ get: () => '{fp["platform"]}' }});
Object.defineProperty(navigator, 'language', {{ get: () => '{fp["language"]}' }});
Object.defineProperty(navigator, 'languages', {{ get: () => {fp["languages"]} }});
Object.defineProperty(navigator, 'deviceMemory', {{ get: () => {fp["device_memory"]} }});
Object.defineProperty(navigator, 'hardwareConcurrency', {{ get: () => {fp["hardware_concurrency"]} }});
Object.defineProperty(navigator, 'maxTouchPoints', {{ get: () => {fp["max_touch_points"]} }});

// ===== screen / window =====
Object.defineProperty(screen, 'colorDepth', {{ get: () => {fp["color_depth"]} }});
Object.defineProperty(window, 'devicePixelRatio', {{ get: () => {fp["pixel_ratio"]} }});

// ===== Canvas 指纹 =====
(function () {{
    const originalToDataURL = HTMLCanvasElement.prototype.toDataURL;
    HTMLCanvasElement.prototype.toDataURL = function () {{
        return "data:image/png;base64,{fp["canvas_hash"]}";
    }};
}})();

// ===== WebGL 指纹 =====
(function () {{
    const getParameter = WebGLRenderingContext.prototype.getParameter;
    WebGLRenderingContext.prototype.getParameter = function (parameter) {{
        // UNMASKED_VENDOR_WEBGL
        if (parameter === 37445) {{
            return "{fp["webgl_vendor"]}";
        }}
        // UNMASKED_RENDERER_WEBGL
        if (parameter === 37446) {{
            return "{fp["webgl_renderer"]}";
        }}
        return getParameter.call(this, parameter);
    }};
}})();

// ===== Audio 指纹 =====
(function () {{
    const originalGetChannelData = AudioBuffer.prototype.getChannelData;
    AudioBuffer.prototype.getChannelData = function () {{
        const data = originalGetChannelData.apply(this, arguments);
        for (let i = 0; i < data.length; i += 100) {{
            data[i] += 1e-7;
        }}
        return data;
    }};
}})();
"""

# ===============================
# 主逻辑
# ===============================
def main():
    parsed = urlparse(TARGET_URL)

    with sync_playwright() as p:
        browser = p.chromium.launch(
            headless=False,
            args=[
                "--disable-blink-features=AutomationControlled",
                "--disable-infobars",
                "--no-sandbox",
            ]
        )

        context = browser.new_context(
            user_agent=FINGERPRINT["user_agent"],
            locale=FINGERPRINT["language"],
            timezone_id=FINGERPRINT["timezone"],
            viewport={
                "width": FINGERPRINT["width"],
                "height": FINGERPRINT["height"]
            },
            extra_http_headers={
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
                "Accept-Language": "zh-CN,zh;q=0.9",
                "Cache-Control": "max-age=0",
                "Upgrade-Insecure-Requests": "1",
                "Host": parsed.netloc
            }
        )

        # ⚠️ 必须在 page 创建前注入
        context.add_init_script(build_fingerprint_js(FINGERPRINT))

        page = context.new_page()
        page.goto(TARGET_URL, wait_until="networkidle")

        # 停留观察
        page.wait_for_timeout(15000)

        browser.close()


if __name__ == "__main__":
    main()
