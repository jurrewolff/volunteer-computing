import React from 'react'; // niet per se nodig nu, toekomst wss wel
import './Dashboard.css';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import ListGroup from 'react-bootstrap/ListGroup';
import { Row, Col, Badge } from "react-bootstrap";
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';


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
  const [amount, setAmount] = useState(10);

  const changeAmount = e => {
    setAmount(e.target.value);
}

  useEffect(() => {
        if (!user_cookie) {
            console.log("User not logged in, redirecting to login page")
            return navigate('/login')
        }

        const requestOptions = {
            method: 'GET',
            headers: {
                'amount': amount
            }
        };

        fetch("/api/dashboard", requestOptions)
            .then(res => res.json())
            .then(data => {
                setData(data)
        })
  }, [amount]);

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
                <h1>Top researchers and volunteers based on trust level</h1>
                </Container>

                {console.log(data)}
                {console.log(data[0].user_id)}


                <Grid
                justify="center"
                style={{
                        width: "500px",
                        }}>
                <Grid >
                    Amount of users shown:
                    <Slider
                        defaultValue={10}
                        step={5}
                        min={5}
                        max={50}
                        valueLabelDisplay="auto"
                        onChange={changeAmount}
                    />
                </Grid>
                <Row>
                    <Col>
                        <ListGroup as="ol" numbered>
                            {data.map((best_user) =>
                                <ListGroup.Item key={best_user.user_id} as="li">{best_user.username}
                                <Badge bg="primary" pill>{best_user.trust_level}</Badge>
                                </ListGroup.Item>

                            )}
                        </ListGroup>
                    </Col>
                    {/* <Col>
                        <ListGroup as="ol" numbered>
                            {tets.map((project) =>
                                <ListGroup.Item key={project + "2"} as="li">{project}</ListGroup.Item>
                            )}
                        </ListGroup>
                    </Col> */}
                </Row>
                </Grid>

            </Box>
        </Box>
      </>
    </ThemeProvider>

  );
};

// data.delete_cookie("name")
// data.delete_cookie("user_id")

export default Dashboard;
