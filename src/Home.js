import React from "react";
import { HomeJumbotron } from "./components/HomeJumbotron";
import { HomeContainer } from "./components/HomeContainer";
import { HomeSocial } from "./components/HomeSocial";

export const Home = () => (
  <div className="home-page-wrapper">
    <HomeJumbotron />
    <HomeContainer />
    <HomeSocial />
  </div>
);
