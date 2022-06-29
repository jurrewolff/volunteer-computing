/*
 * NAVIGATIONBAR HOMEPAGE.
 * One out of two navigationbars in the website.
 * This navigation balk is for the landingpage, loginpage and the signup page.
 * Each page has its own variant of this navigation bar. Furthermore, based on
 * the login status, there are different items that are rendered.
 */

// Package and functionality imports
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

// Material ui imports
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

// Material ui icon import
import AccountCircle from '@mui/icons-material/AccountCircle';

// Predefined constants
const drawerWidth = 240;
const navItems = ['About', 'Scientist', 'Volunteer', 'Product'];


export default function Nav(props) {
    // Conststant for a esponsive website
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const container = window !== undefined ? () => window().document.body : undefined;

    // User state functionality
    let cookie = Cookies.get("user_id")
    const [auth, setAuth] = useState(false);
    const [user_cookie, setUser_cookie] = useState();

    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);

    // Function for drawing functionality if the website i opened on mobile
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    // Anchorpoints
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogOut = () => {
        console.log("request!")

        const requestOptions = {
            method: 'GET',
            headers: {
                'user_id': user_cookie
            }
        };

        fetch("/api/results", requestOptions)
            .then(res => res.json())
            .then(data => {
                // setData(data)
                console.log(data)
            })
    }

    // Logo functionality depending on which page the navbar is rendered
    const handleToggle = () => {
        if (props.home) {
            scroll.scrollToTop()
        }
        else {
            navigate("/")
        }
    }

    useEffect(() => {
        if (cookie === "") {
            setAuth(false)
        }
        else {
            setAuth(true)
        }

    }, [])

    // Show different menu items depending on the login status
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
            <Box sx={{ display: 'flex' }}>
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
                            {/* Render menu item according to login status */}
                            {auth ?
                                AccountLoggedIn() : AccountNotLoggedIn()}
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
                            // Better open performance on mobile.
                            keepMounted: true,
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': {
                                boxSizing: 'border-box',
                                width: drawerWidth
                            },
                        }}
                    >
                    </Drawer>
                </Box>
            </Box >
        </>
    );
}