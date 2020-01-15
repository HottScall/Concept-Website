import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import Cabin2 from "../assets/Cabin2.jpg";

const Styles = styled.div`
  .Jumbo {
    background: url(${Cabin2}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 300px;
    position: relative;
    z-index: -2;
  }

  // .overlay {
  //   background-color: #000;
  //   opacity: 0.6;
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   bottom: 0;
  //   right: 0;
  //   z-index: -1;
  // }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid="true" className="Jumbo">
      <div className="overlay">
        <Container>
          <h1>Carpentry services availble in Essex</h1>
          <p>20 years of experience in woodwork.</p>
          <p>
            {" "}
            I have previously completed projects including: Log Cabins,
            Staircases, Fitted Wardrobes
          </p>
        </Container>
      </div>
    </Jumbo>
  </Styles>
);
