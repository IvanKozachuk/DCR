import React from 'react'

const Calls = ({ DCRData, handleChange }) => {
  return (
    <div className="calls flex">
      <label>Calls</label>
      <div>
        <select
        value={DCRData.calls}
        name="calls"
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

export default Calls
