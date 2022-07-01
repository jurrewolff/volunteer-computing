/*
 * LOGINREQUEST PAGE
 * Handles the login request to the backend via a http POST request.
 * Data is send to the backend and the backend response is handled in the
 * login page, so that errors can be displayed accordingly to the user.
 */

export function LoginRequest(uname, pass) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'username': uname,
            'password': pass
        }
    };

    return (fetch("/api/login", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            return result;
        })
    )
}