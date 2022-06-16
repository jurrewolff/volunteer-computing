import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Card} from "react-bootstrap";
import { Link} from "react-router-dom"

export default function MoreInfo() {

    const [clicked, setClicked] = useState(false);
    const linkVars = window.location.pathname.split("/").slice(2)


	// Function for the responsive button.
	// Ik snap niet waarom deze hier moet staan
    function clickButton() {
      	setClicked(!clicked)
    }

    return (

        <Container key={"more" + linkVars[0]} className="text-center" style={{marginLeft:"5%", marginRight:"5%", marginTop:"5%"}}>
				{linkVars[0]}
              	<h1 style={{marginTop:"5%"}}>Watermeloen</h1>
              	<Card.Text style={{margin:"5%"}} >
                	De watermeloen zorgt voor hydratatie, is rijk aan gezonde vitaminen
                  	en mineralen en is goed voor je immuunsysteem. Maar weet je ook hoeveel calorieën
                  	watermeloen bevat? Wat is een gele watermeloen precies en hoe kan je watermeloen het
                  	beste eten? Hier vind je alles wat je moet weten over deze vrucht. <br></br><br></br>

                  	De watermeloen (Citrullus lanatus, synoniem: Citrullus vulgaris) is een eenjarige,
                  	eenhuizige plant uit de familie Cucurbitaceae met grote, grijs-groene gelobde bladeren.
                  	De bloemen zijn eenslachtig en geel tot wit van kleur. De vruchten, die afhankelijk van
                  	de soort kunnen variëren in gewicht van 1 tot 50 kg, bevatten vochtig, zoet vruchtvlees.
                  	In het vruchtvlees, dat meestal rood is, maar ook wit, roze, geel of oranje van kleur kan zijn,
                	zitten de pitten. Het rode vruchtvlees bevat het hoogste gehalte lycopeen[1] van alle rauw geconsumeerde
                	vruchten (indien een tomaat gekookt wordt, bevat deze relatief meer lycopeen).<br></br><br></br>

                	In Japan hebben boeren uit de buurt van Zentsuji een manier gevonden om kubusvormige watermeloenen
                	te kweken. Daarbij worden de meloenen in glazen kubussen gekweekt, waarbij ze een kubusvorm aannemen.
                	Door deze vorm zijn de meloenen gemakkelijker op te slaan en te vervoeren, maar de kubusvormige meloenen
                	zijn meer dan tweemaal zo duur als de normale vorm. Ook een watermeloen in de vorm van een piramide is
                	ontwikkeld.
                </Card.Text>

                <Link to="/Projects">
                  	<Button variant="primary" size="lg">
                    	Back
                  	</Button>
                </Link>

				{/* The text and color of the button and the link are dependent on the url of the page */}
                <Link to={"/moreInfo/" + linkVars[0] + (linkVars[1] === "Run"? "/NoRun" : "/Run")}>
					<Button
                        variant={linkVars[1] === "Run" ? "danger" : "success"}
                        onClick={clickButton}>
						{linkVars[1] === "Run" ? "Stop computing" : "Start computing"}
                    </Button>
                </Link>

        </Container>
  	);
};
