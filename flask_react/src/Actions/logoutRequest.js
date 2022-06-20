/*
 * Maakt het mogelijk om uit te loggen.
 * GET request voor logout.
 *
 */

import { useState, useEffect } from 'react'

import Button from '@mui/material/Button';

export const LogoutRequest = (props) => {
    const [data, setData] = useState([{}])
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        if (clicked) {
            const requestOptions = {
                method: 'GET',
                headers: {}
            };
            fetch("/logout", requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    setData(result)
                })

            setClicked(false)
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
