import React from "react";
import { Link } from "react-router-dom"

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function Footer() {
    return (
        <Box
            backgroundColor={'black'}
            sx={{ p: 10 }}>
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"

                // alignItems="center"
                // container
                // justifyContent="space-between"
                display="flex"
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                alignItems="flex-start"
                sx={{ pb: 4 }}
            >

                <Grid item xs={2}>
                    <Typography variant="h6" color="common.white">
                        Account
                    </Typography>
                    <Typography color="common.white">
                        {/* <ul>
                            <li><Link to="/Login"><i>Link 1</i></Link></li>
                            <li><Link to="/Signup"><i></i>Link 2</Link></li>
                        </ul> */}
                    </Typography>

                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item xs={2}>
                    <Typography variant="h6" color="common.white">
                        Page items
                    </Typography>
                    <Typography color="common.white">
                        {/* <ul>
                            <li><Link to="/About"><i>Link 1</i></Link></li>
                            <li><Link to="/Scientist"><i></i>Link 2</Link></li>
                            <li><Link to="/Volunteer"><i></i>Link 2</Link></li>
                            <li><Link to="/....."><i></i>Link 2</Link></li>
                        </ul> */}
                    </Typography>

                </Grid>
                <Grid item xs={2} >
                    <Typography variant="h6" color="common.white">
                        Contact
                    </Typography>
                    <Typography color="common.white">
                        pse@pse.nl
                        uva
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                container
                justifyContent="center"
                alignItems="center">
                <Typography variant="caption" color="common.white">Copyright © Groep G</Typography>

            </Grid>
        </Box >
    );

}





