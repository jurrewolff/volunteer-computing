import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Card} from "react-bootstrap";
import { Link} from "react-router-dom"

export default function MoreInfo() {

    const linkVars = window.location.pathname.split("/").slice(2)
	const [project, setProject] = useState([{}]);

	// Retrieves and updates data.
    useEffect(() => {
            fetch("/projects")
                .then(res => res.json())
                .then(data => {
					var index = linkVars[0] - 1;
                    setProject(data[index])
                })
    }, []);

	// Function for the responsive button.
    function clickButton() {
          var url = 'http://localhost:8001/runproject/' + linkVars[0];
          window.open(url, '_tab');
    }

    return (

        <Container key={"more" + linkVars[0]} className="text-center" style={{marginLeft:"5%", marginRight:"5%", marginTop:"5%"}}>

              	<Card style={{margin:"5%"}} >
                    <h1 style={{margin:"2%"}}>{project.name}</h1>
					<div>
						<p>{project.description}</p>

					</div>

                </Card>

                <Link to="/Projects">
                  	<Button variant="primary" size="lg" style={{marginRight: "20px"}}>
                    	Back
                  	</Button>
                </Link>

				{/* The text and color of the button and the link are dependent on the url of the page */}
                <Button
                    onClick={clickButton}>
                    Start Computing
                </Button>

        </Container>
  	);
};
