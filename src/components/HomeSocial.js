import React from "react";
import { Jumbotron } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .Jumbo {
    background-size: cover;
    background-color: #12355b;
    color: #ffffff;
    margin-top: 10px;
  }

  #icon {
    padding: 2.5%;
  }
`;

export const HomeSocial = () => (
  <Styles>
    <div className="home-social-wrapper">
      <Jumbotron className="Jumbo">
        <h1 align="center">See our work on social media</h1>
        <p align="center">
          <a
            href="https://www.instagram.com/lasadler_carpentry/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i id="icon" className="fab fa-instagram fa-7x"></i>
          </a>

          <a
            href="https://www.facebook.com/lasadlercarpentry/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i id="icon" className="fab fa-facebook-square fa-7x"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/luke-sadler-625ba7103/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i id="icon" className="fab fa-linkedin fa-7x"></i>
          </a>
        </p>
      </Jumbotron>
    </div>
  </Styles>
);
