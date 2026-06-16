#!/usr/bin/env python3
"""
User view module
"""
from flask import jsonify, abort, request
from models.user import User
from api.v1.views import app_views


@app_views.route('/users', methods=['GET'], strict_slashes=False)
def get_users():
    """Retrieve all users"""
    users = User.all()
    return jsonify([user.to_dict() for user in users])


@app_views.route('/users/<user_id>', methods=['GET'], strict_slashes=False)
def get_user(user_id):
    """Retrieve a user"""

    # Special case: /users/me
    if user_id == "me":
        if request.current_user is None:
            abort(404)
        return jsonify(request.current_user.to_dict())

    user = User.get(user_id)
    if user is None:
        abort(404)

    return jsonify(user.to_dict())


@app_views.route('/users', methods=['POST'], strict_slashes=False)
def create_user():
    """Create a new user"""
    try:
        req = request.get_json()
    except Exception:
        abort(400, "Not a JSON")

    if req is None:
        abort(400, "Not a JSON")

    if "email" not in req:
        abort(400, "Missing email")

    if "password" not in req:
        abort(400, "Missing password")

    user = User(**req)
    user.save()
    return jsonify(user.to_dict()), 201


@app_views.route('/users/<user_id>', methods=['PUT'], strict_slashes=False)
def update_user(user_id):
    """Update a user"""

    user = User.get(user_id)
    if user is None:
        abort(404)

    try:
        req = request.get_json()
    except Exception:
        abort(400, "Not a JSON")

    if req is None:
        abort(400, "Not a JSON")

    ignore = ["id", "email", "created_at", "updated_at"]

    for key, value in req.items():
        if key not in ignore:
            setattr(user, key, value)

    user.save()
    return jsonify(user.to_dict())


@app_views.route('/users/<user_id>', methods=['DELETE'], strict_slashes=False)
def delete_user(user_id):
    """Delete a user"""

    user = User.get(user_id)
    if user is None:
        abort(404)

    user.delete()
    return jsonify({}), 200
