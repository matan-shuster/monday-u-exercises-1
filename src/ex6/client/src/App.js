import logo from './logo.svg';
import './App.css';
import newTodo from "./Components/todoList/newTodo";
import {useCallback, useEffect, useRef, useState} from "react";


function App() {
   const [todo, setTodo] = useState("");
   const inputRef = useRef();
   const onAddTodo = useCallback(
         (event) => {
            setTodo(inputRef.current.value);
         },[]
   );

  return (
      <div className="todo">
        <h1>A good list</h1>"
          <input type="text" id="newTodo" className="newTodo" ref ={inputRef} placeholder="Add your new Todo"/>
          <button id="addTodo" className="addTodo" onClick={onAddTodo}>Add</button>
          <button id="deleteAll" className="deleteAll">Delete All</button>

          <ul id="todoList" className="todoList"/>
        <button id="deleteTodo" className="delete">Delete Selected</button>
        </div>
  );
}

export default App;
