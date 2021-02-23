import React from 'react';


const LanguageInput = ({ DCRData, handleChange }) => {
  return (
    <div className="language flex">
        <label>Select a language</label>
        <div>
          <select
            value={DCRData.language}
            name="language"
            onChange={handleChange}
          >
            <option value="">-- Please Choose a language --</option>
            <option value="english">English</option>
            <option value="german">German</option>
            <option value="russian">Russian</option>
            <option value="italian">Italian</option>
            <option value="spanish">Spanish</option>
          </select>
        </div>
    </div>
  )
}

export default LanguageInput
