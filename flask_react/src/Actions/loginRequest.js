/*
 * Maakt het mogelijk om in te loggen.
 * POST request voor login.
 * in var worden ed variabelen meegegeven voor de username en ww, is voor nu
 * nog gehardcoded voor testen.
 *
 */

import { useState, useEffect } from 'react'

export const LoginRequest = () => {
    const [data, setData] = useState([{}])
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        if (clicked) {
            const requestOptions = {
                method: 'POST',
                headers: {
                    'username': 'jan',
                    "password": "geheimlijk"
                }
            };
            fetch("/login", requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    setData(result)
                    console.log({ result }) //DELETE
                })
            setClicked(false)
        }
    }, [clicked]);

    return (
        <div>
            <button onClick={() => setClicked(true)}>Log in</button>
            <div>
                <h2>{data.code}</h2>
                <h2>{data.description}</h2>
                <br />
            </div>
        </div>
    );
}

// GET request
// export const LogginIn = () => {

//     const [data, setData] = useState([{}])
//     const [pressed, setPressed] = useState(false)


//     useEffect(() => {
//         if (pressed) {
//             fetch("/login")
//                 .then(res => res.json())
//                 .then(data => {
//                     setData(data)
//                     console.log(data)
//                 })
//         }
//     }, [pressed]);

//     return (
//         <div className="App">
//             <button onClick={() => setPressed(true)}> login </button>
//             <p>{data.code}</p>
//             <p>Druk de knop voor GET request</p>
//         </div>
//     );
// }