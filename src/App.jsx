import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState(""); // State to store the new todo input
  const [todos, setTodos] = useState([]); // State to store all the todos

  // Function to handle adding a new todo
  const addTodo = () => {
    if (todo.trim()) {
      setTodos([...todos, todo]); // Add new todo to the list
      setTodo(""); // Clear the input field after adding
    }
  };

  // Function to handle removing a todo
  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index); // Remove todo by index
    setTodos(newTodos); // Update the todo list
  };

  // Function to handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <div className="App">
      <div className="todo-container">
        <h1>To-Do List</h1>

        {/* Input field to add a new todo */}
        <div className="input-container">
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)} // Update todo state on input change
            onKeyPress={handleKeyPress} // Add todo on Enter key
            placeholder="Enter a new task..."
          />
          <button onClick={addTodo} disabled={!todo.trim()}>
            Add
          </button>
        </div>

        {/* Displaying the todo list */}
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index} className="todo-item">
              <span>{todo}</span>
              <button
                onClick={() => removeTodo(index)} // Remove todo on button click
                className="delete-btn"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        {todos.length === 0 && (
          <p className="empty-message">No tasks yet. Add one!</p>
        )}
      </div>
    </div>
  );
}

export default App;