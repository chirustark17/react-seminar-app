import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim() !== "") {
      const newTodo = { id: Date.now(), text: input.trim() };
      setTodos([...todos, newTodo]);
      setInput("");
    }
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <div className="todo-container">
        <h1 className="app-title">📝 Vivid Todo</h1>
        <div className="todo-wrapper">
          {/* Left Column - Add Task */}
          <div className="input-section slide-in">
            <h2 className="section-title">Add Task</h2>
            <div className="input-container">
              <input
                type="text"
                placeholder="Enter task..."
                className="todo-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                className="add-btn"
                onClick={handleAddTodo}
                disabled={!input.trim()}
              >
                Add Task
              </button>
            </div>
          </div>

          {/* Right Column - Your Tasks */}
          <div className="list-section slide-in">
            <h2 className="section-title">Your Tasks ({todos.length})</h2>
            <ul className="todo-list">
              {todos.length > 0 ? (
                todos.map((todo) => (
                  <li key={todo.id} className="todo-item">
                    <span>{todo.text}</span>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(todo.id)}
                    >
                      Delete
                    </button>
                  </li>
                ))
              ) : (
                <p className="empty-message">No tasks added yet</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
