import React from "react";
import Form from "./todos/form";
import List from "./todos/list";
import { useState, useEffect } from "react";
import "../App.css";

function Index() {
  const [todos, setTodos] = useState([
    { text: "what should we do for today?", done: false },
    { text: "LEARN React :D", done: false },
    { text: "what should we do for today?", done: false },
    { text: "LEARN React :D", done: false },
    { text: "what should we do for today?", done: false },
    { text: "LEARN React :D", done: false },
    { text: "what should we do for today?", done: false },
    { text: "LEARN React :D", done: false },
    { text: "what should we do for today?", done: false },
    { text: "LEARN React :D", done: false },
  ]);

  useEffect(() => {}, [todos]);

  return (
    <div className="index">
      <div>
        <h1>TODOS</h1>
      </div>
      <Form todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default Index;
