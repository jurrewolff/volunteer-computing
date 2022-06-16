from http import HTTPStatus


def build_response(code: int, description: str = "") -> dict:
    if not description:
        description = HTTPStatus(code).description

    return {"code": code, "phrase": HTTPStatus(code).phrase, "description": description}
