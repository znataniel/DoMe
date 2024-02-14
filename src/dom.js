import { format } from "date-fns";

const content = (function () {
  const contentDiv = document.querySelector("div#content");

  const clear = function () {
    while (contentDiv.firstChild) {
      contentDiv.removeChild(contentDiv.firstChild);
    }
  };

  const append = function (element) {
    contentDiv.appendChild(element);
  };

  return { clear, append };
})();

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

  return { create };
})();

const projectTab = (function () {
  const createTitle = function (project) {
    const title = document.createElement("h2");
    title.textContent = project.getTitle();
    return title;
  };

  const createToDoWrapper = function (project) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("td-wrapper");

    project.getToDoArr().forEach((todo) => {
      wrapper.appendChild(createToDoDiv(todo));
    });

    return wrapper;
  };

  return { createTitle, createToDoWrapper };
})();

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

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      tdDiv.classList.add("strikethrough");
    } else {
      tdDiv.classList.remove("strikethrough");
    }
    todo.setToggleState();

    console.log(`${todo.getTitle()}: ${todo.getState()}`);
  });

  tdDiv.appendChild(checkbox);
  tdDiv.appendChild(title);
  tdDiv.appendChild(desc);
  tdDiv.appendChild(dueDate);
  tdDiv.appendChild(priority);

  return tdDiv;
};

const sidebar = (function () {
  const activateHomeButton = function (hBtn, projectArr) {
    hBtn.addEventListener("click", () => {
      content.clear();
      projectArr.forEach((proj) => {
        content.append(homeCard.create(proj));
      });
    });
  };

  const createProjectButtons = function (projectArr) {
    if (!(projectArr instanceof Array)) {
      return null;
    }
    const projectButtons = [];
    projectArr.forEach((proj) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.classList.add("project-btn");
      btn.textContent = proj.getTitle();

      btn.addEventListener("click", () => {
        content.clear();
        content.append(projectTab.createTitle(proj));
        content.append(projectTab.createToDoWrapper(proj));
      });

      projectButtons.push(btn);
    });

    return projectButtons;
  };

  return { activateHomeButton, createProjectButtons };
})();

const forms = (function () {
  const createTdForm = function () {
    const tdForm = document.createElement("form");
    const formElements = [];

    const formTitle = document.createElement("h3");
    formTitle.textContent = "ADD TO DO";
    formElements.push(formTitle);

    const titleLabel = document.createElement("label");
    titleLabel.htmlFor = "form-title";
    titleLabel.textContent = "Title";
    formElements.push(titleLabel);
    const titleInput = document.createElement("input");
    titleInput.required = true;
    titleInput.id = "form-title";
    titleInput.type = "text";
    [titleInput.minLenght, titleInput.maxLength] = [0, 60];
    formElements.push(titleInput);

    const descLabel = document.createElement("label");
    descLabel.htmlFor = "form-description";
    descLabel.textContent = "Description";
    formElements.push(descLabel);
    const descInput = document.createElement("textarea");
    descInput.required = true;
    descInput.id = "form-description";
    [descInput.minLenght, descInput.maxLength] = [0, 240];
    formElements.push(descInput);

    const dateLabel = document.createElement("label");
    dateLabel.htmlFor = "form-date";
    dateLabel.textContent = "Due Date";
    formElements.push(dateLabel);
    const dateInput = document.createElement("input");
    dateInput.required = true;
    dateInput.id = "form-date";
    dateInput.type = "date";
    formElements.push(dateInput);

    const priorityLabel = document.createElement("label");
    priorityLabel.htmlFor = "form-priority";
    priorityLabel.textContent = "Priority";
    formElements.push(priorityLabel);
    const priorityInput = document.createElement("select");
    priorityInput.required = true;
    priorityInput.id = "form-priority";
    ["Low", "Mid", "High"].forEach((prio) => {
      const option = document.createElement("option");
      option.value = prio.toLowerCase();
      option.textContent = prio;

      priorityInput.appendChild(option);
    });
    formElements.push(priorityInput);

    const addBtn = document.createElement("button");

    formElements.forEach((element) => {
      tdForm.appendChild(element);
    });

    return tdForm;
  };
  return { createTdForm };
})();

export { sidebar, forms, content, homeCard, projectTab };
