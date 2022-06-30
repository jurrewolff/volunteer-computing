/*
 * ACCOUNT PAGE.
 * Displays the account information of the user.
 * If the roll of the user is volunteer, the user is provided the choice to
 * apply for the scientist roll.
 */

// Package and functionality imports
import Cookies from 'js-cookie';
import { theme } from '../Components/Theme';
import { useEffect, useState } from 'react';
import PermanentDrawerLeft from '../Components/SideMenu';
import { ThemeProvider } from '@material-ui/core/styles'

// Material ui imports
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Account() {
    const paperStyle = { padding: 20, width: '80%' }

    const [pass, setPass] = useState("");
    const [inst, setInst] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [uname, setUname] = useState("");
    const [email, setEmail] = useState("");
    const [background, setBackground] = useState("");

    const [passError, setPassError] = useState(false);
    const [fnameError, setFnameError] = useState(false);
    const [lnameError, setLnameError] = useState(false);
    const [unameError, setUnameError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const [isScientist, setIsScientist] = useState(true);

    const [user, setUser] = useState({});

    useEffect(() => {
        if (Cookies.get("is_researcher") === "1") {
            setIsScientist(true);
            setFname(Cookies.get("fname"))
            setLname(Cookies.get("lname"))
            setInst(Cookies.get("institution"))
            setBackground(Cookies.get("background"))
        }

        setUname(Cookies.get("uname"))
        setEmail(Cookies.get("email"))
    }, [])



    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'username': Cookies.get("name"),
            }
        };

        fetch("/api/userdata", requestOptions)
            .then(res => res.json())
            .then(result => {
                setUser(result.data)
            })
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <PermanentDrawerLeft />
            <Grid
                container
                direction="column"
                sx={{ mt: -8, pl: 30 }}
                alignItems="center"
                justifyContent="center"
            >
                <Grid item
                    alignItems="center"
                    justifyContent="center">
                    <Typography variant="h3">
                        Account setting
                    </Typography>
                </Grid>
                <Divider />
                <Grid item>
                    <Box
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                            flexGrow: 1,
                            height: '100vh',
                            overflow: 'auto',
                            pl: 8
                        }}
                    >
                        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                            <Paper elevation={10} style={paperStyle}
                                sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                                <Typography
                                    variant="h5"
                                    gutterBottom
                                    sx={{ textAlign: 'center' }}
                                >
                                    Update information
                                </Typography>
                                <Grid
                                    container
                                    direction="column"
                                    justifyContent="space-between"
                                    alignItems="stretch"
                                    spacing={4}
                                >
                                    <Grid item>
                                        {isScientist &&
                                            < TextField
                                                disabled
                                                fullWidth
                                                id="fname"
                                                label="first name"
                                                value={user.first_name}
                                                variant="outlined"
                                                InputLabelProps={{ shrink: true }}
                                            />
                                        }
                                    </Grid>
                                    <Grid item>
                                        {isScientist &&
                                            <TextField
                                                disabled
                                                fullWidth
                                                id="lname"
                                                label="Last name"
                                                value={user.last_name}
                                                variant="outlined"
                                                InputLabelProps={{ shrink: true }}
                                            />}
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            fullWidth
                                            id="Username"
                                            label="Username"
                                            value={user.username}
                                            variant="outlined"
                                            InputLabelProps={{ shrink: true }}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            fullWidth
                                            id="email"
                                            label="E-mail"
                                            value={user.email}
                                            variant="outlined"
                                            InputLabelProps={{ shrink: true }}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid alignitems="center">
                                    <Button
                                        variant="contained"
                                        sx={{ mt: 3, ml: 1 }}
                                    >
                                        Save
                                    </Button>
                                </Grid>
                            </Paper>
                            {isScientist &&
                                <Paper elevation={10} style={paperStyle}
                                    sx={{ my: { xs: 4, md: 7 }, p: { xs: 2, md: 3 } }}>
                                    <Typography variant="h5">
                                        Apply for scientist role
                                    </Typography>
                                    <Typography sx={{ mb: 4 }}>
                                        With this rol you can...
                                        Fill in the following fields and apply!
                                    </Typography>
                                    <Grid >
                                        {
                                            <TextField
                                                fullWidth
                                                required={isScientist}
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
                                                fullWidth
                                                required={isScientist}
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
                                                fullWidth
                                                margin="normal"
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
                                                fullWidth
                                                margin="normal"
                                                variant="outlined"
                                                label="Background"
                                                onChange={(e) => setBackground(e.target.value)}
                                                sx={{ mb: 1 }}
                                            />
                                        }
                                    </Grid>
                                    <Grid alignitems="center">
                                        <Button
                                            variant="contained"
                                            sx={{ mt: 3, ml: 1 }}
                                        >
                                            Apply
                                        </Button>
                                    </Grid>
                                </Paper>}
                        </Container>
                    </Box >
                </Grid>
            </Grid>
        </ThemeProvider >

    );
}
