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

export default forms;
