import React from "react";
import {
  Jumbotron as Jumbo,
  Container,
  Row,
  Col,
  Button
} from "react-bootstrap";
import styled from "styled-components";
import Decking from "../assets/Decking.jpg";

const Styles = styled.div`
  img{
    max-width: 100%;
    max-height 100%;
    position: auto;
  }

  .Jumbo {
    background-size: cover;
    background-color: #12355b;
    color: #ffffff;
    height: 500px;
    margin-top: 10px;
  }

`;

export const HomeJumbotron = () => (
  <Styles>
    <Jumbo className="Jumbo">
      <Container>
        <Row className="row">
          <Col className="left col">
            <h2 align="center">
              <strong>Carpentry Services Available in Essex</strong>
            </h2>
            <p align="center">
              <strong>
                20 years experience of all carpentry services including home
                refurbishments, loft conversation, kitchen fitting, log cabin
                builds and more
              </strong>
            </p>
            <p align="center">
              <Button variant="light" href="/projects">
                View Projects Gallery
              </Button>
            </p>
            <br />
            <p align="center">
              <Button variant="light" href="/contact">
                Contact Us
              </Button>
            </p>
          </Col>
          <Col className="right col">
            <img src={`${Decking}`} alt="Decking" />
          </Col>
        </Row>
      </Container>
    </Jumbo>
  </Styles>
);
