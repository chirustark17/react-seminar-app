import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (task.trim()) {
      setTodos([{ id: Date.now(), text: task.trim() }, ...todos]);
      setTask("");
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <div className="todo-container">
        <h1 className="app-title">Todo List</h1>
        <div className="todo-wrapper">
          {/* Input Section */}
          <div className="input-section">
            <h2 className="section-title">Add Task</h2>
            <div className="input-container">
              <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="todo-input"
                placeholder="Enter a new task..."
              />
              <button
                onClick={handleAdd}
                className="add-btn"
                disabled={!task.trim()}
              >
                Add
              </button>
            </div>
          </div>

          {/* List Section */}
          <div className="list-section">
            <h2 className="section-title">Tasks</h2>
            <ul className="todo-list">
              {todos.length === 0 ? (
                <p className="empty-message">No tasks added yet.</p>
              ) : (
                todos.map((todo) => (
                  <li key={todo.id} className="todo-item slide-in">
                    <span>{todo.text}</span>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(todo.id)}
                    >
                      Delete
                    </button>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
