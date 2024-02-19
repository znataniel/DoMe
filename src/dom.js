import { format } from "date-fns";
import { Project, ToDo } from "./data-types";

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
    card.classList.add(project.getTitle());

    const projTitle = document.createElement("h2");
    projTitle.classList.add("home-card-title");
    projTitle.textContent = project.getTitle();

    const toDoWrapper = document.createElement("div");
    toDoWrapper.classList.add("home-card-td-wrapper");

    project.getToDoArr().forEach((todo) => {
      toDoWrapper.appendChild(createTdDiv(todo));
    });
    card.appendChild(projTitle);
    card.appendChild(toDoWrapper);
    return card;
  };

  const appendNewTd = function (projectTitle, Td) {
    const card = document.querySelector("div.home-card." + projectTitle);
    card.appendChild(createTdDiv(Td));
  };

  return { create, appendNewTd };
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
    wrapper.classList.add(project.getTitle());

    project.getToDoArr().forEach((todo) => {
      wrapper.appendChild(createTdDiv(todo));
    });

    return wrapper;
  };

  const appendNewTd = function (projectTitle, Td) {
    const wrapper = document.querySelector("div.td-wrapper." + projectTitle);
    if (wrapper) wrapper.appendChild(createTdDiv(Td));
  };

  return { createTitle, createToDoWrapper, appendNewTd };
})();

const sidebar = (function () {
  const activateHomeButton = function (projectArr) {
    const hBtn = document.querySelector("button.home");
    hBtn.addEventListener("click", () => {
      content.clear();
      populateHome(projectArr);
    });
  };

  const activateAddTdButton = function (projectArr) {
    const addTdBtn = document.querySelector("button.add.to-do");
    const formDiv = document.querySelector("div.form-wrapper");
    addTdBtn.addEventListener("click", () => {
      if (!formDiv.firstChild) {
        formDiv.appendChild(forms.createTdForm(projectArr));
      } else {
        while (formDiv.firstChild) {
          formDiv.removeChild(formDiv.firstChild);
        }
      }
    });
  };

  const activateAddProjButton = function (projectArr) {
    const addBtn = document.querySelector("button.add.proj");
    const formDiv = document.querySelector("div.proj-form-wrapper");
    addBtn.addEventListener("click", () => {
      if (!formDiv.firstChild) {
        formDiv.appendChild(forms.createProjForm(projectArr));
      } else {
        while (formDiv.firstChild) {
          formDiv.removeChild(formDiv.firstChild);
        }
      }
    });
  };

  const appendProject = function (proj) {
    const projectDiv = document.querySelector(".project-wrapper");

    const btn = document.createElement("button");
    btn.type = "button";
    btn.classList.add("project-btn");
    btn.textContent = proj.getTitle();

    btn.addEventListener("click", () => {
      content.clear();
      content.append(projectTab.createTitle(proj));
      content.append(projectTab.createToDoWrapper(proj));
    });

    projectDiv.appendChild(btn);
  };

  const clearTdForm = function () {
    const formWrapper = document.querySelector("div.form-wrapper");
    while (formWrapper.firstChild) {
      formWrapper.removeChild(formWrapper.firstChild);
    }
  };

  const clearProjForm = function () {
    const formWrapper = document.querySelector("div.proj-form-wrapper");
    while (formWrapper.firstChild) {
      formWrapper.removeChild(formWrapper.firstChild);
    }
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

  const populateHome = function (projectArr) {
    projectArr.forEach((proj) => {
      content.append(homeCard.create(proj));
    });
  };

  const populateProjectButtons = function (projectArr) {
    const projectDiv = document.querySelector(".project-wrapper");
    sidebar.createProjectButtons(projectArr).forEach((btn) => {
      projectDiv.appendChild(btn);
    });
  };

  return {
    activateHomeButton,
    activateAddTdButton,
    activateAddProjButton,
    appendProject,
    createProjectButtons,
    clearTdForm,
    clearProjForm,
    populateHome,
    populateProjectButtons,
  };
})();

const forms = (function () {
  const createTdForm = function (projectArr) {
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

    const projectLabel = document.createElement("label");
    projectLabel.htmlFor = "form-project";
    projectLabel.textContent = "Project";
    formElements.push(projectLabel);
    const projectInput = document.createElement("select");
    projectInput.required = true;
    projectInput.id = "form-project";
    projectArr.forEach((proj) => {
      const option = document.createElement("option");
      option.value = projectArr.indexOf(proj);
      option.textContent = proj.getTitle();

      projectInput.appendChild(option);
    });
    formElements.push(projectInput);

    const submitTd = document.createElement("button");
    submitTd.type = "submit";
    submitTd.textContent = "Add";
    submitTd.addEventListener("click", (e) => {
      e.preventDefault();
      if (tdForm.checkValidity()) {
        const newTd = ToDo(
          titleInput.value,
          descInput.value,
          new Date(dateInput.value),
          priorityInput.selectedIndex,
        );
        projectArr[projectInput.value].addToDo(newTd);
        if (document.querySelector(".home-card")) {
          homeCard.appendNewTd(
            projectArr[projectInput.value].getTitle(),
            newTd,
          );
        } else {
          projectTab.appendNewTd(
            projectArr[projectInput.value].getTitle(),
            newTd,
          );
        }
        sidebar.clearTdForm();
      } else {
        tdForm.reportValidity();
      }
    });
    formElements.push(submitTd);

    formElements.forEach((element) => {
      tdForm.appendChild(element);
    });

    return tdForm;
  };

  const createProjForm = function (ProjectArr) {
    const form = document.createElement("form");

    const titleInput = document.createElement("input");
    titleInput.required = true;
    titleInput.id = "form-title";
    titleInput.type = "text";
    titleInput.placeholder = "Project Title";
    [titleInput.minLenght, titleInput.maxLength] = [0, 24];

    const submit = document.createElement("button");
    submit.type = "submit";
    submit.textContent = "Add";
    submit.addEventListener("click", (e) => {
      e.preventDefault();
      if (form.checkValidity()) {
        const newProj = Project(titleInput.value, []);
        ProjectArr.push(newProj);
        sidebar.appendProject(newProj);
        sidebar.clearProjForm();
      } else {
        form.reportValidity();
      }
    });

    form.appendChild(titleInput);
    form.appendChild(submit);

    return form;
  };

  return { createTdForm, createProjForm };
})();

const createTdDiv = function (todo) {
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
    tdDiv.classList.toggle("strikethrough");
    todo.setToggleState();
  });

  tdDiv.appendChild(checkbox);
  tdDiv.appendChild(title);
  tdDiv.appendChild(desc);
  tdDiv.appendChild(dueDate);
  tdDiv.appendChild(priority);

  return tdDiv;
};

export { sidebar, forms, content, homeCard, projectTab };
