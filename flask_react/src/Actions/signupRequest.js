/*
 * SIGNUPREQUEST PAGE.
 * Handles the signup request to the backed via a http POST request.
 * Also immediately signs in a user via the loginrequest function.
 */

// Package and functionality imports
import DashBoard from "../Pages/Dashboard";
import { useState, useEffect } from 'react';
import { LoginRequest } from '../Actions/loginRequest';
import { Routes, Route, useNavigate } from "react-router-dom";

// Material ui imports
import Button from '@mui/material/Button';


// Props contain the textfield data provided by the signup page
export const SignupRequest = (props) => {
    // In data wordt de responde verzameld
    const [clicked, setClicked] = useState(false);

    const navigate = useNavigate();

    /*
     * Handles the signup http POST request when the button is clicked,
     * there is no error handling, except for the login request.
     */
    useEffect(() => {
        if (clicked) {
            const requestOptions = {
                method: 'POST',
                headers: {
                    'username': props.username,
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

            LoginRequest(props.username, props.pass).then(response => {
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

            // Naviagtes to the homepage
            navigate("/");
            setClicked(false)
        }

    }, [clicked]);

    // Button functionality is returned to the signup page
    return (
        <div>
            <Button
                variant="contained"
                onClick={() => setClicked(true)}
                sx={{ mt: 3, ml: 1 }}>
                Sign up
            </Button>
            <Routes>
                <Route key="/" element={<DashBoard />} />
            </Routes>
        </div>
    );
}

