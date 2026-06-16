#!/usr/bin/env python3
"""
Flask App for the API
"""
from flask import Flask, jsonify, request, abort
from flask_cors import CORS
from os import getenv
from api.v1.views import app_views

app = Flask(__name__)
CORS(app, resources={r"/api/v1/*": {"origins": "*"}})
app.register_blueprint(app_views)

auth = None
auth_type = getenv("AUTH_TYPE")

if auth_type == "basic_auth":
    from api.v1.auth.basic_auth import BasicAuth
    auth = BasicAuth()
elif auth_type == "session_auth":
    from api.v1.auth.session_auth import SessionAuth
    auth = SessionAuth()
elif auth_type == "session_exp_auth":
    from api.v1.auth.session_exp_auth import SessionExpAuth
    auth = SessionExpAuth()
elif auth_type == "session_db_auth":
    from api.v1.auth.session_db_auth import SessionDBAuth
    auth = SessionDBAuth()


@app.before_request
def before_request_handler():
    """
    Executed before each request:
    - Check if authentication is required
    - Set request.current_user
    """

    if auth is None:
        return

    excluded_paths = [
        "/api/v1/status/",
        "/api/v1/unauthorized/",
        "/api/v1/forbidden/",
        "/api/v1/auth_session/login/"
    ]

    # If the path does not require authentication → allow
    if not auth.require_auth(request.path, excluded_paths):
        return

    # If no Authorization header or no session cookie → 401
    if auth.authorization_header(request) is None and \
       auth.session_cookie(request) is None:
        abort(401)

    # Set the current user
    request.current_user = auth.current_user(request)

    # If authentication failed → 403
    if request.current_user is None:
        abort(403)


@app.errorhandler(401)
def unauthorized(error):
    """Unauthorized request"""
    return jsonify({"error": "Unauthorized"}), 401


@app.errorhandler(403)
def forbidden(error):
    """Forbidden request"""
    return jsonify({"error": "Forbidden"}), 403


@app.errorhandler(404)
def not_found(error):
    """Not found"""
    return jsonify({"error": "Not found"}), 404


if __name__ == "__main__":
    host = getenv("API_HOST", "0.0.0.0")
    port = getenv("API_PORT", "5000")
    app.run(host=host, port=port)
