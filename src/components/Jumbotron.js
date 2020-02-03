import React from "react";
import {
  Jumbotron as Jumbo,
  Container,
  Row,
  Col,
  Button,
  CardGroup,
  Card
} from "react-bootstrap";
import styled from "styled-components";
import Kitchen from "../assets/Kitchen.jpg";

const Styles = styled.div`

  img{
    max-width: 100%;
    max-height 100%;
  }

  .Jumbo {
    background-size: cover;
    color: black;
    height: 500px;
    padding 10px;
    margin 10px;
    position: relative;
    z-index: -2;
  }

`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid="true" className="Jumbo">
      <div className="overlay">
        <Container>
          <Row>
            <Col className="left col">
              <h2>Carpentry Services Available in Essex</h2>
              <p>
                20 years experience of all carpentry services including home
                refurbishments, loft conversation, kitchen fitting, log cabin
                builds and more
              </p>
              <Button variant="outline-primary">View Projects Gallery</Button>
              <Button variant="outline-primary">Contact Us</Button>
            </Col>
            <Col className="right col">
              <img src={Kitchen} alt="Kitchen" />
            </Col>
          </Row>
        </Container>
      </div>
    </Jumbo>
  </Styles>
);
