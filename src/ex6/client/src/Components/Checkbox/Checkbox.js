import {Checkbox} from 'monday-ui-react-core';
import styles from './Checkbox.module.css';
const CheckboxComponent = ({onChangeHandler}) => {
    return (
        <Checkbox
            className={styles.checkbox}
            onChange={onChangeHandler}
        />
    );
}

export default  CheckboxComponent