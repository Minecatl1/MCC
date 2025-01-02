import React, { useState } from 'react';
import { sendCommand } from './WebSocketClient';

function App() {
  const [targetUsername, setTargetUsername] = useState('');

  const toggleCreative = () => {
    const senderUsername = 'Minecatl2013';
    const command = 'toggleCreative';
    const fullCommand = `${senderUsername}:${command}:${targetUsername}`;
    sendCommand(fullCommand);
    setTargetUsername('');
  };

  const setCreativeToggle = value => {
    const senderUsername = 'Minecatl2013';
    const command = 'setCreativeToggle';
    const fullCommand = `${senderUsername}:${command}:${value}`;
    sendCommand(fullCommand);
  };

  const toggleAdmin = () => {
    const senderUsername = 'Minecatl2013';
    const command = 'toggleAdmin';
    const fullCommand = `${senderUsername}:${command}:${targetUsername}`;
    sendCommand(fullCommand);
    setTargetUsername('');
  };

  const setAdminToggle = value => {
    const senderUsername = 'Minecatl2013';
    const command = 'setAdminToggle';
    const fullCommand = `${senderUsername}:${command}:${value}`;
    sendCommand(fullCommand);
  };

  const toggleDamageImmunity = () => {
    const senderUsername = 'Minecatl2013';
    const command = 'toggleDamageImmunity';
    const fullCommand = `${senderUsername}:${command}:${targetUsername}`;
    sendCommand(fullCommand);
    setTargetUsername('');
  };

  const setDamageImmunityToggle = value => {
    const senderUsername = 'Minecatl2013';
    const command = 'setDamageImmunityToggle';
    const fullCommand = `${senderUsername}:${command}:${value}`;
    sendCommand(fullCommand);
  };

  const toggleHostileMobIgnore = () => {
    const senderUsername = 'Minecatl2013';
    const command = 'toggleHostileMobIgnore';
    const fullCommand = `${senderUsername}:${command}:${targetUsername}`;
    sendCommand(fullCommand);
    setTargetUsername('');
  };

  const setHostileMobIgnoreToggle = value => {
    const senderUsername = 'Minecatl2013';
    const command = 'setHostileMobIgnoreToggle';
    const fullCommand = `${senderUsername}:${command}:${value}`;
    sendCommand(fullCommand);
  };

  return (
    <div className="App">
      <h1>Minecraft Command Dashboard</h1>
      <input
        type="text"
        value={targetUsername}
        onChange={e => setTargetUsername(e.target.value)}
        placeholder="Enter target username"
      />
      <button onClick={toggleCreative}>Toggle Creative Mode</button>
      <button onClick={() => setCreativeToggle(true)}>
        Enable Creative Toggle
      </button>
      <button onClick={() => setCreativeToggle(false)}>
        Disable Creative Toggle
      </button>
      <button onClick={toggleAdmin}>Toggle Admin Mode</button>
      <button onClick={() => setAdminToggle(true)}>Enable Admin Toggle</button>
      <button onClick={() => setAdminToggle(false)}>
        Disable Admin Toggle
      </button>
      <button onClick={toggleDamageImmunity}>Toggle Damage Immunity</button>
      <button onClick={() => setDamageImmunityToggle(true)}>
        Enable Damage Immunity Toggle
      </button>
      <button onClick={() => setDamageImmunityToggle(false)}>
        Disable Damage Immunity Toggle
      </button>
      <button onClick={toggleHostileMobIgnore}>
        Toggle Hostile Mob Ignore
      </button>
      <button onClick={() => setHostileMobIgnoreToggle(true)}>
        Enable Hostile Mob Ignore Toggle
      </button>
      <button onClick={() => setHostileMobIgnoreToggle(false)}>
        Disable Hostile Mob Ignore Toggle
      </button>
    </div>
  );
}

export default App;
