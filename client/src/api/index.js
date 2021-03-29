import axios from 'axios';

// change below line for local host 5000 to dest in dev env
const API = axios.create({ baseURL: 'https://protected-hamlet-99583.herokuapp.com/' });

export const fetchDCRs = () => API.get('/dcr');

export const createDCR = (newDCR) => API.post('/dcr', newDCR);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);