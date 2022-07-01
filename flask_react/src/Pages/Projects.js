/* 
 * PROJECTS PAGE
 * Creates the page to browse projects. This page is only accessible if the user
 * is logged in.
 */

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from '@mui/material';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import { ProjectsRequest } from '../Actions/projectsRequest'
import PermanentDrawerLeft from '../Components/SideMenu';

// ----------------------------------------------------------------------

/*
Checks whether the user is logged in and calls the function ProjectRequest to
create the list of projects.
*/
export default function Projects() {
    let user_cookie = Cookies.get("user_id")
    const navigate = useNavigate();

    // Checks whether the user is logged in, otherwise returns to login
    useEffect(() => {
        if (!user_cookie) {
            console.log("User not logged in, redirecting to login page")
            return navigate('/login')
        }
    }, [true]);

    return (
        <>
        <PermanentDrawerLeft />
        <Container className="text-center" style={{ marginLeft: 240, marginRight: "5%" }}>
            < ProjectsRequest />
        </Container>
        </>

    );
};
