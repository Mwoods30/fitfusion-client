import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fitfusion.onrender.com/', // fixed typo in backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
