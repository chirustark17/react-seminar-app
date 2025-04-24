import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo.trim()) {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <div className="App">
      <div className="todo-container">
        <h1 className="app-title">Vivid Todo</h1>
        <div className="todo-wrapper">
          {/* Left Side: Input Section with Local Image */}
          <div className="input-section">
            <img
              src="/images/todo.jpg"
              alt="Todo Banner"
              className="banner-image"
            />
            <h2 className="section-title">Add Task</h2>
            <div className="input-container">
              <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter a new task..."
                className="todo-input"
              />
              <button
                onClick={addTodo}
                disabled={!todo.trim()}
                className="add-btn"
              >
                Add
              </button>
            </div>
          </div>
          {/* Right Side: Todo List */}
          <div className="list-section">
            <h2 className="section-title">Your Tasks</h2>
            <ul className="todo-list">
              {todos.map((todo, index) => (
                <li key={index} className="todo-item slide-in">
                  <span>{todo}</span>
                  <button
                    onClick={() => removeTodo(index)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
            {todos.length === 0 && (
              <p className="empty-message">No tasks yet. Add one to start!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;