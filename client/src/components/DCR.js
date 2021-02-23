import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createDCR } from '../actions/dcr';
import './dcr.css';
import * as actionType from '../constants/actionTypes';


import LanguageInput from './DCR/LanguageInput';
import SourceInput from './DCR/SourceInput';
import TicketNumberInput from './DCR/TicketNumberInput';
import Calls from './DCR/Calls';
import Chats from './DCR/Chats';
import Mails from './DCR/Mails';



const DCR = () => {
  // Getting the name of logged in user from local storage
  const user = JSON.parse(localStorage.getItem('profile'));
  const agent = user.result.name;
  // creating an instace of todays dat in the ISO format
  const date = new Date().toISOString().slice(0, 10);

  // below var can be used for testing purposes
  // to simulate another day/month and to test if monthly and dayly sorting works
  // in table component of admin dashboard
  // let today = new Date('05 February 2021 14:48 UTC').toISOString();

  const [DCRData, setDCRData] = useState({
    language: '',
    source: '',
    ticketNumber: '',
    mails: '',
    calls: '',
    chats: '',
    agent: agent,
    createdAt: date
  });
  
  const [successMsg, setsuccessMsg] = useState('');
  const [missingInfo, setMissingInfo] = useState('');
  const dispatch = useDispatch();
  
  const handleChange = (event) => {
    const {name, value} = event.target;
    setDCRData({
      ...DCRData,
      [name]: value
    })
  }

  const showSuccessMsg = () => {
    setsuccessMsg('DCR has been submited')
    setTimeout(() => setsuccessMsg(''), 1500);
  }

  const inputCheck = () => {
      setMissingInfo('Not all data have been provided');
      setTimeout(() => setMissingInfo(''), 1500);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(DCRData.language === '' || DCRData.source === '' || DCRData.ticketNumber === '') {
      inputCheck();
    } else {
      dispatch(createDCR(DCRData)); 
      showSuccessMsg();
    }
    clearState();
  }

  const clearState = () => {
    setDCRData({
      language: '',
      source: '',
      ticketNumber: '',
      mails: '',
      calls: '',
      chats: '',
      agent: agent,
      createdAt: date
    })
  }
  
  return (
    <div className="dcr">
      <h2>DCR</h2>
      <form className="dcr_form"
      onSubmit={handleSubmit}
      >
        <LanguageInput DCRData={DCRData} handleChange={handleChange}/>

        <SourceInput DCRData={DCRData} handleChange={handleChange}/>

        <TicketNumberInput DCRData={DCRData} handleChange={handleChange}/>

        <div className="contacts">
          <Calls DCRData={DCRData} handleChange={handleChange} />

          <Chats DCRData={DCRData} handleChange={handleChange} />

          <Mails DCRData={DCRData} handleChange={handleChange} />
        </div>
        <button className="btn">Submit</button>
      </form>
      <h3 className="fail_msg">{missingInfo}</h3>
      <h3 className="scs_msg">{successMsg}</h3>
    </div>
  )
}

export default DCR
