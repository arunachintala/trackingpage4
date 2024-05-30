import React, { useState } from 'react';
import './InputField.css'
const InputField = ({ type, placeholder }) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className='box'>
            <input
                type={type}
                id={type}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                className='input-text'
            />
        </div>
    );
};

export default InputField;