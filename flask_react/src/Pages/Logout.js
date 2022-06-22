/* Logout page met alleen een knop om uit te loggen. */

import React from 'react';

import { LogoutRequest } from '../Actions/logoutRequest'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ResponsiveAppBar from '../Components/Navbar';
import PermanentDrawerLeft from '../Components/SideMenu';
import Box from '@mui/material/Box';


export default function Logout() {
    return (
        <Box>
        <ResponsiveAppBar />
        <PermanentDrawerLeft />
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
            <Grid alignitems="center">
                < LogoutRequest />
            </Grid>
        </Container>
        </Box>
    );
}
