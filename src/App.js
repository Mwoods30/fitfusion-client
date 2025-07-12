import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './AuthContext';
import RegisterForm from './Componets/RegisterForm';
import LoginForm from './Componets/LoginForm';
import WorkoutForm from './Componets/WorkoutForm';
import History from './Componets/History';
import LoginRegisterPage from './Componets/LoginRegisterPage'; // Import instead of defining here
import './App.css';

function Navbar() {
  const { token, logout } = useContext(AuthContext);
  return (
    <nav>
 {/* Logo */}
  <div className="flex items-center gap-2">
  <img src="dumbbell.png" alt="Gymlytics Logo" className="logo" />
</div>

<div>
  {/* Title */}
<span className="title">Gymlytics</span>
</div>


  {/* Navigation Links */}
  <ul className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-0">
    <li><Link to="/" className="hover:underline">Home</Link></li>
    <li><Link to="/login" className="hover:underline">Sign In</Link></li>
    <li><Link to="/workout" className="hover:underline">Generate Workout</Link></li>
    <li><Link to="/history" className="hover:underline">History</Link></li>
    {token && (
      <li>
        <button
          onClick={logout}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
      </li>
    )}
  </ul>
</nav>
  );
}

function Home() {
  // Home component content
  return (
    <div>
    <br></br><br></br><br></br><br></br><br></br><br></br>
      <h1> Gymlytics</h1>
    
    <div>
    <br></br><br></br><br></br><br></br><br></br><br></br>
    </div>
      <p>Welcome to Gymlytics! Use the navigation bar to login, generate workouts, and view your history.</p>
    </div>
  );
}

function PrivateRoute({ children }) {
  const { token } = useContext(AuthContext);
  return token ? children : <Navigate to="/login" replace />;
}

function AppRoutes() {
  const { token } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginRegisterPage />} />
      <Route
  path="/workout"
  element={
    <PrivateRoute>
      <WorkoutForm />
    </PrivateRoute>
  }
/>
      <Route
        path="/history"
        element={token ? <History /> : <Navigate to="/login" replace />}
      />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;