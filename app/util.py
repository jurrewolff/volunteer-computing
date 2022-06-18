"""General utility functions relevant across modules."""

from http import HTTPStatus
from flask import jsonify, Response


def build_response(code: int, description: str = "", **kwargs: dict) -> Response:
    """
    :param code: HTTP status code
    :param description: A custom HTTP description
    :param kwargs: Keyword arguments, which must contain dictionaries as values
    :return: Returns flask response ready to send back to client.
    """
    if not description:
        description = HTTPStatus(code).description

    data = {"code": code, "phrase": HTTPStatus(code).phrase, "description": description}

    for key, value in kwargs.items():
        data[key] = value

    return jsonify(data)
