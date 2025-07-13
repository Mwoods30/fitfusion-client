import React, { useState } from 'react';

export default function WorkoutPreferences() {
  const [reminders, setReminders] = useState({
    start: true,
    end: false,
    inactivity: true,
  });
  const [autoPause, setAutoPause] = useState(true);
  const [heartRateZones, setHeartRateZones] = useState([
    { id: 1, name: 'Zone 1', range: '50-60% Max HR' },
    { id: 2, name: 'Zone 2', range: '60-70% Max HR' },
    { id: 3, name: 'Zone 3', range: '70-80% Max HR' },
  ]);
  const [notifications, setNotifications] = useState({
    workoutReminders: true,
    progressUpdates: true,
    achievements: false,
  });

  const toggleReminder = (key) => {
    setReminders({ ...reminders, [key]: !reminders[key] });
  };

  const toggleNotification = (key) => {
    setNotifications({ ...notifications, [key]: !notifications[key] });
  };

  const handleSave = () => {
    const workoutSettings = {
      reminders,
      autoPause,
      heartRateZones,
      notifications,
    };
    console.log('Saving workout preferences:', workoutSettings);
    alert('Workout preferences saved!');
  };

  return (
    <div className="settings-container">
      <h2>Workout Preferences</h2>

      <section>
        <h3>Workout Reminders</h3>
        <label>
          <input
            type="checkbox"
            checked={reminders.start}
            onChange={() => toggleReminder('start')}
          />
          Enable start reminders
        </label>
        <label>
          <input
            type="checkbox"
            checked={reminders.end}
            onChange={() => toggleReminder('end')}
          />
          Enable end reminders
        </label>
        <label>
          <input
            type="checkbox"
            checked={reminders.inactivity}
            onChange={() => toggleReminder('inactivity')}
          />
          Enable inactivity reminders
        </label>
      </section>

      <section>
        <h3>Auto-Pause</h3>
        <label>
          <input
            type="checkbox"
            checked={autoPause}
            onChange={() => setAutoPause(!autoPause)}
          />
          Enable auto-pause
        </label>
      </section>

      <section>
        <h3>Heart Rate Zones</h3>
        <ul>
          {heartRateZones.map(zone => (
            <li key={zone.id}>{zone.name}: {zone.range}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Notification Preferences</h3>
        <label>
          <input
            type="checkbox"
            checked={notifications.workoutReminders}
            onChange={() => toggleNotification('workoutReminders')}
          />
          Workout reminders
        </label>
        <label>
          <input
            type="checkbox"
            checked={notifications.progressUpdates}
            onChange={() => toggleNotification('progressUpdates')}
          />
          Progress updates
        </label>
        <label>
          <input
            type="checkbox"
            checked={notifications.achievements}
            onChange={() => toggleNotification('achievements')}
          />
          Achievements
        </label>
      </section>

      <button onClick={handleSave}>Save</button>
    </div>
  );
}
