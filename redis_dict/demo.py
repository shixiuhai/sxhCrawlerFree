import redis
import json

import json

class RedisNestedDict:
    def __init__(self, host='localhost', port=6379, db=0, password=None):
        self.client = redis.StrictRedis(host=host, port=port, db=db, password=password, decode_responses=True)

    def __getitem__(self, key):
        value = self.client.get(key)
        if value is None:
            raise KeyError(f'Key {key} not found')
        return json.loads(value)

    def __setitem__(self, key, value):
        self.client.set(key, json.dumps(value))

    def __delitem__(self, key):
        if not self.client.delete(key):
            raise KeyError(f'Key {key} not found')

    def __contains__(self, key):
        return self.client.exists(key)

    def __len__(self):
        return len(self.client.keys())

    def keys(self):
        return self.client.keys()

    def __iter__(self):
        return iter(self.keys())

    def items(self):
        return ((key, self[key]) for key in self.keys())

    def values(self):
        return (self[key] for key in self.keys())

    def get(self, key, default=None):
        try:
            return self[key]
        except KeyError:
            return default

    def clear(self):
        self.client.flushdb()

    def update(self, *args, **kwargs):
        if len(args) > 1:
            raise TypeError(f"update expected at most 1 arguments, got {len(args)}")
        if args:
            other = dict(args[0])
            for key, value in other.items():
                self[key] = value
        for key, value in kwargs.items():
            self[key] = value

    def __repr__(self):
        return f"{self.__class__.__name__}({dict(self.items())})"

# # 设置键值对
# redis_dict["a"] = 42

# # 获取键的值并赋给变量 a
# a = redis_dict["a"]
# print(a)  # 输出: 42

# # 获取一个不存在的键
# try:
#     b = redis_dict["b"]
# except KeyError as e:
#     print(e)  # 输出: Key b not found

# # 使用 .get() 方法获取键的值，提供默认值以防键不存在
# b = redis_dict.get("b", "default_value")
# print(b)  # 输出: default_value

# # 设置键 b 的值
# redis_dict["b"] = 4
# print(redis_dict["b"])  # 输出: 4

# # 删除键 a
# del redis_dict["a"]

# # 检查键 a 是否存在
# print("a" in redis_dict)  # 输出: FalsWe
if __name__ == "__main__":

    # 使用 RedisDict 类
    redis_dict = RedisNestedDict()
    a=redis_dict["abc"]={"a":1,"c":[1,2,3,4],"d":{"a":1,"c":2}}
    # a["c"]=3
    # print(a)
    item = a["d"]
    item["a"]=7
    print(a)
    a["c"]=[1,35]
    print(a)
    a.update({"e":3})
    print(a)
