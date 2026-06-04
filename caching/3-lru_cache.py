#!/usr/bin/env python3
""" LRUCache module
This module implements a Least Recently Used caching system.
"""

from base_caching import BaseCaching


class LRUCache(BaseCaching):
    """ LRUCache defines a caching system using LRU algorithm.
    The least recently used item is discarded first.
    """

    def __init__(self):
        """ Initialize the cache """
        super().__init__()
        self.order = []  # Track usage order (least recent → most recent)

    def put(self, key, item):
        """ Add an item in the cache using LRU algorithm.
        If key or item is None, do nothing.
        If cache exceeds MAX_ITEMS, discard the least recently used key.
        """
        if key is None or item is None:
            return

        # If key already exists: update value and move it to the end (most recent)
        if key in self.cache_data:
            self.cache_data[key] = item
            self.order.remove(key)
            self.order.append(key)
            return

        # If cache is full: remove least recently used (first in list)
        if len(self.cache_data) >= BaseCaching.MAX_ITEMS:
            lru_key = self.order.pop(0)
            del self.cache_data[lru_key]
            print("DISCARD: {}".format(lru_key))

        # Add new key
        self.cache_data[key] = item
        self.order.append(key)

    def get(self, key):
        """ Retrieve an item by key.
        If key exists, mark it as most recently used.
        Return None if key is None or doesn't exist.
        """
        if key is None or key not in self.cache_data:
            return None

        # Move key to the end (most recently used)
        self.order.remove(key)
        self.order.append(key)

        return self.cache_data.get(key)

