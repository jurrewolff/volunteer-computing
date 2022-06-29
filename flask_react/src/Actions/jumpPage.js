/*
 * NAVBAR FUNCTIONALITY PAGE.
 * Functionality that enables other functions to 'jump' to other pages.
 * This is not visible on the website. This way of implemenating the jump
 * functionaility, leads to quiker rendering of the pages.
 */

// Funcionality import
import { Routes, Route } from "react-router-dom";

// Page imports for defining the routes
import Home from "../Pages/Home";
import Usage from "../Pages/Usage";
import Login from "../Pages/Login";
import Upload from "../Pages/Upload";
import NoPage from "../Pages/NoPage";
import SignUp from "../Pages/SignUp";
import Logout from "../Pages/Logout";
import Account from "../Pages/Account";
import Results from "../Pages/Results";
import Projects from "../Pages/Projects";
import MoreInfo from "../Pages/MoreInfo";
import DashBoard from "../Pages/Dashboard";
import PastProjects from "../Pages/PastProjects";

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
                <Route path="/logout/*" element={<Logout />} />
                <Route path="/signup/*" element={<SignUp />} />
                <Route path="/dashBoard/*" element={<DashBoard />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/moreInfo/:title" element={<MoreInfo />} />
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
