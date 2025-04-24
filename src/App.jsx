import { useState } from 'react';
import './App.css';

function App() {
  // State to store the input task text
  const [task, setTask] = useState('');

  // State to store the list of tasks
  const [todos, setTodos] = useState([]);

  // Function to handle adding a new task
  const handleAdd = () => {
    if (task.trim() !== '') {
      // Add task to list and reset input field
      setTodos([...todos, task]);
      setTask('');
    }
  };

  // Function to delete a task by index
  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <h1>📝 My Todo App</h1>

      {/* Input section for adding tasks */}
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)} // Update task state on change
        />
        <button onClick={handleAdd}>Add Task</button>
      </div>

      {/* Displaying list of tasks */}
      <ul className="todo-list">
        {todos.map((item, index) => (
          <li key={index}>
            {item}
            {/* Delete button for each task */}
            <button className="delete-btn" onClick={() => handleDelete(index)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
