import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { ProjectsRequest } from '../Actions/projectsRequest'
import { LoginRequest } from '../Actions/loginRequest'

import PermanentDrawerLeft from '../Components/SideMenu';
import ResponsiveAppBar from '../Components/Navbar'

export default function Projects() {

    return (
        <>
            <ResponsiveAppBar />
            <PermanentDrawerLeft />

            <Container className="text-center" style={{ marginLeft: "5%", marginRight: "5%" }}>
                < ProjectsRequest />
            </Container>
        </>
    );
};
