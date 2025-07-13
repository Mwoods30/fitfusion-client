import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const settingsOptions = [
  'Linked Accounts',
  'Goals',
  'Notification Preferences',
  'Account Information',
  'Help and Support',
  'About',
];

export default function Profile() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [calendarValue, setCalendarValue] = useState(new Date());

  // Fake workout streak logic
  const [workoutStreak, setWorkoutStreak] = useState(5); // pretend streak

  useEffect(() => {
    // TODO: Replace with real API call
    // fetch streak from server and update setWorkoutStreak
  }, []);

  return (
    <div>
      <div className="dropdown-container">
        <button
          className="dropdown-toggle"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          ⚙️ Settings
        </button>
        <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
          {settingsOptions.map(option => (
            <li
              key={option}
              className={selectedOption === option ? 'active' : ''}
              onClick={() => {
                setSelectedOption(option);
                setDropdownOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>

      <div className="profile-main">
        <div className="calendar-section">
          <h2 className="section-title">🏋️ Workout Calendar</h2>
          <Calendar
            value={calendarValue}
            onChange={setCalendarValue}
            className="custom-calendar"
          />
        </div>

        <div className="workout-streak">
          <h2 className="section-title">🔥 Current Streak</h2>
          <div className="streak-count">{workoutStreak} days</div>
        </div>

        <div className="history-section">
          <h2 className="section-title">📜 Workout History</h2>
          {/* Add history table or list here */}
        </div>

        {selectedOption && (
          <div className="settings-content">
            <h3>{selectedOption}</h3>
            <p>Settings UI for "{selectedOption}" goes here.</p>
          </div>
        )}
      </div>
    </div>
  );
}