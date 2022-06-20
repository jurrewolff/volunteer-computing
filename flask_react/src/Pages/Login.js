/* Login page, waar nu alleen een textfield en een knop in staat */

import React from 'react';
import { useState, useEffect, useRef } from 'react';


import { LoginRequest } from '../Actions/loginRequest'

import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { GridWrapper } from '../Components/NavbarElements';
import Button from '@mui/material/Button';
// import Divider from '@mui/material/Divider';
// import Box from '@mui/material/Box';



// import ResponsiveAppBar from '../Components/Navbar2';
// import PermanentDrawerLeft from '../Components/SideMenu';

export default function Login() {
    const paperStyle = { padding: 20, width: '75%' }

    const [error, setError] = useState(false);


    const [fname, setFname] = useState();
    const [pass, setPass] = useState();

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        return (
            console.log("delete")
        )
    }

    // const normalName (props) {
    //     return (
    // <TextField
    //     margin="normal"
    //     required
    //     id="fname"
    //     // ref={fNameRef}
    //     fullWidth
    //     label="Username"
    //     variant="outlined"
    //     onChange={(e) => setFname(e.target.value)}
    // />
    //     )
    // }

    const normalName = (props) => {
        return (
            console.log(props["0"].msg),
            console.log(props["0"].state)
            // console.log(Object.keys(props))

            // <TextField
            //     margin="normal"
            //     required
            //     id="fname"
            //     // ref={fNameRef}
            //     fullWidth
            //     label={props.msg}
            //     variant="outlined"
            //     onChange={(e) => setFname(e.target.value)}
            // />
        )
    }


    const errorName = (props) => {
        return (
            <TextField
                error
                id="outlined-error"
                label="Error"
                defaultValue="Hello World"
            />
        )
    }

    return (
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
            <Paper elevation={10} style={paperStyle}
                sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                <Typography component="h1" variant="h4" gutterBottom
                    sx={{ textAlign: 'center' }}>Login</Typography>
                <Grid item xs={6}>
                    <Grid >
                        {error ? errorName([{ msg: "test" }]) : normalName([{ msg: "test1", state: "notnice" }])}


                    </Grid>
                    <Grid >
                        <TextField
                            margin="normal"
                            required
                            id="password"
                            fullWidth
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            onChange={(e) => setPass(e.target.value)}
                        />
                    </Grid>
                    <Grid alignitems="center">
                        < LoginRequest
                            fName={fname} //lName={lname} uName={uname}
                            pass={pass} // inst={inst} eMail={email}
                        />
                        <Link href="/signup" variant="body2">
                            {"Don't have an account yet? Signup!"}
                        </Link>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}
