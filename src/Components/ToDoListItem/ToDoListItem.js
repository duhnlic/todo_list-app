const ToDoListItem = ({ content, buttonText, handleClick }) => {
  return (
    <li>
      <span className="Content">{content}</span>
      <button onClick={() => handleClick()}>{buttonText}</button>
    </li>
  );
};

export default ToDoListItem;
