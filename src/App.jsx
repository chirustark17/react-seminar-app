import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  return (
    <div className="App">
      <h1>Welcome to My React App!</h1>
      <div className="counter-container">
        <button className="counter-button" onClick={increaseCount}>
          Increase Count (Current count: {count})
        </button>
        <button className="counter-button" onClick={decreaseCount}>
          Decrease Count
        </button>
      </div>
      <p>Enjoy learning React!</p>
    </div>
  );
}

export default App;
