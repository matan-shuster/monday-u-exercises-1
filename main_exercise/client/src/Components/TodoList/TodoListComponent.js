import {useEffect, useMemo, useState} from 'react'
import styles from './TodoList.module.css'
import Loader from '../Loader/Loader'
import FilterComponent from '../Filter/FilterComponent'
import TodoItemConnector from "../TodoItem/TodoItemConnector";

export default function TodoListComponent({
                                              filterTodoList,
                                              todoList,
                                              filteredTodoList,
                                              getTodoList,
                                              deleteSelected
                                          }) {
    const selectedCheckboxArray = []
    const [todos, setTodos] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const mapTodos = useMemo(() => {
        return todos.map((todo) => {
            return (
               <TodoItemConnector key={todo.id} {...todo} selectedArray={selectedCheckboxArray}/>
            )
        })
    })

    useEffect(() => {
        setIsLoading(true)
        if (filteredTodoList.length > 0) {
            setTodos(filteredTodoList)
        } else {
            setTodos(todoList)
        }
        setIsLoading(false)
    }, [todoList, filteredTodoList])

    useEffect(() => {
        setIsLoading(true)
        getTodoList()
    }, [])

    function handleDeleteSelected() {
        deleteSelected(selectedCheckboxArray)
    }
    return (
        <div>
            <section className={styles.todoListContainer}>
                {isLoading ? <Loader /> : null}
                {mapTodos}
            </section>
            <button
                id="deleteSelected"
                className={styles.deleteSelected}
                onClick={handleDeleteSelected}>
                Delete Selected
            </button>
            <FilterComponent filter={'All'} handleFilterChange={filterTodoList} />
        </div>
    )
}
