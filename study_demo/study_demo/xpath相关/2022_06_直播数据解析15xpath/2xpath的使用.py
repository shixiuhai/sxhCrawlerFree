from lxml import etree
tree = etree.HTML(open('./素材/豆瓣.html', 'r', encoding='UTF-8').read())
# print(tree)
# 匹配所有的a
# // 代表无论在HTML文档中的哪个位置 都匹配
# all_a = tree.xpath('//a')
# 使用tostring将节点对象转换为标签
# print(etree.tostring(all_a[0], encoding='UTF-8').decode('UTF-8'))
# print(etree.tostring(all_a[1], encoding='UTF-8').decode('UTF-8'))

# 获取第一个a标签中的文本内容
# 根据第一个节点a 在接着往下进行匹配
# print(all_a[0].xpath('./text()'))


# all_a = tree.xpath('//a')
# all_a = tree.xpath('/html/body/div/div/div/a/text()')
# xpath里从第一个开始
# 取第一个div里面的超链接的文本内容
# all_a = tree.xpath('/html/body/div/div/div[1]/a/text()')
# print(all_a)

# 匹配虚构类的ul
# ul = tree.xpath('//ul[@class="cover-col-4 clearfix"]')
# print(etree.tostring(ul[0], encoding='UTF-8').decode('UTF-8'))
# 获取第一个li
# ul = tree.xpath('//ul[@class="cover-col-4 clearfix"]/li')
# print(ul[0])

# ul = tree.xpath('//ul[@class="cover-col-4 clearfix"]/li[1]')
# ul = tree.xpath('//ul[@class="cover-col-4 clearfix"]/li[1]//text()')
# 获取第二个li的所有文本
# ul = tree.xpath('//ul[@class="cover-col-4 clearfix"]/li[2]//text()')
# 获取最后一个
# ul = tree.xpath('//ul[@class="cover-col-4 clearfix"]/li[last()]//text()')
# 倒数第二个
# ul = tree.xpath('//ul[@class="cover-col-4 clearfix"]/li[last()-1]//text()')
# 从第四个
# ul = tree.xpath('//ul[@class="cover-col-4 clearfix"]/li[position() > 3]//text()')
# < 3 头两个
# ul = tree.xpath('//ul[@class="cover-col-4 clearfix"]/li[position() < 3]//text()')

# 进行二次xpath
# ul = tree.xpath('//ul[@class="cover-col-4 clearfix"]')
# 进行匹配li  从当前这个ul继续往后匹配
# print(ul[0].xpath('./li[1]//text()'))


# 获取所有的img标签
# img = tree.xpath('//img')

# 限定img的范围
# img = tree.xpath('//a[@class="cover"]/img')
# for i in img:
#     print(etree.tostring(i, encoding='UTF-8').decode('UTF-8'))

# 获取img的src属性
# img = tree.xpath('//a[@class="cover"]/img/@src')
# for i in img:
#     print(i)


# 获取所有price属性的值
# price = tree.xpath('//a/@price')
# price = tree.xpath('//a[@price="10"]//text()')
# price = tree.xpath('//a[@price>"10"]//text()')
# price = tree.xpath('//a[@price<"20"]//text()')
# price = tree.xpath('//a[@price>="20"]//text()')
# price = tree.xpath('//a[@price<="20"]//text()')
# print(etree.tostring(price[0], encoding='UTF-8').decode('UTF-8'))
# print(price)

# 无论是什么标签，只要有price属性我们就要
# print(tree.xpath('//*[@price]'))
# print(tree.xpath('//@price'))

# node()
# price = tree.xpath('//*[@price][last()]')

# @*
# price = tree.xpath('//a[@*]')
# print(price)

# | 或  匹配id为test1或者test2的
# test_or = tree.xpath('//div[@id="test1"] | //div[@id="test2"]')
# print(test_or)

# and
# test_or = tree.xpath('//div[@id="test1" and @class="div1"]')
# print(test_or)


# 包含
# div = tree.xpath('//div[contains(@id, "st1")]')
# div = tree.xpath('//div[contains(@id, "ST1")]')
# div = tree.xpath('//div[contains(@id, "ST1")]')
# print(div)

# 以什么开头
# div = tree.xpath('//div[starts-with(@id, "t")]')
# print(div)

print(tree.xpath('//*[@id="content"]/div/div[2]/ul/li[1]/div/h2/a//text()'))
