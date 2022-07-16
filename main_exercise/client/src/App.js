import './App.css'
import React from 'react';
import TodoListConnector from "./Components/TodoList/TodoList-connector";
import ListHeaderConnector from "./Components/listHeader/ListHeaderConnector";


function App() {
  return (
    <div className="todo">
      <h1>A good list</h1>
        <ListHeaderConnector />
      <TodoListConnector />
    </div>
  )
}

export default App
