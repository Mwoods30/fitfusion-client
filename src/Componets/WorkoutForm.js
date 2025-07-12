import React, { useState, useContext } from 'react';
import api from '../api';
import { AuthContext } from '../AuthContext';

export default function WorkoutForm() {
  const [time, setTime] = useState('');
  const [goal, setGoal] = useState('');
  const [equipment, setEquipment] = useState('');
  const [generated, setGenerated] = useState('');
  const { token } = useContext(AuthContext);

  const generateWorkout = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/api/generate', { time, goal, equipment }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setGenerated(res.data.workout);
    } catch (err) {
      setGenerated('Workout generation failed.');
    }
  };

  return (
    <form onSubmit={generateWorkout}>
      <h3>Generate Workout</h3>
      <input value={time} onChange={e => setTime(e.target.value)} placeholder="Time (minutes)" />
      <input value={goal} onChange={e => setGoal(e.target.value)} placeholder="Goal (e.g. cardio)" />
      <input value={equipment} onChange={e => setEquipment(e.target.value)} placeholder="Equipment (optional)" />
      <button type="submit">Generate</button>
      <p>{generated}</p>
    </form>
  );
}
