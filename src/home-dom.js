import { format } from "date-fns";

const homeCard = (function () {
  const create = function (project) {
    const card = document.createElement("div");
    card.classList.add("home-card");

    const projTitle = document.createElement("h2");
    projTitle.classList.add("home-card-title");
    projTitle.textContent = project.getTitle();

    const toDoWrapper = document.createElement("div");
    toDoWrapper.classList.add("home-card-td-wrapper");

    project.getToDoArr().forEach((todo) => {
      toDoWrapper.appendChild(createToDoDiv(todo));
    });

    card.appendChild(projTitle);
    card.appendChild(toDoWrapper);
    return card;
  };

  const createToDoDiv = function (todo) {
    const tdDiv = document.createElement("div");
    tdDiv.classList.add("td-div");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const title = document.createElement("h3");
    title.classList.add("td-title");
    const desc = document.createElement("p");
    desc.classList.add("td-desc");
    const dueDate = document.createElement("p");
    dueDate.classList.add("td-due-date");
    const priority = document.createElement("p");
    priority.classList.add("td-priority");

    checkbox.checked = todo.getState();
    title.textContent = todo.getTitle();
    desc.textContent = todo.getDesc();
    dueDate.textContent = format(todo.getDueDate(), "yyyy/MM/dd");
    priority.textContent = todo.getPriority().toUpperCase();

    if (checkbox.checked) {
      tdDiv.classList.add("strikethrough");
    }

    tdDiv.appendChild(checkbox);
    tdDiv.appendChild(title);
    tdDiv.appendChild(desc);
    tdDiv.appendChild(dueDate);
    tdDiv.appendChild(priority);

    return tdDiv;
  };

  return { create };
})();

export default homeCard;
