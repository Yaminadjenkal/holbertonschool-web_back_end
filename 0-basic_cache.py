#!/usr/bin/env python3
""" BasicCache module
This module defines a simple caching system with no limit.
"""

from base_caching import BaseCaching


class BasicCache(BaseCaching):
    """ BasicCache defines a caching system with no limit.
    It stores items in a dictionary inherited from BaseCaching.
    """

    def put(self, key, item):
        """ Add an item in the cache.
        If key or item is None, do nothing.
        """
        if key is None or item is None:
            return
        self.cache_data[key] = item

    def get(self, key):
        """ Retrieve an item by key.
        If key is None or doesn't exist, return None.
        """
        if key is None:
            return None
        return self.cache_data.get(key)

