my_int = 2

# 第一次调用 str()
str_representation_1 = str(my_int)
print(str_representation_1)  # 输出: "2"

# 第二次调用 str()
str_representation_2 = str(str_representation_1)
print(str_representation_2)  # 输出: "2"

# 检查两个字符串是否是同一个对象
print(str_representation_1 is str_representation_2)  # 输出: True
