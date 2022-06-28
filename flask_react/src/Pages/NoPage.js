import React from 'react'; // niet per se nodig nu, toekomst wss wel
import './NoPage.css';

import ResponsiveAppBar from '../Components/Navbar';
import PermanentDrawerLeft from '../Components/SideMenu';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const NoPage = () => {
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
          <h1>You have tried to access a non-existent page.</h1>
        </Container>
      </Box>
    </Box>
  );
};

export default NoPage;
