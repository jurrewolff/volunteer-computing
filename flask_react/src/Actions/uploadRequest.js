/*
 * Voor het registreren van een gebruiker. Werkt nu alleen met mockup database,
 * waarbij alleen username en ww vereist zijn.
 * code 200: is goed, alle andere zijn erros.
 */

import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Routes, Route } from "react-router-dom"
import DashBoard from "../Pages/Dashboard"

// import axios from 'axios';

export const UploadRequest = (props) => {

    const [data, setData] = useState([{}])
    const [clicked, setClicked] = useState(false)
    const [file, setFile] = useState()

    const [selectedFile, setSelectedFile] = useState();
    const [isSelected, setIsSelected] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsSelected(true);
    };




    const handleSubmission = () => {
        const formData = new FormData();
        formData.append('File', selectedFile);
        // alles appenden aan formdata
        const requestOptions = {
            method: 'POST',
            headers: {
                'content-type': 'multipart/form-data',
                'name': "kaas",
                'description': "kaas",
                'block_size': "1",
                'owner': "kaas",
                'random_validation': "1",
                'max_runtime': "1",
            },

            body: formData
        };
        fetch("/upload", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setData(result)
                console.log({ result })
            });

        // const url = 'http://localhost:3000/upload';

        // const config = {
        //     headers: {
        //         'content-type': 'multipart/form-data',
        //     },
        // };
        // axios.post(url, formData, config).then((response) => {
        //     console.log(response.data);
        // });

    }

    // useEffect(() => {
    //     if (clicked) {
    // console.log(input)
    // console.log(file)
    // console.log(props.file)
    // const requestOptions = {
    //     method: 'POST',
    //     headers: {
    //         'file': props.file,
    //         'input': props.input,
    //         'name': props.name,
    //         'description': props.description,
    //         'block_size': props.block_size,
    //         'owner': props.owner,
    //         'random_validation': props.random_validation,
    //         'max_runtime': props.maxruntime,
    //     }
    // };
    // fetch("/upload", requestOptions)
    //     .then((response) => response.json())
    //     .then((result) => {
    //         setData(result)
    //         console.log({ result })
    //     });

    // setClicked(false)
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [clicked, props.fName, props.pass]);

    return (
        <>
            <input type="file" name="file" onChange={changeHandler} />
            {isSelected ? (
                <div>
                    <p> file is selected</p>
                    {/* <p>Filename: {selectedFile.name}</p>
                    <p>Filetype: {selectedFile.type}</p>
                    <p>Size in bytes: {selectedFile.size}</p>
                    <p>
                        lastModifiedDate:{' '}
                        {selectedFile.lastModifiedDate.toLocaleDateString()}
                    </p> */}
                </div>
            ) : (
                <p>Select a file to show details</p>
            )}
            <div>
                <button onClick={handleSubmission}>Submit</button>
            </div>
            {/* <Grid>
                <Button
                    variant="contained"
                    component="label"
                >
                    Upload Input
                    <input
                        type="file"
                        id="fileinput"
                        hidden
                    />
                </Button>
            </Grid> */}
            {/* <Grid>
                <Button
                    variant="contained"
                    component="label"
                >
                    Upload Input
                    <input
                        type="file"
                        // onChange={(e) => handleChangeInput(e)}
                        hidden
                    />
                </Button>
            </Grid> */}
            {/* <Grid>
                <Button
                    variant="contained"
                    onClick={() => setClicked(true)}
                    sx={{ mt: 3, ml: 1 }}>
                    Upload!
                </Button>
            </Grid>
            <Routes>
                <Route path="/login" element={<DashBoard />} />
            </Routes> */}
        </>
    );
}