with open("taobao_cookies.json","r") as f:
    sourceCookiesList=eval(f.read())
    b={}
    for cookieDict in sourceCookiesList:
        b[cookieDict["name"]]=cookieDict["value"]

    print(b)
    