import './App.css'
import React from 'react';
import TodoListConnector from "./Components/TodoList/TodoList-connector";
import ListHeaderConnector from "./Components/listHeader/ListHeader-connector";
import DropdownComponent from "./Components/Dropdown/Dropdown";
import { Chips } from 'monday-ui-react-core'

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
