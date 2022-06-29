/* MORE INFO PAGE
 * Gets the information of the chosen project. The chosen project_id is read
 * from the url. The projectname and discription of the project will be shown.
 * There is also a button to go back and a button to start computing
 * the project.
 */


import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom"
import { Row, Col } from "react-bootstrap";

export default function MoreInfo() {
    const [project, setProject] = useState({});
    const linkVars = window.location.pathname.split("/").slice(2);
    const navigate = useNavigate();

    // Retrieves the data of the project with the given project_id.
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

    // Returns one page previous.
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

            {/* Depending on whether the project is done, there will be either
                a start computing button or text. */}
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
    );
};
