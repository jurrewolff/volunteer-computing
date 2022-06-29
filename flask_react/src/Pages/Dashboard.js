import React from 'react';
import './Dashboard.css';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import ListGroup from 'react-bootstrap/ListGroup';
import { Row, Col, Badge } from "react-bootstrap";
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import {DropdownButton, Dropdown } from 'react-bootstrap';
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from '../Components/Theme';
import PermanentDrawerLeft from '../Components/SideMenu';
import ResponsiveAppBar from '../Components/Navbar';


const Dashboard = () => {

  let user_cookie = Cookies.get("user_id")
  const navigate = useNavigate();
  const [data, setData] = useState([{}]);
  const [amount, setAmount] = useState(10);
  const [order_by, setOrderBy] = useState("trust_level");

  const changeAmount = e => {
    setAmount(e.target.value);
};

const renderSwitch = (best_user, param) => {
    switch(param) {
        case 'trust_level':
            return (best_user.trust_level);
        case 'score':
            return (best_user.score);
        case 'runtime':
            return (best_user.runtime);
        default:
            return (best_user.trust_level);
    }
  };

  const renderOrdering = (param) => {
    switch(param) {
        case 'trust_level':
            return ('Trust level');
        case 'score':
            return ('Score');
        case 'runtime':
            return ('Runtime');
        default:
            return ('Trust level');
    }
  };


  useEffect(() => {
        if (!user_cookie) {
            console.log("User not logged in, redirecting to login page")
            return navigate('/login')
        }
        const requestOptions = {
            method: 'GET',
            headers: {
                'amount': amount,
                'order_by': order_by
            }
        };
        fetch("/api/dashboard", requestOptions)
            .then(res => res.json())
            .then(data => {
                setData(data)
        })
  }, [amount, order_by]);

  return (

    <ThemeProvider theme={theme}>
      <>
        <ResponsiveAppBar />
        <PermanentDrawerLeft />
        <Box>
            <Box
                // border="dashed"
                component="main"
                sx={{
                pl: 30,
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
                }}
            >
                <Grid
                    justify="center"
                    style={{
                            width: "50vw",
                            marginLeft: "15vw"
                            }}>
                <Grid >
                <Container maxWidth="lg" sx={{}}>
                    <h1>Top researchers and volunteers</h1>
                </Container>
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
                <Grid direction='row' container spacing={1}>
                    <Grid container item sm={6}>
                        <DropdownButton id='id' title='Order by:'>
                            <Dropdown.Item ><div onClick={() => setOrderBy('trust_level')}>Trust level</div></Dropdown.Item>
                            <Dropdown.Item ><div onClick={() => setOrderBy('score')}>Score</div></Dropdown.Item>
                            <Dropdown.Item ><div onClick={() => setOrderBy('runtime')}>Runtime</div></Dropdown.Item>
                        </DropdownButton>
                    </Grid>
                    <Grid container item sm={6}>
                        {renderOrdering(order_by)}
                    </Grid>
                </Grid>
                <Row>
                    <Col>
                        <ListGroup as="ol" numbered>
                            {data.map((best_user) =>
                                <ListGroup.Item key={best_user.user_id} as="li">{best_user.username}
                                <Badge bg="primary" style={{margin: "10px"}} pill>{renderSwitch(best_user, order_by)}</Badge>
                                </ListGroup.Item>

                            )}
                        </ListGroup>
                    </Col>
                </Row>
                </Grid>
            </Box>
        </Box>
      </>
    </ThemeProvider>

  );
};

export default Dashboard;
