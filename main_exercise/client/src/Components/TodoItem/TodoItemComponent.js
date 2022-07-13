import styles from './TodoItem.module.css'
import DropdownComponent from '../Dropdown/Dropdown'
import CheckboxComponent from '../Checkbox/Checkbox'
import deleteIcon from '../../assets/delete_icon.svg'
import PropTypes from 'prop-types'
import { Chips } from 'monday-ui-react-core'
import {useMemo} from "react";

export default function TodoItemComponent({
  id,
  todo,
  status,
  urgency,
  selectedArray,
  handleDeleteTodo,
  updateUrgencyAction,
  updateStatusAction
}) {
  const selectedStatus = useMemo(() => (status ?[{value:status , label: status}] : []), [status])
  const selectedUrgency = useMemo(() => (urgency ?[{value:urgency , label: urgency}] : []), [urgency])
  const onStatusChange = (event) => {
    if (event) {
      updateStatusAction(id, event.value)
    } else {
      updateStatusAction(id, null)
    }
  }
  const onUrgencyChange = (event) => {
    if (event) {
      updateUrgencyAction(id, event.value)
    } else {
      updateUrgencyAction(id, null)
    }
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
          {
            value: 'In Progress',
            label: 'In Progress',
            color: Chips.colors.WORKING_ORANGE
          },
          { value: 'Done', label: 'Done', color: Chips.colors.POSITIVE }
        ]}
        onChangeHandler={onStatusChange}
        selectedValue={selectedStatus}
        label="Status"
      />
      <DropdownComponent
        options={[
          {
            value: 'Critical',
            label: 'Critical',
            color: Chips.colors.DARK_RED
          },
          { value: 'High', label: 'High', color: Chips.colors.SUNSET },
          {
            value: 'Medium',
            label: 'Medium',
            color: Chips.colors.WORKING_ORANGE
          },
          { value: 'Low', label: 'Low', color: Chips.colors.BRIGHT_GREEN }
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

TodoItemComponent.propTypes = {
  id: PropTypes.number.isRequired,
  todo: PropTypes.string.isRequired,
  status: PropTypes.string,
  urgency: PropTypes.string,
  selectedArray: PropTypes.array.isRequired,
  handleDeleteTodo: PropTypes.func
}
