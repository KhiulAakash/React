import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");
  const [editing, setEditing] = useState(null);

  const addTodo = () => {
    if (input.trim()) {
      const newTodo = {
        id: Date.now(),
        title: input,
        complete: false,
        editing: false,
      };
      setTodo([...todo, newTodo]);
      setInput("");
    } else {
      return;
    }
  };

  const deleteTodo = (id) => {
    const remainingTodo = todo.filter((t) => t.id !== id);
    setTodo(remainingTodo);
  };

  const toggleComplete = (id) => {
    const updatedTodo = todo.map((t) =>
      t.id === id ? { ...t, complete: !t.complete } : t
    );
    setTodo(updatedTodo);
  };

  const startUpdateTitle = (id) => {
    setEditing(id);
  };

  const finishUpdateTitle = () => {
    setEditing(null);
  };

  const handleKeyPress = (event, id) => {
    if (event.key === "Enter") {
      finishUpdateTitle();
    }
  };

  return (
    <div className="Todo">
      <div className="addTodo">
        <h1>Todo List</h1>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <div className="displayTodo">
      {todo.map((t) => (
        <div className="todoList" key={t.id}>
          <input
            type="checkbox"
            onChange={() => toggleComplete(t.id)}
            checked={t.complete}
          />
          {editing === t.id ? (
            <input
              type="text"
              value={t.title}
              onChange={(e) =>
                setTodo((prevTodo) =>
                  prevTodo.map((todoItem) =>
                    todoItem.id === t.id
                      ? { ...todoItem, title: e.target.value }
                      : todoItem
                  )
                )
              }
              onBlur={finishUpdateTitle}
              onKeyPress={(e) => handleKeyPress(e, t.id)}
            />
          ) : (
            <span
              style={{ textDecoration: t.complete ? "line-through" : "none" }}
            >
              {t.title}
            </span>
          )}
          <button onClick={() => startUpdateTitle(t.id)}>Update</button>
          <button onClick={() => deleteTodo(t.id)}>Delete</button>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Todo;
