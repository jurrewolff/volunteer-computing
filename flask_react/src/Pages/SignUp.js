/*
 * SIGNUP PAGE.
 * The login page. Utilizes the fetch api which is implemented in
 * the loginRequest file. First the user input is evaluated then the login
 * request function is called
 * Depending on the return status, the response is handled accordingly.
 * The navbar functionality is called from the homepagenav page.
 */
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { SignupRequest } from '../Actions/signupRequest';

// Material ui imports
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Signup() {
    // Styling
    const paperStyle = { padding: 20, margin: "20px auto" }
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const navigate = useNavigate();

    // State variables for user and textfield
    const [pass, setPass] = useState("");
    const [inst, setInst] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [uname, setUname] = useState("");
    const [email, setEmail] = useState("");
    const [background, setBackground] = useState("");
    const [isScientist, setIsScientist] = useState('1');
    const [authenticated, setAuthenticated] = useState(false)

    // State variables for error handling and error messaging
    const [msgPass, setMsgPass] = useState("")
    const [passError, setPassError] = useState(false);
    const [fnameError, setFnameError] = useState(false);
    const [lnameError, setLnameError] = useState(false);
    const [unameError, setUnameError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    // Checks for first page rendering
    const [check1, setCheck1] = useState(false)
    const [check2, setCheck2] = useState(false)
    const [check3, setCheck3] = useState(false)
    const [check4, setCheck4] = useState(false)
    const [check5, setCheck5] = useState(false)

    const [clicked, setClicked] = useState(true)

    // 'XOR' toggle switch for selecting scientist or volunteer
    function clickIsScientist() {
        setClicked(true)
        setIsScientist('1')
    }

    function clickIsVolunteer() {
        setClicked(false)
        setIsScientist('0')
    }

    // Lost functionaility for correct error checking and error messaging
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

    // Lost functionality for correctly handling signup request
    useEffect(() => {
        if (uname !== "" && email !== "" && pass !== "" && fname !== ""
            && lname !== "" && inst !== "" && isScientist === '1') {
            setAuthenticated(true)
        }
        if (uname !== "" && email !== "" && pass !== "" && isScientist === '0') {
            setAuthenticated(true)
        }}, [uname, email, fname, pass, lname, inst, isScientist]);


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
                                        helperText={!emailError ? 'E-mail is required' : ' '}
                                        label="E-mail"
                                        onChange={(e) => setEmail(e.target.value)}
                                        sx={{ mb: -1.5 }}
                                    />
                                </Grid>
                                <Grid>
                                    <Grid>
                                        {/* Extensive way of signup and login request */}
                                        <SignupRequest
                                        username={uname}
                                        pass={pass}
                                        eMail={email}
                                        fName={fname}
                                        lName={lname}
                                        inst={inst}
                                        isResearcher={isScientist}
                                        background={background}
                                        authenticated={authenticated}
                                        />
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
                                {/* Box for the scientist roll with information */}
                                <Grid>
                                    <Paper style={paperStyle}>
                                        <Box><Typography variant="h4">Researchers </Typography></Box>
                                        <Typography>
                                            A Researchers is any person linked to an institution wishing to
                                            make use of the computational power our site provides.
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'row-reverse',
                                            }}>
                                            <Radio {...label} checked={clicked} shape="round"
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
                                    {/* Box for the volunteer roll with information */}
                                    <Paper style={paperStyle}>
                                        <Box><Typography variant="h4">Volunteer </Typography></Box>
                                        <Typography>
                                            A Volunteer is any person with adequate computing power
                                            wanting to help Researchers process their data.
                                        </Typography>
                                        <Box sx={{
                                            display: 'flex',
                                            flexDirection: 'row-reverse',
                                        }}>
                                            <Radio {...label} checked={!clicked} shape="round"
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
                </Container>
            </Box>
        </>
    );
}