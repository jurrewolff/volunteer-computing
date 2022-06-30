/* RESULTS PAGE
 * Shows the projects that the user has uploaded. For every project
 * the projectname and the total time that users have spend on the
 * project will be shown. There will also be a downloadbutton if the
 * project is done, otherwise the progress will be shown.
 */

import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import PermanentDrawerLeft from '../Components/SideMenu';


export default function Results() {
    const [data, setData] = useState([{}]);
    const navigate = useNavigate();

    let user_cookie = Cookies.get("user_id")
    let research_cookie = Cookies.get("is_researcher")


    useEffect(() => {
        if (!user_cookie) {
            console.log("User not logged in, redirecting to login page")
            return navigate('/login')
        }

        if (research_cookie == 0) {
            console.log("User authorized, redirecting to dashboard")
            return navigate('/dashboard')
        }

        const requestOptions = {
            method: 'GET',
            headers: {
                'user_id': user_cookie
            }
        };

        // Retrieves all projects that the user has uploaden.
        fetch("/api/results", requestOptions)
            .then(res => res.json())
            .then(data => {
                setData(data)
                console.log(data)
            })
    }, [true]);


    // Downloads the results of the given project.
    const downloadResultFile = (event, value) => {
        console.log(event)
        console.log(value)
        fetch('/api/download/' + value)
            .then(response => {
                response.blob().then(blob => {
                    let url = window.URL.createObjectURL(blob);
                    let a = document.createElement('a');
                    a.href = url;
                    a.download = 'my_results.txt';
                    a.click();
                });
            });
    }


    // Returns all projects displayed in a card per project.
    const readResults = ({ data }) => {
        // If no projects exist, this is returned.
        if (data.length === 0) {
            return <h1>You have not yet uploaded any projects.</h1>
        }

        // Creates a card for every project in data.
        return data.map((project) =>
            <Row key={"result" + project.project_id} className="mb-3" style={{ width: "80%", height: "100px", marginTop: "5%", marginBottom: "3%", marginLeft: "100px" }}>
                <Col>
                    <Card style={{ backgroundColor: '#7BD2EC' }}>
                        <Row>
                            <Col style={{ margin: "3%" }}>
                                <h2>{project.name}</h2>
                            </Col>
                            <Col style={{ margin: "4%" }}>
                                <Link to={"/moreInfo/" + project.project_id}>More info</Link>
                            </Col>
                            <Col style={{ margin: "3%" }}>
                                Time run: 12:10:59
                            </Col>
                            <Col style={{ margin: "3%" }}>
                                Correct
                            </Col>

                        </Row>
                    </Card>
                </Col>
                <Col xs={1} sm={1} md={1} lg={1} style={{ marginTop: "3%" }}>
                    {/* A downloadbutton is shown if the project is done, otherwise the progress is shown. */}
                    {project.done === 1 ?
                        <Button onClick={event => downloadResultFile(event, project.project_id)}>Download</Button>
                        : <p>Progress: {project.progress}%</p>
                    }
                </Col>
            </Row>
        );
    }

    return (
        <>
            <PermanentDrawerLeft />
            <Container className="text-center" style={{ marginLeft: "5%", marginRight: "5%" }}>
                {readResults({ data })}
            </Container>
        </>
    );
};
