import React from "react";
import "./TodoList.css";

function TodoList(props) {
  return (
    <section>
    <h2>Today´s tasks</h2>
    <ul>
      {props.children}
    </ul>
    </section>
  );
}

export { TodoList };