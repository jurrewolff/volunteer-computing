import * as React from 'react';
import { Link } from "react-router-dom"

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import SourceIcon from '@mui/icons-material/Source';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import StorageIcon from '@mui/icons-material/Storage';
import ReviewsIcon from '@mui/icons-material/Reviews'; // For dashboard icons
import { getIconButtonUtilityClass, Hidden } from '@mui/material';
import { useState } from 'react';

const drawerWidth = 240;

const pages = ['Dashboard', 'Projects', 'Past Projects', 'New Project', 'Results'];
const icons = [<WarehouseIcon />, <StorageIcon />, <SourceIcon />, <FileUploadIcon />, <InboxIcon />];
const paths = ["/dashboard", "/projects", "/pastprojects", "/upload", "/results"];


export default function PermanentDrawerLeft() {

    const makeLink = (page, index) => {

        var path = paths[0];
        var icon = paths[0];

        if (index == 0) {
            path = paths[0];
            icon = icons[0];
        } else if (index == 1) {
            path = paths[1];
            icon = icons[1];
        } else if (index == 2) {
            path = paths[2];
            icon = icons[2];
        } else if (index == 3) {
            path = paths[3];
            icon = icons[3];
        } else if (index == 4) {
            path = paths[4];
            icon = icons[4];
        } else if (index == 5) {
            path = paths[5];
            icon = icons[5];
        } else {
            path = paths[0];
            icon = icons[0];
        }

        return (
            <Link to={path}>
                <ListItemButton>
                    <ListItemIcon>
                        {icon}
                    </ListItemIcon>
                    <ListItemText primary={page} sx={{ my: 2, color: 'black', display: 'block' }}/>
                </ListItemButton>
            </Link>
        )
    }


  return (
    // <Box sx={{ display: 'flex' }}>
    <>
      <CssBaseline />
      {/* <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Drawer
        sx={{
          position: "relative",
          zIndex: 1,
          width: drawerWidth,
          height: '100%',
          flexDirection: 'column',

          flexShrink: 10,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {pages.map((page, index) => (
              <ListItem key={page}>
              {makeLink(page, index)}
              <Divider />
              </ListItem>
          ))}
        </List>
        <Divider />
        <List>
            <ListItem key={'User Info'} disablePadding>
            <Link to={"/userinfo"}>
                <ListItemButton>
                    <ListItemIcon>
                    <QuestionMarkIcon />
                    </ListItemIcon>
                    <ListItemText primary={'User Info'} sx={{ my: 2, color: 'black', display: 'block' }}/>
                </ListItemButton>
            </Link>
            </ListItem>
        </List>
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        {/* <Typography paragraph>
            Ja hoi

        </Typography>
        <Typography paragraph>
            En doei!
        </Typography> */}
      </Box>
    </>
  );
}

// constructor(props) {
//     super(props);
//     this.state = {
//         list: [{id: 0, path: "/", icon: <InboxIcon />}, {id: 1, path: '/login', icon: <MailIcon />}],
//     }
// }

// setIDX = index => {
//     this.setState
// }

// const idxs = [
//     {id: 0, path: "/", icon: <InboxIcon />}, 
//     {id: 1, path: "/login", icon: <MailIcon />}
// ];


// const posts = [
//   {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//   {id: 2, title: 'Installation', content: 'You can install React from npm.'}
// ];

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Blog posts={posts} />);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Blog posts={posts} />);