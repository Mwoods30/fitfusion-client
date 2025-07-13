import React, { useState } from 'react';

export default function ProfileSettings() {
  const [units, setUnits] = useState('metric');
  const [showDistance, setShowDistance] = useState(true);
  const [showHeartRate, setShowHeartRate] = useState(false);
  const [showTime, setShowTime] = useState(true);
  const [colorTheme, setColorTheme] = useState('light');
  const [shareData, setShareData] = useState(true);
  const [importData, setImportData] = useState(false);
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john@example.com');

  const handleSave = () => {
    const profileSettings = {
      units,
      workoutView: { showDistance, showHeartRate, showTime, colorTheme },
      privacy: { shareData, importData },
      accountInfo: { name, email },
    };
    console.log('Saving profile settings:', profileSettings);
    // Call your API or state management here
    alert('Profile settings saved!');
  };

  return (
    <div className="settings-container">
      <h2>Profile Settings</h2>

      <section>
        <h3>Units of Measurement</h3>
        <label>
          <input
            type="radio"
            name="units"
            value="metric"
            checked={units === 'metric'}
            onChange={() => setUnits('metric')}
          />
          Metric (km, kg, kJ)
        </label>
        <label>
          <input
            type="radio"
            name="units"
            value="imperial"
            checked={units === 'imperial'}
            onChange={() => setUnits('imperial')}
          />
          Imperial (miles, lbs, cal)
        </label>
      </section>

      <section>
        <h3>Workout View Customization</h3>
        <label>
          <input
            type="checkbox"
            checked={showDistance}
            onChange={() => setShowDistance(!showDistance)}
          />
          Show Distance
        </label>
        <label>
          <input
            type="checkbox"
            checked={showHeartRate}
            onChange={() => setShowHeartRate(!showHeartRate)}
          />
          Show Heart Rate
        </label>
        <label>
          <input
            type="checkbox"
            checked={showTime}
            onChange={() => setShowTime(!showTime)}
          />
          Show Time
        </label>
        <label>
          Color Theme:
          <select value={colorTheme} onChange={e => setColorTheme(e.target.value)}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
          </select>
        </label>
      </section>

      <section>
        <h3>Privacy Controls</h3>
        <label>
          <input
            type="checkbox"
            checked={shareData}
            onChange={() => setShareData(!shareData)}
          />
          Share Data With Community
        </label>
        <label>
          <input
            type="checkbox"
            checked={importData}
            onChange={() => setImportData(!importData)}
          />
          Import Data from Other Apps
        </label>
      </section>

      <section>
        <h3>Account Information</h3>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
      </section>

      <button onClick={handleSave}>Save</button>
    </div>
  );
}
