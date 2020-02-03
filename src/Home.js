import React from "react";
import { Jumbotron } from "./components/Jumbotron";
import { HomeContainer } from "./components/HomeContainer";

export const Home = () => (
  <div className="Container">
    <Jumbotron />
    <HomeContainer />
  </div>
);
