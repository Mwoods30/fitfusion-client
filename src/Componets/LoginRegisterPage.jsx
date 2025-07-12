import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

export default function LoginRegisterPage() {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="auth-container">
      <h2 className="text-2xl font-bold mb-4 text-center">Welcome to Gymlystic</h2>

      <div className="button-row">
        <button
          onClick={() => setShowRegister(false)}
          className={`Choice px-6 py-3 ${!showRegister ? 'bg-green-600' : 'bg-gray-300'} text-white rounded hover:bg-green-700`}
        >
          Login
        </button>
        <button
          onClick={() => setShowRegister(true)}
          className={`Choice px-6 py-3 ${showRegister ? 'bg-blue-600' : 'bg-gray-300'} text-white rounded hover:bg-blue-700`}
        >
          Register
        </button>
      </div>

      <div className="form-content">
        
        {showRegister ? <RegisterForm /> : <LoginForm />}
      </div>
    </div>
  );
}
