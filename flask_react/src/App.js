import React from 'react';
import './App.css';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { createTheme } from '@mui/material/styles';
import ResponsiveAppBar from './Components/Navbar';
import Footer from './Components/Footer';
import PermanentDrawerLeft from './Components/SideMenu';

import JumpPage from "./Actions/jumpPage"

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
