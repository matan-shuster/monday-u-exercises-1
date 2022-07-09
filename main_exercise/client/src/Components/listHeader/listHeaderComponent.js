import { useState } from 'react'
import styles from './listHeader.module.css'
import PropTypes from 'prop-types'

export const ListHeaderComponent = ({ addTodo, clearTodoList }) => {
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
        onClick={() => addTodo(todo)}>
        Add
      </button>
      <button
        id="deleteAll"
        className={styles.deleteAll}
        onClick={clearTodoList}>
        Delete All
      </button>
    </div>
  )
}

export default ListHeaderComponent

ListHeaderComponent.propTypes = {
  addTodo: PropTypes.func.isRequired,
  clearTodoList: PropTypes.func.isRequired
}
