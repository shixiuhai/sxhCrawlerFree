import requests

cookies = {
    'Admin-Token': 'eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VyX2tleSI6IjU2NDUxODZjLTE0OWItNDBlOC05YWZjLTM0YTQ2YTcyY2QzNCIsInVzZXJuYW1lIjoiYWRtaW4ifQ._W8WNmTrHHd5SkYrasAi1uArQ-geTiDbZ3zjFcbjlEiIR1T-3-O4K3xfCtpsXGaIlGgmg3OrURK7PoZ2Mil3Vw',
    'Admin-Expires-In': '720',
    'JSESSIONID': '16974A1D07B9BCC1F959A484CC960921',
    'sidebarStatus': '0',
}

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
    'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VyX2tleSI6IjI1MGIwMGIyLWFhMjYtNDBkYi1iN2M0LTdiMzI4NmI2MDcxMSIsInVzZXJuYW1lIjoiYWRtaW4ifQ.9HxG_pR8JslzmXMu2rb5ZpFUPwBsls5IlsNbht00pvmarRvaTJlwp1X_gjxqhssMdVlQ4AspU4a-eDURzPE-Hg',
    'Connection': 'keep-alive',
    # 'Cookie': 'Admin-Token=eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VyX2tleSI6IjU2NDUxODZjLTE0OWItNDBlOC05YWZjLTM0YTQ2YTcyY2QzNCIsInVzZXJuYW1lIjoiYWRtaW4ifQ._W8WNmTrHHd5SkYrasAi1uArQ-geTiDbZ3zjFcbjlEiIR1T-3-O4K3xfCtpsXGaIlGgmg3OrURK7PoZ2Mil3Vw; Admin-Expires-In=720; JSESSIONID=16974A1D07B9BCC1F959A484CC960921; sidebarStatus=0',
    'Referer': 'http://localhost/system/role',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 Edg/124.0.0.0',
    'sec-ch-ua': '"Chromium";v="124", "Microsoft Edge";v="124", "Not-A.Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

params = {
    'pageNum': '1',
    'pageSize': '10',
}

response = requests.get('http://localhost/dev-api/system/role/list', params=params, cookies=cookies, headers=headers)
print(response.json())