import { useState, useEffect } from 'react'
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import Card from '@mui/material/Card';
import Button from '@mui/material/Button';


// Returns a card with the given project
const getCard = ((project) => {

  // Function for the responsive button.
  function clickButton() {
    // TODO - Build URL from environment vars.
    var url = 'http://localhost:8001/api/runproject/' + project.project_id;
    window.open(url, '_tab');
  }

  return (
    <Card className="mb-3" style={{ width: "100%", height: "90%", marginTop: "5%", marginLeft: "15%" }}>
      <h1>{project.name}</h1>
      <Card.Text style={{ margin: "5%" }}>{project.description}</Card.Text>
      <Row style={{ margin: "5%" }}>
        <Col>
          <Link style={{ margin: "10%" }} to={"/moreInfo/" + project.project_id}>More info</Link>
        </Col>
        <Col>
          <Button
            variant="success" onClick={clickButton}>
            Start computing
          </Button>
        </Col>
      </Row>
    </Card>
  )
});

// Returns two column with all projects displayed in a card per project.
const readProjects = ({ data }) => {

  // If no projects exists. Nothing is displayed.
  if (data.length === 0) {
    return <h1>There are no projects to contribute to.</h1>
  }

  const getRightIndex = ((index) => {
    return index + Math.ceil(data.length / 2)
  });

  return data.map((project, index) =>
    <div>

      {index < Math.ceil(data.length / 2) ?
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

// Handle project request and response.
export const ProjectsRequest = () => {

  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/api/projects")
      .then(res => res.json())
      .then(data => {
        setData(data)
        console.log(data)
      })
  }, []);

  return (
    <div>
      {readProjects({ data })}
    </div>
  );
}
