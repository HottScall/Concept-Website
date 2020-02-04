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
    height: 700px;
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
                20 years experience of 1st and 2nd fix carpentry services
                including home refurbishments, loft conversions, kitchen
                fitting, log cabin builds and more. 1st and 2nd fix Carpentry
                business. Happy to quote any size job. I pride myself on
                perfection, reliability, and alway giving a well priced friendly
                service
              </strong>
            </p>
            <p align="center">
              <i id="icon" className="fas fa-phone-square-alt fa-5x"></i>
              {<h3>07854 890 319</h3>}

              <i align="right" className="fas fa-envelope-square fa-5x"></i>
              <a href="mailto:Scotthall1983@hotmail.com" target="_blank">
                <h3>Scotthall1983@hotmail.com</h3>
              </a>
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
