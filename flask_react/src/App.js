import React from 'react'
import Navbar from './Navbar'

// import './App.css';
// import { Login } from './Actions/login.js'

// import Layout from "./Pages/Layout";
// import Home from "./Pages/Home";
// import Dashboard from "./Pages/Dashboard";
// import Login from "./Pages/Login";
// import SignUp from "./Pages/SignUp";
// import NoPage from "./Pages/NoPage";

import { Routes, Route } from "react-router-dom"

import Home from "./Pages/Home"
import Login from "./Pages/Login"
import NoPage from "./Pages/NoPage"




function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/NoPage" element={<NoPage />} />
        </Routes>
      </div>
    </>
  )
}


export default App;

  // {/* <p>{data.code}</p> */ }

  // <Link to="/Test">Test</Link>