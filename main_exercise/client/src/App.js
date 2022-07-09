import './App.css'
import TodoListConnector from "./Components/TodoList/TodoList-connector";

function App() {
  return (
    <div className="todo">
      <h1>A good list</h1>
      <TodoListConnector />
    </div>
  )
}

export default App
