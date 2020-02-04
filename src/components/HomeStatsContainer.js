import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Hiddendoors from "../assets/Hiddendoors.jpg";

const Styles = styled.div`
  .container-wrapper {
    border: 2.5px solid #12355b;
    border-radius: 10px;
    margin-top: 15px;
    margin-bottom: 15px;
    padding-bottom: 15px;
    padding-top: 15px;
    height: 500px;
    background: url(${Hiddendoors}) bottom;
    background-size: cover;
  }

  .h2,
  h3 {
    color: #black;
  }
`;

export const HomeStatsContainer = () => (
  <Styles>
    <div className="container-wrapper">
      <Container fluid>
        <Row>
          <Col>
            <h2 align="center">
              <strong>L.A Sadler Carpentry in Numbers</strong>
            </h2>
            <h3>Established in 2016</h3>
            <h3 align="right">20 Years Experience</h3>
            <h3>All 1st and 2nd Fix Carpentry services considered </h3>
            <h3>Over 50 projects completed</h3>
            <h3>One more stat here</h3>
          </Col>
        </Row>
      </Container>
    </div>
  </Styles>
);
