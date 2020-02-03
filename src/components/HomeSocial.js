import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .Jumbo {
    background-size: cover;
    background-color: #12355b;
    color: #ffffff;
    margin-top: 10px;
  }
`;

export const HomeSocial = () => (
  <Styles>
    <div className="home-social-wrapper">
      <Jumbotron className="Jumbo">
        <h1 align="center">See me on social media</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    </div>
  </Styles>
);
