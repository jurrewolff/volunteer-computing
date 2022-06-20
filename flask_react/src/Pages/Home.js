import React from 'react'; // niet per se nodig nu, toekomst wss wel
import './Dashboard.css';

// const Home = () => {
//     return <h1>Home</h1>;
// };
import { useState } from 'react'
// export default Home;
import Nav from '../Components/HomePageNav'
import Footer from '../Components/Footer'



import { Link } from 'react-router-dom'
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

import Image from '../Images/grey.jpg';

const styles = {
    paperContainer: {
        background: 'rgba(0, 0, 0, 0.2)',
        // backgroundImage: `url(${Image})`,
        width: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }
};


// sx={{ textAlign: 'left' }}
// noWrap>{message}<
export default function Home() {
    const [clicked, setClicked] = useState(false);
    const linkVars = window.location.pathname.split("/").slice(2)


    // Function for the responsive button.
    // Ik snap niet waarom deze hier moet staan
    function clickButton() {
        setClicked(!clicked)
    }

    return (<>
        <Nav />
        <Grid
            justifyContent="center"
            alignItems="center"
        // sx={{ pl: 10, pr: 10 }}
        >
            <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                justifyContent="center"
                alignItems="center"
                sx={{ pt: 20 }}
            >
                <Grid item xs={8} sx={{ pb: 5 }}>
                    <Box sx={{ pr: 20, pl: 10 }}>
                        <Toolbar />
                        <Typography variant="h3" gutterBottom component="div">
                            Connecting scientists with computing resources with
                            volunteer computing
                        </Typography>
                        <Typography sx={{ pb: 3 }} >
                            s consectetur purus sit amet fermentum. Cras
                            justo odio, dapibus ac facilisis in, egestas eget quam.
                            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur
                            et. Cras mattis consectetur purus sit amet fermentum. Cras
                            justo odio, dapibus ac facilisis in, egestas eget quam. Morbi
                            leo risus, porta ac consectetur ac, vestibulum at eros. P
                            raesent commodo cursus magna, vel scelerisque nisl consectetur
                            et. Cras mattis consectetur purus sit amet fermentum. Cras justo
                            odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                            porta ac consectetur ac, vestibulum at eros. Praesent commodo
                            cursus magna, vel sce
                        </Typography>
                        <Link
                            to="./SignUp"
                            onClick={clickButton}>
                            <Button variant="contained">Signup now</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box
                        sx={{ pr: 5 }}>
                        <Toolbar />
                        Connecting scientists with computing resources with
                    </Box>
                </Grid>

            </Grid>
            <Grid>
                <Paper style={styles.paperContainer}>
                    <Box component="main" sx={{ pl: 10, pr: 10, pb: 10 }}>
                        <Toolbar />

                        <Typography variant="h4" gutterBottom component="div">
                            About
                        </Typography>

                        <Typography>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo
                            odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                            risus, porta ac consectetur ac, vestibulum at eros. Praesent
                            commodo cursus magna, vel scelerisque nisl consectetur et.
                            Cras mattis consectetur purus sit amet fermentums. Cras justo
                            odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                            isus, porta ac consectetur ac, vestibulum at eros. Praesent
                            commodo cursus magna, vel scelerisque nisl consectetur et.
                            Cras mattis consectetur purus sit amet fermentum. Cras justo
                            odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                            risus, porta ac consectetur ac, vestibulum at eros. Praesent
                            commodo cursus magna, vel scelerisque nisl consectetur et.
                            Cras mattis consectetur purus sit amet fermentum. Cras
                            justo odio, dapibus ac facilisis in, egestas eget quam.
                            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur
                            et. Cras mattis consectetur purus sit amet fermentum. Cras
                            justo odio, dapibus ac facilisis in, egestas eget quam. Morbi
                            leo risus, porta ac consectetur ac, vestibulum at eros. P
                            raesent commodo cursus magna, vel scelerisque nisl consectetur
                            et. Cras mattis consectetur purus sit amet fermentum. Cras justo
                            odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                            porta ac consectetur ac, vestibulum at eros. Praesent commodo
                            cursus magna, vel scelerisque nisl consectetur et. Cras mattis c
                            onsectetur purus sit amet fermentum. Cras justo odio, dapibus
                            ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                            consectetur ac, vestibulum at eros. Praesent commodo cursus
                            magna, vel scelerisque nisl consectetur et. Cras mattis
                            consectetur purus sit amet fermentum. Cras justo odio,
                            dapibus ac facilisis in, egestas eget quam. Morbi leo
                            risus, porta ac consectetur ac, vestibulum at eros.
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur et. Cras mattis consectetur purus sit
                            amet fermentum. Cras justo odio, dapibus ac facilisis
                            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                            vestibulum at eros. Praesent commodo cursus magna, vel s
                            celerisque nisl consectetur et. Cras mattis consectetur puru
                            s sit amet fermentum. Cras justo odio, dapibus ac facilisis
                            in, egestas eget quam. Morbi leo risus, porta ac consectetur
                            ac, vestibulum at eros. Praesent commodo cursus magna, vel
                            scelerisque nisl consectetur et. Cras mattis consectetur pu
                            rus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                            vestibulum at eros. Praesent commodo cursus magna, vel
                            scelerisque nisl consectetur et. Cras mattis consectetur purus
                            sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                            egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                            vestibulum at eros. Praesent commodo cursus magna, vel
                            scelerisque nisl consectetur et.

                        </Typography>
                    </Box>
                </Paper>
            </Grid>
            <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                justifyContent="center"
                alignItems="center"
                sx={{ pt: 5, pb: 5 }}
            >
                <Grid item xs={8} sx={{}}>
                    <Box sx={{ pr: 5, pl: 10 }}>

                        <Typography variant="h4" gutterBottom component="div">
                            Scientist
                        </Typography>

                        <Typography>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo
                            odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                            risus, porta ac consectetur ac, vestibulum at eros. Praesent
                            commodo cursus magna, vel scelerisque nisl consectetur et.
                            Cras mattis consectetur purus sit amet fermentum. Cras justo
                            odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                            isus, porta ac consectetur ac, vestibulum at eros. Praesent
                            commodo cursus magna, vel scelerisque nisl consectetur et.
                            Cras mattis consectetur purus sit amet fermentum. Cras justo
                            odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                            risus, porta ac consectetur ac, vestibulum at eros. Praesent
                            commodo cursus magna, vel scelerisque nisl consectetur et.
                            Cras mattis consectetur purus sit amet fermentum. Cras
                            justo odio, dapibus ac facilisis in, egestas eget quam.
                            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur
                            et. Cras mattis consectetur purus sit amet fermentum. Cras
                            justo odio, dapibus ac facilisis in, egestas eget quam. Morbi
                            leo risus, porta ac consectetur ac, vestibulum at eros. P
                            raesent commodo cursus magna, vel scelerisque nisl consectetur
                            et. Cras mattis consectetur purus sit amet fermentum. Cras justo
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={4} sx={{ pb: 5 }}>
                    <Box sx={{}}>
                        image
                    </Box>
                </Grid>
            </Grid>


            <Grid
                container
                direction="row"
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                justifyContent="flex-end"
                alignItems="center"
                sx={{ pt: 5, pb: 5 }}
            >
                <Grid item xs={4} sx={{ pb: 5 }}>
                    <Box sx={{ pl: 10 }}>
                        image
                    </Box>
                </Grid>
                <Grid item xs={8} sx={{}}>
                    <Box sx={{ pl: 5, pr: 10 }}>

                        <Typography align="right" variant="h4" gutterBottom component="div">
                            Volunteer
                        </Typography>

                        <Typography>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo
                            odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                            risus, porta ac consectetur ac, vestibulum at eros. Praesent
                            commodo cursus magna, vel scelerisque nisl consectetur et.
                            Cras mattis consectetur purus sit amet fermentum. Cras justo
                            odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                            isus, porta ac consectetur ac, vestibulum at eros. Praesent
                            commodo cursus magna, vel scelerisque nisl consectetur et.
                            Cras mattis consectetur purus sit amet fermentum. Cras justo
                            odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                            risus, porta ac consectetur ac, vestibulum at eros. Praesent
                            commodo cursus magna, vel scelerisque nisl consectetur et.
                            Cras mattis consectetur purus sit amet fermentum. Cras
                            justo odio, dapibus ac facilisis in, egestas eget quam.
                            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur
                            et. Cras mattis consectetur purus sit amet fermentum. Cras
                            justo odio, dapibus ac facilisis in, egestas eget quam. Morbi
                            leo risus, porta ac consectetur ac, vestibulum at eros. P
                            raesent commodo cursus magna, vel scelerisque nisl consectetur
                            et. Cras mattis consectetur purus sit amet fermentum. Cras justo
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid>
                <Paper style={styles.paperContainer}>
                    <Box sx={{ pr: 10, pl: 10, pb: 10, pt: 5 }}>

                        <Typography variant="h4" gutterBottom component="div">
                            Product
                        </Typography>

                        <Typography>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo
                            odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                            risus, porta ac consectetur ac, vestibulum at eros. Praesent
                            commodo cursus magna, vel scelerisque nisl consectetur et.
                            Cras mattis consectetur purus sit amet fermentum. Cras justo
                            odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                            isus, porta ac consectetur ac, vestibulum at eros. Praesent
                            commodo cursus magna, vel scelerisque nisl consectetur et.
                            Cras mattis consectetur purus sit amet fermentum. Cras justo
                            odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                            risus, porta ac consectetur ac, vestibulum at eros. Praesent
                            commodo cursus magna, vel scelerisque nisl consectetur et.
                            Cras mattis consectetur purus sit amet fermentum. Cras
                            justo odio, dapibus ac facilisis in, egestas eget quam.
                            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur
                            et. Cras mattis consectetur purus sit amet fermentum. Cras
                            justo odio, dapibus ac facilisis in, egestas eget quam. Morbi
                            leo risus, porta ac consectetur ac, vestibulum at eros. P
                            raesent commodo cursus magna, vel scelerisque nisl consectetur
                            et. Cras mattis consectetur purus sit amet fermentum. Cras justo
                        </Typography>
                    </Box>
                </Paper>
            </Grid>
            <Grid>
                <Footer />
            </Grid>
        </Grid>
    </>
    )
}