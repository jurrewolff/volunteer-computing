import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function PastProjects() {


    const testTitles = ["Watermeloen", "Sesam", "Water", "Watermeloen", "Sesam", "Water", "Zeezout"]
    const testTexts = ["De watermeloen zorgt voor hydratatie, is rijk aan gezonde vitaminen en mineralen en is goed voor je immuunsysteem. Maar weet je ook hoeveel calorieën watermeloen bevat? Wat is een gele watermeloen precies en hoe kan je watermeloen het beste eten? Hier vind je alles wat je moet weten over deze vrucht.",
        "De plant komt oorspronkelijk uit Afrika: het woord sesam komt uit het Arabisch saasim/simsim. Aldaar worden de sesamzaadjes vaak gebrand gegeten, net als pinda's. De wortels van de plant worden in de zomer geoogst en de zaden op het moment dat de omhulsels van de sesam bruin-zwart zijn verkleurd.",
        "Water (H2O; aqua of aq.; zelden diwaterstofoxide of oxidaan) is de chemische verbinding van twee waterstofatomen en een zuurstofatoom. Water komt in de natuur voor in de drie verschillende hoofdfasen: als vloeistof, als vaste stof en als gas.",
        "De watermeloen zorgt voor hydratatie, is rijk aan gezonde vitaminen en mineralen en is goed voor je immuunsysteem. Maar weet je ook hoeveel calorieën watermeloen bevat? Wat is een gele watermeloen precies en hoe kan je watermeloen het beste eten? Hier vind je alles wat je moet weten over deze vrucht.",
        "De plant komt oorspronkelijk uit Afrika: het woord sesam komt uit het Arabisch saasim/simsim. Aldaar worden de sesamzaadjes vaak gebrand gegeten, net als pinda's. De wortels van de plant worden in de zomer geoogst en de zaden op het moment dat de omhulsels van de sesam bruin-zwart zijn verkleurd.",
        "Water (H2O; aqua of aq.; zelden diwaterstofoxide of oxidaan) is de chemische verbinding van twee waterstofatomen en een zuurstofatoom. Water komt in de natuur voor in de drie verschillende hoofdfasen: als vloeistof, als vaste stof en als gas."]



    // Achieve 2 colums while using map by putting the first half in the left row and
    // the second half in the right row.
    const ProjectsList = ({ titles, texts }) =>
        titles.map((title, index) => (
            // This is one big if else-statement to only run the map for the first half of the elements


            <Card className="mb-3" style={{ width: "100%", height: "90%", marginTop: "5%", marginLeft: "5%", marginRight: "100%" }}>
                <Row>
                    <Col>
                        <h1>{title}</h1>
                    </Col>
                    <Col>
                        <Card.Text style={{ margin: "5%" }}>{texts[index]}</Card.Text>
                    </Col>
                </Row>
            </Card>




        ));


    return (

        <div>
            <Container className="text-center" style={{ marginLeft: "5%", marginRight: "5%" }}>

                <ListGroup>
                    <ProjectsList titles={testTitles} texts={testTexts} />
                </ListGroup>

            </Container>
        </div>

    );
};