from lxml import etree
# 解析本地文件第一种方式
# parser = etree.HTMLParser(encoding='UTF-8')
# tree = etree.parse('./素材/豆瓣.html', parser=parser)

# 解析本地文件或者网络动态HTML
# f = open('./素材/豆瓣.html', 'r', encoding='UTF-8')
# data = f.read()
# tree = etree.HTML(data)
# print(tree)

# 整合  建议使用HTML方式
tree = etree.HTML(open('./素材/豆瓣.html', 'r', encoding='UTF-8').read())
print(tree)
