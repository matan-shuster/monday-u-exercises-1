import { Dropdown } from "monday-ui-react-core";
import "monday-ui-react-core/dist/main.css";
import PropTypes from "prop-types";
import styles from "./Dropdown.module.css";

const DropdownComponent = ({
  options,
  label,
  selectedValue,
  onChangeHandler,
}) => {
  return (
    <Dropdown
      options={options}
      className={styles.dropdown}
      defaultValue={selectedValue}
      onChange={onChangeHandler}
      placeholder={label}
      clearable={false}
      searchable={false}
    />
  );
};

DropdownComponent.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  label: PropTypes.string.isRequired,
  selectedValue: PropTypes.array.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};

export default DropdownComponent;