import React, { useState, useContext } from 'react';
import api from '../api';
import { AuthContext } from '../AuthContext';

export default function RegisterForm() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg('');
    try {
      const res = await api.post('/api/register', { email, password });
      login(res.data.access_token); // optional auto-login
      setMsg('Registration successful');
    } catch (err) {
      setMsg('Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleRegister} className="register-form">
      <input
        type="email"
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
        className="form-input"
        required
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        className="form-input"
        required
      />
      <button type="submit" className="form-button" disabled={loading}>
        {loading ? 'Registering...' : 'Register'}
      </button>
      <p className={`form-message ${msg.includes('successful') ? 'success' : 'error'}`}>
        {msg}
      </p>
    </form>
  );
}
