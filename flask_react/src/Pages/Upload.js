import React from 'react'
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react'

import { FileUpload } from '../Actions/uploadFile'
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

import Paper from '@mui/material/Paper';



export const Test = (props) => {
    // const [data, setData] = useState([{}])
    const paperStyle = { padding: 20, margin: "20px auto" }



    const [clicked, setClicked] = useState(false)
    const hiddenFileInput = React.useRef(null);
    const [size, setSize] = React.useState(10);
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [rvalidation, setRvalidation] = React.useState();
    const [time, setTime] = React.useState('');

    const handleChange = (e) => {
        setRvalidation((e.target).value);
    };

    // const handleClick = event => {
    //     hiddenFileInput.current.click();
    // };

    // const handleChange = event => {
    //     const fileUploaded = event.target.files[0];
    //     props.handleFile(fileUploaded);
    // };

    return (
        <>
            <Grid component="main" maxWidth="sm" sx={{ mb: 4 }}>
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
                                label="Multiline"
                                multiline
                                rows={4}
                                variant="filled"
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Grid>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="blocksize">Blocksize</InputLabel>
                            <Select
                                labelId="size"
                                id="size"
                                value={size}
                                label="Size"
                                onChange={(e) => setSize(e.target.value)}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            <FormHelperText>With label + helper text</FormHelperText>
                        </FormControl>
                        <Grid>
                            <FormControl>
                                <FormLabel id="validation">Validation</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="A"
                                    name="radio-buttons-group"
                                    onChange={handleChange}
                                >
                                    <FormControlLabel value="A" control={<Radio />} label="A" />
                                    <FormControlLabel value="B" control={<Radio />} label="B" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid>
                            <Select
                                labelId="maxRuntime"
                                id="demo-simple-select-helper"
                                value={size}
                                label="Size"
                                onChange={(e) => setTime(e.target.value)}
                            >
                                {/* <MenuItem value="">
                            <em>None</em>
                        </MenuItem> */}
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </Grid>
                    </Grid>
                    <FileUpload
                        name={name} description={description} bsize={size}
                        rvalidation={rvalidation} time={time} />
                </Paper>
            </Grid>
        </>
    );
}
// Name desciption, blocksize, owner, randomvalidation, maxruntime

 // const navigate = useNavigate();


    // useEffect(() => {
    //     if (clicked) {
    //         const requestOptions = {
    //             method: 'POST',
    //             headers: {
    //                 'username': props.fName,
    //                 'password': props.pass
    //             }
    //         };
    //         fetch("/login", requestOptions)
    //             .then((response) => response.json())
    //             .then((result) => {
    //                 setData(result)
    //                 console.log({ result }) //DELETE
    //             })

    //         // navigate('/dashboard');
    //         setClicked(false)
    //     }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [clicked, props.fName, props.pass]);

