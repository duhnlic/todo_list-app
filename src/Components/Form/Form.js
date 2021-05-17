import { useState } from "react";
/* Also see TODO DATA */

export default ({ handleSubmit }) => {
  const [todo, updateToDo] = useState("");

  const handleChange = (e) => {
    updateToDo(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    handleSubmit(todo);
    updateToDo("");
  };
  return (
    <form onSubmit={handleForm}>
      <label htmlFor="todo">New Item</label>
      <input type="text" value={todo} onChange={handleChange} id="todo" />
    </form>
  );
};
