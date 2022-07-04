import styles from './TodoItem.module.css'
import DropdownComponent from '../Dropdown/Dropdown'
import CheckboxComponent from '../Checkbox/Checkbox'
import deleteIcon from '../../assets/delete_icon.svg'
import PropTypes from 'prop-types'

const TodoItem = ({
  id,
  todo,
  status,
  updateStatus,
  urgency,
  updateUrgency,
  selectedArray,
  handleDeleteTodo
}) => {
  const selectedStatus = status ? [{ value: status, label: status }] : []
  const selectedUrgency = urgency ? [{ value: urgency, label: urgency }] : []
  const onStatusChange = (event) => {
    updateStatus(id, event.value)
  }
  const onUrgencyChange = (event) => {
    updateUrgency(id, event.value)
  }

  const onCheckboxChange = (event) => {
    if (event.target.checked) {
      selectedArray.push(id)
    } else {
      selectedArray.splice(selectedArray.indexOf(id), 1)
    }
  }
  const onDeleteTodo = () => {
    handleDeleteTodo(id)
  }

  return (
    <div className={styles.todo}>
      <CheckboxComponent onChangeHandler={onCheckboxChange} />
      <span className={styles.text}>{todo}</span>
      <DropdownComponent
        options={[
          { value: 'In Progress', label: 'In Progress' },
          { value: 'Done', label: 'Done' }
        ]}
        onChangeHandler={onStatusChange}
        selectedValue={selectedStatus}
        label="Status"
      />
      <DropdownComponent
        options={[
          { value: 'Critical', label: 'Critical' },
          { value: 'High', label: 'High' },
          { value: 'Medium', label: 'Medium' },
          { value: 'Low', label: 'Low' }
        ]}
        onChangeHandler={onUrgencyChange}
        selectedValue={selectedUrgency}
        label="Urgency"
      />
      <img
        src={deleteIcon}
        className={styles.deleteIcon}
        onClick={onDeleteTodo}
      />
    </div>
  )
}

export default TodoItem

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  todo: PropTypes.string.isRequired,
  status: PropTypes.string,
  updateStatus: PropTypes.func.isRequired,
  urgency: PropTypes.string,
  updateUrgency: PropTypes.func.isRequired,
  selectedArray: PropTypes.array.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired
}