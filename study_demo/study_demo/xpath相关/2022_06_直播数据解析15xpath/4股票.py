from lxml import etree

tree = etree.HTML(open('./素材/股票.html', encoding='UTF-8').read())
# 开始匹配
# 匹配到table中的行tr
tr = tree.xpath('//*[@id="table1"]//tr')[1:-1]
for i in tr:
    # 循环tr 拿到每一个tr
    print(i.xpath('./td//text()'))