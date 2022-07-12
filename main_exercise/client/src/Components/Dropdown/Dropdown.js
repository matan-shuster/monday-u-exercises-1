import { Chips, Dropdown } from 'monday-ui-react-core'
import 'monday-ui-react-core/dist/main.css'
import PropTypes from 'prop-types'
import styles from './Dropdown.module.css'
import { useCallback } from 'react'

const DropdownComponent = ({
  options,
  label,
  selectedValue,
  onChangeHandler
}) => {
  const labelRenderer = useCallback(({ label, color }) => {
    return <Chips label={label} color={color} isAnimationDisabled />
  })
  return (
    <Dropdown
      options={options}
      className={styles.dropdown}
      defaultValue={selectedValue}
      onChange={onChangeHandler}
      placeholder={label}
      labelRenderer={labelRenderer}
      optionRenderer={labelRenderer}
      searchable={false}
    />
  )
}

DropdownComponent.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  label: PropTypes.string.isRequired,
  selectedValue: PropTypes.array.isRequired,
  onChangeHandler: PropTypes.func.isRequired
}

export default DropdownComponent
