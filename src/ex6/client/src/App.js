import logo from './logo.svg';
import './App.css';
import newTodo from "./Components/todoList/newTodo";
import {useCallback, useEffect, useRef, useState} from "react";


function App() {
   const [todo, setTodo] = useState("");
   const inputRef = useRef();
   const onChangeInput = (event) =>
   {
        setTodo(event.target.value);
   }

   useEffect(() => {
       console.log(todo);
   },[todo]);


  return (
      <div className="todo">
        <h1>A good list</h1>"
          <input type="text" id="newTodo" className="newTodo" onChange={onChangeInput} placeholder="Add your new Todo"/>
          <button id="addTodo" className="addTodo">Add</button>
          <button id="deleteAll" className="deleteAll">Delete All</button>
          <ul id="todoList" className="todoList"/>
        <button id="deleteTodo" className="delete">Delete Selected</button>
        </div>
  );
}

export default App;
