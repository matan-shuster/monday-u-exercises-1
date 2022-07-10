import ListHeaderComponent from '../listHeader/listHeaderComponent'
import ItemClient from '../../clients/item_client'
import { useEffect, useState } from 'react'
import styles from './TodoList.module.css'
import TodoItemComponent from '../TodoItem/TodoItemComponent'
import Loader from '../Loader/Loader'
import { deleteSelectedAction } from '../../actions/todoList-actions'
import ListHeaderConnector from '../listHeader/ListHeader-connector'

export default function TodoListComponent({
  addTodo,
  clearTodoList,
  deleteSelected,
  deleteTodo,
  filterTodoList,
  todoList,
  filteredTodoList
}) {
  const itemClient = new ItemClient()
  const selectedArray = []
  const [todos, setTodos] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // async function updateStatus(id, status) {
  //   try {
  //     await itemClient.updateStatus(id, status)
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
  //
  // async function updateUrgency(id, urgency) {
  //   try {
  //     await itemClient.updateUrgency(id, urgency)
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
  async function initialTodos() {
    try {
      if (todoList){
        setTodos(todoList)
      }
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

  // const handleAddTodo = async (todo) => {
  //   try {
  //     setIsLoading(true)
  //     const renderedTodo = await itemClient.addTodo(todo)
  //     setTodos([...todos, ...renderedTodo])
  //     setIsLoading(false)
  //   } catch (e) {
  //     setIsLoading(false)
  //     console.log(e)
  //   }
  // }

  // const handleDeleteTodo = async (id) => {
  //   try {
  //     await itemClient.deleteTodo(id)
  //     setTodos(todos.filter((todo) => todo.id !== id))
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

  // const handleDeleteAll = async () => {
  //   setTodos([])
  //   try {
  //     await itemClient.clearTodoList()
  //   } catch (e) {
  //     console.log(e)
  //   }

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
              // updateStatus={updateStatus}
              // updateUrgency={updateUrgency}
              selectedArray={selectedArray}
              // handleDeleteTodo={handleDeleteTodo}
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
