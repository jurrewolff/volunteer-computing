import React from 'react';
import './App.css';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { createTheme } from '@mui/material/styles';
import ResponsiveAppBar from './Components/Navbar2';
import Footer from './Components/Footer';
import PermanentDrawerLeft from './Components/SideMenu';
// import Login from './Pages/Login';
// import { Topbar } from './Components/Topbar';
// import Home from './Pages/Home';
// import Login from './Pages/Login';
// import Signup from './Pages/SignUp';
// import Dashboard from './Pages/Dashboard';
// import { BrowserRouter } from 'react-router-dom';

// import JumpPage from '../Actions/jumpPage';
import Navbar from './Components/Navbar';
import Home from "./Pages/Home"
import JumpPage from "./Actions/jumpPage"
import Test from "./Pages/test"
import Login from "./Pages/Login"
import NoPage from "./Pages/NoPage"
import SignUp from "./Pages/SignUp"
import DashBoard from "./Pages/Dashboard"
import Projects from "./Pages/Projects"
import MoreInfo from "./Pages/MoreInfo"
import PastProjects from "./Pages/PastProjects"




function App() {
  return (
    <>
    <JumpPage />
    {/* <JumpPage /> */}
      {/* <DashBoard /> */}
      {/* <Navbar /> */}
      {/* Andere features */}
      {/* <Footer /> */}

    </>
  )
}

export default App;









// import Navbar from './Components/Navbar';
// import Footer from './Components/Footer'
// import Dashboard from './Pages/Dashboard';
// import Projects from './Pages/Projects';
// import History from './Pages/PastProjects';
// import { Test } from './Pages/Upload';
// import Results from './Pages/Results';
// // import { useState, useEffect, useRef } from 'react';


// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route exact path='/' element={<Dashboard />} />
//         <Route path='/Dashboard' element={<Dashboard />} />
//         <Route path='/Projects' element={<Projects />} />
//         <Route path='/PastProjects' element={<History />} />
//         <Route path='/Upload' element={<Test />} />
//         <Route path='/Results' element={<Results />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

// export default App;







// import React from 'react'
// import './App.css';

// // Imports voor page
// // import Navbar from './Components/Navbar'
// // import Footer from './Components/Footer'

// import { useState, useEffect, useRef } from 'react';

// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';

// import Home from './Pages/Home'
// import Navbar from './Components/Navbar'

// import { Link } from "react-router-dom"


// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';

// import JumpPage from "./Actions/jumpPage"

// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];



// function App() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   const makeLink = (page) => {
//     return (
//       <>
//         <Link to={page}>
//           <Button
//             key={page}
//             onClick={handleCloseNavMenu}
//             sx={{ my: 2, color: 'white', display: 'block' }}
//           >
//             {page}
//           </Button>
//         </Link>
//       </>
//     )
//   }

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href=""
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {makeLink("login")}
//             {makeLink("signup")}
//             {makeLink("dashboard")}

//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//       <JumpPage />
//     </AppBar>
//     // <>
//     //   <Home />

//     // </>
//     //   <>
//     // <>
//     //   <Navbar />
//     //   {/* Andere features */}
//     // </>


//   )
// }


// export default App;


//<>
//<Navbar />
//{/* Andere features */}
//<Footer />
//</>

// return (
//   <>
//     <Navbar />
//     {/* Andere features */}
//     <Footer />
//   </>
// )
