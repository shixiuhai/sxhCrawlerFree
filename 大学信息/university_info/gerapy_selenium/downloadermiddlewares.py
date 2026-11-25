import time
from io import BytesIO
from scrapy.http import HtmlResponse
from scrapy.utils.python import global_object_name
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from gerapy_selenium.pretend import SCRIPTS as PRETEND_SCRIPTS
from gerapy_selenium.settings import *
import urllib.parse
from selenium import webdriver
from selenium.webdriver import ChromeOptions
from selenium.webdriver.support import expected_conditions as EC
from twisted.internet.threads import deferToThread

logger = logging.getLogger('gerapy.selenium')


class SeleniumMiddleware(object):
    """
    Downloader middleware handling the requests with Selenium
    """
    
    def _retry(self, request, reason, spider):
        """
        get retry request
        :param request:
        :param reason:
        :param spider:
        :return:
        """
        if not self.retry_enabled:
            return
        
        retries = request.meta.get('retry_times', 0) + 1
        retry_times = self.max_retry_times
        
        if 'max_retry_times' in request.meta:
            retry_times = request.meta['max_retry_times']
        
        stats = spider.crawler.stats
        if retries <= retry_times:
            logger.debug("Retrying %(request)s (failed %(retries)d times): %(reason)s",
                         {'request': request, 'retries': retries, 'reason': reason},
                         extra={'spider': spider})
            retryreq = request.copy()
            retryreq.meta['retry_times'] = retries
            retryreq.dont_filter = True
            retryreq.priority = request.priority + self.priority_adjust
            
            if isinstance(reason, Exception):
                reason = global_object_name(reason.__class__)
            
            stats.inc_value('retry/count')
            stats.inc_value('retry/reason_count/%s' % reason)
            return retryreq
        else:
            stats.inc_value('retry/max_reached')
            logger.error("Gave up retrying %(request)s (failed %(retries)d times): %(reason)s",
                         {'request': request, 'retries': retries, 'reason': reason},
                         extra={'spider': spider})
    
    @classmethod
    def from_crawler(cls, crawler):
        """
        init the middleware
        :param crawler:
        :return:
        """
        settings = crawler.settings
        logging_level = settings.get('GERAPY_SELENIUM_LOGGING_LEVEL', GERAPY_SELENIUM_LOGGING_LEVEL)
        logging.getLogger('selenium.webdriver.remote.remote_connection').setLevel(logging_level)
        logging.getLogger('urllib3.connectionpool').setLevel(logging_level)
        
        # init settings
        cls.window_width = settings.get('GERAPY_SELENIUM_WINDOW_WIDTH', GERAPY_SELENIUM_WINDOW_WIDTH)
        cls.window_height = settings.get('GERAPY_SELENIUM_WINDOW_HEIGHT', GERAPY_SELENIUM_WINDOW_HEIGHT)
        cls.headless = settings.get('GERAPY_SELENIUM_HEADLESS', GERAPY_SELENIUM_HEADLESS)
        cls.ignore_https_errors = settings.get('GERAPY_SELENIUM_IGNORE_HTTPS_ERRORS',
                                               GERAPY_SELENIUM_IGNORE_HTTPS_ERRORS)
        cls.executable_path = settings.get('GERAPY_SELENIUM_EXECUTABLE_PATH', GERAPY_SELENIUM_EXECUTABLE_PATH)
        cls.disable_extensions = settings.get('GERAPY_SELENIUM_DISABLE_EXTENSIONS',
                                              GERAPY_SELENIUM_DISABLE_EXTENSIONS)
        cls.hide_scrollbars = settings.get('GERAPY_SELENIUM_HIDE_SCROLLBARS', GERAPY_SELENIUM_HIDE_SCROLLBARS)
        cls.mute_audio = settings.get('GERAPY_SELENIUM_MUTE_AUDIO', GERAPY_SELENIUM_MUTE_AUDIO)
        cls.no_sandbox = settings.get('GERAPY_SELENIUM_NO_SANDBOX', GERAPY_SELENIUM_NO_SANDBOX)
        cls.disable_setuid_sandbox = settings.get('GERAPY_SELENIUM_DISABLE_SETUID_SANDBOX',
                                                  GERAPY_SELENIUM_DISABLE_SETUID_SANDBOX)
        cls.disable_gpu = settings.get('GERAPY_SELENIUM_DISABLE_GPU', GERAPY_SELENIUM_DISABLE_GPU)
        cls.download_timeout = settings.get('GERAPY_SELENIUM_DOWNLOAD_TIMEOUT',
                                            settings.get('DOWNLOAD_TIMEOUT', GERAPY_SELENIUM_DOWNLOAD_TIMEOUT))
        
        cls.screenshot = settings.get('GERAPY_SELENIUM_SCREENSHOT', GERAPY_SELENIUM_SCREENSHOT)
        cls.pretend = settings.get('GERAPY_SELENIUM_PRETEND', GERAPY_SELENIUM_PRETEND)
        cls.sleep = settings.get('GERAPY_SELENIUM_SLEEP', GERAPY_SELENIUM_SLEEP)
        cls.retry_enabled = settings.getbool('RETRY_ENABLED')
        cls.max_retry_times = settings.getint('RETRY_TIMES')
        cls.retry_http_codes = set(int(x) for x in settings.getlist('RETRY_HTTP_CODES'))
        cls.priority_adjust = settings.getint('RETRY_PRIORITY_ADJUST')
        
        return cls()
    
    def _process_request(self, request, spider):
        """
        use pyppeteer to process spider
        :param request:
        :param spider:
        :return:
        """
        print("--------请求成功---------")
        # kwargs = {}
        # options = ChromeOptions()
        # kwargs['options'] = options
        # if self.headless:
        #     options.add_argument('--headless')
        # if self.pretend:
        #     options.add_experimental_option('excludeSwitches', ['enable-automation'])
        #     options.add_experimental_option('useAutomationExtension', False)
        # if self.executable_path:
        #     kwargs['executable_path'] = self.executable_path
        # if self.window_width and self.window_height:
        #     options.add_argument(f'--window-size={self.window_width},{self.window_height}')
        # if self.disable_gpu:
        #     options.add_argument('--disable-gpu')
        # if self.hide_scrollbars:
        #     options.add_argument('--hide-scrollbars')
        # if self.ignore_https_errors:
        #     options.add_argument('--ignore-certificate-errors')
        # if self.disable_extensions:
        #     options.add_argument('--disable-extensions')
        # if self.mute_audio:
        #     options.add_argument('--mute-audio')
        # if self.no_sandbox:
        #     options.add_argument('--no-sandbox')
        # if self.disable_setuid_sandbox:
        #     options.add_argument('--disable-setuid-sandbox')
        
        # # get selenium meta
        # selenium_meta = request.meta.get('selenium') or {}
        # logger.debug('selenium_meta %s', selenium_meta)
        
        # # set proxy
        # _proxy = request.meta.get('proxy')
        # if selenium_meta.get('proxy') is not None:
        #     _proxy = selenium_meta.get('proxy')
        # if _proxy:
        #     options.add_argument('--proxy-server=' + _proxy)
        
        # browser = webdriver.Chrome(**kwargs)
        # browser.set_window_size(self.window_width, self.window_height)
        
        # # pretend as normal browser
        # _pretend = self.pretend
        # if selenium_meta.get('pretend') is not None:
        #     _pretend = selenium_meta.get('pretend')
        # if _pretend:
        #     for script in PRETEND_SCRIPTS:
        #         browser.execute_cdp_cmd('Page.addScriptToEvaluateOnNewDocument', {
        #             'source': script
        #         })
        
        # _timeout = self.download_timeout
        # if selenium_meta.get('timeout') is not None:
        #     _timeout = selenium_meta.get('timeout')
        # browser.set_page_load_timeout(_timeout)
        
        # try:
        #     browser.get(request.url)
        # except TimeoutException:
        #     browser.close()
        #     return self._retry(request, 504, spider)
        
        # # set cookies
        # parse_result = urllib.parse.urlsplit(request.url)
        # domain = parse_result.hostname
        # _cookies = []
        # if isinstance(request.cookies, dict):
        #     _cookies = [{'name': k, 'value': v, 'domain': domain}
        #                 for k, v in request.cookies.items()]
        # else:
        #     for _cookie in _cookies:
        #         if isinstance(_cookie, dict) and 'domain' not in _cookie.keys():
        #             _cookie['domain'] = domain
        # for _cookie in _cookies:
        #     browser.add_cookie(_cookie)
        # if _cookies:
        #     browser.refresh()
        
        # # wait for dom loaded
        # if selenium_meta.get('wait_for'):
        #     _wait_for = selenium_meta.get('wait_for')
        #     try:
        #         logger.debug('waiting for %s', _wait_for)
        #         WebDriverWait(browser, _timeout).until(
        #             EC.presence_of_element_located((By.CSS_SELECTOR, _wait_for))
        #         )
        #     except TimeoutException:
        #         logger.error('error waiting for %s of %s', _wait_for, request.url)
        #         browser.close()
        #         return self._retry(request, 504, spider)
        
        # # evaluate script
        # if selenium_meta.get('script'):
        #     _script = selenium_meta.get('script')
        #     logger.debug('evaluating %s', _script)
        #     browser.execute(_script)
        
        # # sleep
        # _sleep = self.sleep
        # if selenium_meta.get('sleep') is not None:
        #     _sleep = selenium_meta.get('sleep')
        # if _sleep is not None:
        #     logger.debug('sleep for %ss', _sleep)
        #     time.sleep(_sleep)
        
        # body = browser.page_source
        
        # # screenshot
        # _screenshot = self.screenshot
        # if selenium_meta.get('screenshot') is not None:
        #     _screenshot = selenium_meta.get('screenshot')
        # screenshot_result = None
        # if _screenshot is not None:
        #     logger.debug('taking screenshot using args %s', _screenshot)
        #     if 'selector' in _screenshot:
        #         screenshot_result = browser.find_element_by_css_selector(_screenshot['selector']).screenshot_as_png
        #     elif 'xpath' in _screenshot:
        #         screenshot_result = browser.find_element_by_xpath(_screenshot['xpath']).screenshot_as_png
        #     else:
        #         screenshot_result = browser.get_screenshot_as_png()
        #     if isinstance(screenshot_result, bytes):
        #         screenshot_result = BytesIO(screenshot_result)
        
        # # close page and browser
        # logger.debug('close selenium')
        # browser.close()
        body="<12341234123412314>"
        response = HtmlResponse(
            request.url,
            status=200,
            body=body,
            encoding='utf-8',
            request=request
        )
        # if screenshot_result:
        #     response.meta['screenshot'] = screenshot_result
        return response
    
    def process_request(self, request, spider):
        """
        process request using pyppeteer
        :param request:
        :param spider:
        :return:
        """
        logger.debug('processing request %s', request)
        return deferToThread(self._process_request, request, spider)
        # return self._process_request(request, spider)
    
    def _spider_closed(self):
        pass
    
    def spider_closed(self):
        """
        callback when spider closed
        :return:
        """
        return deferToThread(self._spider_closed)