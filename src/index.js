import "./style.css";
import loadDummyProjects from "./dummy";
import { sidebar, homeCard, forms } from "./dom";

const content = document.querySelector("div#content");
const addTdBtn = document.querySelector("button.add.to-do");
const formDiv = document.querySelector("div.form-wrapper");
const projectDiv = document.querySelector(".project-wrapper");
const projectArr = new Array();

loadDummyProjects().forEach((p) => {
  projectArr.push(p);
});

projectArr.forEach((proj) => {
  content.appendChild(homeCard.create(proj));
});

sidebar.activateHomeButton(document.querySelector("button.home"), projectArr);
sidebar.createProjectButtons(projectArr).forEach((btn) => {
  projectDiv.appendChild(btn);
});

// Manage this in content-dom.js or sidebar-dom.js
// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
addTdBtn.addEventListener("click", () => {
  if (!formDiv.firstChild) formDiv.appendChild(forms.createTdForm());
});
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
