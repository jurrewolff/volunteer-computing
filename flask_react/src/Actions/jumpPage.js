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


export default function JumpPage() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/dashBoard" element={<DashBoard />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </div>
    );
}
