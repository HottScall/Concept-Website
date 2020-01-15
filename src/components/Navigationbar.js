import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #004777;
  }

  .navbar-brand,
  .narbar-nav,
  .nav-link {
    color: #efd28d;

    &:hover {
      color: #ff7700;
    }
  }
`;

export const Navigationbar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">L.A Sadler Carpentry</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about">About Us</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/projects">Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
