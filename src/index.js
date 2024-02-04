import "./style.css";
import "./projects.js";
import ToDo from "./to-do.js";
import Project from "./projects.js";

function loadDummyProjects() {
  const proj = Project("Home", new Array());
  const todos = [
    ToDo(
      "Cook dinner",
      "Cook dinner for George's visit.",
      new Date(2023, 10, 2),
    ),
    ToDo(
      "Clean mess",
      "You are going to leave a mess with George. Make sure to clean afterwards.",
      new Date(2023, 10, 3),
    ),
    ToDo(
      "Kramer's vacuum cleaner",
      "Get Martin to return Kramer's vacuum cleaner.",
      new Date(2023, 10, 3),
    ),
  ];
  todos.forEach((todo) => {
    proj.addToDo(todo);
  });
  return proj;
}

const projectArr = new Array();
projectArr.push(loadDummyProjects());

projectArr.forEach((proj) => {
  console.log(proj.getTitle());
  proj.getToDoArr().forEach((todo) => {
    console.log(
      `>> ${todo.getState()} | ${todo.getTitle()} | ${todo.getDesc()} | ${todo.getPriority()} | ${todo.getDueDate()}`,
    );
  });
});
