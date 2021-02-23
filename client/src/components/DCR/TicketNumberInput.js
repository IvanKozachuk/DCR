import React from 'react';

const TicketNumberInput = ({ DCRData, handleChange }) => {
  return (
    <div className="ticket_number flex">
          <label>Ticket Number</label>  
          <input 
          type="text"
          name="ticketNumber"
          value={DCRData.ticketNumber}
          onChange={handleChange}
          />
    </div>
  )
}

export default TicketNumberInput
