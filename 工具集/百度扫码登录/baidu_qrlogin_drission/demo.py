
# 导出cookies 使用 EditThisCookie，模式使用name=value，导出格式选择JSON格式。
# 导出的cookies最后需要拼接 domain=.baidu.com;
# BDDUS是必须的

from DrissionPage import ChromiumPage, ChromiumOptions
from DrissionPage import SessionOptions
# 使用无头模式
# co1 = ChromiumOptions().headless().set_local_port(9224).set_user_data_path('ceshi')
co1 = ChromiumOptions().set_local_port(9224).set_user_data_path('ceshi_baidu')
co1.add_extension(r'extension\BHCHDCEJHOHFMIGJAFBAMPOGMAANBFKG_0_6_2_0')

# co2 = ChromiumOptions().set_local_port(9333).set_user_data_path('data2')
page1 = ChromiumPage(co1)
# 需要完整的cookies信息，否则无法登录
# cookies = "REDACTED_COOKIE"

# cookies = 'aYvbKxpumvM=;domain=.baidu.com'
cookies = 'REDACTED_COOKIE'
page1.set.cookies(cookies) # 设置cookie
page1.get('https://pan.baidu.com')
page1.refresh() # 刷新页面
page1.ele('#qrcodeLogin-sure').click()
# page1.quit() # 退出浏览器   
