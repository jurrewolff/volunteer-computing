/* LOGIN PAGE
 * Renders the login page. Utilizes the fetch api which is implemented in
 * the loginRequest file. After the user input is valuated this function is
 * called. The response is handled depending on the status.
 */

// Package and functionality imports
import Nav from '../Components/HomePageNav';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { LoginRequest } from '../Actions/loginRequest';


// Material ui imports https://mui.com
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Login() {
    const navigate = useNavigate();
    const paperStyle = { padding: 20, width: '75%' } // styling

    const [uname, setUname] = useState("");
    const [pass, setPass] = useState("");
    const [msgUser, setMsgUser] = useState("");
    const [msgPass, setMsgPass] = useState("");
    const [userError, setUserError] = useState(false);
    const [passError, setPassError] = useState(false);

    const [check1, setCheck1] = useState(false)
    const [check2, setCheck2] = useState(false)
    const [authenticated, setAuthenticated] = useState(false)

    // Executes only if there are no errors
    useEffect(() => {
        if (!userError && !passError && check1 && check2) {
            LoginRequest(uname, pass).then(response => {
                switch (response.code) {
                    case 200:
                        setAuthenticated(true)
                        break;
                    case 400:
                    case 401:
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
            );
        }
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
    }

    const normalPass = () => {
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
        <>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
            >
                <Container
                    component="main"
                    maxWidth="sm"
                >
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
                                {userError ? errorName(msgUser) : normalName()}
                            </Grid>
                            <Grid >
                                {passError ? errorPass(msgPass) : normalPass()}
                            </Grid>
                            <Grid
                                container
                                direction="column"
                                justifyContent="space-between"
                                alignItems="flex-start">
                                <Grid sx={{ pb: 1 }}>
                                    <Button
                                        variant="contained"
                                        onClick={() => navigate(-1)}
                                        sx={{ mt: 3, ml: 1, mr: 2 }}
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        variant="contained"
                                        onClick={() => handleLogin()}
                                        sx={{ mt: 3, ml: 1 }}
                                    >
                                        Log in
                                    </Button>
                                </Grid>
                                <Grid sx={{ pl: 1.5 }}>
                                    <Link to="/signup" variant="body2">
                                        {"Don't have an account yet? Signup!"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                    {authenticated && navigate("/dashboard")}
                </Container >
            </Box>
        </>
    );
}