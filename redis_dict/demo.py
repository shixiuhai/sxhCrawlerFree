import redis
import json
class RedisDict:
    def __init__(self, key, redis_host='localhost', redis_port=6379, redis_password=None):
        # 初始化方法，创建一个 Redis 连接对象
        self.redis = redis.StrictRedis(
            host=redis_host, port=redis_port, password=redis_password, decode_responses=True)
        # 指定 Redis 哈希表的键
        self.key = key

    def __getitem__(self, item):
        # 获取指定键的值
        value = self.redis.hget(self.key, item)
        if value is not None:
            # 解码存储的 JSON 字符串并返回
            return json.loads(value)
        else:
            raise KeyError(item)

    def __setitem__(self, item, value):
        # 将值转换为 JSON 格式并设置指定键的值
        serialized_value = json.dumps(value)
        self.redis.hset(self.key, item, serialized_value)

    def __delitem__(self, item):
        # 删除指定键
        self.redis.hdel(self.key, item)

    def __len__(self):
        # 返回哈希表的大小（键值对数量）
        return self.redis.hlen(self.key)

    def __iter__(self):
        # 返回一个迭代器，用于迭代所有键
        return iter(self.keys())

    def keys(self):
        # 返回所有键
        return self.redis.hkeys(self.key)

    def values(self):
        # 返回所有值
        return [json.loads(value) for value in self.redis.hvals(self.key)]

    def items(self):
        # 返回所有键值对
        return [(key, json.loads(value)) for key, value in self.redis.hgetall(self.key).items()]

    def clear(self):
        # 清空哈希表
        self.redis.delete(self.key)

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
    taskResults = RedisDict("taskResult", "127.0.0.1", 6379)
    taskResults["task_id1"] = {
        "freqncy": 16,
        "passCount": 8,
        "status": 3,
        "type": 2,
        "warnCount": 1,
        "warnData": [
            {
                "mediaUrl": "/media-scan-audio/fff1799284b7452e/output5.wav",
                "warnFileType": 2,
                "warnMessage": "说的,",
                "warnType": 5
            }
        ],
        "warnStatus": 2
    }
    task_item=taskResults["task_id1"]
    task_item["warnStatus"]=1
    task_item["warnData"].append({
        "a":1,
        "b":3
    })
    taskResults["task_id1"]=task_item
    print(taskResults["task_id1"])
    

    # # 使用 RedisDict 类
    # redis_dict = RedisNestedDict()
    # a=redis_dict["abc"]={"a":1,"c":[1,2,3,4],"d":{"a":1,"c":2}}
    # # a["c"]=3
    # # print(a)
    # item = a["d"]
    # item["a"]=7
    # print(a)
    # a["c"]=[1,35]
    # print(a)
    # a.update({"e":3})
    # print(a)
