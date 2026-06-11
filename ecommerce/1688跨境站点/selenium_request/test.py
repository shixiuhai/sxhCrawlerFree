import requests
headers={
    'user-agent':"'mozilla/5.0 (windows nt 10.0; win64; x64) applewebkit/537.36 (khtml, like gecko) chrome/111.0.0.0 safari/537.36'",
    'cookies':'ali_ab=111.2.91.38.1678161716466.4; cna=AbGRHJxN6koCAW8CWyaOFU9H; lid=tb80111606; last_mid=b2b-345151005463a30; __last_loginid__=tb80111606; is_identity=buyer; aliwwLastNum=0; aliwwLastRefresh=1678953729515; t=52bc5c276688e72126801bd9a41c4cc4; _tb_token_=fe76e5ee767a5; __cn_logon__=false; xlly_s=1; __mwb_logon_id__=undefined; mwb=ng; _bl_uid=m0lL0fdjhbgkj176tbL3lg26ywL0; _csrf_token=1679361045356; alicnweb=touch_tb_at%3D1679375887948%7Clastlogonid%3Dtb80111606; _m_h5_tk=8078ca4873e9451464851b2c3aeacd75_1679384935913; _m_h5_tk_enc=11b41d29eb383418ec4eee694335bd49; tfstk=cELfBRtoP-2jh93gotGyPDrB_cBhahn5wm6yGxzwpuM4wXAPesm389Mlzh2571C5.; isg=BG9vGmxaV_8MF1PcxNrpUC-d_oN5FMM2BHmEDIH9O1750IvSi-BEhvvCVsBuqJuu; l=fBQjVxA4NjmdJj09KO5a-urza77TVIOfGsPzaNbMiIEGa6MljCgeBNCsCRh2KdtjgT50aexr24w81dE9PrULRxssMFXarOKCGMJwSeM3N7AN.'
}

resp=requests.get(url="https://detail.1688.com/offer/699297425649.html",headers=headers)
with open("out.html","w",encoding="utf-8") as f:
    f.write(resp.text)
    
