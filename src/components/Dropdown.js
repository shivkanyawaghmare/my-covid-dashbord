
import React from 'react';

function Dropdown({ options, selectedCountry, handleChange }) {
  return (
    <div className="dropdown">
      <select value={selectedCountry} onChange={handleChange}>
        {options.map(option => (
          <option key={option.code} value={option.code}>{option.name}</option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
