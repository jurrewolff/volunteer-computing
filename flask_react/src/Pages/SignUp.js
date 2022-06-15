import React from 'react'; // niet per se nodig nu, toekomst wss wel
import './Login.css';
import { useState, useEffect, useRef } from 'react';

// import { SignupRequest } from '../Actions/signupRequest';
// import { Mf } from '../Actions/signupRequest';
import { SignupRequest } from '../Actions/signupRequest';
// import { SignupRequest } from '../Actions/signupRequest';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';




export default function Signup() {
    const paperStyle = { padding: 20, height: "100vh", width: "110vh", margin: "20px auto" }
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const [option1, setOption1] = React.useState(true);
    const [option2, setOption2] = React.useState(false);

    // UPGRADE in een statement
    const fNameRef = useRef()
    const lNameRef = useRef()
    const uNameRef = useRef()
    const institutionRef = useRef()
    const eMailRef = useRef()
    const passwordRef = useRef()

    // const test = null
    // const experiment = fNameRef.current.value

    // console.log({ experiment })

    const handleChange1 = (event) => {
        if (option1) {
            setOption1(event.target.checked);
            setOption2(event.target.checked);
        }
        else {
            setOption1(event.target.checked);
        }
    };

    return (
        <>
            <h1>SignUp</h1>
            <Paper elevation={10} style={paperStyle}>
                <Stack direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}>
                    <Stack
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}>
                        <TextField id="fname" ref={fNameRef} label="First name" variant="outlined" />
                        <TextField id="lname" label="Last name" variant="outlined" />
                        <TextField id="uname" label="Username" variant="outlined" />
                        <TextField id="institution" label="Institution" variant="outlined" />
                        <TextField id="email" label="E-mail" variant="outlined" />
                        <TextField
                            id="password"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                        />
                        < SignupRequest />
                    </Stack>
                    <Stack
                        justifyContent="stretch"
                        alignItems="space-between"
                        divider={<Divider orientation="horizontal" flexItem />}
                        spacing={1}>
                        <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
                            <Checkbox {...label} checked={option1}
                                onChange={handleChange1}
                                inputProps={{ 'aria-label': 'controlled' }} />
                        </Box>
                        <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
                            <Checkbox {...label} checked={option2}
                                onChange={handleChange1}
                                inputProps={{ 'aria-label': 'controlled' }} />
                        </Box>
                    </Stack>
                </Stack>
            </Paper>
        </>
    );
}