#!/usr/bin/env python3
"""
UserSession model
"""
from models.base import Base
from models.base import BaseModel


class UserSession(BaseModel, Base):
    """UserSession class"""

    def __init__(self, *args, **kwargs):
        """Initialize UserSession"""
        super().__init__(*args, **kwargs)
        self.user_id = kwargs.get("user_id")
        self.session_id = kwargs.get("session_id")
