import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Welcome to My React App!</h1>
      <button onClick={() => setCount(count + 1)}>
        Increase Count (Current count: {count})
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrease Count
      </button>
      <p>Enjoy learning React!</p>
    </div>
  )
}

export default App
