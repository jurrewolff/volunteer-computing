/*
 * Hierin wordt alles samengenomen voor rendering.
 */

import React from 'react';
import './App.css';
import { BrowserRouter as Routes, Outlet, Route }
  from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Components/Navbar';
// import Sidebar from './Components/Navbar';
import Footer from './Components/Footer';
import { Header } from './Components/Header';
// import { Topbar } from './Components/Topbar';
// import Home from './Pages/Home';
// import Login from './Pages/Login';
// import Signup from './Pages/SignUp';
// import Dashboard from './Pages/Dashboard';
// import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <>
    <React.Fragment>
      <Header />
      <Navbar />
      {/* <Sidebar /> */}
      {/* Andere features */}
      <Footer />
      </React.Fragment>
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






