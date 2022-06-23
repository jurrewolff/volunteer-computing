import * as React from 'react';
import { Link } from "react-router-dom"

import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
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
const researcherPages = [ 'New Project', 'Result']
const researcherPaths = [ "/upload", '/results']
const researcherIcons = [<FileUploadIcon />, <InboxIcon />];

// Add generally available pages here
let pages = ['Dashboard', 'Projects', 'Past Projects'];
let icons = [<WarehouseIcon />, <StorageIcon />, <SourceIcon />];
let paths = ["/dashboard", "/projects", "/pastprojects"];

if (Cookies.get("is_researcher") === "1") {
  pages = pages.concat(researcherPages)
  paths = paths.concat(researcherPaths)
  icons = icons.concat(researcherIcons)
}

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #00315c 20%, #4987b9 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 255, 255, 0.06)',
    // color: 'white',
    // height: 70,
    // padding: '0 30px',
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
    // color: 'white',
    // height: 70,
    // padding: '0 30px',
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
    // <Box sx={{ display: 'flex' }}>
    <>
      {/* <CssBaseline /> */}
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
      <Drawer position="sticky"
        // sx={{
        //   position: "relative",
        //   zIndex: 1,
        //   width: drawerWidth,
        //   height: '100%',
        //   flexDirection: 'column',
        //   style: 'blue',

        //   flexShrink: 10,
        //   '& .MuiDrawer-paper': {
        //     width: drawerWidth,
        //     boxSizing: 'border-box',
        //   },
        // }}
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