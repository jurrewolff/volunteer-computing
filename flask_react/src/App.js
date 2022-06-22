import React from 'react';
import './App.css';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { createTheme } from '@mui/material/styles';
import ResponsiveAppBar from './Components/Navbar';
import Footer from './Components/Footer';
import PermanentDrawerLeft from './Components/SideMenu';

import Home from "./Pages/Home"
import JumpPage from "./Actions/jumpPage"
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
      {/* Andere features */}
    </>
  )
}

export default App;
