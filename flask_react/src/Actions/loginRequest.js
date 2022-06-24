/*
 * Maakt het mogelijk om in te loggen.
 * POST request voor login.
 * Als argumenten worden de username en wachtwoord meegegeven.
 */

export function LoginRequest(uname, pass) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'username': uname,
            'password': pass
        }
    };

    return (fetch("/login", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            return result;
        })
    )
}