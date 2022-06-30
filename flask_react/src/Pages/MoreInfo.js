import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Card } from '@mui/material';
import { useNavigate } from "react-router-dom"
import { Row, Col } from "react-bootstrap";
import PermanentDrawerLeft from '../Components/SideMenu';


export default function MoreInfo() {

    const [project, setProject] = useState({});
    const linkVars = window.location.pathname.split("/").slice(2);
    const navigate = useNavigate();

    // Retrieves and updates data.
    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'project_id': linkVars[0]
            }
        };
        fetch("/api/project", requestOptions)
            .then((res) => res.json())
            .then((data) => {
                setProject(data)
            })
    }, []);

    // Return one page previous.
    function goBack() {
        navigate(-1)
    }


    // Function for the responsive button.
    function clickButton() {
        var url = 'http://146.190.25.75:3601/api/runproject/' + linkVars[0];
        window.open(url, '_tab');
    }

    return (
        <>
        <PermanentDrawerLeft />
        <Container key={"more" + linkVars[0]} className="text-center" style={{ marginLeft: "5%", marginRight: "5%", marginTop: "5%" }}>
            <Card style={{ margin: "5%" }} >
                <h1 style={{ margin: "2%" }}>{project.name}</h1>
                <div>

                    <p>{project.description}</p>

                </div>

            </Card>

            {/* The text and color of the button and the link are dependent on the url of the page */}

            <Row>
                {project.done == "0" ?
                    <div>
                        <Button
                            variant="success" size="lg"
                            onClick={clickButton}>
                            Start Computing
                        </Button>
                    </div>
                    :
                    <div>
                        <p>The project is finished!</p>
                    </div>
                }
            </Row>
            <Row>
                <div>
                    <Button variant="secondary" size="lg" style={{ marginTop: "20px" }} onClick={goBack}>
                        Back
                    </Button>

                </div>
            </Row>
        </Container>
        </>
    );
};
