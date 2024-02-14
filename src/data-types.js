function ToDo(title, desc, dueDate, priority = 1, state = false) {
  state = Boolean(state);

  const priorities = ["low", "normal", "high"];

  const getState = () => state;
  const getTitle = () => title;
  const getDesc = () => desc;
  const getDueDate = () => dueDate;
  const getPriority = () => priorities[priority];

  const setToggleState = () => {
    state = state ? false : true;
  };

  const setTitle = (newTitle) => {
    title = newTitle.toString();
  };

  const setDesc = (newDesc) => {
    desc = newDesc.toString();
  };

  const setDueDate = (newDueDate) => {
    if (newDueDate instanceof Date) {
      dueDate = newDueDate;
    }
  };

  const setPriority = (newPriority) => {
    if (newPriority > 0 && newPriority < 2) {
      priority = newPriority;
    }
  };

  return {
    getState,
    setToggleState,
    getTitle,
    setTitle,
    getDesc,
    setDesc,
    getDueDate,
    setDueDate,
    getPriority,
    setPriority,
  };
}
function Project(title, toDos) {
  const todoArr = toDos.flat();

  const getTitle = () => title;
  const setTitle = (newTitle) => {
    title = newTitle.toString();
  };
  const getToDoArr = () => todoArr;
  const addToDo = (todo) => {
    todoArr.push(todo);
  };
  const removeToDo = (todo) => {
    const removeIndex = todoArr.indexOf(todo);
    if (removeIndex > -1) {
      todoArr.splice(removeIndex, 1);
    }
  };
  return { getTitle, setTitle, getToDoArr, addToDo, removeToDo };
}

export { ToDo, Project };
