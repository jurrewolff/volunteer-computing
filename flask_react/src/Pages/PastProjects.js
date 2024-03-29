/*
 * PAST PROJECTS PAGE
 * Shows all the projects that the user has helped computing. For every
 * project the projectname, projectdiscription and time computed will be
 * shown. It will also show whether the data computed by the user was correct.
 */

import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Card } from "react-bootstrap";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

import { Box, Container } from "@mui/material";
import { ThemeProvider } from "@material-ui/core/styles";

import PermanentDrawerLeft from "../Components/SideMenu";
import { theme } from "../Components/Theme";

// ----------------------------------------------------------------------

// SHOW PAST PROJECTS
export default function PastProjects() {
  const [data, setData] = useState([{}]);
  let user_cookie = Cookies.get("user_id");
  const navigate = useNavigate();

  useEffect(() => {
    if (!user_cookie) {
      console.log("User not logged in, redirecting to login page");
      return navigate("/login");
    }

    const requestOptions = {
      method: "GET",
      headers: {
        user_id: Cookies.get("user_id"),
      },
    };

    // Retrieves all projects that the user has helped with.
    fetch("/api/my_projects", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const ProjectsList = (data) => {
    // If no projects exist, this is returned.
    if (data.length === 0) {
      return <h1>You have not yet contributed to any projects.</h1>;
    }

    // Creates a card for every project in data.
    return (
      <Container>
        <Row style={{ width: "80%", marginLeft: "150px" }}>
          <Col style={{ margin: "3%" }}>
            <h3>Project name:</h3>
          </Col>
          <Col style={{ margin: "3%", marginLeft: "5%", marginRight: "5%" }}>
            <h3>Project description:</h3>
          </Col>
          <Col style={{ margin: "3%" }}>
            <h3>Time contributed in seconds:</h3>
          </Col>
          <Col></Col>
        </Row>

        {data.map((project) => (
          <Card
            key={"past" + project.project_id}
            className="mb-3"
            style={{
              width: "80%",
              height: "100px",
              marginTop: "5%",
              marginLeft: "5%",
              marginRight: "100%",
            }}
          >
            <Row>
              <Col>
                <h1 style={{ margin: "30px" }}>{project.name}</h1>
              </Col>
              <Col>
                <Card.Text style={{ margin: "5%" }}>
                  {project.description}
                </Card.Text>
              </Col>
              <Col>
                <Card.Text style={{ margin: "5%" }}>
                  {project.contributed_time} seconds contributed to project
                </Card.Text>
              </Col>
            </Row>
          </Card>
        ))}
      </Container>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <PermanentDrawerLeft />
        <Box>
          <Box
            component="main"
            sx={{
              pl: 30,
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <Container
              className="text-center"
              style={{ marginLeft: "250", marginRight: "5%" }}
            >
              {ProjectsList(data)}
            </Container>
          </Box>
        </Box>
      </>
    </ThemeProvider>
  );
}
