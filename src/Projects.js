import React from "react";
import { Cards } from "./components/Card";
import { ProjectCarousel } from "./components/ProjectCarousel";

export const Projects = () => (
  <div>
    <div>
      <h1 align="center">Projects</h1>
      <h2 align="center">A list of recent projects undertaken for clients</h2>
      <ProjectCarousel />
    </div>
  </div>
);
