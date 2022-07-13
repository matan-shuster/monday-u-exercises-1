import { useEffect, useState } from 'react'
import styles from './TodoList.module.css'
import TodoItemComponent from '../TodoItem/TodoItemComponent'
import Loader from '../Loader/Loader'
import FilterComponent from "../Filter/FilterComponent";

export default function TodoListComponent({
    filterTodoList,
  todoList,
  filteredTodoList,
    getTodoList,
    updateStatus,
    updateUrgency,
    deleteTodo,
    deleteSelected,
}) {
  const selectedCheckboxArray = []
  const [todos, setTodos] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
      setIsLoading(true)
      if (filteredTodoList.length > 0) {
        setTodos(filteredTodoList)
      }
      else{
        setTodos(todoList)
      }
      setIsLoading(false)
  }, [todoList,filteredTodoList])

  useEffect(() => {
      setIsLoading(true)
      getTodoList();
  }, [])

    function handleDeleteSelected() {
        deleteSelected(selectedCheckboxArray)
    };
  return (
    <div>
      <section className={styles.todoListContainer}>
        {isLoading ? <Loader /> : null}
        {todos.map((todo) => {
          return (
            <TodoItemComponent
              key={todo.id}
              {...todo}
              selectedArray={selectedCheckboxArray}
              updateStatusAction={updateStatus}
              updateUrgencyAction={updateUrgency}
              handleDeleteTodo={deleteTodo}
            />
          )
        })}
      </section>
      <button
        id="deleteSelected"
        className={styles.deleteSelected}
        onClick={handleDeleteSelected}>
        Delete Selected
      </button>
        <FilterComponent filter={"All"} handleFilterChange={filterTodoList} />
    </div>
  )
}
