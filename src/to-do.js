export default function ToDo(
  title,
  desc,
  dueDate,
  priority = 1,
  state = false,
) {
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
