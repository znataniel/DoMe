import { content, homeCard, projectTab } from "./content-dom";

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

export default sidebar;
