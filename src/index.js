import "./style.css";
import ToDo from "./to-do.js";
import Project from "./projects.js";
import homeCard from "./home-dom.js";

function loadDummyProjects() {
  const proj = Project("Home", new Array());
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
  return proj;
}

const content = document.querySelector("div#content");
// const projectArr = new Array();
// projectArr.push(loadDummyProjects());
//
content.appendChild(homeCard.create(loadDummyProjects()));

// projectArr.forEach((proj) => {
//   console.log(`Project: ${proj.getTitle()}`);
//   proj.getToDoArr().forEach((todo) => {
//     console.log(
//       `>> ${todo.getState()} | ${todo.getTitle()} | ${todo.getDesc()} | ${todo.getPriority()} | ${todo.getDueDate()}`,
//     );
//   });
// });
