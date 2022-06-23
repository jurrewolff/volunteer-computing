/* Login page, waar nu alleen een textfield en een knop in staat */

import React from 'react';
import { useState, useEffect, useRef, useLayoutEffect } from 'react';


import { LoginRequest } from '../Actions/loginRequest'
import { useNavigate } from "react-router-dom"


import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { GridWrapper } from '../Components/NavbarElements';
import Button from '@mui/material/Button';


import DashBoard from "./Dashboard"

// import Divider from '@mui/material/Divider';
// import Box from '@mui/material/Box';



// import ResponsiveAppBar from '../Components/Navbar2';
// import PermanentDrawerLeft from '../Components/SideMenu';

export default function Login() {
    const paperStyle = { padding: 20, width: '75%' }


    const [uname, setUname] = useState("");
    const [msgUser, setMsgUser] = useState("");
    const [userError, setUserError] = useState(false);

    const [pass, setPass] = useState("");
    const [msgPass, setMsgPass] = useState("");
    const [passError, setPassError] = useState(false);

    const [temp, setTemp] = useState(false)
    const [errorMessage, setErrormessage] = useState([{}])

    const [check1, setCheck1] = useState(false)
    const [check2, setCheck2] = useState(false)

    const navigate = useNavigate();

    useEffect((pass, uname) => {
        if (!userError && !passError && check1 && check2) {
            console.log(userError, passError)

            let db_response = LoginRequest({ uname, pass })

            switch (db_response["code"]) {
                case 200:
                    setMsgPass(db_response["msg"])
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
        // else {
        //     return
        // }
    }, [userError, passError, check1, check2]);


    const handleLogin = () => {
        if (uname === "") {
            setMsgUser("Need to fill this in")
            setUserError(true)
        } else {
            setUserError(false)
            setCheck1(true)
        }

        if (pass === "") {
            setMsgPass("Password is required")
            setPassError(true)

        } else {
            setPassError(false)
            setCheck2(true)
        }

        // if (!userError && !passError) {
        //     console.log(userError, passError)

        //     let db_response = LoginRequest({ uname, pass })

        //     switch (db_response["code"]) {
        //         case 200:
        //             setMsgPass(db_response["msg"])
        //             setPassError(true)

        //             setMsgUser("")
        //             setUserError(true)
        //             break;
        //         default:
        //             setMsgPass("Something went wrong, not your fault")
        //             setPassError(true)
        //             break;
        //     }
        // }
        // console.log(test)
        // < LoginRequest uName={uname} pass={pass} />

        // setTemp(true)
        // }
    }

    // console.log(temp)

    const normalPass = (props) => {
        return (
            <TextField
                required
                fullWidth
                margin="normal"
                id="password-normal"
                label="Password"
                type="password"
                autoComplete="current-password"
                defaultValue=""
                onChange={(e) => setPass(e.target.value)}
            />
        )
    }

    const errorPass = (msg) => {
        return (
            <TextField
                error
                required
                fullWidth
                margin="normal"
                id="password-error"
                label="Password"
                type="password"
                autoComplete="current-password"
                helperText={msg}
                onChange={(e) => setPass(e.target.value)}
            />
        )
    }



    const normalName = () => {
        return (
            <TextField
                required
                margin="normal"
                fullWidth
                id="uname-normal"
                label="Username"
                variant="outlined"
                defaultValue=""
                onChange={(e) => setUname(e.target.value)}
            />
        )
    }


    const errorName = (msg) => {
        return (
            <TextField
                error
                required
                fullWidth
                id="user-error"
                label="Username"
                defaultValue={uname}
                helperText={msg}
                onChange={(e) => setUname(e.target.value)}
            />
        )
    }

    return (
        <Container
            component="main"
            maxWidth="sm"
            sx={{ mb: 4 }}>
            <Paper
                elevation={10}
                style={paperStyle}
                sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
            >
                <Typography
                    component="h1"
                    variant="h4"
                    sx={{ textAlign: 'center' }}
                    gutterBottom
                >
                    Login
                </Typography>
                <Grid item xs={6}>
                    <Grid>
                        {
                            userError ? errorName(msgUser) : normalName()
                        }
                    </Grid>
                    <Grid >
                        {
                            passError ? errorPass(msgPass) : normalPass()
                        }
                    </Grid>
                    <Grid
                        container
                        direction="column"
                        justifyContent="space-between"
                        alignItems="flex-start">
                        <Grid sx={{ pb: 1 }}>
                            <Button
                                variant="contained"
                                onClick={() => handleLogin()}
                                sx={{ mt: 3, ml: 1 }}
                            >
                                Log in
                            </Button>
                        </Grid>
                        <Grid sx={{ pl: 1.5 }}>
                            <Link href="/signup" variant="body2">
                                {"Don't have an account yet? Signup!"}
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            {temp && navigate("/dashboard")}
        </Container >
    );
}