#!/usr/bin/env python3
"""
Session DB Authentication
"""
from api.v1.auth.session_exp_auth import SessionExpAuth
from models.user_session import UserSession


class SessionDBAuth(SessionExpAuth):
    """Session stored in database"""

    def create_session(self, user_id=None):
        """Create and store session in DB"""
        session_id = super().create_session(user_id)
        if session_id is None:
            return None

        UserSession(user_id=user_id, session_id=session_id).save()
        return session_id

    def user_id_for_session_id(self, session_id=None):
        """Retrieve user_id from DB"""
        session = UserSession.search({"session_id": session_id})
        if not session:
            return None
        return session[0].user_id

    def destroy_session(self, request=None):
        """Destroy session in DB"""
        session_id = self.session_cookie(request)
        if session_id is None:
            return False

        session = UserSession.search({"session_id": session_id})
        if not session:
            return False

        session[0].remove()
        return True
