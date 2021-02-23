import React from 'react';

const Chats = ({ DCRData, handleChange }) => {
  return (
    <div className="chats flex">
      <label>Chats</label>
      <div>
        <select
        value={DCRData.chats}
        name="chats"
        onChange={handleChange}
      >
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      </div>
    </div>
  )
}

export default Chats
