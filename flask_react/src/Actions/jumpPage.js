/*
 * Maakt het mogelijk om tussen webpagina's te switchen.
 * Is sneller dat http request, webpagina wordt nml niet telkens herladen
 */

import { Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"
import Upload from "../Pages/Upload"
import Login from "../Pages/Login"
import NoPage from "../Pages/NoPage"
import SignUp from "../Pages/SignUp"
import DashBoard from "../Pages/Dashboard"
import Projects from "../Pages/Projects"
import MoreInfo from "../Pages/MoreInfo"
import PastProjects from "../Pages/PastProjects"
import Logout from "../Pages/Logout"
import Results from "../Pages/Results"
import Account from "../Pages/Account"
import Usage from "../Pages/Usage"


function JumpPage() {
    return (
        <div>
            <Routes>
                {/* <Route path="/" element={<DashBoard />} />
                <Route path="/login" element={<Login />} /> */}
                <Route path="/" element={<Home />} />
                <Route path="/login/*" element={<Login />} />
                <Route path="/upload/*" element={<Upload />} />
                <Route path="/logout/*" element={<Logout />} />
                <Route path="/signup/*" element={<SignUp />} />
                <Route path="/dashBoard/*" element={<DashBoard />} />
                <Route path="/projects" element={<Projects />} />
                {/* Either first or second moreInfo endpoint is correct. It 
                should be the first one. Remove when done testing.*/}
                <Route path="/moreInfo/:title" element={<MoreInfo />} />
                {/* <Route path="/moreInfo/:title/:action" element={<MoreInfo />} /> */}
                <Route path="/usage" element={<Usage />} />
                <Route path="/pastProjects" element={<PastProjects />} />
                <Route path="/results/*" element={<Results />} />
                <Route path="/account" element={<Account />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </div>
    );
}

export default JumpPage;
