import React, {useState, useEffect} from 'react';
import Agent from './Agent';
import { getMonthlyLanguageBased, getMontlyContactsLanguageBased } from './data_maintanance_language';
import { getMonthly, getMontlyContacts, getDaily, getDailyContacts } from './data_maintanance_general';
import { CSVLink, CSVDownload } from "react-csv";
import './admin.css';


const Table = () => {
  const [dcrData, setDcrData] = useState([]);
  const [languageFilter, setLanguageFilter] = useState('');
  // fetchning all row data and setting them to dcrData state
  useEffect(() => {
    fetch('http://localhost:5000/dcr')
      .then(result => result.json())
      .then(data => setDcrData(data));
  }, []);

  const finalResultLngBased = () => {
    const outputTickets = getMonthlyLanguageBased(dcrData, languageFilter);
    const outputContacts = getMontlyContactsLanguageBased(dcrData, languageFilter);

    const monthlyContactsAndTicketsLng = [];
    for(let i = 0; i < outputTickets.length; i++) {
      for(let b = 0; b < outputContacts.length; b++) {
        if(outputTickets[i].agent === outputContacts[b].name) {
          const test = {
            ...outputContacts[b],
            ticket: outputTickets[i].tickets
          }
          monthlyContactsAndTicketsLng.push(test);
        }
      }
  }

  return monthlyContactsAndTicketsLng
}

  const handleChange = async (e) => {
    const {value} = e.target;

    await setLanguageFilter(value);
  }

  // monthly tickets array
  const monthlyTickets = getMonthly(dcrData);
  const monthlyContacts = getMontlyContacts(dcrData);

  const monthlyContactsAndTickets = [];
  for(let i = 0; i < monthlyTickets.length; i++) {
    for(let b = 0; b < monthlyContacts.length; b++) {
      if(monthlyTickets[i].agent === monthlyContacts[b].name) {
        const test = {
          ...monthlyContacts[b],
          ticket: monthlyTickets[i].tickets
        }
        monthlyContactsAndTickets.push(test);
      }
    }
  }
  // daily tickets array
  const dailyTickets = getDaily(dcrData)
  const dailyContacts = getDailyContacts(dcrData);
  const dailyContactsAndTickets = [];

  for(let i = 0; i < dailyTickets.length; i++) {
    for(let b = 0; b < dailyContacts.length; b++) {
      if(dailyTickets[i].agent === dailyContacts[b].name) {
        const test = {
          ...dailyContacts[b],
          ticket: dailyTickets[i].tickets
        }
        dailyContactsAndTickets.push(test);
      }
    }
  }

  const agentsMonthly = monthlyContactsAndTickets.map(agent => (
    <Agent agent={agent}/>
  ));

  const agentsDaily = dailyContactsAndTickets.map(agent => (
    <Agent agent={agent}/>
  ));

  const agentsMonthlyLng = finalResultLngBased().map(agent => (
    <Agent agent={agent}/>
  ));

  const dataForDownload = finalResultLngBased();

  return (
    <div className="main_container">
      <h2>Monthly Stats</h2>
      <div className="table_container">
      <form>
      <select
            value={languageFilter}
            name="language"
            onChange={handleChange}
          >
            <option value="">-- Stats for all languages --</option>
            <option value="english">English</option>
            <option value="german">German</option>
            <option value="russian">Russian</option>
            <option value="italian">Italian</option>
            <option value="spanish">Spanish</option>
          </select>
          {languageFilter === '' ? <CSVLink data={monthlyContactsAndTickets} className="nav_btn download_btn">Download</CSVLink> :
          <CSVLink data={dataForDownload} className="nav_btn download_btn">Download</CSVLink>}
      </form>
      <table>
      <thead>
        <tr>
          <th>Agent Name</th>
          <th>Tickets</th>
          <th>Contacts</th>
         </tr>
      </thead>
      {languageFilter === '' ? agentsMonthly : agentsMonthlyLng}
      </table>
      </div>
    

      <h2>Daily Stats</h2>
      <div className="table_container">
      <table>
      <thead>
        <tr>
          <th>Agent Name</th>
          <th>Tickets</th>
          <th>Contacts</th>
         </tr>
      </thead>
      {agentsDaily}
      </table>
      </div>
    </div>
  )
}

export default Table
