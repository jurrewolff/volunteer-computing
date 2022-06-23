
import ResponsiveAppBar from '../Components/Navbar';
import PermanentDrawerLeft from '../Components/SideMenu';
import Box from '@mui/material/Box';


import { ListGroup, Container, Row, Col, Button, Card} from "react-bootstrap";
import { Link } from "react-router-dom";
import { ProjectsRequest } from '../Actions/projectsRequest'
import { LoginRequest } from '../Actions/loginRequest'
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Projects() {

    const testTitles = ["Watermeloen", "Sesam", "Water",  "Watermeloen2", "Sesam2", "Water2", "Zeezout"]
    const testTexts = ["De watermeloen zorgt voor hydratatie, is rijk aan gezonde vitaminen en mineralen en is goed voor je immuunsysteem. Maar weet je ook hoeveel calorieën watermeloen bevat? Wat is een gele watermeloen precies en hoe kan je watermeloen het beste eten? Hier vind je alles wat je moet weten over deze vrucht.",
                "De plant komt oorspronkelijk uit Afrika: het woord sesam komt uit het Arabisch saasim/simsim. Aldaar worden de sesamzaadjes vaak gebrand gegeten, net als pinda's. De wortels van de plant worden in de zomer geoogst en de zaden op het moment dat de omhulsels van de sesam bruin-zwart zijn verkleurd.",
                "Water (H2O; aqua of aq.; zelden diwaterstofoxide of oxidaan) is de chemische verbinding van twee waterstofatomen en een zuurstofatoom. Water komt in de natuur voor in de drie verschillende hoofdfasen: als vloeistof, als vaste stof en als gas.",
                "De watermeloen zorgt voor hydratatie, is rijk aan gezonde vitaminen en mineralen en is goed voor je immuunsysteem. Maar weet je ook hoeveel calorieën watermeloen bevat? Wat is een gele watermeloen precies en hoe kan je watermeloen het beste eten? Hier vind je alles wat je moet weten over deze vrucht.",
                "De plant komt oorspronkelijk uit Afrika: het woord sesam komt uit het Arabisch saasim/simsim. Aldaar worden de sesamzaadjes vaak gebrand gegeten, net als pinda's. De wortels van de plant worden in de zomer geoogst en de zaden op het moment dat de omhulsels van de sesam bruin-zwart zijn verkleurd.",
                "Water (H2O; aqua of aq.; zelden diwaterstofoxide of oxidaan) is de chemische verbinding van twee waterstofatomen en een zuurstofatoom. Water komt in de natuur voor in de drie verschillende hoofdfasen: als vloeistof, als vaste stof en als gas."]



    // Achieve 2 colums while using map by putting the first half in the left row and
    // the second half in the right row.
    const ProjectsList = ({ titles, texts }) =>
        titles.map( (title, index) => (
            // This is one big if else-statement to only run the map for the first half of the elements
            index < Math.ceil(titles.length / 2)?
            <Row key={titles[index]}>
                <Col>
                    <Card className="mb-3" style={{width:"100%", height:"90%", marginTop:"5%", marginLeft:"15%"}}>
                        <h1>{title}</h1>
                        <Card.Text style={{margin:"5%"}}>{texts[index]}</Card.Text>
                        <Row style={{margin:"5%"}}>
                            <Col>
                                <Link to={"/moreInfo/" + titles[index]  + "/NoRun"}>More info</Link>
                            </Col>
                            <Col>
                                <Link to={"/moreInfo/" + titles[index]  + "/Run"}>
                                    <Button
                                        variant="success">
                                        Start computing
                                    </Button>
                                </Link>
                            </Col>
                        </Row>
                    </Card>
                </Col>

                {/* The last row should only have 1 card if there is an uneven number of projects */}
                {index < Math.floor(titles.length / 2) ?
                <Col>
                    <Card className="mb-3" style={{width:"100%", height:"90%", marginTop:"5%", marginLeft:"15%"}}>
                        <h1>{titles[index + Math.ceil(titles.length / 2)]}</h1>
                        <Card.Text style={{margin:"5%"}}>{texts[index + Math.ceil(titles.length / 2)]}</Card.Text>
                        <Row style={{margin:"5%"}}>
                            {/* Add the ProjectId of the clicked project as a variable to the link, we will use this to get the correct info from the database in MoreInfo.js*/}
                            <Col>
                                <Link to={"/moreInfo/" + titles[index + Math.ceil(titles.length / 2)] + "/Norun"}>More info</Link>
                            </Col>
                            <Col>
                                <Link to={"/moreInfo/" + titles[index + Math.ceil(titles.length / 2)] + "/Run"}>
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

        : ""

        ));


    return (
        // <Box>
        //     <ResponsiveAppBar />
        //     <PermanentDrawerLeft />
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
                <ListGroup>
                    <ProjectsList titles={testTitles} texts={testTexts} />
                </ListGroup>
            </Container>
            </Box>
        // </Box>
    );
};
