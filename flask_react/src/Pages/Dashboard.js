import React from 'react'; // niet per se nodig nu, toekomst wss wel
import './Dashboard.css';

import ResponsiveAppBar from '../Components/Navbar';
import PermanentDrawerLeft from '../Components/SideMenu';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Dashboard = () => {
  return (
    <Box>
      <ResponsiveAppBar />
      <PermanentDrawerLeft />
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
  );
};

export default Dashboard;
