#!/usr/bin/env python3
"""
Authentication module
"""
from flask import request
from typing import List, TypeVar


class Auth:
    """Template for all authentication systems"""

    def require_auth(self, path: str, excluded_paths: List[str]) -> bool:
        """
        Check if a path requires authentication
        """

        if path is None:
            return True

        if excluded_paths is None or len(excluded_paths) == 0:
            return True

        if not path.endswith('/'):
            path = path + '/'

        for ex_path in excluded_paths:
            if ex_path.endswith('/') and path == ex_path:
                return False

        return True

    def authorization_header(self, request=None) -> str:
        """
        Returns the Authorization header value
        """

        if request is None:
            return None

        if "Authorization" not in request.headers:
            return None

        return request.headers.get("Authorization")

    def current_user(self, request=None) -> TypeVar('User'):
        """
        Returns None - to be implemented in subclasses
        """
        return None
