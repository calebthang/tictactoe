import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import './FilteredList.css';

const FilteredList = ({ items }) => {
  const [searchText, setSearchText] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  
  const filterItem = (item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchText.toLowerCase());
    const matchesType = selectedType === 'All' || item.type === selectedType;
    return matchesSearch && matchesType;
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleTypeSelect = (type) => {
    setSelectedType(type);
  };

  const filteredItems = items.filter(filterItem);

  return (
    <div className="filtered-list-container">
      <h1 className="title">Produce Filter</h1>
      
      <div className="filters">
        <input
          type="text"
          placeholder="Search produce..."
          value={searchText}
          onChange={handleSearchChange}
          className="search-input"
        />
        
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {selectedType}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleTypeSelect('All')}>All</Dropdown.Item>
            <Dropdown.Item onClick={() => handleTypeSelect('Fruit')}>Fruit</Dropdown.Item>
            <Dropdown.Item onClick={() => handleTypeSelect('Vegetable')}>Vegetable</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <ul className="produce-list">
        {filteredItems.map(item => (
          <li key={item.name} className="produce-item">
            <span className="produce-name">{item.name}</span>
            <span className={`produce-type ${item.type.toLowerCase()}`}>{item.type}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredList;