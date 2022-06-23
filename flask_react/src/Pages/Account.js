
import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import { visuallyHidden } from '@mui/utils';
import { alpha } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import TableContainer from '@mui/material/TableContainer';
import TableSortLabel from '@mui/material/TableSortLabel';
import FilterListIcon from '@mui/icons-material/FilterList';
import TablePagination from '@mui/material/TablePagination';
import FormControlLabel from '@mui/material/FormControlLabel';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function Account() {
    const paperStyle = { padding: 20, width: '75%' }
    return (
        <Box>
            <Box
                border="dashed"
                component="main"
                sx={{
                    pl: 30,
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                    <Paper elevation={10} style={paperStyle}
                        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                        <Typography component="h1" variant="h4" gutterBottom
                            sx={{ textAlign: 'center' }}>Account</Typography>
                        <Grid item xs={6}>
                            <Grid >
                                <TextField
                                    disabled
                                    id="fname"
                                    label="First name"
                                    defaultValue="First name"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid >
                                <TextField
                                    disabled
                                    id="lname"
                                    label="Last name"
                                    defaultValue="Last name"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid >
                                <TextField
                                    id="Username"
                                    label="Username"
                                    defaultValue="Username"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid >
                                <TextField
                                    id="email"
                                    label="E-mail"
                                    defaultValue="e-mail"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid alignitems="center">
                                <Button
                                    variant="contained"
                                    sx={{ mt: 3, ml: 1 }}
                                    // onclick={(e) => handleSave}
                                    >
                                    Save
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>
            </Box >
        </Box >
    );
}