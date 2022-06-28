import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, Container, Row, Col, Button, Card } from "react-bootstrap";
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import { ProjectsRequest } from '../Actions/projectsRequest'
import { LoginRequest } from '../Actions/loginRequest'

import PermanentDrawerLeft from '../Components/SideMenu';
import ResponsiveAppBar from '../Components/Navbar'

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

        <Container className="text-center" style={{ marginLeft: "5%", marginRight: "5%" }}>
            < ProjectsRequest />
        </Container>

    );
};
