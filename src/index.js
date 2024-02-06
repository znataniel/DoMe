import "./style.css";
import ToDo from "./to-do.js";
import Project from "./projects.js";
import { homeCard, projectTab } from "./content-dom";
import sidebar from "./sidebar-dom.js";

function loadDummyProjects() {
  const proj = Project("General", new Array());
  const todos = [
    ToDo(
      "Cook dinner",
      "Cook dinner for George's visit.",
      new Date(2023, 10, 2),
      1,
    ),
    ToDo(
      "Clean mess",
      "You are going to leave a mess with George. Make sure to clean afterwards.",
      new Date(2023, 10, 3),
      0,
    ),
    ToDo(
      "Kramer's vacuum cleaner",
      "Get Martin to return Kramer's vacuum cleaner.",
      new Date(2023, 10, 3),
      2,
    ),
  ];
  todos.forEach((todo) => {
    proj.addToDo(todo);
  });

  const proj2 = Project("Chocolatada", []);
  const todos2 = [
    ToDo("Agarrar choco", "Agarra la choco y destapala", new Date(), 2, true),
    ToDo("Hacer choco", "Hacete la choco", new Date(), 2),
    ToDo("Tomar choco", "Tomala, con la boca", new Date(), 2),
  ];
  todos2.forEach((todo) => {
    proj2.addToDo(todo);
  });

  return [proj, proj2];
}

const content = document.querySelector("div#content");
const projectList = document.querySelector(".project-wrapper");

const projectArr = new Array();
loadDummyProjects().forEach((p) => {
  projectArr.push(p);
});
projectArr.forEach((proj) => {
  content.appendChild(homeCard.create(proj));
});

sidebar.activateHomeButton(document.querySelector("button.home"), projectArr);
sidebar.createProjectButtons(projectArr).forEach((btn) => {
  projectList.appendChild(btn);
});

// projectArr.forEach((proj) => {
//   console.log(`Project: ${proj.getTitle()}`);
//   proj.getToDoArr().forEach((todo) => {
//     console.log(
//       `>> ${todo.getState()} | ${todo.getTitle()} | ${todo.getDesc()} | ${todo.getPriority()} | ${todo.getDueDate()}`,
//     );
//   });
// });
