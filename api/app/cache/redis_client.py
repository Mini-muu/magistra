import redis, os

REDIS_HOST = 'cache'
REDIS_PORT = 6379
REDIS_PASSWORD = os.environ.get('REDIS_PASSWORD', None)

class RedisClient:
    def __init__(self):
        self.redis_client = redis.StrictRedis(host=REDIS_HOST, port=REDIS_PORT, password=REDIS_PASSWORD, decode_responses=True)

    def set_value(self, key, value):
        self.redis_client.set(key, value)
        # Set expiration to 24 hours (86,400 seconds)
        self.redis_client.expire(key, 86400)

    def get_value(self, key):
        return self.redis_client.get(key)

    def delete_key(self, key):
        return self.redis_client.delete(key)
    
    def get_expiration(self, key):
        return self.redis_client.ttl(key)

def get_redis_client():
    return RedisClient()