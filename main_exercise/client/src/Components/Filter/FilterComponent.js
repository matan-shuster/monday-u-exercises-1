import DropdownComponent from "../Dropdown/Dropdown";
import styles from './FilterComponent.module.css'

const FilterComponent = ({
    filter,
    handleFilterChange
}
) => {
    const selectedFilter = filter ? [{ value: filter, label: filter }] : []
    const onFilterChange = (event) => {
        if(event) {
            handleFilterChange(event.value)
        }
        else {
            handleFilterChange(null)
        }
    }
    return (
        <div className={styles.filter}>
           <span className={styles.text}>Filter Status:</span>
            <DropdownComponent
                options={[
                    { value: 'All', label: 'All' },
                    { value: 'In Progress', label: 'In Progress' },
                    { value: 'Done', label: 'Done' }
                ]}
                onChangeHandler={onFilterChange}
                selectedValue={selectedFilter}
                label="Filter"
            />
        </div>
    )
}

export default FilterComponent;