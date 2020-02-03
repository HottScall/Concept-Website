import React from "react";
import { Jumbotron } from "./components/Jumbotron";
import { HomeContainer } from "./components/HomeContainer";
import index from "./index.css";

export const Home = () => (
  <div className="home-page-wrapper">
    <Jumbotron />
    <HomeContainer />
  </div>
);
