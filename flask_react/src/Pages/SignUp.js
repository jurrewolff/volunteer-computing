// SVP nog niet alle gecommende code weghalen, miss nog nodig in toekomst!!!!!


import React from 'react'; // niet per se nodig nu, toekomst wss wel
import './Login.css';
import { useState} from 'react';

import { SignupRequest } from '../Actions/signupRequest';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';


export default function Signup() {
    const paperStyle = { padding: 20, margin: "20px auto" }
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    // const [option1, setOption1] = React.useState(true);
    // const [option2, setOption2] = React.useState(false);
    const [clicked, setClicked] = useState(true)

    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [uname, setUname] = useState();
    const [inst, setInst] = useState();
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [isResearcher, setIsResearcher] = useState(0);
    const [background, setBackground] = useState();

    // UPGRADE in een statement
    // const fNameRef = useRef()
    // const lNameRef = useRef()
    // const uNameRef = useRef()
    // const institutionRef = useRef()
    // const eMailRef = useRef()
    // const passwordRef = useRef()
    // const choiceRef = useRef()

    // useEffect(() => {
    //     if (clicked) {
    //         // TODO check of shit is ingevuld of niet
    //         setClicked(false)
    //     }
    // }, [clicked])

    function clickIsResearcher() {
        setClicked(false)

        setIsResearcher(1)
    }

    function clickIsVolunteer() {
        setClicked(true)

        setIsResearcher(0)
    }

    return (
        <>
            {/* <h1>SignUp</h1> */}
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
                                <TextField
                                    margin="normal"
                                    required
                                    id="fname"
                                    // ref={fNameRef}
                                    label="First name"
                                    variant="outlined"
                                    onChange={(e) => setFname(e.target.value)}
                                />
                            </Grid>
                            <Grid >
                                <TextField
                                    margin="normal"
                                    required
                                    id="lname"
                                    label="Last name"
                                    variant="outlined"
                                    onChange={(e) => setLname(e.target.value)}
                                />
                            </Grid>
                            <Grid >
                                <TextField
                                    margin="normal"
                                    required
                                    id="uname"
                                    label="Username"
                                    variant="outlined"
                                    onChange={(e) => setUname(e.target.value)}
                                />
                            </Grid>
                            <Grid >
                                <TextField
                                    margin="normal"
                                    id="institution"
                                    label="Institution"
                                    variant="outlined"
                                    onChange={(e) => setInst(e.target.value)}
                                />
                            </Grid>
                            <Grid >
                                <TextField
                                    margin="normal"
                                    id="background"
                                    label="Background"
                                    variant="outlined"
                                    onChange={(e) => setBackground(e.target.value)}
                                />
                            </Grid>
                            <Grid >
                                <TextField
                                    margin="normal"
                                    required
                                    id="email"
                                    label="E-mail"
                                    variant="outlined"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Grid>
                            <Grid >
                                <TextField
                                    margin="normal"
                                    required
                                    id="password"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    onChange={(e) => setPass(e.target.value)}
                                />
                            </Grid>
                            <Grid alignitems="center">
                                < SignupRequest
                                    fName={fname} lName={lname} uName={uname}
                                    inst={inst} eMail={email} pass={pass}
                                    isResearcher={isResearcher} background={background}
                                />
                                <Link href="/login" variant="body2">
                                    {"Already have an account? Login"}
                                </Link>
                            </Grid>

                        </Grid>
                        <Grid container direction={'column'} item xs={6}
                            justifyContent="center"
                            maxWidth="sm">
                            <Grid>
                                <Paper style={paperStyle}>
                                    <Box><Typography variant="h4">Researcher </Typography></Box>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        In congue massa eu metus mattis pellentesque. Proin ac porta eros.
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row-reverse',
                                        }}>
                                        <Checkbox {...label} checked={!clicked}
                                            onChange={
                                                (e) => {
                                                    setIsResearcher(e.target.value)
                                                    clickIsResearcher()
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
                                        <Checkbox {...label} checked={clicked}
                                            onChange={
                                                (e) => {
                                                    setIsResearcher(e.target.value)
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
        </>
    );
}

// container
// justifyContent="stretch"
// alignItems="space-between"
// divider={<Divider orientation="horizontal" flexItem />}
// spacing={1}