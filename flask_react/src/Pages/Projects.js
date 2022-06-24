import Box from '@mui/material/Box';


import { Container } from "react-bootstrap";
import { ProjectsRequest } from '../Actions/projectsRequest'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Projects() {
    return (
        <Box
            component="main"
            sx={{
                pl: 30,
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
            }}
        >
            <Container className="text-center" maxWidth="lg" style={{ marginLeft: "5%", marginRight: "5%" }}>
                < ProjectsRequest />
            </Container>
        </Box>
    );
};
