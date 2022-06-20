import React from 'react'; // niet per se nodig nu, toekomst wss wel
import './Dashboard.css';



import ResponsiveAppBar from '../Components/Navbar2';
import PermanentDrawerLeft from '../Components/SideMenu';


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';


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