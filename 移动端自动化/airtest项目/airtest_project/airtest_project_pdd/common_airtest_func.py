# -*- encoding=utf8 -*-
__author__ = "15256"
from airtest.core.api import *
from airtest.core.android import Android
import logging
init_device()
logging.getLogger("airtest").setLevel(logging.WARNING)

device: Android = init_device('Android')

is_lock = device.is_locked()
print(f"is_locker: {is_lock}")

if is_lock:
    device.unlock()

# device.wake()

app_list = device.list_app()
print(f"app list {app_list}")
for app_item in app_list:
    if "duoduo" in app_item:
        print(app_item)

uuid = device.uuid
print(f"uuid {uuid}")

display_info = device.get_display_info()
print(f"display info {display_info}")

resolution = device.get_render_resolution()
print(f"resolution {resolution}")

ip_address = device.get_ip_address()
print(f"ip address {ip_address}")

top_activity = device.get_top_activity()
print(f"top activity {top_activity}")

is_keyboard_show = device.is_keyboard_shown()
print(f"is keyboard shown {is_keyboard_show}")

