export default function Project(title, toDos) {
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
