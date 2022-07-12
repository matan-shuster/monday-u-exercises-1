import { Chips } from 'monday-ui-react-core'
import DropdownComponent from "../Dropdown/Dropdown";

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
        <div className="filter">
            Filter Status:
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
            Filter Urgency:
            <DropdownComponent onChangeHandler={onFilterChange} label={"Filter"} selectedValue={selectedFilter} options={
                [
                    { value: 'All', label: 'All' },
                    { value: 'Low', label: 'Low' },
                    { value: 'Medium', label: 'Medium' },
                    { value: 'High', label: 'High' },
                    { value: 'Critical', label: 'Critical' },
                    ]}/>
        </div>
    )
}

export default FilterComponent;