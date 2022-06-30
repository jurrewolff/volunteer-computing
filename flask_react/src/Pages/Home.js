/*
 * HOMEPAGE.
 * This is the landing page of the website.
 * Here the information about the solution out product provides is displayed,
 * aswell as a short 'about us' section, explanation of the scientist and
 * volunteer roll and a broader description of the product.
 * The navbar functionality is called from the homepagenav page.
 * The id's for each element are used in the navbar page for scrolling.
 */

// Package and functionality imports
import Footer from '../Components/Footer';
import Cookies from 'js-cookie';

// Material ui imports
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom"
import Image from '../Images/back2.jpg';

import { useState } from 'react';
import { Link } from 'react-router-dom';


// Defines the used style throughout the homepage
const styles = {
    base: {
        backgroundImage: `url(${Image})`,
        width: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'

    },
    // #dce775
    // #ffffa6
    paperContainer: {
        background: 'linear-gradient(45deg, #FFF 30%, #ffffa6 90%)',
        width: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }
};

export default function Home() {
    const [clicked, setClicked] = useState(false);

    const NotLoggedIn = () => {
        return (
            <Link to="./SignUp" onClick={clickButton}>
                <Button variant="contained" sx={{ bgcolor: '#f44336', textDecoration: 'none' }}>SIGN UP NOW</Button>
            </Link>
        );
    };

    const LoggedIn = () => {
        return (
            <Link to="./dashboard" onClick={clickButton}>
                <Button variant="contained" sx={{ bgcolor: '#f44336', textDecoration: 'none' }}>GO TO DASHBOARD</Button>
            </Link>
        )
    };

    function clickButton() {
        setClicked(!clicked)
    }

    return (<>
        <Grid
            justifyContent="center"
            alignItems="center"
        // sx={{ pl: 10, pr: 10 }}
        >
            <Grid
                container
                id="top"
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                justifyContent="center"
                alignItems="center"
                sx={{ pt: 10 }}
            >
                <Grid item xs={8} sx={{ pb: 5 }} style={styles.base}>
                    <Box sx={{ pr: 20, pl: 10 }}>
                        <Toolbar />
                        <Typography
                            id="Top" variant="h3" gutterBottom component="div"
                        >
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
                        {Cookies.get("user_id") ? LoggedIn() : NotLoggedIn()}

                        {/* <Link
                            to="./SignUp"
                            onClick={clickButton}>
                            <Button variant="contained">Signup now</Button>
                        </Link> */}
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box
                        sx={{ pr: 5 }}>
                        <Toolbar />
                        Image...
                    </Box>
                </Grid>

            </Grid>
            <Grid>
                <Paper style={styles.paperContainer}>
                    <Box component="main" sx={{ color: '#000', pl: 10, pr: 10, pb: 10 }}>
                        <Toolbar />

                        <Typography id="About" variant="h4" gutterBottom component="div">
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

                        <Typography id="Scientist" variant="h4" gutterBottom component="div">
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

                        <Typography id="Volunteer" align="right" variant="h4" gutterBottom component="div">
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

                        <Typography id="Product" variant="h4" gutterBottom component="div">
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
