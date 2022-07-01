/* NAVBAR FUNCTIONALITY PAGE.
* Functionality that enables other functions to 'jump' to other pages.
* This is not visible on the website.This way of implemenating the jump
* functionaility, leads to quiker rendering of the pages.
*/

// Page imports for defining the routes
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
import Results from "../Pages/Results"
import Account from "../Pages/Account"
import Usage from "../Pages/Usage"
import Redirect from "../Pages/Redirect"

/*
 * Routes to each page are defined.
 * '*' after each path ensures that pages within that path are also included in
 * the page jump functionality.
 * The '*' accepts all paths that are not defined below and will lead the user
 * to the NoPage page.
 */
function JumpPage() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login/*" element={<Login />} />
                <Route path="/upload/*" element={<Upload />} />
                <Route path="/signup/*" element={<SignUp />} />
                <Route path="/dashBoard/*" element={<DashBoard />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/moreInfo/:title" element={<MoreInfo />} />
                <Route path="/usage" element={<Usage />} />
                <Route path="/pastProjects" element={<PastProjects />} />
                <Route path="/results/*" element={<Results />} />
                <Route path="/account" element={<Account />} />
                <Route path="/redirect" element={<Redirect />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </div>
    );
}

export default JumpPage;
