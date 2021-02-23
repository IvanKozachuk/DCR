import React from 'react'
import './admin.css';

const Agent = ({agent}) => {
  const tickets = agent.ticket;
  const calls = agent.calls;
  const chats = agent.chats;
  const mails = agent.mails;

  const total = tickets + calls + chats + mails;

  return (
    <tr>
      <td className="agent_name">{agent.name}</td>
      <td>{agent.ticket}</td>
      <td>{total}</td>
    </tr>
  )
}

export default Agent
