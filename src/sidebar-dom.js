const sidebar = (function () {
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
      projectButtons.push(btn);
    });

    return projectButtons;
  };

  return { createProjectButtons };
})();

export default sidebar;
