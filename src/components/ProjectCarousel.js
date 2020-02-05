import React, { Component } from "react";
import { Carousel, Container } from "react-bootstrap";
import styled from "styled-components";
import Cabin from "../assets/Cabin.jpg";
import Cabin2 from "../assets/Cabin2.jpg";
import Cabin3 from "../assets/Cabin3.jpg";
import Cabin5 from "../assets/Cabin5.jpg";
import CabinInterior1 from "../assets/CabinInterior1.jpg";
import CabinInterior2 from "../assets/CabinInterior2.jpg";
import CabinInterior3 from "../assets/CabinInterior3.jpg";
import CabinInterior4 from "../assets/CabinInterior4.jpg";

const Styles = styled.div``;

export const ProjectCarousel = () => (
  <Styles>
    <div className="carousel-wrapper">
      <Carousel>
        <Carousel.Item>
          <img className="d-inline w-100" src={Cabin} alt="Cabin Picture" />

          <Carousel.Caption>
            <h3>Log Cabin Build</h3>
            <p>Finished external picture of recent Log Cabin New Build</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-inline w-100" src={Cabin2} alt="Cabin Picture" />

          <Carousel.Caption>
            <h3>Log Cabin Build</h3>
            <p>Finished external picture of recent Log Cabin New Build</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-inline w-100" src={Cabin3} alt="Cabin Picture" />

          <Carousel.Caption>
            <h3>Log Cabin Build</h3>
            <p>Finished external picture of recent Log Cabin New Build</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-inline w-100" src={Cabin5} alt="Cabin Picture" />

          <Carousel.Caption>
            <h3>Log Cabin Build</h3>
            <p>Finished external picture of recent Log Cabin New Build</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-inline w-100"
            src={CabinInterior1}
            alt="Cabin Picture"
          />

          <Carousel.Caption>
            <h3>Log Cabin Build</h3>
            <p>Finished external picture of recent Log Cabin New Build</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-inline w-100"
            src={CabinInterior2}
            alt="Cabin Picture"
          />

          <Carousel.Caption>
            <h3>Log Cabin Build</h3>
            <p>Finished external picture of recent Log Cabin New Build</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-inline w-100"
            src={CabinInterior3}
            alt="Cabin Picture"
          />

          <Carousel.Caption>
            <h3>Log Cabin Build</h3>
            <p>Finished external picture of recent Log Cabin New Build</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-inline w-100"
            src={CabinInterior4}
            alt="Cabin Picture"
          />

          <Carousel.Caption>
            <h3>Log Cabin Build</h3>
            <p>Finished external picture of recent Log Cabin New Build</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  </Styles>
);
