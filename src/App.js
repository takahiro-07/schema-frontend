import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

export const api = axios.create({
  baseURL: "https://app.takahiro.tk",
  responseType: "json",
});

function App() {
  const [todos, setTodos ] = useState("sss");

  useEffect(() => {
    (async () => {
      const data = await api.get("/api/todos");
      if (data) {
        setTodos(data.data.text);
      }
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{todos}</p>
      </header>
    </div>
  );
}

export default App;
