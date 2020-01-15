import React from "react";
import { Card, CardGroup, Button } from "react-bootstrap";
import Kitchen from "../assets/Kitchen.jpg";
import Cabin from "../assets/Cabin.jpg";
import styled from "styled-components";

const Styles = styled.div``;

export const Cards = () => (
  <Styles>
    <CardGroup>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={`${Cabin}`} />
        <Card.Body>
          <Card.Title>Log Cabin Build</Card.Title>
          <Card.Text>
            A Log cabin built from scratch for a client in Hockley, Essex
          </Card.Text>
          <Button variant="primary">View Photos</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={`${Kitchen}`} />
        <Card.Body>
          <Card.Title>Kitchen Fit Out</Card.Title>
          <Card.Text>
            A recent Howdens kitchen, fitted and cut to size by me.
          </Card.Text>
          <Button variant="primary">View Photos</Button>
        </Card.Body>
      </Card>
    </CardGroup>
  </Styles>
);
