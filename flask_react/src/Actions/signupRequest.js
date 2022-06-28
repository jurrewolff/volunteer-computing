// /*
//  * Voor het registreren van een gebruiker. Werkt nu alleen met mockup database,
//  * waarbij alleen username en ww vereist zijn.
//  * code 200: is goed, alle andere zijn erros.
//  */


// TODO werkend maken

// export const SignupRequest = (userInfo) => {

//     const requestOptions = {
//         method: 'POST',
//         headers: {
//             'email': userInfo["eMail"],
//             'password': userInfo["pass"],
//             'username': userInfo["uName"],
//             'lastname': userInfo["lName"],
//             'firstname': userInfo["fName"],
//             'institution': userInfo["inst"],
//             'background': userInfo["background"],
//             'is_researcher': userInfo["isResearcher"]
//         }
//     };

//     return (fetch("/api/signup", requestOptions)
//         .then((response) => response.json())
//         .then((result) => {
//             return result;
//         })
//     )
// }

/*
 * Voor het registreren van een gebruiker. Werkt nu alleen met mockup database,
 * waarbij alleen username en ww vereist zijn.
 * code 200: is goed, alle andere zijn erros.
 */

import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import { Routes, Route, useNavigate } from "react-router-dom"
import DashBoard from "../Pages/Dashboard"



// In props zitten de meegegeven variabelen van SignUp.js,
// wordt verzameld in <SignupRequest .... />
export const SignupRequest = (props) => {

    // In data wordt de responde verzameld
    const [data, setData] = useState([{}])
    const [clicked, setClicked] = useState(false)

    const navigate = useNavigate();

    useEffect(() => {
        if (clicked) {
            const requestOptions = {
                method: 'POST',
                headers: {
                    'username': props.uName,
                    'password': props.pass,
                    'email': props.eMail,
                    'firstname': props.fName,
                    'lastname': props.lName,
                    'institution': props.inst,
                    'is_researcher': props.isResearcher,
                    'background': props.background,
                }
            };
            fetch("/api/signup", requestOptions)
                .then((result) => {
                    setData(result)
                });

            navigate('/login');
            setClicked(false)
        }

        // const username = result.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [clicked, props.fName, props.pass]);

    return (
        <div>
            <Button
                variant="contained"
                onClick={() => setClicked(true)}
                sx={{ mt: 3, ml: 1 }}>
                Sign up
            </Button>
            <Routes>
                <Route key="/login" element={<DashBoard />} />
            </Routes>
        </div>
    );
}

// checken of alles is ingevuld
// {activeStep === steps.length - 1 ? 'Place order' : 'Next'}

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