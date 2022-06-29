import * as React from 'react';
import Cookies from 'js-cookie'
import { Link } from "react-router-dom"
import { Link as scrollLink, animateScroll as scroll } from 'react-scroll';


import { makeStyles } from '@mui/styles';
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


// TODO cleanup
// TODO: Account page maken!

// style={{ backgroundColor: 'yellow' }}

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



const ResponsiveAppBar = (props) => {
  const classes = useStyles();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  // Van Lleyton homepage nav
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [logOutStatus, setLogoutStatus] = React.useState("");
  // ...


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

  const Items = ['About', 'Scientist', 'Volunteer'];


  const toggleToElement = (element) => {
    scroll.scrollToTop()
}

  // const makeLink = (page, link) => {
  //   return (
  //     <>
  //       <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
  //         <Link to={link}>
  //           <Button
  //             // key={page}
  //             // onClick={handleCloseNavMenu}
  //             sx={{ my: 2, color: 'white', display: 'block' }}
  //           >
  //             {page}
  //           </Button>
  //         </Link>
  //       </Box >
  //     </>
  //   )
  // };

  // TODO: Lleyton fix scroll
  const makeLink = (page, link, element) => {
    return (
        <Box >
      <MenuItem key={page} disablePadding sx={{ flexGrow: 1, mr: 1, display: { xs: 'none', md: 'flex' } }} >
        <Link to={link} style={{ textDecoration: 'none' }}>
            <Button
              // key={page}
              // onClick={handleCloseNavMenu}
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
      <MenuItem key={'Account'} onClick={handleCloseUserMenu}>
        <Link to="/account" style={{ textDecoration: 'none' }}>
          <Typography textAlign="center">{'Account'}</Typography>
        </Link>
      </MenuItem>
      <Box>
        <MenuItem key={'Logout'} onClick={handleLogOut}>
          <Typography textAlign="center">{'Logout'}</Typography>
        </MenuItem>
      </Box>
    </>
    )
};




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
                ':hover': {
                  color: '#00315c',
                },
              textDecoration: 'none',
              
            }}
          >
            CompuTeam
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
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
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

          {makeLink("About", "/", 'About')}
          {makeLink("Volunteer", "/", 'Volunteer')}
          {makeLink("Scientist", "/", 'Scientist')}


          <Box sx={{ flexGrow: 0, marginLeft: "auto" }} >
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar sx={{ bgcolor: '#f44336' }}
                  src="/broken-image.jpg" />
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
                {/* <MenuItem key={'Logout'} onClick={handleLogout}>
                  <Typography textAlign="center">{'Logout'}</Typography>
                </MenuItem> */}
                {/* TODO: wat doet logout request hier? */}
                <LogoutRequest/>
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
