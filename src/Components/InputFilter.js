import React from 'react';

const InputFilter = ({ value, handleChange }) => {
    return (
        <input
            className="inputFilter"
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="Search..."
        />
    )
}

export default InputFilter;