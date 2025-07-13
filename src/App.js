import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './AuthContext';
import WorkoutForm from './Componets/WorkoutForm';
import History from './Componets/History';
import LoginRegisterPage from './Componets/LoginRegisterPage'; // Import instead of defining here
import './App.css';
import Profile from './Componets/Profile';

function Navbar() {
  const { token, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav>
      <div className="flex items-center gap-2">
        <img src="dumbbell.png" alt="Gymlytics Logo" className="logo" />
      </div>

      <div>
        <span className="title">Gymlytics</span>
      </div>

      <ul className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-0">
        {!token ? (
          <>
            <li><Link to="/login" className="hover:underline">Sign In</Link></li>
          </>
        ) : (
          <>
            <li><Link to="/profile" className="hover:underline">Profile</Link></li>
            <li><Link to="/workout" className="hover:underline">Generate Workout</Link></li>
            <li><Link to="/history" className="hover:underline">History</Link></li>
            <li>
              <button
                onClick={handleLogout}
                className="logout-button"
              >
                Logout
              </button>
            </li>
          </>
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
        element={
          <PrivateRoute>
            <History />
          </PrivateRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
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