import React, { useEffect, useState, useContext } from 'react';
import api from '../api';
import { AuthContext } from '../AuthContext';

export default function History() {
  const [history, setHistory] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await api.get('/api/history', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setHistory(res.data);
      } catch (err) {
        console.error('Error fetching history', err);
      }
    };
    fetchHistory();
  }, [token]);

  return (
    <div>
      <h3>Workout History</h3>
      <ul>
        {history.map((entry, idx) => (
          <li key={idx}>
            <strong>{entry.time}:</strong> {entry.workout}
          </li>
        ))}
      </ul>
    </div>
  );
}
