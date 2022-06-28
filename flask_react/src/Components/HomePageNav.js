/*
 * TODO
 *
 *
 */

import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { LogoutRequest } from '../Actions/logoutRequest';
import Cookies from 'js-cookie'


import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import FormControlLabel from '@mui/material/FormControlLabel';

import AccountCircle from '@mui/icons-material/AccountCircle';

//TODO
const drawerWidth = 240;
const navItems = ['About', 'Scientist', 'Volunteer', 'Product'];

/*
 * TODO
 */

const handleLogout = () => {
    LogoutRequest();
};


export default function Nav(props) {
    const { window } = props;
    const navigate = useNavigate();
    const [mobileOpen, setMobileOpen] = useState(false);

    // if (Cookies.get("user_id") != "")

    // const [auth, setAuth] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);

    const [logOutStatus, setLogoutStatus] = useState("");

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
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
    }

    const handleToggle = () => {
        if (props.home) {
            scroll.scrollToTop()
        }
        else {
            navigate("/")
        }
    }

    const container = window !== undefined ? () => window().document.body : undefined;


    const AccountNotLoggedIn = () => {
        return (
            <Box sx={{ p: 0, pl: 2 }}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <Link to="/login">
                        <MenuItem onClick={handleClose}>Login</MenuItem>
                    </Link>
                    <Link to="/signUp">
                        <MenuItem onClick={handleClose}>Signup</MenuItem>
                    </Link>
                </Menu>
            </Box>
        )
    }

    const AccountLoggedIn = () => {
        return (
            <Box sx={{ p: 0, pl: 2 }}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <Link to="/dashBoard">
                        <MenuItem onClick={handleClose}>Dashboard</MenuItem>
                    </Link>
                    <Link to="/">
                        <MenuItem onClick={handleLogOut}>Logout</MenuItem>
                    </Link>
                    <Link to="/userinfo">
                        <MenuItem onClick={handleClose}>Userinfo</MenuItem>
                    </Link>
                </Menu>
            </Box>
        )
    }

    return (
        <>
            <Box
                sx={{ display: 'flex' }}
            >
                <AppBar component="nav">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                            onClick={handleToggle}
                        // onClick={console.log(props.home)}
                        >
                            MUI
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {navItems.map((item) => (
                                props.home &&
                                <ScrollLink
                                    key={item}
                                    to={item}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={1100}
                                >
                                    <Button
                                        key={item}
                                        sx={{ color: '#fff' }}>
                                        {item}
                                    </Button>
                                </ScrollLink>
                            ))}
                        </Box>
                        <Box>
                            {Cookies.get("user_id") != "" ?
                                AccountNotLoggedIn() : AccountLoggedIn()}
                        </Box>
                    </Toolbar >
                </AppBar >
                <Box component="nav">
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                    </Drawer>
                </Box>
            </Box >
        </>
    );
}