import "./style.css";
import loadDummyProjects from "./dummy";
import { content, sidebar, homeCard, forms } from "./dom";

const projectDiv = document.querySelector(".project-wrapper");
const projectArr = new Array();

loadDummyProjects().forEach((p) => {
  projectArr.push(p);
});

projectArr.forEach((proj) => {
  content.append(homeCard.create(proj));
});

sidebar.activateHomeButton(projectArr);
sidebar.activateAddTdButton(projectArr);
sidebar.createProjectButtons(projectArr).forEach((btn) => {
  projectDiv.appendChild(btn);
});

// Manage this in dom.js
// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
