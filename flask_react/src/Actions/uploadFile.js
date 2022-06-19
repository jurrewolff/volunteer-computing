import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import React from 'react'


export const FileUpload = (props) => {

    const [data, setData] = useState([{}])
    const [clicked, setClicked] = useState(false)
    const hiddenFileInput = React.useRef(null);


    // const handleClick = event => {
    //     hiddenFileInput.current.click();
    // };

    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        props.handleFile(fileUploaded);
    };

    useEffect(() => {
        if (clicked) {
            hiddenFileInput.current.click();
            const requestOptions = {
                method: 'POST',
                headers: {
                    'name': props.fName,
                    'description': props.pass
                    // 'description': props.pass
                    // 'description': props.pass
                }
            };
            fetch("/signup", requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    setData(result)
                    console.log({ result }) //DELETE
                });

            setClicked(false)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [clicked, props.fName, props.pass]);

    return (
        <div>

            <Button variant="contained" onClick={() => setClicked(true)} sx={{ mt: 3, ml: 1 }}>
                Upload a file
            </Button>
            <input
                type="file"
                ref={hiddenFileInput}
                onChange={handleChange}
                style={{ display: 'none' }}
            />
        </div >
    );
}