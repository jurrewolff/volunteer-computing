/*
 * Voor het registreren van een gebruiker. Werkt nu alleen met mockup database,
 * waarbij alleen username en ww vereist zijn.
 * code 200: is goed, alle andere zijn erros.
 */

import { useState, useEffect } from 'react'

export const SignupRequest = (props) => {
    const [data, setData] = useState([{}])
    const [clicked, setClicked] = useState(false)

    const experiment = props.exp

    useEffect(() => {
        if (clicked) {
            const requestOptions = {
                method: 'POST',
                headers: {
                    'username': 'jan',
                    "password": "geheimlijk"
                }
            };
            fetch("/signup", requestOptions)
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
            <p>{experiment}</p>
            <button onClick={() => setClicked(true)}>Fetch data</button>
            <div>
                <h2>{data.code}</h2>
                <h2>{data.description}</h2>
                <br />
            </div>
        </div>
    );
}


// TEST BENDE WAAR IK MISSCHIEN NOG IETS UIT KAN HALEN!!! //



// export default SignupRequest;

// import React from 'react';
// import { useState, useEffect } from 'react'

// export const Login = () => {
//     const [data, setData] = useState([{}])
//     const [clicked, setClicked] = useState(false)

//     useEffect(() => {
//         if (clicked) {
//             const requestOptions = {
//                 method: 'POST',
//                 headers: {
//                     'username': 'user1',
//                     "password": "password1"
//                 }
//             };
//             fetch("/login", requestOptions)
//                 .then((response) => response.json())
//                 .then((result) => {
//                     setData(result)
//                     console.log({ result }) //DELETE
//                 })
//             setClicked(false)
//         }
//     }, [clicked]);

//     return (
//         <div>
//             <button onClick={() => setClicked(true)}>Fetch data</button>
//             <div>
//                 <h2>{data.code}</h2>
//                 <h2>{data.description}</h2>
//                 <br />
//             </div>
//         </div>
//     );
// }
// // export const SignupRequest = () => {
// //     const [data, setData] = useState([{}])
// //     const [clicked, setClicked] = useState(false)

// //     // const [pressed, setPressed] = useState(false)
// //     useEffect(() => {
// //         if (clicked) {
// //             const requestOptions = {
// //                 method: 'POST',
// //                 headers: {
// //                     'username': 'user1',
// //                     "password": "password1"
// //                 }
// //             };
// //             fetch("/login", requestOptions)
// //                 .then((response) => response.json())
// //                 .then((result) => {
// //                     setData(result)
// //                     console.log({ result }) //DELETE
// //                 })
// //             setClicked(false)
// //         }
// //     }, [clicked]);

// //     return (
// //         <div>
// //             <button onClick={() => setClicked(true)}>Fetch data</button>
// //             <div>
// //                 <h2>{data.code}</h2>
// //                 <h2>{data.description}</h2>
// //                 <br />
// //             </div>
// //         </div>
// //     );
// // }

// // export default SignupRequest;

/*
 * Maakt het mogelijk om in te loggen.
 * POST request voor login.
 * in var worden ed variabelen meegegeven voor de username en ww
 */
/*
 * Maakt het mogelijk om in te loggen.
 * POST request voor login.
 * in var worden ed variabelen meegegeven voor de username en ww
 */

// import { useState, useEffect } from 'react'

// export const Mf = () => {
//     const [data, setData] = useState([{}])
//     const [clicked, setClicked] = useState(false)

//     useEffect(() => {
//         if (clicked) {
//             const requestOptions = {
//                 method: 'POST',
//                 headers: {
//                     'username': 'user1',
//                     "password": "password1"
//                 }
//             };
//             fetch("/login", requestOptions)
//                 .then((response) => response.json())
//                 .then((result) => {
//                     setData(result)
//                     console.log({ result }) //DELETE
//                 })
//             setClicked(false)
//         }
//     }, [clicked]);

//     return (
//         <div>
//             <button onClick={() => setClicked(true)}>Fetch data</button>
//             <div>
//                 <h2>{data.code}</h2>
//                 <h2>{data.description}</h2>
//                 <br />
//             </div>
//         </div>
//     );
// }

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