/*
 * Maakt het mogelijk om tussen webpagina's te switchen.
 * Is sneller dat http request, webpagina wordt nml niet telkens herladen
 */

import { Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"
import Login from "../Pages/Login"
import NoPage from "../Pages/NoPage"
import SignUp from "../Pages/SignUp"
import DashBoard from "../Pages/Dashboard"
import Projects from "../Pages/Projects"
import MoreInfo from "../Pages/MoreInfo"
import PastProjects from "../Pages/PastProjects"
import { Test } from "../Pages/Upload"
// import Upload from '../Pages/Upload';


export default function JumpPage() {
    return (
        <div>
            <Routes>
                <Route key="/" element={<Home />} />
                <Route key="/login/*" element={<Login />} />
                <Route key="/signup/*" element={<SignUp />} />
                <Route key="/dashBoard" element={<DashBoard />} />
                <Route key="/projects" element={<Projects />} />
                {/* <Route path="/upload" element={<Upload />} /> */}
                <Route key="/moreInfo/:title/:action" element={<MoreInfo />} />
                <Route key="/pastProjects" element={<PastProjects />} />
                <Route key="/upload" element={<Test />} />
                <Route key="*" element={<NoPage />} />
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
