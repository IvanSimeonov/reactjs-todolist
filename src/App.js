import React, { useState } from "react";
import "./App.css";
import InputArea from "./components/InputArea";
import OutputArea from "./components/OutputArea";

function App() {
  const [counter, increaseCounter] = useState(0);

  const [items, setItems] = useState([]);

  const addItems = (inputText) => {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  };

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <h1>Hello, ReactJS!</h1>
      <div className="container">
        <div className="heading">
          <h1>To-Do List {counter}</h1>
          <button onClick={() => increaseCounter((prev) => ++prev)}>
            Click
          </button>
        </div>
        <InputArea onAdd={addItems} />
        <ul>
          {items.map((item, index) => (
            <OutputArea key={index} id={index} text={item} onChecked={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
