import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fitfuision.onrender.com',  // <-- Use your deployed backend URL here
  headers: {
    'Content-Type': 'application/json',
  },
});
export default api;
