import React, { useState } from "react";

const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");
  const handleOnchange = (event) => {
    setTodoText(event.target.value);
  };
  const handleOnsubmit = (event) => {
    event.preventDefault();
    if (todoText) {
      setTodos([...todos, todoText.trim()]);
      setTodoText("");
    }
  };
  const handleEdit = (index) => {
    setEditIndex(index);
    setEditText(todos[index]);
    console.log("index", index);
  };
  const handleDelete = (index) => {
    setTodos(todos.filter((_, indexx) => indexx !== index));
  };
  const handleUpdate = (event) => {
    setTodos(todos.map((todo, i) => (i === editIndex ? editText : todo)));
  setEditIndex(null); // Exit edit mode
  setEditText("");

  }
  console.log("todos", todos);
  return (
    <div>
      td
      <form action="" onSubmit={handleOnsubmit}>
        <label htmlFor="input">jjjjjj</label>
        <input
          type="text"
          id="input"
          name="input"
          value={todoText}
          onChange={handleOnchange}
        />
        <button type="submit">Submit</button>
      </form>
      <br />
      <br />
      list
      <ul>
        {todos.map((data, index) => {
          return (
            <li key={index}>
              {data}
              {editIndex === index && (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
              )}
              <span
                onClick={() => handleEdit(index)}
                style={{ margin: "0 18px" }}
              >
                edit
              {editIndex===index&&<button onClick={handleUpdate}>update</button>}
              </span>

              <span onClick={() => handleDelete(index)}>delete</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
