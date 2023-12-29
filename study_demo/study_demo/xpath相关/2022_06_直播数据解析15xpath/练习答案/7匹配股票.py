from lxml import etree

tree = etree.HTML(open('../素材/股票.html', 'r').read())

# 匹配tr
# 过滤掉首行和最后一行不规律的数据
td = tree.xpath('//table[@class="trHover" and @id="table1"]//tr')[1:-1]
# 循坏获取到每一个tr
for d in td:
    # 在进行td匹配处理
    print(d.xpath('./td//text()'))
