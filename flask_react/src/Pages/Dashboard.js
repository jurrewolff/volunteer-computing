import React from 'react'; // niet per se nodig nu, toekomst wss wel
import './Dashboard.css';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


// TODO FIXEN!!!
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import useTheme from '@mui/material/styles/useTheme'
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from '../Components/Theme'

import { createTheme } from '@mui/material/styles'
import PermanentDrawerLeft from '../Components/SideMenu';
import ResponsiveAppBar from '../Components/Navbar'


const Dashboard = () => {
  return (

    <ThemeProvider theme={theme}>
      <>
        <ResponsiveAppBar />
        <PermanentDrawerLeft />
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
            <Container maxWidth="lg" sx={{}}>
              <h1>This will be the user dashboard page with cute figures and info.</h1>
            </Container>
          </Box>
        </Box>
      </>
    </ThemeProvider>

  );
};

// data.delete_cookie("name")
// data.delete_cookie("user_id")

export default Dashboard;
