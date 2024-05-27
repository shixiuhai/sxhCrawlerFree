from airtest.core.api import *
from poco.drivers.android.uiautomation import AndroidUiautomationPoco
from adbutils import adb
from multiprocessing import Process


class Controller(object):

    def __init__(self, device_uri, package_name, apk_path,  need_reinstall=False, need_restart=False):
        self.device_uri = device_uri
        self.package_name = package_name
        self.apk_path = apk_path
        self.need_reintall = need_reinstall
        self.need_restart = need_restart

    def connect_device(self):
        self.device = connect_device(self.device_uri)

    def install_app(self):
        if self.device.check_app(self.package_name) and not self.need_reintall:
            return
        self.device.uninstall_app(self.package_name)
        self.device.install_app(self.apk_path)

    def start_app(self):
        if self.need_restart:
            self.device.stop_app(self.package_name)
        self.device.start_app(self.package_name)

    def init_device(self):
        self.connect_device()
        self.poco = AndroidUiautomationPoco(self.device)
        self.window_width, self.window_height = self.poco.get_screen_size()
        # self.install_app()
        self.start_app()

    def scroll_up(self):
        self.device.swipe((self.window_width * 0.5, self.window_height * 0.8),
                          (self.window_width * 0.5, self.window_height * 0.3), duration=1)

    def run(self):
        for _ in range(10):
            self.scroll_up()


PACKAGE_NAME = 'com.xunmeng.pinduoduo'
APK_PATH = 'xxx.apk'


def run(device_uri):
    
    controller = Controller(device_uri=device_uri,
                            package_name=PACKAGE_NAME,
                            apk_path=APK_PATH,
                            need_reinstall=False,
                            need_restart=True)
    controller.init_device()
    controller.run()


if __name__ == '__main__':
    
    # adb.connect("101.66.161.3:10028")
    # print(adb.device_list())
    # adb=adbutils.AdbConnection(host="101.66.161.3",port=10028)
    
    # adb.device().serial
    # for info in adb.list():
    #     print(info.serial, info.state)
    device_uri = 'Android://101.66.161.3:10028'
    run(device_uri)
    
    