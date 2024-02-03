export default function Project(title, todoArr) {
  const getTitle = () => title;
  const setTitle = (newTitle) => {
    title = String(newTitle);
  };
  return { getTitle, setTitle, todoArr };
}
