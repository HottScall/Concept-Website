import React from "react";
import { HomeJumbotron } from "./components/HomeJumbotron";
import { HomeContainer } from "./components/HomeContainer";
import { HomeSocial } from "./components/HomeSocial";
import { HomeStatsContainer } from "./components/HomeStatsContainer";
import index from "./index.css";

export const Home = () => (
  <div className="home-page-wrapper">
    <HomeJumbotron />
    <HomeContainer />
    <HomeStatsContainer />
    <HomeSocial />
  </div>
);
