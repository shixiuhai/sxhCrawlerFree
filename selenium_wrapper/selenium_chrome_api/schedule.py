import random
import time
from selenium_log import get_logging
log=get_logging()


import multiprocessing
from cookies_process import cookies_generator  as generators
from cookies_process import cookies_test  as testers
from cookies_process.cookies_api import Server
from setting import GENERATOR_MAP,TESTER_MAP
class Scheduler(object):
    def __init__(self) -> None:
        pass
    
    # 启动测试任务
    def run_test(self,website:str):
        taster=getattr(testers,TESTER_MAP[website])(website)
        loop=0
        while True:
            log.info(f"测试cookies是否有效次数{loop}")
            taster.run()
            loop += 1
            time.sleep(random.randint(2,4))
            
    # 启动cookies生成任务
    def run_generator(self,website:str):
        generator=getattr(generators,GENERATOR_MAP[website])(website)
        loop=0
        while True:
            log.info(f"生成cookies循环次数{loop}")
            generator.run()
            loop += 1
            time.sleep(random.randint(2,4))
            
    # 启动flask服务器
    def run_server(self,_):
        server=Server()
        server.run()
    
    # 主进程启动
    def run(self,website:str):
        try:
            log.info("{} cookies池开始启动".format(website))
            # 创建进程
            testProcess=multiprocessing.Process(target=self.run_test,args=(website,))
            generatorProcess=multiprocessing.Process(target=self.run_generator,args=(website,))
            serverProcess=multiprocessing.Process(target=self.run_server,args=(website,))
            
            # 进程启动
            testProcess.start()
            generatorProcess.start()
            serverProcess.start()
            log.info("{} cookies池完成启动".format(website))
        
        except KeyboardInterrupt:
            testProcess.terminate()
            generatorProcess.terminate()
            serverProcess.terminate()
            log.error("{} cookies池关闭启动".format(website))
        
        finally:
            # 加入join
            testProcess.join()
            generatorProcess.join()
            serverProcess.join()
        
if __name__ == "__main__":
    pass
    # app.run()
    # tBLogin=getattr(login,GENERATOR_MAP['taobao'])()
    # tBLogin.login("15256728901","sxh.200008")