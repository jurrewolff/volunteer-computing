import React from 'react'
import Button from '@mui/material/Button';
import { useRef, useState, useEffect } from 'react'

import { FileUpload } from '../Actions/uploadFile'
import { UploadRequest } from '../Actions/uploadRequest';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

import Radio from '@mui/material/Radio';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

import Paper from '@mui/material/Paper';



export default function Upload() {
    const paperStyle = { lm: "100px", padding: 20, margin: "20px auto" }

    const [clicked, setClicked] = useState(false)

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [block_size, setBlockSize] = useState("");
    const [owner, setOwner] = useState("");
    const [random_validation, setRandomValidation] = useState("");
    const [max_runtime, setMaxRuntime] = useState("");



    return (
        <>
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper elevation={10} style={paperStyle}
                    sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Grid>
                        <Grid>
                            <TextField
                                id="name"
                                label="name"
                                rows={4}
                                variant="filled"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Grid>
                        <Grid>
                            <TextField
                                id="Description"
                                label="Description"
                                multiline
                                rows={4}
                                variant="filled"
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Grid>
                        <Grid>
                            <TextField
                                id="block_size"
                                label="block_size"
                                variant="filled"
                                onChange={(e) => setBlockSize(e.target.value)}
                            />
                        </Grid>
                        <Grid>
                            <TextField
                                id="block_size"
                                label="block_size"
                                variant="filled"
                                onChange={(e) => setOwner(e.target.value)}
                            />
                        </Grid>
                        {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="blocksize">Block size</InputLabel>
                            <Select
                                labelId="block_size"
                                id="block_size"
                                value={block_size}
                                label="Block size"
                                onChange={(e) => setBlockSize(e.target.value)}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            <FormHelperText>With label + helper text</FormHelperText>
                        </FormControl> */}
                        <Grid>
                            <TextField
                                id="random_validation"
                                label="random_validation"
                                // rows={4}
                                variant="filled"
                                onChange={(e) => setRandomValidation((e.target).value)}
                            />
                        </Grid>
                        {/* <Grid>
                            <FormControl>
                                <FormLabel id="random_validation">Validation</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="A"
                                    name="radio-buttons-group"
                                    onChange={handleChange}
                                >
                                    <FormControlLabel value="0" control={<Radio />} label="0" />
                                    <FormControlLabel value="1" control={<Radio />} label="1" />
                                </RadioGroup>
                            </FormControl>
                        </Grid> */}
                        <Grid>
                            <TextField
                                id="maxRuntime"
                                label="maxRuntime"
                                // rows={4}
                                variant="filled"
                                onChange={(e) => setMaxRuntime((e.target).value)}
                            />
                        </Grid>
                        {/* <Grid>
                            <Select
                                labelId="maxRuntime"
                                id="demo-simple-select-helper"
                                value={max_runtime}
                                label="Max Runtime"
                                onChange={(e) => setMaxRuntime(e.target.value)}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </Grid> */}
                    </Grid>
                    <Grid>
                        {/* <Button
                            variant="contained"
                            component="label"
                        >
                            Upload File
                            <input
                                type="file"
                                onChange={(e) => handleChangeFile(e)}
                                hidden
                            />
                        </Button>
                        <Button
                            variant="contained"
                            component="label"
                        >
                            Upload Input
                            <input
                                type="file"
                                onChange={(e) => handleChangeInput(e)}
                                hidden
                            />
                        </Button> */}
                        {/* <Button
                            variant="contained"
                            component="label"
                        >
                            Upload File
                            <input
                                type="file"
                                hidden
                            />
                        </Button> */}
                        {/* <Button variant="contained" onClick={() => handleChange1()} sx={{ mt: 3, ml: 1 }}>
                            Upload file1
                            <input
                                type="file"
                                // ref={hiddenFileInput1}
                                onChange={(e) => setFile(e.target.files[0])}
                                // style={{ display: 'none' }}
                                hidden
                            />
                        </Button> */}

                        {/* <input
                            type="file"
                            // ref={hiddenFileInput1}
                            onChange={(e) => setFile(e.target.files[0])}
                        // style={{ display: 'none' }}
                        /> */}
                    </Grid>
                    <Grid>
                        {/* <Button variant="contained" onClick={() => setClicked(true)} sx={{ mt: 3, ml: 1 }}>
                            Upload file2
                        </Button>
                        <input
                            type="file"
                            ref={hiddenFileInput2}
                            onChange={(e) => setInput(e.target.files[0])}
                        // style={{ display: 'none' }}
                        /> */}
                    </Grid>
                    <Grid alignitems="center">
                        < UploadRequest
                            name={name}
                            description={description}
                            block_size={block_size}
                            owner={owner}
                            random_validation={random_validation}
                            max_runtime={max_runtime}
                        />
                    </Grid>
                </Paper>
            </Container>
        </>
    );
}
