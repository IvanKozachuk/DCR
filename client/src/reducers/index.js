import {  combineReducers } from 'redux';
import dcr from './dcr';
import auth from './auth';

export default combineReducers({ dcr, auth });
