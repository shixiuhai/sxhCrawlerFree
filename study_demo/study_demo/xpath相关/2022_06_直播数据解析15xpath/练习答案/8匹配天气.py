from lxml import etree
tree = etree.HTML(open('../素材/匹配天气.html').read())

# 通过查看发现，所有天气都存在于table表格中 并且是多个table标签都一样  所以我们可以把xpath写成这样

table = tree.xpath('//table')
# print(table)
for t in table:
    tr = t.xpath('./tr')[2:]
    for r in tr:
        print(r.xpath('./td//text()'))
