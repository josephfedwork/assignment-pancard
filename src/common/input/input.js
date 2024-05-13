import React, { useState } from 'react';
import './input.scss';

function Input({ label, onInputChange, error, placeholder }) {
  const [charCount, setCharCount] = useState(0);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    onInputChange(event); 
    setCharCount(inputValue.length);
  };

  return (
    <div className='floating-input'>
      <input
        type="text"
        onChange={handleChange}
        maxLength={10}
        className='input-form-control'
        id='id'
        placeholder={placeholder}
      />
      <label htmlFor='id'>{label}</label>
      <div className='count-holder'>
        <span>{charCount}/10</span>
      </div>
      {error && <div style={{ color: 'red', marginBottom: "4px"  }}>{error}</div>}
    </div>
  );
}


export default Input;
