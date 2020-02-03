import React from "react";
import { Container, Row, Col, Button, Card, CardDeck } from "react-bootstrap";
import styled from "styled-components";
import Kitchen from "../assets/Kitchen.jpg";
import Cabin from "../assets/Cabin.jpg";
import LoftConversion from "../assets/LoftConversion.jpg";
import Decking from "../assets/Decking.jpg";
import Doors from "../assets/Doors.jpg";
import stairs from "../assets/stairs.jpg";

const Styles = styled.div`
  container {
    padding: 5px;
    border: 10px, solid, black;
  }

  .info-cards {
    padding-bottom: 15px;
  }
`;

export const HomeContainer = () => (
  <Styles>
    <div className="container-wrapper">
      <Container>
        <header className="services">
          <h3 align="center"> Services </h3>
          <br />
          <h1 align="center"> What We Do</h1>
          <br />
        </header>
        <section className="company-info-cards">
          <CardDeck className="info-cards">
            <Card>
              <Card.Img className="imgs img-1" variant="top" src={`${Cabin}`} />
              <Card.Body>
                <Card.Title align="center">
                  New Builds & Refurbishments
                </Card.Title>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img
                className="imgs img-2"
                variant="top"
                src={`${Kitchen}`}
              />
              <Card.Body>
                <Card.Title align="center">Kitchen Installations</Card.Title>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }}>
              <Card.Img
                className="imgs img-3"
                variant="top"
                src={`${LoftConversion}`}
              />
              <Card.Body>
                <Card.Title align="center">Loft Conversions</Card.Title>
              </Card.Body>
            </Card>
          </CardDeck>
          <CardDeck>
            <Card>
              <Card.Img
                className="imgs img-4"
                variant="top"
                src={`${Decking}`}
              />
              <Card.Body>
                <Card.Title align="center">Decking</Card.Title>
              </Card.Body>
            </Card>

            <Card className="imgs img-5">
              <Card.Img variant="top" src={`${Doors}`} />
              <Card.Body>
                <Card.Title align="center">Door Hangings </Card.Title>
              </Card.Body>
            </Card>

            <Card className="imgs img-6">
              <Card.Img variant="top" src={`${stairs}`} />
              <Card.Body>
                <Card.Title align="center">Home Improvements</Card.Title>
              </Card.Body>
            </Card>
          </CardDeck>
        </section>
      </Container>
    </div>
  </Styles>
);
