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


@app.before_request
def before_request_handler():
    """Filter each request before processing"""

    if auth is None:
        return

    excluded = [
        "/api/v1/status/",
        "/api/v1/unauthorized/",
        "/api/v1/forbidden/"
    ]

    if not auth.require_auth(request.path, excluded):
        return

    if auth.authorization_header(request) is None:
        abort(401)

    request.current_user = auth.current_user(request)

    if request.current_user is None:
        abort(403)


@app.errorhandler(401)
def unauthorized(error):
    return jsonify({"error": "Unauthorized"}), 401


@app.errorhandler(403)
def forbidden(error):
    return jsonify({"error": "Forbidden"}), 403


@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": "Not found"}), 404


if __name__ == "__main__":
    host = getenv("API_HOST", "0.0.0.0")
    port = getenv("API_PORT", "5000")
    app.run(host=host, port=port)

