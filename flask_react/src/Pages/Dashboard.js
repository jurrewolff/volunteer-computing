import React from 'react'; // niet per se nodig nu, toekomst wss wel
import './Dashboard.css';

import PermanentDrawerLeft from '../Components/SideMenu';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import useTheme from '@mui/material/styles/useTheme'
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from '../Components/Theme'

import { createTheme } from '@mui/material/styles'
import ResponsiveAppBar from '../Components/Navbar'
import Footer from '../Components/Footer'

import JumpPage from "../Actions/jumpPage"

const MyComponent = () => {
  const theme = useTheme();
  return <JumpPage bgcolor={theme.palette.background.default} width={100} height={100} />;
};

const Dashboard = () => {
  return (

    <ThemeProvider theme={theme}>
      <>
        <ResponsiveAppBar />
        <PermanentDrawerLeft />
        <MyComponent />
        {/* Andere features */}
        <Box>
          {/* <ResponsiveAppBar />
      <PermanentDrawerLeft /> */}
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

export default Dashboard;
