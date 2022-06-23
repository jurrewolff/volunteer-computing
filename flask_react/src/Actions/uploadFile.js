import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import React from 'react'
import { useNavigate } from "react-router-dom"


export const UploadRequest = (props) => {
    const [clicked, setClicked] = useState(false)
    const navigate = useNavigate();

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
							  headers: {'name': props.name,
										'description': props.description,
										'block_size': props.block_size,
										'random_validation': props.random_validation,
										'max_runtime': props.max_runtime,
                                        'qorum': props.qorum
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
        <div>
            <Button
                variant="contained"
                onClick={() => setClicked(true)}
                sx={{ mt: 3, ml: 1 }}>
                Upload!
            </Button>
        </div>
    );
}
