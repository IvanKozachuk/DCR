import React from 'react'

const Mails = ({ DCRData, handleChange }) => {
  return (
    <div className="mails flex">
      <label>Mails</label>
      <select
      value={DCRData.mails}
      name="mails"
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
  )
}

export default Mails
