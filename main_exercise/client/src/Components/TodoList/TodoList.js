import ListHeader from '../listHeader/listHeader'
import item_client from '../../clients/item_client'
import { useEffect, useState } from 'react'
import styles from './TodoList.module.css'
import TodoItem from '../TodoItem/TodoItem'
import Loader from '../Loader/Loader'

export default function TodoList() {
  const itemClient = new item_client()
  const selectedArray = []
  const [todos, setTodos] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  async function updateStatus(id, status) {
    try {
      await itemClient.updateStatus(id, status)
    } catch (e) {
      console.log(e)
    }
  }

  async function updateUrgency(id, urgency) {
    try {
      await itemClient.updateUrgency(id, urgency)
    } catch (e) {
      console.log(e)
    }
  }

  async function initialTodos() {
    try {
      setIsLoading(true)
      const todos = await itemClient.getTodos()
      setTodos(todos)
      setIsLoading(false)
    } catch (e) {
      setIsLoading(false)
      console.log(e)
    }
  }

  useEffect(() => {
    try {
      initialTodos()
    } catch (e) {
      console.log(e)
    }
  }, [])

  const handleAddTodo = async (todo) => {
    try {
      setIsLoading(true)
      const renderedTodo = await itemClient.addTodo(todo)
      setTodos([...todos, ...renderedTodo])
      setIsLoading(false)
    } catch (e) {
      setIsLoading(false)
      console.log(e)
    }
  }

  const handleDeleteTodo = async (id) => {
    try {
      await itemClient.deleteTodo(id)
      setTodos(todos.filter((todo) => todo.id !== id))
    } catch (e) {
      console.log(e)
    }
  }

  const handleDeleteAll = async () => {
    setTodos([])
    try {
      await itemClient.clearTodoList()
    } catch (e) {
      console.log(e)
    }
  }
  const handleDeleteSelected = async () => {
    try {
      console.log(selectedArray)
      await itemClient.deleteSelected(selectedArray)
      setTodos(todos.filter((todo) => !selectedArray.includes(todo.id)))
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      <ListHeader onTodoAdd={handleAddTodo} onDeleteAll={handleDeleteAll} />
      <section className={styles.todoListContainer}>
        {isLoading ? <Loader /> : null}
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              updateStatus={updateStatus}
              updateUrgency={updateUrgency}
              selectedArray={selectedArray}
              handleDeleteTodo={handleDeleteTodo}
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
