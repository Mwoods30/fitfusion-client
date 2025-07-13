import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fitfuision.onrender.com/', // reverted to original deployed backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});
export default api;
