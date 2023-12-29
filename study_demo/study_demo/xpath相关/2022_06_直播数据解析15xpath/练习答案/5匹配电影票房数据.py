from lxml import etree

html_tree = etree.HTML(open('../素材/2019 中国票房 _ 中国电影票房榜.html', 'r').read())

# 匹配 编号  年份  名称  票房
res = html_tree.xpath('//table/tbody/tr')
# print(res)
for i in res[1:]:
    # 编号
    # con = i.xpath('./td[1]/text()')
    con = i.xpath('./td/text()')
    print(con)
    # print(etree.tostring(i, encoding='UTF-8').decode('utf-8'))