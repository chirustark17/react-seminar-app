app.jsx
import React, { useState } from "react"; // Import React and useState hook
import "./App.css"; // Import styling

function App() {
  // State for the current input task
  const [task, setTask] = useState("");

  // State for the list of todos (array of objects)
  const [todos, setTodos] = useState([]);

  // Function to handle adding a new task
  const handleAdd = () => {
    if (task.trim()) {
      // Add new task to the beginning of the list
      setTodos([{ id: Date.now(), text: task.trim() }, ...todos]);
      // Clear the input field
      setTask("");
    }
  };

  // Function to delete a task by ID
  const handleDelete = (id) => {
    // Filter out the task with the given ID
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <div className="todo-container">
        {/* App Title */}
        <h1 className="app-title">Todo List</h1>

        {/* Wrapper for two columns: input and list */}
        <div className="todo-wrapper">
          
          {/* Input Section - left column */}
          <div className="input-section">
            <h2 className="section-title">Add Task</h2>
            <div className="input-container">
              {/* Input field to type new task */}
              <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="todo-input"
                placeholder="Enter a new task..."
              />
              {/* Add Button - disabled if input is empty */}
              <button
                onClick={handleAdd}
                className="add-btn"
                disabled={!task.trim()}
              >
                Add
              </button>
            </div>
          </div>

          {/* List Section - right column */}
          <div className="list-section">
            <h2 className="section-title">Tasks</h2>

            {/* Todo List */}
            <ul className="todo-list">
              {/* If list is empty, show message */}
              {todos.length === 0 ? (
                <p className="empty-message">No tasks added yet.</p>
              ) : (
                // Render each todo item with delete button
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

export default App; // Export the App component
