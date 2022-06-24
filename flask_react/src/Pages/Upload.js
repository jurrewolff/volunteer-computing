import React from 'react';
import './Login.css';
import { useState } from 'react';
import { UploadRequest } from '../Actions/uploadFile';

import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ToggleButton from '@mui/material/ToggleButton';
import CheckIcon from '@mui/icons-material/Check';

export default function Upload() {
    const paperStyle = { padding: 20, margin: "20px auto" }

    const [selected, setSelected] = useState();
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [block_size, setBlocksize] = useState();

    return (
        <>
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper elevation={10} style={paperStyle}
                    sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" gutterBottom
                        sx={{ textAlign: 'center' }}>
                        Upload your project here
                    </Typography>
                    <Divider variant="middle" />
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
							<Grid >
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
                                <TextField
                                    margin="normal"
                                    required
                                    id="block_size"
                                    label="Block size"
                                    variant="outlined"
                                    onChange={(e) => setBlocksize(e.target.value)}
                                />
                            </Grid>
							<Grid >
                                Enable doublechecking all inputs?
                                <ToggleButton
                                    value="check"
                                    selected={selected}
                                    onChange={() => {setSelected(!selected)}}
                                >
                                    <CheckIcon />
                                </ToggleButton>
                            </Grid>
							
                            <Grid>
							<div>
								<input type="file" id="file"/>
								<input type="file" id="input"/>
							</div>
							</Grid>
							<Grid alignitems="center">
                                < UploadRequest
                                    name={name}
                                    description={description}
                                    block_size={block_size}
                                    always_check={selected}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </>
    );
}
