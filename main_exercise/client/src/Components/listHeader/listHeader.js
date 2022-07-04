import { useEffect, useRef, useState } from 'react'
import styles from './listHeader.module.css'
import PropTypes from 'prop-types'

const ListHeader = ({ onTodoAdd, onDeleteAll }) => {
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
        onClick={() => onTodoAdd(todo)}>
        Add
      </button>
      <button id="deleteAll" className={styles.deleteAll} onClick={onDeleteAll}>
        Delete All
      </button>
    </div>
  )
}

export default ListHeader

ListHeader.propTypes = {
  onTodoAdd: PropTypes.func.isRequired,
  onDeleteAll: PropTypes.func.isRequired
}
