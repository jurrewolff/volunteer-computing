/*
 * Maakt het mogelijk om tussen webpagina's te switchen.
 * Is sneller dat http request, webpagina wordt nml niet telkens herladen
 */

import { Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"
import { Login} from "../Pages/Login"
import NoPage from "../Pages/NoPage"
import SignUp from "../Pages/SignUp"
import DashBoard from "../Pages/Dashboard"
import Projects from "../Pages/Projects"
import MoreInfo from "../Pages/MoreInfo"
import PastProjects from "../Pages/PastProjects"
import Logout from "../Pages/Logout"
import Results from "../Pages/Results"
import { Test } from "../Pages/Upload" // TODO: Afmaken GOEDE upload-page
// TODO: Account page toevoegen + maken 


function JumpPage() {
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
                <Route path="/moreInfo/:title/:action" element={<MoreInfo />} />
                <Route path="/pastProjects" element={<PastProjects />} />
                <Route path="/upload" element={<Test />} />
                <Route path="/results" element={<Results />} />

                <Route path="*" element={<NoPage />} />
            </Routes>
        </div>
    );
}

export default JumpPage;


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

