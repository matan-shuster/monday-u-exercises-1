import "./App.css";
import TodoList from "./Components/TodoList/TodoList";
import Select from "./Components/Dropdown/Dropdown";

function App() {
  return (
    <div className="todo">
      <h1>A good list</h1>
      <TodoList />
      <button id="deleteTodo" className="delete">
        Delete Selected
      </button>
    </div>
  );
}

export default App;
