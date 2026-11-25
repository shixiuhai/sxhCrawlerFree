import requests
import re
import base64
import urllib.parse
import hashlib
import time
class HuYa:
    def __init__(self) -> None:
        pass
    def live(self,e):
        e=str(e)
        i, b = e.split('?')
        r = i.split('/')
        s = re.sub(r'.(flv|m3u8)', '', r[-1])
        c = b.split('&', 3)
        c = [i for i in c if i != '']
        n = {i.split('=')[0]: i.split('=')[1] for i in c}
        fm = urllib.parse.unquote(n['fm'])
        u = base64.b64decode(fm).decode('utf-8')
        p = u.split('_')[0]
        # f = str(int(time.time() * 1e7/1000))
        l = n['wsTime']
        # t = '0'
        # h = '_'.join([p, t, s, f, l])
        # m = hashlib.md5(h.encode('utf-8')).hexdigest()
        m =hashlib.md5(fm.encode('utf-8')).hexdigest()
        # y = c[-1]
        # url = "{}?wsSecret={}&wsTime={}&u={}&seqid={}&{}".format(i, m, l, t, f, y)
        # uid=119963387574+
        uid=1199633875738
        seqid=(uid+int(time.time())*1000)
        
        url="{}?wsSecret={}&wsTime={}&seqid={}&ctype=tars_mobile&vfer=1&fs=bgct&t=103&ratio=2000&uid={}&t=103".format(i,m,l,seqid,uid)
        return url
    
    def get_real_url(self,rid:str)->dict:
        try:
            room_url = 'https://m.huya.com/' + str(rid)
            header = {
                'Content-Type': 'application/x-www-form-urlencoded',
                'User-Agent': 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) '
                            'Chrome/75.0.3770.100 Mobile Safari/537.36 '
            }
            response = requests.get(url=room_url, headers=header).text
            liveLineUrl = re.findall(r'"liveLineUrl":"([\s\S]*?)",', response)[0]
            print(liveLineUrl)
            liveline = base64.b64decode(liveLineUrl).decode('utf-8')
            if liveline:
                if 'replay' in liveline:
                    return '直播录像：' + liveline
                else:
                    liveline = self.live(liveline)
                    real_url = ("https:" + liveline).replace("hls", "flv").replace("m3u8", "flv")
            else:
                real_url = '未开播或直播间不存在'
        except:
            real_url = '未开播或直播间不存在'
        return real_url
    
if __name__=='__main__':
    huYa=HuYa()
    print(huYa.get_real_url('132865'))
    # https://txdirect.flv.huya.com/huyalive/1199631088389-1199631088389-5734695330675425280-2399262300234-10057-A-0-1.flv?wsSecret=fc1f19d7c7477c39fa177b8f8434415c&wsTime=64d214e9&                                               seqid=2891036992738&ctype=tars_mobile&vfer=1&fs=bgct&t=103&ratio=2000&uid=1199633875738&t=103
    # https://60e4d1b25df21283c04fd8078874fc34.v.smtcdns.net/txdirect.flv.huya.com/huyalive/1199631088389-1199631088389-5734695330675425280-2399262300234-10057-A-0-1.flv?wsSecret=fa86c4552f57bc3ca8a3e81d9e0843e8&wsTime=64d213ad&seqid=2891036675203&ctype=tars_mobile&ver=1&fs=bgct&t=103&ratio=2000&uid=1199633875738&uuid=2640087425&sv=2110211124&TxLiveCode=cold_stream&svr_type=live_oc&tencent_test_client_ip=111.2.91.38&dispatch_from=OC_MGR39.173.66.27&utime=1691402798860

    # https://txdirect.flv.huya.com/huyalive/1199631088389-1199631088389-5734695330675425280-2399262300234-10057-A-0-1.flv?wsSecret=fc1f19d7c7477c39fa177b8f8434415c&wsTime=64d212be&seqid=289103645173&ctype=tars_mobile&ver=1&fs=bgct&t=103&ratio=2000&uid=119963387573&t=103
    # https://txdirect.flv.huya.com/huyalive/1199631088389-1199631088389-5734695330675425280-2399262300234-10057-A-0-1.flv?wsSecret=083d072581a6503568b54cc58e91cc26&wsTime=64d20b77&seqid=2891034572666&ctype=tars_mobile&ver=1&fs=bgct&t=103&ratio=2000&uid=119963387573&t=103

