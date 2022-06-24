import React from 'react';
import './App.css';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import useTheme from '@mui/material/styles/useTheme'
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from './Components/Theme'

import { createTheme } from '@mui/material/styles'
import ResponsiveAppBar from './Components/Navbar'
import Footer from './Components/Footer'
import PermanentDrawerLeft from './Components/SideMenu'

import JumpPage from "./Actions/jumpPage"




function App() {

  return (
    <JumpPage />
  )
}

export default App;
