/*
 * Maakt het mogelijk om tussen webpagina's te switchen.
 * Is sneller dat http request, webpagina wordt nml niet telkens herladen
 */

import { Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"
import Login from "../Pages/Login"
import Logout from "../Pages/Logout"
import NoPage from "../Pages/NoPage"
import SignUp from "../Pages/SignUp"
import DashBoard from "../Pages/Dashboard"
import Projects from "../Pages/Projects"
import MoreInfo from "../Pages/MoreInfo"
import PastProjects from "../Pages/PastProjects"
import Usage from "../Pages/Usage"
import { Test } from "../Pages/Upload"
// import Upload from '../Pages/Upload';


// import React from 'react';
// import '../App.css';
// import { BrowserRouter as Router, Routes, Route}
//     from 'react-router-dom';
// import Dashboard from '../Pages/Dashboard';
// import Projects from '../Pages/Projects';
// import History from '../Pages/PastProjects';
// import Results from '../Pages/Results';




export default function JumpPage() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login/*" element={<Login />} />
                <Route path="/logout/*" element={<Logout />} />
                <Route path="/signup/*" element={<SignUp />} />
                <Route path="/dashBoard" element={<DashBoard />} />
                <Route path="/projects" element={<Projects />} />
                {/* <Route path="/upload" element={<Upload />} /> */}
                <Route path="/moreInfo/:title" element={<MoreInfo />} />
                <Route path="/pastProjects" element={<PastProjects />} />
                <Route path="/upload" element={<Test />} />
                <Route path="/usage" element={<Usage />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </div>
    );
}



// function JumpPage() {
// return (
//     <Router>
//     <Navbar />
//     <Routes>
//         <Route exact path='/' element={<Dashboard />} />
//         <Route path='/Dashboard' element={<Dashboard/>} />
//         <Route path='/Projects' element={<Projects/>} />
//         <Route path='/PastProjects' element={<History/>} />
//         <Route path='/Upload' element={<Upload/>} />
//         <Route path='/Results' element={<Results/>} />
//     </Routes>
//     </Router>
// );
// }

// export default JumpPage;
