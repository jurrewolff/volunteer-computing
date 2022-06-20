import React from "react"
import { Link } from "react-router-dom"
import JumpPage from '../Actions/jumpPage'
import styled from "styled-components";



export default function Navbar() {
    return (
        <>
            <nav>
                <Link to="/" >Home</Link>
                <ul>
                    <li><Link to="/login">login</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/signup">Sign up</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    {/* <li><Link to="/upload">Upload</Link></li> */}
                    <li><Link to="/pastProjects">Past projects</Link></li>
                    <li><Link to="/upload">Upload</Link></li>
                </ul>
            </nav>
            {/* <JumpPage /> */}
        </>
    )
}
