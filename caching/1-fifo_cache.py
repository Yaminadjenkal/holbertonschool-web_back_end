#!/usr/bin/env python3
""" FIFOCache module
This module implements a FIFO caching system.
"""

from base_caching import BaseCaching


class FIFOCache(BaseCaching):
    """ FIFOCache defines a FIFO caching system.
    Items are discarded in the order they were added.
    """

    def __init__(self):
        """ Initialize the cache """
        super().__init__()
        self.order = []  # To keep track of insertion order

    def put(self, key, item):
        """ Add an item in the cache using FIFO algorithm.
        If key or item is None, do nothing.
        If cache exceeds MAX_ITEMS, discard the first inserted key.
        """
        if key is None or item is None:
            return

        # If key already exists, update value but keep its position
        if key not in self.cache_data:
            self.order.append(key)

        self.cache_data[key] = item

        # FIFO: remove oldest item if limit exceeded
        if len(self.cache_data) > BaseCaching.MAX_ITEMS:
            first_key = self.order.pop(0)
            del self.cache_data[first_key]
            print(f"DISCARD: {first_key}")

    def get(self, key):
        """ Retrieve an item by key.
        Return None if key is None or doesn't exist.
        """
        if key is None:
            return None
        return self.cache_data.get(key)

