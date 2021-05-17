import ToDoListItem from "../ToDoListItem/ToDoListItem";

const ToDoList = ({ toDoItems, addToCompleted }) => {
  return (
    <>
      <h2> To Do Items: </h2>
      <ul>
        {toDoItems.map((item, index) => (
          <ToDoListItem
            key={index}
            content={item.title}
            buttonText="complete"
            handleClick={() => addToCompleted(index)}
          />
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
