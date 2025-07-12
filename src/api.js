import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5001', // reverted to original deployed backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
