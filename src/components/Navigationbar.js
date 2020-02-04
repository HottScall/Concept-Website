import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import Logo from "../assets/Logo.jpg";

const Styles = styled.div`
  .navbar {
    background-color: #12355b;
  }

  .navbar-brand,
  .narbar-nav,
  .nav-item,
  .nav-link
  {
    color: #ffffff;

    &:hover {
      color: #ffffff;
    }
`;

export const Navigationbar = () => (
  <Styles>
    <Navbar className="Nav" variant="dark" expand="lg">
      <Navbar.Brand href="/">
        <img
          className="logo"
          src={Logo}
          width="80"
          height="80"
          alt="company logo"
        />
      </Navbar.Brand>
      <h1>
        <Nav.Link href="/">L.A Sadler Carpentry</Nav.Link>
      </h1>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav className="ml-auto">
        <Nav.Item>
          <h4>
            <Nav.Link href="/">Home</Nav.Link>
          </h4>
        </Nav.Item>
        <Nav.Item>
          <h4>
            <Nav.Link href="/about">About Us</Nav.Link>
          </h4>
        </Nav.Item>
        <Nav.Item>
          <h4>
            <Nav.Link href="/projects">Projects</Nav.Link>
          </h4>
        </Nav.Item>
        <Nav.Item>
          <h4>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </h4>
        </Nav.Item>
      </Nav>
    </Navbar>
  </Styles>
);
