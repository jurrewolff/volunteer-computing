import React from 'react';

import ResponsiveAppBar from '../Components/Navbar';
import PermanentDrawerLeft from '../Components/SideMenu';
import Box from '@mui/material/Box';
  
const Results = () => {
  return (
    <Box>
    <ResponsiveAppBar />
    <PermanentDrawerLeft />
    <Box
        component="main"
        sx={{
            pl: 30,
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
        }}
        >
    <div>
      <h1>Researchers can view the results of submitted projects here.</h1>
    </div>
    </Box>
    </Box>
    
  );
};
  
export default Results;