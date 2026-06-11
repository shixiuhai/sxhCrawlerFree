from selenium_log import get_logging
from selenium_chrome import SeleniumChrome
import urllib.parse
import random
import time
import hashlib
"""
1. 实现chrome自动化操作的driver池
2. 可以实现多平台账号混合认证
"""
log=get_logging()
class SeleniumChromeExpand:
    def __init__(self) -> None:
        self.verifiedDriverDict={} # 已认证的driver对象字典{"taobao":{"abcde":driver1,"adf":driver2},"tmmao":{"abcde":driver1,"adf":driver2}}
        self.verifiedDriverDictStatus={} # 已认证的dirver对象状态字典{"taobao":{"abcde":1,"adf":0,"tmmao":{"abcde":1,"adf":0}]} # 1 表示使用中 0表示尚未使用
    
    # 生成driver对象id
    def generate_driver_id(self):
        m2 = hashlib.md5()
        m2.update(str(time.time()).encode('utf-8'))
        return m2.hexdigest()[8:-8]
    
    # 通过cookies实现登录认证
    def auth_account_by_cookies(self,initUrl:str,cookiesDomain:str,cookies:dict,platformName:str)->None:
        seleniumChrome=SeleniumChrome() # 初始化基础SeleniumChrome参数
        seleniumChrome.init_chrome_web_driver() # 初始化SeleniumChrome对象
        chromeDriver=seleniumChrome.get_chrome_web_driver() # 获取窗口对象
        chromeDriver.get(initUrl) # 访问初始化url
        # 添加cookies到浏览器
        for cookiesItem in self.dicCookies_to_browserCookies(cookiesDomain,cookies):
            chromeDriver.add_cookie(cookiesItem)
        
        chromeDriver.refresh() # 添加cookies完成后刷新网页，将cookies刷入到浏览器
        time.sleep(5) # 延迟5秒刷入cookies
        
        driverId=self.generate_driver_id()
        if platformName in self.verifiedDriverDict:
            self.verifiedDriverDict[platformName]={}
            # 添加到已认证的driver对象字典和对象字典状态中
            self.verifiedDriverDict[platformName][driverId]=chromeDriver # 添加driver
            self.verifiedDriverDictStatus[platformName][driverId]=1 # 添加driver状态
            return

        # 添加到已认证的driver对象字典和对象字典状态中
        self.verifiedDriverDict[platformName][driverId]=chromeDriver # 添加driver
        self.verifiedDriverDictStatus[platformName][driverId]=1 # 添加driver状态
        return 
        
    # 将字典cookies转换为浏览器cookies
    def dicCookies_to_browserCookies(self,cookiesDomain:str, cookies: dict) -> list:
        # parse_result = urllib.parse.urlsplit(initUrl)
        # domain = parse_result.hostname
        cookiesBrowserList = []
        for key in cookies:
            cookiesBrowserList.append({
                "domain": cookiesDomain,
                "name": key,
                "value": cookies[key]
            })
        return cookiesBrowserList
    
    # 统计driver窗口数量 默认查看所有driver数量 1表示可用driver数量,0表示不可用driver数量
    def get_driver_number(self,platformName:str,status:str=None)->dict:
        status=int(status)
        if status==1 or status==0:
            count=0
            platformverifiedDriverDictStatus=self.verifiedDriverDictStatus[platformName]
            for veVerifiedDriverId in platformverifiedDriverDictStatus:
                if platformverifiedDriverDictStatus[veVerifiedDriverId]==1:
                    count=count+1
                elif platformverifiedDriverDictStatus[veVerifiedDriverId]==0:
                    count=count+1
            return count
            
        platformVerifiedDriverDict=self.verifiedDriverDict[platformName]
        return len(platformVerifiedDriverDict)
    
    # 随机获取已经登录完成的driver
    def get_random_driver(self,platformName:str)->tuple:
        # 可使用的driver
        activateVerifiedDriverDict={}
        platformverifiedDriverDictStatus=self.verifiedDriverDictStatus[platformName]
        for veVerifiedDriverId in platformverifiedDriverDictStatus:
            if platformverifiedDriverDictStatus[veVerifiedDriverId]==1:
                activateVerifiedDriverDict[veVerifiedDriverId]=self.verifiedDriverDict[veVerifiedDriverId]
        randomActivateDriverId=random.choice(list(activateVerifiedDriverDict.keys()))
        # 返回driver列表中的key和driver可用对象
        return platformName,randomActivateDriverId,activateVerifiedDriverDict[randomActivateDriverId]
    
    # 通过platformName和driverId进行访问url
    def get_page_source_by_platformName_driverId(self,url:str,platformName:str,driverId:str)->str:
        # 设置页面滚动，防止页面没有加载出来导致没有数据返回
        driver=random.choice(self.verifiedDriverDict[platformName][driverId])
        driver.get(url)
        # 页面滚动可以设置为一个快速的过程
        for i in range(10):
            driver.execute_script(f'document.documentElement.scrollTop={(i + 1) * 1000}')
            time.sleep(0.1)
        return driver.execute_script("return document.documentElement.outerHTML")
    
    # 随机选用可用的driver进行访问网页
    def get_page_source_by_randomActivateDriver(self,platformName:str,url:str):
        pass

    
    # 通过platformName和driverId
if __name__ == "__main__":
    s=SeleniumChromeExpand()
    cookies={'isg': 'BPv7gO1OG8k1Zyd9EThONwWLit9lUA9S2iCxFu241_oRTBsudSCfohkOYuwC7GdK', '_m_h5_tk_enc': 'f678d69473400c9312552966903949f5', '_m_h5_tk': '05a9d4481395f147af81f17a861c6bfa_1691086156833', 'tfstk': 'ddCW2XqNH0mSDAAXXYaVhc3yKEAQbgNww2TdSwhrJQd8RMsOVpJpY8jBdMSDp_RPzi1CbiahUpR8RMsOVpzKU3AIdG-VYX7POtcCSwfzrBzkZaAH9lra_l7lrBA0ilPwQYjDIBEab5PNraAH96RcjIWrg0it1R73cjhj65OQb13rsffXykxOPnTDosTWFhpvcO7t_h1gHvgXIXLXbrajKvclrtYN.', 'l': 'fBE6DCAnNeDJfUl0BOfwPurza77OSIRAguPzaNbMi9fPO01B5OZPW1OiZo86C3GVFsCyR3SebziDBeYBq7F-nxvtOFj_flMmndLHR35..', 'mt': 'ci=54_1', 'cookie17': 'UNQyQxMqUdx1nQ%3D%3D', 'cookie1': 'U%2BGWz3AsFiX%2BQb4KVw17j51DAUP9jxfiN9Dd%2FomAUJ8%3D', 'uc1': 'cookie16=WqG3DMC9UpAPBHGz5QBErFxlCA%3D%3D&existShop=false&pas=0&cookie15=Vq8l%2BKCLz3%2F65A%3D%3D&cookie21=V32FPkk%2FgihF%2FS5nr3O5&cookie14=Uoe9bFpXw43sDw%3D%3D', '_samesite_flag_': 'true', '_nk_': 'tb80111606', 'uc3': 'id2=UNQyQxMqUdx1nQ%3D%3D&lg2=VT5L2FSpMGV7TQ%3D%3D&vt3=F8dCsGCn87JSbckx64Q%3D&nk2=F5RNZTse5XZpwA%3D%3D', 'sg': '641', '_l_g_': 'Ug%3D%3D', 'cookie2': '169c8435204f2f1befafb9ff84834a27', 'uc4': 'id4=0%40UgP5GPE5h%2FvopPV87sjyaYfW7K44&nk4=0%40FY4GsvRHfRNKE%2BdeKAjEm5NqMLfA', 'tracknick': 'tb80111606', 'thw': 'cn', 'existShop': 'MTY5MTA3Nzg3Mw%3D%3D', 'skt': '606e61bdd0ff8b49', '_cc_': 'VFC%2FuZ9ajQ%3D%3D', 'lgc': 'tb80111606', 'dnk': 'tb80111606', 'sgcookie': 'E100kOXlGuDpsurCec3N%2BHjiDN7IKuA1p1%2BQHy%2FAZqbGIZAUP2VdRVx3dd0C%2BBdJSWi%2Byv%2FyrWcGouIZCrcx%2F9e0x4hD1Bub7dw7k7wGNI9GI40QAoxRDAeEPnfcy0S3pEfX', 'csg': 'bfcfb763', 'xlly_s': '1', 'cancelledSubSites': 'empty', 't': '49a8d7a7bf1d36b2713230fa8911f3ab', 'unb': '3451510054', 'cna': '0LpSHSktQzYBASQJiihX/nS/', '_tb_token_': 'eb75e5e6e133b'}
    s.auth_account_by_cookies("https://www.taobao.com",".taobao.com",cookies,"taobao")
    # s.add_cookies_to_drvierList("https://www.taobao.com",".taobao.com",cookie1,'taobao')
    print(s.get_page_source())
    
    # for driver in s.driverList:
    #     driver.get("https://item.taobao.com/item.htm?spm=a211oj.24780012.3690372280.ditem0.547936dcfWdOb1&id=705971803306&utparam=%7B%22ald_res%22%3A%2228320006%22%2C%22ald_solution%22%3A%22SmartHorseRace%22%2C%22ald_biz%22%3A1234%2C%22ump_item_price%22%3A%22739%22%2C%22traceId%22%3A%22215045fe16910775649214755eefdd%22%2C%22ald_st%22%3A%221691077565117%22%2C%22item_price%22%3A%22739%22%2C%22ald_price_field%22%3A%22itemActPrice%22%2C%22ump_invoke%22%3A%222%22%2C%22ump_sku_id%22%3A%225137414111230%22%2C%22ump_price_stage%22%3A%220%22%7D")
    #     import time
    #     time.sleep(30)