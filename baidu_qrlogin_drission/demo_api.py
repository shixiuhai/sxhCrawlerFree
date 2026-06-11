
# 导出cookies 使用 EditThisCookie，模式使用name=value，导出格式选择JSON格式。
# 导出的cookies最后需要拼接 domain=.baidu.com;
# BDDUS是必须的
from flask import Flask,request,jsonify
from DrissionPage import ChromiumPage, ChromiumOptions
# co1 = ChromiumOptions().headless().set_local_port(9224).set_user_data_path('ceshi')
co1 = ChromiumOptions().set_local_port(9224).set_user_data_path('ceshi_baidu')
co1.add_extension(r'extension\BHCHDCEJHOHFMIGJAFBAMPOGMAANBFKG_0_6_2_0')
app = Flask(__name__)
@app.route('/login', methods=['POST'])
def login_baidu():
    page1 = ChromiumPage(co1)
    cookies = request.form.get('cookies', None) # 导出的cookies
    login_url = request.form.get('loginUrl', None) # 登录二维码地址
    if cookies and login_url:
        cookies = str(cookies)+';domain=.baidu.com'
        page1.set.cookies(cookies) # 设置cookie
        page1.get(login_url)
        page1.refresh() # 刷新页面
        page1.ele('#qrcodeLogin-sure').click()
        page1.quit() # 退出浏览器
        return jsonify({'message': 'success',"status": 200})
    else:
        return jsonify({'message': 'error',"status": 400}) 

if __name__ == '__main__':
    app.run(debug=True,port=5000)
