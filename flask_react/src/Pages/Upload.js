import React from 'react';
import './Login.css';
import { useState, useEffect } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Routes, Route, useNavigate } from "react-router-dom"

export default function Upload() {
    const paperStyle = { padding: 20, margin: "20px auto" }
	const navigate = useNavigate();

    const [clicked, setClicked] = useState(false)
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [block_size, setBlocksize] = useState();
    const [random_validation, setValidation] = useState();
    const [max_runtime, setRuntime] = useState();
	const [owner, setOwner] = useState();
    const [qorum, setQorum] = useState();

	useEffect(() => {
        if (clicked) {
			const formData = new FormData()
			const codeFile = document.getElementById('file').files[0]
			const inputFile = document.getElementById('input').files[0]
			formData.append('file', codeFile)
			formData.append('input', inputFile)
			console.log(codeFile)
			console.log(inputFile)
            fetch("/upload", {method: 'POST',
							  headers: {'name': name,
										'description': description,
										'block_size': block_size,
										'owner': owner,
										'random_validation': random_validation,
										'max_runtime': max_runtime,
                                        'qorum': qorum
										},
							  body: formData})
                .then((response) => response.json())
                .then((result) => {
                    console.log({ result })
                });

            navigate('/dashboard');
            setClicked(false)
        }
	}, [clicked]);

    return (
        <>
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper elevation={10} style={paperStyle}
                    sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" gutterBottom
                        sx={{ textAlign: 'center' }}>
                        Upload Project
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
                                <TextField
                                    margin="normal"
                                    required
                                    id="owner"
                                    label="Owner?"
                                    variant="outlined"
                                    onChange={(e) => setOwner(e.target.value)}
                                />
                            </Grid>
							<Grid >
                                <TextField
                                    margin="normal"
                                    required
                                    id="random_validation"
                                    label="Random validation?"
                                    variant="outlined"
                                    onChange={(e) => setValidation(e.target.value)}
                                />
                            </Grid>
							<Grid >
                                <TextField
                                    margin="normal"
                                    required
                                    id="max_runtime"
                                    label="Max runtime?"
                                    variant="outlined"
                                    onChange={(e) => setRuntime(e.target.value)}
                                />
                            </Grid>
                            <Grid >
                                <TextField
                                    margin="normal"
                                    required
                                    id="qorum"
                                    label="Qorum?"
                                    variant="outlined"
                                    onChange={(e) => setQorum(e.target.value)}
                                />
                            </Grid>
							<Grid>
							<div>
								<input type="file" id="file"/>
								<input type="file" id="input"/>
							</div>
							</Grid>
							<Button
								variant="contained"
								onClick={() => setClicked(true)}
								sx={{ mt: 3, ml: 1 }}>
								Upload Project
							</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </>
    );
}
