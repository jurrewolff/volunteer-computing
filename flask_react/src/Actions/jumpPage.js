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

export default function JumpPage() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login/*" element={<Login />} />
                <Route path="/signup/*" element={<SignUp />} />
                <Route path="/dashBoard" element={<DashBoard />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/moreInfo/:title/:action" element={<MoreInfo />} />
                <Route path="/pastProjects" element={<PastProjects />} />
                <Route path="/upload" element={<Test />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </div>
    );
}
