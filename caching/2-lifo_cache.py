#!/usr/bin/env python3
""" LIFOCache module
This module implements a LIFO caching system.
"""

from base_caching import BaseCaching


class LIFOCache(BaseCaching):
    """ LIFOCache defines a LIFO caching system.
    Items are discarded in the reverse order they were added.
    """

    def __init__(self):
        """ Initialize the cache """
        super().__init__()
        self.order = []  # Track insertion order

    def put(self, key, item):
        """ Add an item in the cache using LIFO algorithm.
        If key or item is None, do nothing.
        If cache exceeds MAX_ITEMS, discard the last inserted key.
        """
        if key is None or item is None:
            return

        # If key already exists: update value and move it to the end
        if key in self.cache_data:
            self.cache_data[key] = item
            if key in self.order:
                self.order.remove(key)
            self.order.append(key)
            return

        # New key
        if len(self.cache_data) >= BaseCaching.MAX_ITEMS:
            # Discard last item put in cache (LIFO)
            last_key = self.order.pop()
            del self.cache_data[last_key]
            print("DISCARD: {}".format(last_key))

        self.cache_data[key] = item
        self.order.append(key)

    def get(self, key):
        """ Retrieve an item by key.
        Return None if key is None or doesn't exist.
        """
        if key is None:
            return None
        return self.cache_data.get(key)
