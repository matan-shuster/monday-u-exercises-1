import { useEffect, useState } from 'react'
import styles from './TodoList.module.css'
import TodoItemComponent from '../TodoItem/TodoItemComponent'
import Loader from '../Loader/Loader'
import { deleteSelectedAction } from '../../actions/todoList-actions'

export default function TodoListComponent({
  filterTodoList,
  todoList,
  filteredTodoList,
    getTodoList,
}) {
  const selectedArray = []
  const [todos, setTodos] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    try {
      if (todoList) {
        setTodos(todoList)
      }
      else{
        setTodos([])
      }
    } catch (e) {
      console.log(e)
    }
  }, [todoList])

  useEffect(() => {
      getTodoList();
  }, [])

  const handleDeleteSelected = async () => {
    try {
      deleteSelectedAction(selectedArray)
      setTodos(todos.filter((todo) => !selectedArray.includes(todo.id)))
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      <section className={styles.todoListContainer}>
        {isLoading ? <Loader /> : null}
        {todos.map((todo) => {
          return (
            <TodoItemComponent
              key={todo.id}
              {...todo}
              selectedArray={selectedArray}
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
    </div>
  )
}
