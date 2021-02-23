import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchDCRs = () => API.get('/dcr');

export const createDCR = (newDCR) => API.post('/dcr', newDCR);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);