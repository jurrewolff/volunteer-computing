import * as React from 'react';
import { Link } from "react-router-dom"

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
import Cookies from 'js-cookie'

const drawerWidth = 240;


// Add researcher only pages here
const researcherPages = ['New Project', 'Result']
const researcherPaths = ["/upload", '/results']
const researcherIcons = [<FileUploadIcon />, <InboxIcon />];

// Add generally available pages here
let generalPages = ['Dashboard', 'Projects', 'Past Projects'];
let generalIcons = [<WarehouseIcon />, <StorageIcon />, <SourceIcon />];
let generalPaths = ["/dashboard", "/projects", "/pastprojects"];

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #00315c 20%, #4987b9 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 255, 255, 0.06)',
        position: "relative",
        zIndex: 1,
        width: drawerWidth,
        height: '100%',
        flexDirection: 'column',
        style: 'yellow',

        flexShrink: 10,
        '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
        }
    },
    child: {
        background: '#00315c',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        position: "relative",
        zIndex: 1,
        width: drawerWidth,
        height: '40%',
        flexDirection: 'column',
        style: 'yellow',

        flexShrink: 10,
        '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',

        }
    }
});


export default function PermanentDrawerLeft() {

    let pages;
    let icons;
    let paths;

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
            <Link to={path}>
                <ListItemButton>
                    <ListItemIcon>
                        {icon}
                    </ListItemIcon>
                    <ListItemText primary={page} sx={{ my: 2, color: 'black', display: 'block' }} />
                </ListItemButton>
            </Link>
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
                <List className={classes.child}>
                    <ListItem key={'User Info'} disablePadding>
                        <Link to={"/userinfo"}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <QuestionMarkIcon />
                                </ListItemIcon>
                                <ListItemText primary={'User Info'} sx={{ my: 2, color: 'black', display: 'block' }} />
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
