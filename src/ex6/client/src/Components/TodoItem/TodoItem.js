import styles from "./TodoItem.module.css";
import Select from "../Dropdown/Dropdown";

const TodoItem = ({ id, todo,status, updateStatus }) => {
    const selected = {value: todo, label: status};
    const onChangeHandler = (event) => {
        updateStatus(id, event.value);
    }
  return (
    <div className={styles.todo}>
      <input type="checkbox" className="pl" />
      <span className={styles.text}>{todo}</span>
      <Select
        options={[
          { value: "inProgress", label: "In Progress" },
          { value: "Done", label: "Done" },
        ]}
        selectedValue={selected}
        label="Status"
      />
      <Select
        options={[
          { value: "Critical", label: "Critical" },
          { value: "High", label: "High" },
          { value: "Medium", label: "Medium" },
          { value: "Low", label: "Low" },
        ]}
        label="Urgency"
      />
    </div>
  );
};

export default TodoItem;
