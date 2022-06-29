/*
 *
 *
 */
import Nav from '../Components/HomePageNav';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { SignupRequest } from '../Actions/signupRequest';

import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function Signup() {
    const navigate = useNavigate();
    const paperStyle = { padding: 20, margin: "20px auto" }
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const [pass, setPass] = useState("");
    const [inst, setInst] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [uname, setUname] = useState("");
    const [email, setEmail] = useState("");
    const [background, setBackground] = useState("");

    const [msgPass, setMsgPass] = useState("")

    const [passError, setPassError] = useState(false);
    const [fnameError, setFnameError] = useState(false);
    const [lnameError, setLnameError] = useState(false);
    const [unameError, setUnameError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const [check1, setCheck1] = useState(false)
    const [check2, setCheck2] = useState(false)
    const [check3, setCheck3] = useState(false)
    const [check4, setCheck4] = useState(false)
    const [check5, setCheck5] = useState(false)

    const [clicked, setClicked] = useState(true)
    const [isScientist, setIsScientist] = useState('1');
    const [authenticated, setAuthenticated] = useState(false)

    function clickIsScientist() {
        setClicked(true)
        setIsScientist('1')
    }

    function clickIsVolunteer() {
        setClicked(false)
        setIsScientist('0')
    }

    const handleSignup = () => {
        if (fname === "" && isScientist) {
            setFnameError(true)
        } else {
            setFnameError(false)
            setCheck1(true)
        }

        if (lname === "" && isScientist) {
            setLnameError(true)
        } else {
            setLnameError(false)
            setCheck2(true)
        }

        if (uname === "") {
            setUnameError(true)
        } else {
            setUnameError(false)
            setCheck3(true)
        }

        if (email === "") {
            setEmailError(true)
        } else {
            setEmailError(false)
            setCheck4(true)
        }

        if (pass === "") {
            setPassError(true)
            setMsgPass("Password is required")
        } else {
            setPassError(false)
            setCheck5(true)
        }
    }

    useEffect(() => {
        if (!fnameError && !unameError && !emailError && !lnameError &&
            !passError && check1 && check2 && check3 && check4 && check5) {
            SignupRequest(email, pass, uname, lname, fname, inst,
                background, isScientist).then(response => {
                    switch (response.code) {
                        case 201:
                            setAuthenticated(true)
                            break;
                        case 400:
                        case 401:
                        case 409:
                        case 500:
                            setMsgPass(response.description)
                            setPassError(true)
                            break;
                        default:
                            setMsgPass("Something went wrong, not your fault")
                            setPassError(true)
                            break;
                    }
                }
                );
        }
    }, [fnameError, unameError, emailError, passError, lnameError, check1,
        check2, check3, check4, check5]);

    return (
        <>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
                sx={{ pt: 8 }}
            >
                <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                    <Paper elevation={10} style={paperStyle}
                        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                        <Typography component="h1" variant="h4" gutterBottom
                            sx={{ textAlign: 'center' }}>
                            Sign up
                        </Typography>
                        <Divider variant="middle" />
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <Grid >
                                    {
                                        <TextField
                                            required={isScientist}
                                            disabled={isScientist == '0'}
                                            margin="normal"
                                            variant="outlined"
                                            label={"First name"}
                                            error={fnameError}
                                            helperText={fnameError ? 'First name is required' : ' '}
                                            onChange={(e) => setFname(e.target.value)}
                                            sx={{ mb: -1.5 }}
                                        />
                                    }
                                </Grid>
                                <Grid >
                                    {
                                        <TextField
                                            required={isScientist}
                                            disabled={isScientist == '0'}
                                            margin="normal"
                                            variant="outlined"
                                            label="Last name"
                                            error={lnameError}
                                            helperText={lnameError ? 'Last name is required' : ' '}
                                            onChange={(e) => setLname(e.target.value)}
                                            sx={{ mb: -1.5 }}
                                        />
                                    }
                                </Grid>

                                <Grid >
                                    {
                                        <TextField
                                            margin="normal"
                                            disabled={isScientist == '0'}
                                            variant="outlined"
                                            label="Institution"
                                            onChange={(e) => setInst(e.target.value)}
                                            sx={{ mb: 1 }}
                                        />
                                    }
                                </Grid>
                                <Grid >
                                    {
                                        <TextField
                                            margin="normal"
                                            disabled={isScientist == '0'}
                                            variant="outlined"
                                            label="Background"
                                            onChange={(e) => setBackground(e.target.value)}
                                            sx={{ mb: 1 }}
                                        />
                                    }
                                </Grid>
                                <Grid >
                                    <TextField
                                        required
                                        margin="normal"
                                        variant="outlined"
                                        label="Username"
                                        error={unameError}
                                        helperText={unameError ? 'Username is required' : ' '}
                                        onChange={(e) => setUname(e.target.value)}
                                        sx={{ mb: -1.5 }}
                                    />
                                </Grid>
                                <Grid >
                                    <TextField
                                        required
                                        type="password"
                                        id="password"
                                        margin="normal"
                                        variant="outlined"
                                        error={passError}
                                        helperText={passError ? msgPass : ' '}
                                        label="Password"
                                        onChange={(e) => setPass(e.target.value)}
                                        sx={{ mb: -1.5 }}
                                    />
                                </Grid>
                                <Grid >
                                    <TextField
                                        required
                                        margin="normal"
                                        variant="outlined"
                                        error={emailError}
                                        helperText={emailError ? 'E-mail is required' : ' '}
                                        label="E-mail"
                                        onChange={(e) => setEmail(e.target.value)}
                                        sx={{ mb: -1.5 }}
                                    />
                                </Grid>
                                <Grid>
                                    <Grid>
                                        <SignupRequest
                                        // onClick={() => handleSignup()}          //// Nog checks op signup zetten!
                                        username={uname}
                                        pass={pass}
                                        eMail={email}
                                        fName={fname}
                                        lName={lname}
                                        inst={inst}
                                        isResearcher={isScientist}
                                        background={background}
                                        />

                                            {/* variant="contained"
                                            onClick={() => handleSignup()}
                                            sx={{ mt: 3, mb: 2, ml: 1 }}>
                                            Sign up
                                        </Button> */}
                                        <Button
                                            variant="contained"
                                            onClick={() => navigate(-1)}
                                            sx={{ mt: 3, mb: 2, ml: 1, mr: 2 }}>
                                            Back
                                        </Button>
                                    </Grid>
                                    <Grid>
                                        <Link
                                            to="/login"
                                            variant="body2" sx={{ ml: 1 }}
                                        >
                                            {"Already have an account? Login"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container direction={'column'} item xs={6}
                                justifyContent="center"
                                maxWidth="sm">
                                <Grid>
                                    <Paper style={paperStyle}>
                                        <Box><Typography variant="h4">Scientist </Typography></Box>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            In congue massa eu metus mattis pellentesque. Proin ac porta eros.
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'row-reverse',
                                            }}>
                                            <Checkbox {...label} checked={clicked}
                                                onChange={
                                                    (e) => {
                                                        setIsScientist(e.target.value)
                                                        clickIsScientist()
                                                    }
                                                }
                                                inputProps={{ 'aria-label': 'controlled' }} />
                                        </Box>
                                    </Paper>
                                </Grid>

                                <Divider orientation="horizontal" />

                                <Grid >
                                    <Paper style={paperStyle}>
                                        <Box><Typography variant="h4">Volunteer </Typography></Box>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit. In congue massa eu metus mattis pellentesque.
                                            Proin ac porta eros.
                                        </Typography>
                                        <Box sx={{
                                            display: 'flex',
                                            flexDirection: 'row-reverse',
                                        }}>
                                            <Checkbox {...label} checked={!clicked}
                                                onChange={
                                                    (e) => {
                                                        setIsScientist(e.target.value)
                                                        clickIsVolunteer()
                                                    }
                                                }
                                                inputProps={{ 'aria-label': 'controlled' }} />
                                        </Box>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                    {authenticated && navigate("/dashboard")}
                </Container>
            </Box>
        </>
    );
}