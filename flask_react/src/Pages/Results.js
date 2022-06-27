import { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

export default function Results() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'user_id': Cookies.get("user_id")
      }
    };

    fetch("/api/results", requestOptions)
      .then(res => res.json())
      .then(data => {
        setData(data)
        console.log(data)
      })
  }, []);


  // Returns all projects displayed in a card per project.
  const readResults = ({ data }) => {

    return data.map((project) =>

      <Row key={"result" + project.project_id} className="mb-3" style={{ width: "80%", height: "100px", marginTop: "5%", marginBottom: "3%", marginLeft: "100px" }}>
        <Col>
          <Card style={{ backgroundColor: '#7BD2EC' }}>
            <Row>
              <Col style={{ margin: "3%" }}>
                <h2>{project.name}</h2>
              </Col>
              <Col style={{ margin: "4%" }}>
                <Link to={"/moreInfo/" + project.project_id}>More info</Link>
              </Col>
              <Col style={{ margin: "3%" }}>
                Time run: 12:10:59
              </Col>
              <Col style={{ margin: "3%" }}>
                Correct
              </Col>

            </Row>
          </Card>
        </Col>
        <Col xs={1} sm={1} md={1} lg={1} style={{ marginTop: "3%" }}>
          <Button>Download</Button>
        </Col>
      </Row>
    );
  }

  return (
    <Container className="text-center" style={{ marginLeft: "5%", marginRight: "5%" }}>
      {readResults({ data })}
    </Container>
  );
};
