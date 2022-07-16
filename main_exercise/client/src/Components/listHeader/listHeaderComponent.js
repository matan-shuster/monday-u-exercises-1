import { useState } from 'react'
import styles from './listHeader.module.css'
import PropTypes from 'prop-types'

export const ListHeaderComponent = ({ addTodoAction, clearTodoListAction }) => {
  const [todo, setTodo] = useState('')
  const onChangeInput = (event) => {
    setTodo(event.target.value)
  }

  return (
    <div className={styles.listHeader}>
      <input
        type="text"
        id="newTodo"
        className={styles.input}
        onChange={onChangeInput}
        placeholder="Add your new Todo"
      />
      <button
        id="addTodo"
        className={styles.addTodo}
        onClick={() => addTodoAction(todo)}>
        Add
      </button>
      <button
        id="deleteAll"
        className={styles.deleteAll}
        onClick={clearTodoListAction}>
        Delete All
      </button>
    </div>
  )
}

export default ListHeaderComponent

ListHeaderComponent.propTypes = {
  addTodoAction: PropTypes.func.isRequired,
  clearTodoListAction: PropTypes.func.isRequired
}
