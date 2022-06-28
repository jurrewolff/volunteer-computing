import React from 'react'; // niet per se nodig nu, toekomst wss wel
import './Dashboard.css';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import ListGroup from 'react-bootstrap/ListGroup';
import { Row, Col } from "react-bootstrap";


// TODO FIXEN!!!
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import useTheme from '@mui/material/styles/useTheme'
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from '../Components/Theme'

import { createTheme } from '@mui/material/styles'
import PermanentDrawerLeft from '../Components/SideMenu';
import ResponsiveAppBar from '../Components/Navbar'


const Dashboard = () => {

  let user_cookie = Cookies.get("user_id")
  const navigate = useNavigate();
  const [data, setData] = useState([{}]);

  useEffect(() => {
        if (!user_cookie) {
            console.log("User not logged in, redirecting to login page")
            return navigate('/login')
        }

        fetch("/api/dashboard")
            .then(res => res.json())
            .then(data => {
                setData(data)
        })
  }, [true]);

  const tets = [11, 12, 21, 22]

  return (

    <ThemeProvider theme={theme}>
      <>
        <ResponsiveAppBar />
        <PermanentDrawerLeft />
        <Box>
            <Box
                border="dashed"
                component="main"
                sx={{
                pl: 30,
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
                }}
            >
                <Container maxWidth="lg" sx={{}}>
                <h1>This will be the user dashboard page with cute figures and info.</h1>
                </Container>

                {console.log(data)}
                {console.log(data[0].user_id)}

                <Row>
                    <Col>
                        <ListGroup as="ol" numbered>
                            {data.map((best_user) =>
                                <ListGroup.Item key={best_user.user_id} as="li">{best_user.username}</ListGroup.Item>
                            )}
                        </ListGroup>
                    </Col>
                    <Col>
                        <ListGroup as="ol" numbered>
                            {tets.map((project) =>
                                <ListGroup.Item key={project + "2"} as="li">{project}</ListGroup.Item>
                            )}
                        </ListGroup>
                    </Col>
                </Row>


            </Box>
        </Box>
      </>
    </ThemeProvider>

  );
};

// data.delete_cookie("name")
// data.delete_cookie("user_id")

export default Dashboard;
