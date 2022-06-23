/*
 * Maakt het mogelijk om in te loggen.
 * POST request voor login.
 * in var worden ed variabelen meegegeven voor de username en ww, is voor nu
 * nog gehardcoded voor testen.
 *
 */

import { useState, useEffect } from 'react'

import { Routes, Route, useNavigate } from "react-router-dom"
import DashBoard from "../Pages/Dashboard"
import Navbar from "../Components/Navbar"

import Button from '@mui/material/Button';

import Cookies from 'js-cookie';

export const LoginRequest = (props) => {
    const [data, setData] = useState([{}])
    const [clicked, setClicked] = useState(false)

    const navigate = useNavigate();


    useEffect(() => {
        if (clicked) {
            const requestOptions = {
                method: 'POST',
                headers: {
                    'username': props.fName,
                    'password': props.pass
                }
            };
            fetch("/login", requestOptions)
                .then((response) => {
                    response.json()
                })

            setClicked(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [clicked, props.fName, props.pass]);

    return (
        <div>
            <Button
                variant="contained"
                onClick={() => setClicked(true)}
                sx={{ mt: 3, ml: 1 }}>
                Log in
            </Button>
            {/* <Routes>
                <Route path="/login" element={<DashBoard />} />
            </Routes> */}
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