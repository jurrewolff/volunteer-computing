/*
 * Maakt het mogelijk om in te loggen.
 * POST request voor login.
 * in var worden de variabelen meegegeven voor de username en ww, is voor nu
 * nog gehardcoded voor testen.
 *
 */

import { useState, useEffect } from 'react'
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


export const ProjectsRequest = () => {

    const [data, setData] = useState([{}]);

    useEffect(() => {
            fetch("/projects")
                .then(res => res.json())
                .then(data => {
                    setData(data)
                })
    }, []);


    // Returns a card with the given project
    const getCard = ((project) => {
        return (
            <Card style={{width:"100%", height:"90%", marginTop:"5%", marginLeft:"100px"}} sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography style={{margin:"5%"}} variant="h2"  gutterBottom>
                        {project.name}
                    </Typography >
                    <Typography style={{margin:"5%"}} sx={{ mb: 1.5 }} color="text.secondary" variant="h5" component="div">
                        {project.description}
                    </Typography>
                </CardContent>

                <CardActions >
                    <Link style={{margin:"10%"}} to={"/moreInfo/" + project.project_id + "/Run"}>
                        <Button
                            variant="contained" color="success">
                            Start computing
                        </Button>
                    </Link>

                    <Link style={{margin:"10%"}} to={"/moreInfo/" + project.project_id + "/NoRun"}>More info</Link>
                </CardActions>




            </Card>
          );
    });

    // Returns two column with all projects displayed in a card per project.
    const readProjects = ({data}) => {

        // If no projects exists. Nothing is displayed.
        if(data.length === 0) {
            return <h1>There are no projects to contribute to.</h1>
        }

        const getRightIndex = ((index) => {
            return index + Math.ceil(data.length / 2)
        });

        return data.map((project, index) =>
            <div>

                {index < Math.ceil(data.length / 2)?
                    <Row key={project.project_id}>

                        <Col>
                            {getCard(project)}
                        </Col>

                        {/* The last row should only have 1 card if there is an uneven number of projects */}
                        {index < Math.floor(data.length / 2) ?
                            <Col>
                                {getCard(data[getRightIndex(index)])}
                            </Col>
                        : <Col></Col>}
                    </Row>

                : ""}
            </div>
        );
    }

    return (
        <div>
            {readProjects({data})}
        </div>
    );
}