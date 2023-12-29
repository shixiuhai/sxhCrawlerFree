from lxml import etree

html_tree = etree.HTML(open('../素材/豆瓣.html', 'r').read())

# 需求：抓取图书图片，标题，简介

# 抓取虚构类中的
# 抓取到当前图书的li
res = html_tree.xpath('//ul[@class="cover-col-4 clearfix"]/li')
# 匹配图片
# img = res[0].xpath('./a/img')  # 图片
# img = res[0].xpath('./a/img/@src')  # src地址

# 匹配标题
# title = res[0].xpath('./div/h2/a/text()')

# 匹配简介
introduction = res[-1].xpath('./div/p[@class="color-gray"]/text() | ./div/p[@class="detail"]/text()')
introduction = ''.join(introduction).strip()

# 非虚构类的
res = html_tree.xpath('//ul[@class="cover-col-4 pl20 clearfix"]/li')
# 匹配图片
img = res[0].xpath('./a/img')  # 图片
# img = res[0].xpath('./a/img/@src')  # src地址
# print(etree.tostring(img[0], encoding='UTF-8').decode('UTF-8'))


# 获取虚构类与非虚构类的
res = html_tree.xpath('//ul[@class="cover-col-4 clearfix"]/li | //ul[@class="cover-col-4 pl20 clearfix"]/li')
for i in res:
    # 匹配图片
    # img = res[0].xpath('./a/img')  # 图片
    img = i.xpath('./a/img/@src')  # src地址
    # 匹配标题
    title = i.xpath('./div/h2/a/text()')
    # 匹配简介
    introduction = i.xpath('./div/p[@class="color-gray"]/text() | ./div/p[@class="detail"]/text()')
    introduction = ''.join(introduction).strip()
    print(img, title, introduction)