import React from 'react';

const Input = ({ name, handleChange, label, type}) => {
  return (
    <div>
      <input
      type={type}
      onChange={handleChange}
      name={name}
      label={label}
      />
    </div>
  )
}

export default Input
