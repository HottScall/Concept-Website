import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardColumns
} from "react-bootstrap";
import styled from "styled-components";
import Kitchen from "../assets/Kitchen.jpg";
import Cabin from "../assets/Cabin.jpg";
import LoftConversion from "../assets/LoftConversion.jpg";
import Decking from "../assets/Decking.jpg";
import Doors from "../assets/Doors.jpg";
import StairCupboards from "../assets/StairCupboards.jpg";

const Styles = styled.div`
  .info cards {
    flex-direction: row | column;
  }
`;

export const HomeContainer = () => (
  <Styles>
    <Container fluid>
      <header className="services">
        <h3 align="center"> Services </h3>
        <br />
        <h1 align="center"> What We Do</h1>
        <br />
      </header>
      <section className="company-info-cards">
        <CardColumns className="info cards">
          <Card>
            <Card.Img className="imgs img-1" variant="top" src={`${Cabin}`} />
            <Card.Body>
              <Card.Title align="center">
                New Builds & Refurbishments
              </Card.Title>
              <Card.Text>
                New builds and refurbishments of Log Cabins, Sheds and Outside
                Spaces
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img className="imgs img-2" variant="top" src={`${Kitchen}`} />
            <Card.Body>
              <Card.Title>Kitchen Installations</Card.Title>
              <Card.Text>
                Fit Outs and Installations of prepacked and bespoke kitchen
                units
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img
              className="imgs img-3"
              variant="top"
              src={`${LoftConversion}`}
            />
            <Card.Body>
              <Card.Title>Loft Conversions</Card.Title>
              <Card.Text>All size loft conversions considered</Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img className="imgs img-4" variant="top" src={`${Decking}`} />
            <Card.Body>
              <Card.Title>Decking</Card.Title>
              <Card.Text>
                Garden Decking to fit all garden shapes and sizes
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="imgs img-5">
            <Card.Img variant="top" src={`${Doors}`} />
            <Card.Body>
              <Card.Title>Door Hangings </Card.Title>
              <Card.Text>Hanging of custom made and pre fitted doors</Card.Text>
            </Card.Body>
          </Card>

          <Card className="imgs img-6">
            <Card.Img variant="top" src={`${StairCupboards}`} />
            <Card.Body>
              <Card.Title>Decking</Card.Title>
              <Card.Text>
                Garden Decking to fit all garden shapes and sizes
              </Card.Text>
            </Card.Body>
          </Card>
        </CardColumns>
      </section>
    </Container>
  </Styles>
);
