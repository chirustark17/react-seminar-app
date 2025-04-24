import React, { useState } from "react";
import "./App.css";

function App() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (!todoText.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: todoText.trim(),
    };

    setTodos(prev => [...prev, newTodo]);
    setTodoText("");
  };

  const handleDeleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <div className="todo-container">
        <h1 className="app-title">Todo List</h1>
        <div className="todo-wrapper">
          {/* Input Section */}
          <div className="input-section">
            <h2 className="section-title">Add New Task</h2>
            <div className="input-container">
              <input
                type="text"
                placeholder="Enter a todo..."
                className="todo-input"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
              />
              <button
                className="add-btn"
                onClick={handleAddTodo}
                disabled={!todoText.trim()}
              >
                Add
              </button>
            </div>
          </div>

          {/* List Section */}
          <div className="list-section">
            <h2 className="section-title">Your Tasks</h2>
            {todos.length === 0 ? (
              <p className="empty-message">No tasks added yet!</p>
            ) : (
              <ul className="todo-list">
                {todos.map((todo) => (
                  <li key={todo.id} className="todo-item slide-in">
                    <span>{todo.text}</span>
                    <button
                      className="delete-btn"
                      onClick={() => handleDeleteTodo(todo.id)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
