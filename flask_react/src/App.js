/*
 * Hierin wordt alles samengenomen voor rendering.
 */


import React from 'react'
import './App.css';

// Imports voor page
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

import { useState, useEffect, useRef } from 'react';




function App() {
  return (
    <>
      <Navbar />
      {/* Andere features */}
      <Footer />
    </>
  )
}


export default App;



