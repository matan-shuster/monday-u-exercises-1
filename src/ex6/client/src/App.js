import './App.css';
import TodoList from "./Components/todoList/todoList";


function App() {
  return (
      <div className="todo">
        <h1>A good list</h1>
          <TodoList/>
          <ul id="todoList" className="todoList"/>
        <button id="deleteTodo" className="delete">Delete Selected</button>
        </div>
  );
}

export default App;
