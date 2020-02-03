import React from "react";
import { HomeJumbotron } from "./components/HomeJumbotron";
import { HomeContainer } from "./components/HomeContainer";

export const Home = () => (
  <div className="home-page-wrapper">
    <HomeJumbotron />
    <HomeContainer />
  </div>
);
