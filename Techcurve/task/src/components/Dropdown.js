import React, {useState} from 'react';
import './Dropdown.css'

const FilterButtonDropdown =({filteroptions, onfilterSelect}) =>{
  const [isOpen, setIsopen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(null);

  const toggleDropdown = () => {
    setIsopen(!isOpen);
  };

  const handleFilterSelect = (item) => {
    setSelectedFilter(item);
    setIsopen(false);
    onfilterSelect(item);
  };

  const renderDropdownItem = ({item}) => (
    <button key={item.value} className="dropdown-item" onClick={() => handleFilterSelect(item)}>
      {item.label}
    </button>
  );

  return (
    <div className='filter-container'>
      <button className='filter-button' onClick={toggleDropdown}> Filter 
      </button>
      {isOpen && (
        <ul className='dropdown-list'>
          {filteroptions.map(renderDropdownItem)}
        </ul>
      )}
      {selectedFilter && <p>Selected Filter: {selectedFilter.label}</p>}
    </div>
  );
};

export default FilterButtonDropdown;
