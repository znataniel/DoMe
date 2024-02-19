import "./style.css";
import loadDummyProjects from "./dummy";
import { content, sidebar, homeCard, forms } from "./dom";

const projectArr = new Array();

loadDummyProjects().forEach((p) => {
  projectArr.push(p);
});

sidebar.populateHome(projectArr);
sidebar.activateHomeButton(projectArr);
sidebar.activateAddTdButton(projectArr);
sidebar.activateAddProjButton(projectArr);
sidebar.populateProjectButtons(projectArr);
