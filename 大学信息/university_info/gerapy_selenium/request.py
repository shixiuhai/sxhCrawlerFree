from scrapy import Request
import copy


class SeleniumRequest(Request):
    """
    Scrapy ``Request`` subclass providing additional arguments
    """
    
    def __init__(self, url, callback=None, wait_for=None, script=None, proxy=None,
                 sleep=None, timeout=None, pretend=None, screenshot=None, meta=None, *args,
                 **kwargs):
        """
        :param url: request url
        :param callback: callback
        :param wait_for: wait for some element to load, also supports dict
        :param script: script to execute
        :param proxy: use proxy for this time, like `http://x.x.x.x:x`
        :param sleep: time to sleep after loaded, override `GERAPY_SELENIUM_SLEEP`
        :param timeout: load timeout, override `GERAPY_SELENIUM_DOWNLOAD_TIMEOUT`
        :param pretend: pretend as normal browser, override `GERAPY_SELENIUM_PRETEND`
        :param screenshot: ignored resource types, see
                https://miyakogi.github.io/pyppeteer/_modules/pyppeteer/page.html#Page.screenshot,
                override `GERAPY_SELENIUM_SCREENSHOT`
        :param args:
        :param kwargs:
        """
        # use meta info to save args
        meta = copy.deepcopy(meta) or {}
        selenium_meta = meta.get('selenium') or {}
        
        self.wait_for = selenium_meta.get('wait_for') if selenium_meta.get('wait_for') is not None else wait_for
        self.script = selenium_meta.get('script') if selenium_meta.get('script') is not None else script
        self.sleep = selenium_meta.get('sleep') if selenium_meta.get('sleep') is not None else sleep
        self.proxy = selenium_meta.get('proxy') if selenium_meta.get('proxy') is not None else proxy
        self.pretend = selenium_meta.get('pretend') if selenium_meta.get('pretend') is not None else pretend
        self.timeout = selenium_meta.get('timeout') if selenium_meta.get('timeout') is not None else timeout
        self.screenshot = selenium_meta.get('screenshot') if selenium_meta.get(
            'screenshot') is not None else screenshot
        
        selenium_meta = meta.setdefault('selenium', {})
        selenium_meta['wait_for'] = self.wait_for
        selenium_meta['script'] = self.script
        selenium_meta['sleep'] = self.sleep
        selenium_meta['proxy'] = self.proxy
        selenium_meta['pretend'] = self.pretend
        selenium_meta['timeout'] = self.timeout
        selenium_meta['screenshot'] = self.screenshot
        
        super().__init__(url, callback, meta=meta, *args, **kwargs)
