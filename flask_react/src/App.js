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


const MyComponent = () => {
  const theme = useTheme();
  return <JumpPage bgcolor={theme.palette.background.default} width={100} height={100} />;
};

function App() {

  return (
    <ThemeProvider theme={theme}>
      <>
        <ResponsiveAppBar />
        <PermanentDrawerLeft />
        <MyComponent />
        {/* Andere features */}
      </>
    </ThemeProvider>
  )
}

export default App;
