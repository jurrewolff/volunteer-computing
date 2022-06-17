/* Logout page met alleen een knop om uit te loggen. */

import React from 'react';

import { LogoutRequest } from '../Actions/logoutRequest'

import Grid from '@mui/material/Grid';


export default function Logout() {
    const paperStyle = { padding: 20, width: '75%' }

    return (
        <Grid alignitems="center">
            < LogoutRequest />
        </Grid>
    );
}
