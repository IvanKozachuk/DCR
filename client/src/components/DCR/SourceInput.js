import React from 'react'

const SourceInput = ({ DCRData, handleChange }) => {
  return (
    <div clasName="source flex">
          <label>Source</label>
          <div>
            <select
            value={DCRData.source}
            name="source"
            onChange={handleChange}
            >
              <option value="">-- Please Choose a source --</option>
              <option value="mail">Mail</option>
              <option value="call">Call</option>
              <option value="chat">Chat</option>
              <option value="web">Web</option>
            </select>
          </div>
        </div>
  )
}

export default SourceInput
