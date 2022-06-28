// /*
//  * Voor het registreren van een gebruiker. Werkt nu alleen met mockup database,
//  * waarbij alleen username en ww vereist zijn.
//  * code 200: is goed, alle andere zijn erros.
//  */

import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import { Routes, Route, useNavigate } from "react-router-dom"
import DashBoard from "../Pages/Dashboard"
import { LoginRequest } from '../Actions/loginRequest';


// TODO werkend maken

// In props zitten de meegegeven variabelen van SignUp.js,
// wordt verzameld in <SignupRequest .... />
export const SignupRequest = (props) => {

    // In data wordt de responde verzameld
    const [data, setData] = useState([{}])
    const [clicked, setClicked] = useState(false);
    const [msgUser, setMsgUser] = useState("");
    const [msgPass, setMsgPass] = useState("");
    const [userError, setUserError] = useState(false);
    const [passError, setPassError] = useState(false);

    const [check1, setCheck1] = useState(false)
    const [check2, setCheck2] = useState(false)
    const [authenticated, setAuthenticated] = useState(false)

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

            LoginRequest(props.uName, props.pass).then(response => {
                switch (response.code) {
                    case 200:
                        setAuthenticated(true)
                        break;
                    case 400 || 401:
                        setMsgPass(response.description)
                        setPassError(true)

                        setMsgUser("")
                        setUserError(true)
                        break;
                    default:
                        setMsgPass("Something went wrong, not your fault")
                        setPassError(true)
                        break;
                }
            }
            )
            navigate("/dashboard");

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
                <Route key="/dashboard" element={<DashBoard />} />
            </Routes>
        </div>
    );
}

