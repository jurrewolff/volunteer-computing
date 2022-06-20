import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, Container, Row, Col, Button, Card} from "react-bootstrap";
import { Link } from "react-router-dom";

import { ProjectsRequest } from '../Actions/projectsRequest'
import { LoginRequest } from '../Actions/loginRequest'

export default function Projects() {
  
  return (

    <Container className="text-center" style={{marginLeft:"5%", marginRight:"5%"}}>
        < ProjectsRequest />
    </Container>

  );
};
