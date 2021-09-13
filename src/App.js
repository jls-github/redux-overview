import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <div className="counter-wrapper">
      <p className="counter">{counter}</p>
      <div className="counter-buttons">
        <button className="increment-button" onClick={increment}>
          +
        </button>
        <button className="decrement-button" onClick={decrement}>
          -
        </button>
      </div>
    </div>
  );
}

export default App;
