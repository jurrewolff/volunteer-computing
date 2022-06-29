/*
 * Maakt het mogelijk om uit te loggen.
 * GET request voor logout.
 *
 */
/////////////////DEZE PAGINA MAG WEEEEEEEEEEEEEEEEEEEEEEEG!/////////////////////////////////////

import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom"

import Button from '@mui/material/Button';

export const LogoutRequest = (props) => {
    const [data, setData] = useState([{}])
    const [clicked, setClicked] = useState(false)

    const navigate = useNavigate();

    useEffect(() => {
        if (clicked) {
            console.log("clicked the logout button")
            const requestOptions = {
                method: 'GET',
                headers: {}
            };
            fetch("/api/logout", requestOptions)
                .then((response) => {
                    response.json()
                })
                .then((result) => {
                    setData(result)
                })
            navigate("/redirect");
            setClicked(false);
        }
    }, [clicked]);

    return (
        <div>
            <Button
                variant="contained"
                onClick={() => setClicked(true)}
                sx={{ mt: 3, ml: 1 }}>
                Log out
            </Button>
        </div>
    );
}
