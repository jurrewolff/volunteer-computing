/*
 * Maakt het mogelijk om in te loggen.
 * POST request voor login.
 * in var worden de variabelen meegegeven voor de username en ww, is voor nu
 * nog gehardcoded voor testen.
 *
 */

import { useState, useEffect } from 'react'
import { ListGroup, Row, Col, Button, Card} from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectsRequest = () => {

    const [data, setData] = useState([{}])
    // const [right_index, setIndexRight] = useState(0)

    useEffect(() => {
            fetch("/projects")
                .then(res => res.json())
                .then(data => {
                    setData(data)
                    console.log(data)
                })
    }, []);


    const readProjects = ({data}) => {
        {var right_index = 0}
        return data.map((project, index) => 
        <div>
            {index < Math.ceil(data.length / 2)?
                <Row key={project.project_id}>

                    <Col>
                        <Card className="mb-3" style={{width:"100%", height:"90%", marginTop:"5%", marginLeft:"15%"}}>
                            <h1>{project.name}</h1>
                            <Card.Text style={{margin:"5%"}}>{project.description}</Card.Text>
                            <Row style={{margin:"5%"}}>
                                <Col>
                                    <Link to={"/moreInfo/" + project.project_id + "/NoRun"}>More info</Link>
                                </Col>
                                <Col>
                                    <Link to={"/moreInfo/" + project.project_id + "/Run"}>
                                        <Button
                                            variant="success">
                                            Start computing
                                        </Button>
                                    </Link>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    
                    {/* index of the projects in the right column */}
                    {/* {right_index = index + Math.ceil(data.length / 2)} */}

                    {/* The last row should only have 1 card if there is an uneven number of projects */}
                    {index < Math.floor(data.length / 2) ?
                        <Col>
                            <Card className="mb-3" style={{width:"100%", height:"90%", marginTop:"5%", marginLeft:"15%"}}>
                                <h1>{data[index + Math.ceil(data.length / 2)].name}</h1>
                                <Card.Text style={{margin:"5%"}}>{data[index + Math.ceil(data.length / 2)].description}</Card.Text>
                                <Row style={{margin:"5%"}}>
                                    <Col>
                                        <Link to={"/moreInfo/" + data[index + Math.ceil(data.length / 2)].project_id + "/NoRun"}>More info</Link>
                                    </Col>
                                    <Col>
                                        <Link to={"/moreInfo/" + data[index + Math.ceil(data.length / 2)].project_id + "/Run"}>
                                            <Button
                                                variant="success">
                                                Start computing
                                            </Button>
                                        </Link>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    : <Col></Col>}
                </Row>

            : ""}
        </div>
        );
        
    }

    
    return (
        <div>
            <div>
                {readProjects({data})}
            </div>
            
        </div>
    );
}