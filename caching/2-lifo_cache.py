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
        self.last_key = None  # Track last inserted key

    def put(self, key, item):
        """ Add an item in the cache using LIFO algorithm.
        If key or item is None, do nothing.
        If cache exceeds MAX_ITEMS, discard the last inserted key.
        """
        if key is None or item is None:
            return

        self.cache_data[key] = item
        self.last_key = key

        if len(self.cache_data) > BaseCaching.MAX_ITEMS:
            # Discard the last item put in cache (LIFO)
            discard_key = self.last_key
            if discard_key in self.cache_data:
                del self.cache_data[discard_key]
                print(f"DISCARD: {discard_key}")

            # After discarding, last_key should be updated to
            # the new last inserted key if needed
            if self.cache_data:
                self.last_key = list(self.cache_data.keys())[-1]
            else:
                self.last_key = None

    def get(self, key):
        """ Retrieve an item by key.
        Return None if key is None or doesn't exist.
        """
        if key is None:
            return None
        return self.cache_data.get(key)
