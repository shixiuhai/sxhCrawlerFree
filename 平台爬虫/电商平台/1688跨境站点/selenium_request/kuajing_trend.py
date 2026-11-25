import requests

headers = {
    'authority': 'gm.mmstat.com',
    'accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    # 'cookie': 'cna=su2QHDAXHR4BASQJiijj0y+z; cnaui=3451510054; aui=3451510054; cdpid=UNQyQxMqUdx1nQ%253D%253D; sca=132e616a; tbsa=e1379f0bc68cedb1d5c30fa3_1679058298_2; atpsida=eddccdb61004883e3c6996df_1679062367_1',
    'referer': 'https://kj.1688.com/',
    'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'image',
    'sec-fetch-mode': 'no-cors',
    'sec-fetch-site': 'cross-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
}

params = {
    'gmkey': 'CLK',
    'gokey': 'offer_id=702470744280&_g_et=mousedown&autosend=1&uidaplus=3451510054&jsver=aplus_std&lver=8.15.21&pver=0.7.12&cache=9302fe1&page_cna=su2QHDAXHR4BASQJiijj0y+z&_slog=0',
    'cna': 'su2QHDAXHR4BASQJiijj0y+z',
    '_p_url': 'https://kj.1688.com/pdt_ranks.html?spm=a2637j.22917583.klqcb4lu.3.1d967026Upw0Xt',
    'spm-cnt': 'a262or.11066112.0.0.592d3722SMa7Ts',
    'spm-pre': 'a2637j.22917583.klqcb4lu.3.1d967026Upw0Xt',
    '_gr_uid_': '3451510054',
    'uidaplus': '3451510054',
    'logtype': '2',
}

response = requests.get(
    'https://gm.mmstat.com/1688kj.kj-pdt.rank-trend-clk.a262or.11066112.rankhot.dolip1trd1',
    params=params,
    headers=headers,
)