/*
 * SIDE MENU DRAWER
 * The general use side menu is visible on the left whenever a user is logged in.
 * The app-bar contains buttons to the homepage, in the logo as well as in the about
 * button. On the right there is a toggle menu containing redirects that are rendered
 * depending on user-status. Whenever a user is not logged in, options for signup and 
 * login, and when logged in, options for dashboard, account information and logout.
 * The navigation bar is visible throughout the whole page as header.
 */

import * as React from 'react';
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';

import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import SourceIcon from '@mui/icons-material/Source';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import StorageIcon from '@mui/icons-material/Storage';

// ----------------------------------------------------------------------

// STYLING
const drawerWidth = 240;

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #00315c 20%, #4987b9 90%)',
        border: 0,
        borderRadius: 0,
        boxShadow: '0 3px 5px 2px rgba(255, 255, 255, 0.06)',
        position: "relative",
        zIndex: 1,
        width: drawerWidth,
        height: '100%',
        flexDirection: 'column',
        textShadow: '0 1px 0 rgba(255, 255, 255, 0.4)',
        flexShrink: 10,
        '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
        }
    },
    child: {
        background: '#00315c',
        border: 0,
        borderRadius: 0,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        position: "relative",
        zIndex: 1,
        width: drawerWidth,
        height: '40%',
        flexDirection: 'column',
        flexShrink: 10,
        '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
        }
    },
    iconStyle: {
      shadow: '0 1px 0 rgba(255, 255, 255, 0.4)',
    }
});

// ----------------------------------------------------------------------

// Add researcher-only pages here
const researcherPages = ['New Project', 'Result']
const researcherPaths = ["/upload", '/results']
const researcherIcons = [<FileUploadIcon />, <InboxIcon />];

// Add generally available pages here
let generalPages = ['Dashboard', 'Projects', 'Past Projects'];
let generalIcons = [<WarehouseIcon />, <StorageIcon />, <SourceIcon />];
let generalPaths = ["/dashboard", "/projects", "/pastprojects"];

// SIDEMENU
export default function PermanentDrawerLeft() {
    let pages;
    let icons;
    let paths;

    // Render menu options based on user-type
    if (Cookies.get("is_researcher") === "1") {
        pages = generalPages.concat(researcherPages);
        icons = generalIcons.concat(researcherIcons);
        paths = generalPaths.concat(researcherPaths);
    } else {
        pages = generalPages;
        icons = generalIcons;
        paths = generalPaths;
    }

    const classes = useStyles();

    const makeLink = (page, index) => {

        var path = paths[index];
        var icon = icons[index];

        return (
            <Link to={path} style={{ textDecoration: 'none' }}>
                <ListItemButton>
                    <ListItemIcon className={classes.iconStyle}>
                        {icon}
                    </ListItemIcon>
                    <ListItemText primary={page} sx={{ my: 2, color: 'white', display: 'block'}} />
                </ListItemButton>
            </Link >
        )
    }

    return (
        <>
            <Drawer position="sticky"
                variant="permanent"
                anchor="left"
                className={classes.root}
            >
                <Toolbar />
                <Divider />
                <List className={classes.root}>
                    {pages.map((page, index) => (
                        <ListItem key={page}>
                            {makeLink(page, index)}
                            <Divider />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                {/* User information page */}
                <List className={classes.child}>
                    <ListItem key={'User Info'} disablePadding>
                        <Link to={"/usage"} style={{ textDecoration: 'none' }}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <QuestionMarkIcon />
                                </ListItemIcon>
                                <ListItemText primary={'User Info'} sx={{ my: 2, color: 'white', display: 'block' }} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />
            </Box>
        </>
    );
}
