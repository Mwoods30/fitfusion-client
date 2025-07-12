import React, { useState, useContext } from 'react';
import api from '../api';
import { AuthContext } from '../AuthContext';

export default function LoginForm() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setMsg('');
    setLoading(true);
    try {
      const res = await api.post('/api/login', { email, password });
      login(res.data.access_token);
      setMsg('Login successful');
    } catch {
      setMsg('Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className="form-wrapper">
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="form-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="form-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" className="form-button" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
      <p className={`form-message ${msg.includes('success') ? 'success' : 'error'}`}>{msg}</p>
    </form>
  );
}
