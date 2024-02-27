import React from 'react'
import FilterButtonDropdown from './Dropdown'

const options =[
    {label: 'Date of Registation', value:'01/05/2024'},
    {label: 'vender score', value:'99'},
];

const handleFilterSelect = (selected) => {
    console.log('Selected Filter:', selected);
};
function DropdownList() {
  return (
    <div>
        <FilterButtonDropdown filteroptions={options} onfilterSelect={handleFilterSelect}></FilterButtonDropdown>
    </div>
  )
}

export default DropdownList;