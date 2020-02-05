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
import StairsBefore1 from "../assets/StairsBefore1.jpg";
import StairsBefore2 from "../assets/StairsBefore2.jpg";
import StairsBefore3 from "../assets/StairsBefore3.jpg";
import StairsDuring1 from "../assets/StairsDuring1.jpg";
import StairsDuring2 from "../assets/StairsDuring2.jpg";

const Styles = styled.div`
  // .carousel-wrapper {
  //   border: 2.5px solid #12355b;
  //   border-radius: 10px;
  //   margin-top: 15px;
  //   margin-bottom: 15px;
  //   padding-bottom: 15px;
  //   padding-top: 15px;
  //   height: 500px;
  // }

  img {
    height: 500px;
  }
`;

export const ProjectCarousel = () => (
  <Styles>
    <div>
      <Carousel className="carousel-wrapper">
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

    <div>
      <Carousel className="carousel-wrapper">
        <Carousel.Item>
          <img
            className="d-inline w-100"
            src={StairsBefore1}
            alt="Stairs Picture"
          />

          <Carousel.Caption>
            <h3>Custom Fitted Cupboards</h3>
            <p>Before the build</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-inline w-100"
            src={StairsBefore2}
            alt="Cabin Picture"
          />

          <Carousel.Caption>
            <h3>Custom Fitted Cupboards</h3>
            <p>Before the build</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-inline w-100"
            src={StairsBefore3}
            alt="Cabin Picture"
          />

          <Carousel.Caption>
            <h3>Custom Fitted Cupboards</h3>
            <p>Before the build</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-inline w-100"
            src={StairsDuring1}
            alt="Cabin Picture"
          />

          <Carousel.Caption>
            <h3>Custom Fitted Cupboards</h3>
            <p>During the build process</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-inline w-100"
            src={StairsDuring2}
            alt="Cabin Picture"
          />

          <Carousel.Caption>
            <h3>Custom Fitted Cupboards</h3>
            <p>During the build process</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  </Styles>
);
