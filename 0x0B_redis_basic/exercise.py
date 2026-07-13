#!/usr/bin/env python3
"""
Exercise: Writing strings to Redis
"""
import redis
import uuid
from typing import Union


class Cache:
    def __init__(self):
        """Initialize Redis client and flush database"""
        self._redis = redis.Redis()
        self._redis.flushdb()

    def store(self, data: Union[str, bytes, int, float]) -> str:
        """Store data in Redis with a random UUID key"""
        key = str(uuid.uuid4())
        self._redis.set(key, data)
        return key

