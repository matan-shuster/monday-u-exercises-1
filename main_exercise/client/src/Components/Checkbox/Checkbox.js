import {Checkbox} from 'monday-ui-react-core';
import styles from './Checkbox.module.css';
import PropTypes from "prop-types";
const CheckboxComponent = ({onChangeHandler}) => {
    return (
        <Checkbox
            className={styles.checkbox}
            onChange={onChangeHandler}
        />
    );
}

CheckboxComponent.propTypes = {
    onChangeHandler: PropTypes.func.isRequired,
}

export default  CheckboxComponent