import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Layout from "./pages/Layout";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import NoPage from "../Pages/SignUp";


export default function jumpPage() {
    return (
        <Router>
            <Routes>
                <Route index element={<Home />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
        </Router >
    );
}
