import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from '@mui/material';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import { ProjectsRequest } from '../Actions/projectsRequest'
import { LoginRequest } from '../Actions/loginRequest'

import PermanentDrawerLeft from '../Components/SideMenu';



export default function Projects() {

    let user_cookie = Cookies.get("user_id")
    const navigate = useNavigate();

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
