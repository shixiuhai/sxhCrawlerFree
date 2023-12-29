from lxml import etree
tree = etree.HTML(open('../素材/大学排名.html').read())
# 分开写法
# 先匹配table
table = tree.xpath('//table[@class="sticky-enabled tableheader-processed sticky-table"]')[0]
# 在匹配tr
tr = table.xpath('.//tr')
for r in tr:
    print(r.xpath('./td//text()'))

# 组合写法
table = tree.xpath('//table[@class="sticky-enabled tableheader-processed sticky-table"]//tr')
for r in table:
    print(r.xpath('./td//text()'))