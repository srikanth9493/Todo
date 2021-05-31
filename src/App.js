import logo from "./logo.svg";
import "./App.css";
import Todo from "./Components/Todo";
// import Add_todo from "./Components/Add_todo";
import { useState } from "react";

function App() {
  const [todo, settodo] = useState([1]);
  const handleADD = () => {
    settodo([...todo, 1]);
  };
  return (
    <div className="App">
      <div className="app_button">
        <button
          style={{
            padding: "10px",
            backgroundColor: "rgba(0,0,0,0.6)",
            color: "red",
            borderRadius: "10px",
          }}
          onClick={handleADD}
        >
          Add Todo
        </button>
      </div>

      <div className="app__container">
        {todo.map((item) => (
          <Todo></Todo>
        ))}
      </div>
    </div>
  );
}

export default App;
