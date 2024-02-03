export default function ToDo(
  title,
  desc,
  dueDate,
  priority = 1,
  state = false,
) {
  state = Boolean(state);

  const getState = () => state;
  const getTitle = () => title;
  const getDesc = () => desc;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;

  const setToggleState = () => {
    state = state ? false : true;
  };

  const setTitle = (newTitle) => {
    title = String(newTitle);
  };

  const setDesc = (newDesc) => {
    desc = String(newDesc);
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
