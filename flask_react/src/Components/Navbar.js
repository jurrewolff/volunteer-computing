import * as React from 'react';

import { makeStyles } from '@mui/styles';
import { LogoutRequest } from '../Actions/logoutRequest';



import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
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

import { positions } from '@mui/system';



import { Link } from "react-router-dom"

// TODO cleanup


// TODO: Account page maken!
const pages = ['Home'];
const settings = ['Account', 'Logout'];


// style={{ backgroundColor: 'yellow' }}

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #4987b9 30%, #dce775 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 255, 255, 0.06)',
    color: 'white',
    height: 70,
    padding: '0 30px',
  },
});



const ResponsiveAppBar = () => {
  const classes = useStyles();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // TODO: Logout request fixen
  const handleLogout = () => {
    LogoutRequest();
  };


  const makeLink = (page, link) => {
    return (
      <>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Link to={link}>
            <Button
              // key={page}
              // onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {page}
            </Button>
          </Link>
        </Box >
      </>
    )
  }


  return (
    <AppBar position="sticky" className={classes.root}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters >
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            CompuTeam
          </Typography>
          <Box
            sx={{ flexGrow: 0}}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key={'Account'} onClick={handleCloseUserMenu}>
                <Link to="/account">
                  <Typography textAlign="center">{'Account'}</Typography>
                </Link>
              </MenuItem>
              <Box>
                <MenuItem key={'Logout'} onClick={handleLogout}>
                  <Typography textAlign="center">{'Logout'}</Typography>
                </MenuItem>
              </Box>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  );
};


export default ResponsiveAppBar;
