import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fitfuision.onrender.com/', // or your deployed backend URL
});

export default api;

