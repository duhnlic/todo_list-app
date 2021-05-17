import ToDoListItem from "../ToDoListItem/ToDoListItem";

const Completedlist = ({ completedItems, removeFromCompleted }) => {
  return (
    <div>
      <h2> Completed </h2>
      <ul className="Finished">
        {completedItems.map((item, index) => {
          return (
            <ToDoListItem
              key={index}
              content={item.title}
              buttonText="remove"
              handleClick={() => removeFromCompleted(index)}
            />
          );
          //   <CSSTransition
          //   in={showMessage}
          //   timeout={300}
          //   classNames="alert"
          //   unmountOnExit
          //   onEnter={() => setShowButton(false)}
          //   onExited={() => setShowButton(true)}
          // >
        })}
      </ul>
    </div>
  );
};

export default Completedlist;
