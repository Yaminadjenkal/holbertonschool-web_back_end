#!/usr/bin/env python3
"""
Redis basic exercise
"""
import redis
import uuid
from typing import Union, Callable, Optional, List
from functools import wraps


def count_calls(method: Callable) -> Callable:
    """Decorator to count how many times a method is called"""
    key = method.__qualname__

    @wraps(method)
    def wrapper(self, *args, **kwargs):
        self._redis.incr(key)
        return method(self, *args, **kwargs)

    return wrapper


def call_history(method: Callable) -> Callable:
    """Store the history of inputs and outputs for a function"""
    input_key = method.__qualname__ + ":inputs"
    output_key = method.__qualname__ + ":outputs"

    @wraps(method)
    def wrapper(self, *args, **kwargs):
        # Save input
        self._redis.rpush(input_key, str(args))

        # Execute method
        result = method(self, *args, **kwargs)

        # Save output
        self._redis.rpush(output_key, str(result))

        return result

    return wrapper


def replay(method: Callable):
    """Display the history of calls of a particular function"""
    redis_instance = method.__self__._redis
    name = method.__qualname__

    calls = redis_instance.get(name)
    inputs = redis_instance.lrange(name + ":inputs", 0, -1)
    outputs = redis_instance.lrange(name + ":outputs", 0, -1)

    print(f"{name} was called {int(calls) if calls else 0} times:")

    for inp, out in zip(inputs, outputs):
        print(f"{name}(*{inp.decode('utf-8')}) -> {out.decode('utf-8')}")


class Cache:
    def __init__(self):
        """Initialize Redis client and flush database"""
        self._redis = redis.Redis()
        self._redis.flushdb()

    @count_calls
    @call_history
    def store(self, data: Union[str, bytes, int, float]) -> str:
        """Store data in Redis with a random UUID key"""
        key = str(uuid.uuid4())
        self._redis.set(key, data)
        return key

    def get(self, key: str, fn: Optional[Callable] = None):
        """Retrieve data from Redis and optionally apply a conversion function"""
        data = self._redis.get(key)
        if data is None:
            return None
        return fn(data) if fn else data

    def get_str(self, key: str) -> Optional[str]:
        """Retrieve a UTF-8 string"""
        return self.get(key, fn=lambda d: d.decode("utf-8"))

    def get_int(self, key: str) -> Optional[int]:
        """Retrieve an integer"""
        return self.get(key, fn=int)

