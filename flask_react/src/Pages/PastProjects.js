import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from "react-bootstrap";
import Cookies from "js-cookie";

import PermanentDrawerLeft from '../Components/SideMenu';
import ResponsiveAppBar from '../Components/Navbar'
import Box from '@mui/material/Box';


export default function PastProjects() {

    const [data, setData] = useState([{}]);

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'user_id': Cookies.get("user_id")
            }
        };
        fetch("/api/my_projects", requestOptions)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, []);


    const ProjectsList = (data) => {
        // If no projects exist. This is returned.
        if (data.length === 0) {
            return <h1>You have not yet contributed to any projects.</h1>
        }

        return data.map((project, index) => (

            <Card key={"past" + project.project_id} className="mb-3" style={{ width: "80%", height: "100px", marginTop: "5%", marginLeft: "5%", marginRight: "100%" }}>
                <Row>
                    <Col>
                        <h1 style={{ margin: "30px" }}>{project.name}</h1>
                    </Col>
                    <Col>
                        <Card.Text style={{ margin: "5%" }}>{project.description}</Card.Text>
                    </Col>
                    <Col>
                        <Card.Text style={{ margin: "5%" }}>12:10:59</Card.Text>
                    </Col>
                    <Col>
                        <Card.Text style={{ margin: "5%" }}>Correct</Card.Text>
                    </Col>
                </Row>
            </Card>

        ));
    }

    return (
        <Container className="text-center" style={{ marginLeft: "5%", marginRight: "5%" }}>
            {ProjectsList(data)}
        </Container>
    );
};
