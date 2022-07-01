/*
 * NAVIGATION BAR
 * The general use navigation bar is visible throughout the whole page as header.
 * The app-bar contains buttons to the homepage, in the logo as well as in the about
 * button. On the right there is a toggle menu containing redirects that are rendered
 * depending on user-status. Whenever a user is not logged in, options for signup and 
 * login, and when logged in, options for dashboard, account information and logout.
 * The navigation bar is visible throughout the whole page as header.
 */

import * as React from 'react';
import Cookies from 'js-cookie'
import { Link } from "react-router-dom"
import { animateScroll as scroll } from 'react-scroll';

// Material-UI imports
import { makeStyles } from '@mui/styles';
import { SvgIcon } from '@mui/material';
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
import Ava from '../Images/icon.svg';

// ----------------------------------------------------------------------

// STYLING
const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #4987b9 30%, #dce775 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 255, 255, 0.06)',
    color: '#bc2e1e',
    height: 70,
    padding: '0 30px',
    textShadow: '0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 1px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15)',
  },
});

// ----------------------------------------------------------------------

// NAVIGATION APP BAR
const ResponsiveAppBar = (props) => {
  const classes = useStyles();
  const Items = ['About', 'Scientist', 'Volunteer'];

  // Constants for handling appbar-features
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const { window } = props;
  const [logOutStatus, setLogoutStatus] = React.useState("");

  // Handles appbar-features
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

  const toggleToElement = (element) => {
    scroll.scrollToTop()
  };

  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="0 0 474.91 518.56" />
      </SvgIcon>
    );
  };

  // USER-LOG STATUS
  // Handles the user-account logout request
  const handleLogOut = () => {
    const requestOptions = {
      method: 'GET',
      headers: {}
    };
    fetch("/api/logout", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setLogoutStatus(result)
      })
  };


  // Redirects to a page
  const makeLink = (page, link, element) => {
    return (
        <Box >
      <MenuItem key={page} disablePadding sx={{ flexGrow: 1, mr: 1, display: { xs: 'none', md: 'flex' } }} >
        <Link to={link} style={{ textDecoration: 'none' }}>
            <Button
              sx={{ color: 'white', textAlign: 'left' }}
            >
              {page}
              {toggleToElement(element)}
            </Button>
          </Link>
          </MenuItem>
        </Box >
    )
  };

  // Renders menu-options based on user-status
  const AccountNotLoggedIn = () => {
    return (
      <>
      <MenuItem key={'Login'} onClick={handleCloseUserMenu}>
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <Typography textAlign="center">{'Login'}</Typography>
        </Link>
      </MenuItem>
      <Box>
        <MenuItem key={'Signup'} onClick={handleCloseUserMenu}>
        <Link to="/signup" style={{ textDecoration: 'none' }}>
          <Typography textAlign="center">{'Sign up'}</Typography>
        </Link>
        </MenuItem>
      </Box>
    </>
    )
};

  const AccountLoggedIn = () => {
    return (
      <>
        <MenuItem key={'Dashboard'} onClick={handleCloseUserMenu}>
          <Link to="/dashboard" style={{ textDecoration: 'none' }}>
            <Typography textAlign="center">{'Dashboard'}</Typography>
          </Link>
        </MenuItem>
        <MenuItem key={'Account'} onClick={handleCloseUserMenu}>
          <Link to="/account" style={{ textDecoration: 'none' }}>
            <Typography textAlign="center">{'Account'}</Typography>
          </Link>
        </MenuItem>
        <Box>
          <MenuItem key={'Logout'} onClick={handleLogOut}>
            <Link to="/redirect" style={{ textDecoration: 'none ' }}>
              <Typography textAlign="center">{'Logout'}</Typography>
            </Link>
          </MenuItem>
        </Box>
      </>
    )
  };

  return (
    <AppBar position="sticky" className={classes.root}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters >
          {/* <SvgIcon component={OwnIcon} inheritViewBox sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <HomeIcon />
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
                ':hover': {
                  color: '#00315c',
                },
              textDecoration: 'none',
            }}
          >
            Compunity
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
            </Menu>
          </Box>
          {/* <SvgIcon component={OwnIcon} inheritViewBox sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <HomeIcon />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>
          {/* Links to the homepage */}
          {makeLink("About", "/", 'About')}
          {makeLink("Volunteer", "/", 'Volunteer')}
          {makeLink("Scientist", "/", 'Scientist')}

          {/* The right toggle menu */}
          <Box sx={{ flexGrow: 0, marginLeft: "auto" }} >
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar sx={{ bgcolor: '#727dff' }}
                  src={Ava} />
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
              <Box>
                {Cookies.get("user_id") ? AccountLoggedIn() : AccountNotLoggedIn()}
              </Box>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
