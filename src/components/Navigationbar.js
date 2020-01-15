import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import Logo from "../assets/Logo.jpg";

const Styles = styled.div`
  .navbar {
    background-color: #004777;
  }

  .navbar-brand,
  .narbar-nav,
  .nav-link
  {
    color: #efd28d;

    &:hover {
      color: #ff7700;
    }


`;

export const Navigationbar = () => (
  <Styles>
    <Navbar expand="lg">
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
      <Navbar.Collapse id="basic-navbar-nav">
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
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);