import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom"

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
        var url = 'http://localhost:3601/api/runproject/' + linkVars[0];
        window.open(url, '_tab');
    }

    return (
        <Container key={"more" + linkVars[0]} className="text-center" style={{ marginLeft: "5%", marginRight: "5%", marginTop: "5%" }}>

            <Card style={{ margin: "5%" }} >
                <h1 style={{ margin: "2%" }}>{project.name}</h1>
                <div>

                    <p>{project.description}</p>

                </div>

            </Card>


            <Button variant="primary" size="lg" style={{ marginRight: "20px" }} onClick={goBack}>
                Back
            </Button>


            {/* The text and color of the button and the link are dependent on the url of the page */}
            <Button
                onClick={clickButton}>
                Start Computing
            </Button>

        </Container>
    );
};
