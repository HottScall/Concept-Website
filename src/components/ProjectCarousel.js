import React, { Component } from "react";
import { Carousel, Container } from "react-bootstrap";
import styled from "styled-components";
import Cabin from "../assets/Cabin.jpg";
import Cabin2 from "../assets/Cabin2.jpg";

const Styles = styled.div``;

export const ProjectCarousel = () => (
  <Styles>
    <div className="carousel-wrapper">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Cabin} alt="Cabin Picture" />

          <Carousel.Caption>
            <h3>Log Cabin Build</h3>
            <p>Finished external picture of recent Log Cabin New Build</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Cabin2} alt="Cabin Picture" />

          <Carousel.Caption>
            <h3>Log Cabin Build</h3>
            <p>Finished external picture of recent Log Cabin New Build</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  </Styles>
);
