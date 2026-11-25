import redis
import json
class RedisDict:
    def __init__(self, key, redis_host='localhost', redis_port=6379, redis_password=None):
        self.redis = redis.StrictRedis(
            host=redis_host, port=redis_port, password=redis_password, decode_responses=True)
        self.key = key

    def __getitem__(self, item):
        value = self.redis.hget(self.key, item)
        if value is not None:
            return json.loads(value)
        else:
            raise KeyError(item)

    def __setitem__(self, item, value):
        serialized_value = json.dumps(value)
        with self.redis.pipeline() as pipe:
            while True:
                try:
                    pipe.watch(self.key)
                    # 获取当前值
                    current_value = pipe.hget(self.key, item)
                    if current_value is None or json.loads(current_value) != value:
                        pipe.multi()
                        pipe.hset(self.key, item, serialized_value)
                        pipe.execute()
                    else:
                        # 如果当前值与新值相同，则不做任何操作
                        pipe.reset()
                    break
                except redis.WatchError:
                    continue

    def __delitem__(self, item):
        self.redis.hdel(self.key, item)

    def __len__(self):
        return self.redis.hlen(self.key)

    def __iter__(self):
        return iter(self.keys())

    def keys(self):
        return self.redis.hkeys(self.key)

    def values(self):
        return [json.loads(value) for value in self.redis.hvals(self.key)]

    def items(self):
        return [(key, json.loads(value)) for key, value in self.redis.hgetall(self.key).items()]

    def clear(self):
        self.redis.delete(self.key)
        
if __name__ == "__main__":
    taskResults = RedisDict("taskResult", "127.0.0.1", 6379)
    taskResults["task_id2"] = {
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
    task_item=taskResults["task_id2"]
    task_item["warnStatus"]=1
    task_item["warnData"].append({
        "a":1,
        "b":3
    })
    taskResults["task_id1"]=task_item
    print(taskResults["task_id1"])