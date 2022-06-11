import React from 'react'
import './App.css';

import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

import JumpPage from './Actions/jumpPage'

function App() {
  return (
    <>
      <Navbar />

      <body> <JumpPage /> </body>

      <Footer />
    </>
  )
}


export default App;

// aanroepen van components reminder
// {/* <p>{data.code}</p> */ }
