import React from 'react';
import './Login.css';
import { UploadRequest } from '../Actions/uploadFile';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import PermanentDrawerLeft from '../Components/SideMenu';


import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import ToggleButton from '@mui/material/ToggleButton';
import CheckIcon from '@mui/icons-material/Check';



export default function Upload() {
    const paperStyle = { padding: 20, margin: "20px auto" }

    const [selected, setSelected] = useState();
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [quorum, setQuorum] = useState(1);
    const [trust_level, setTrustlevel] = useState(0.8);

    const changeTrust = e => {
        console.log(e.target.value);
        setTrustlevel(e.target.value);
    }

    const changeQuorum = e => {
        setQuorum(e.target.value);
    }

    let user_cookie = Cookies.get("user_id")
    let research_cookie = Cookies.get("is_researcher")

    const navigate = useNavigate();


    useEffect(() => {
        if (!user_cookie) {
            console.log("User not logged in, redirecting to login page")
            return navigate('/login')
        }

        if (research_cookie == 0) {
            console.log("User unauthorized, redirecting to dashboard")
            return navigate('/dashboard')
        }
    }, [true]);

    return (
        <>
                <PermanentDrawerLeft />
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper elevation={10} style={paperStyle}
                    sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" gutterBottom
                        sx={{ textAlign: 'center' }}>
                        Upload your project here
                    </Typography>
                    <Divider variant="middle" />
                    <Grid container justifyContent="center" spacing={3}>
                        <Grid item xs={6}>
                            <Grid >
                                Title of the project:
                                <TextField
                                    margin="normal"
                                    required
                                    id="name"
                                    label="Project name"
                                    variant="outlined"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Grid>
                            <Grid >
                                Description of the project:
                                <TextField
                                    margin="normal"
                                    required
                                    id="description"
                                    label="Project description"
                                    variant="outlined"
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </Grid>
                            <Grid >
                                Random Validation:
                                <ToggleButton
                                    value="check"
                                    selected={selected}
                                    onChange={() => { setSelected(!selected) }}
                                >
                                    <CheckIcon />
                                </ToggleButton>
                            </Grid>
                            <Grid >
                                Amount of people to validate results:
                                <Slider
                                    defaultValue={1}
                                    step={1}
                                    // marks={{value: 0, label='Low trust'}, {value: 1, label='High trust'}}
                                    min={1}
                                    max={5}
                                    valueLabelDisplay="auto"
                                    onChange={changeQuorum}
                                />
                            </Grid>
                            <Grid>
                                Trust level:
                                <Slider
                                    defaultValue={0.8}
                                    step={0.1}
                                    // marks={{value: 0, label='Low trust'}, {value: 1, label='High trust'}}
                                    min={0.1}
                                    max={1}
                                    valueLabelDisplay="auto"
                                    onChange={changeTrust}
                                />
                            </Grid>

                            <Grid>
                                <div>
                                    Upload .c file:
                                    <input type="file" id="file" accept=".c"/>
                                    Upload input file:
                                    <input type="file" id="input" />
                                </div>
                            </Grid>
                            <Grid container justifyContent="center">
                                < UploadRequest
                                    name={name}
                                    description={description}
                                    quorum={quorum}
                                    always_check={selected}
                                    trust_level={trust_level}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </>
    );
}
