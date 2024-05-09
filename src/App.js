import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from '../AppRouter';
import YourBotArmy from './YourBotArmy';
import './App.css';

const App = () => {
  const [army, setArmy] = useState([]);
  const [bots, setBots] = useState([]);

  
  const deleteBot = (bot) => {
    setBots(bots.filter((b) => b.id !== bot.id)); 
    fetch(`http://localhost:3001/bots/${bot.id}`, { method: 'DELETE' }); 
  };

  
  const dischargeBot = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id)); 
  };

  return (
    <Router>
      <YourBotArmy army={army} dischargeBot={dischargeBot} />
      <AppRouter deleteBot={deleteBot} dischargeBot={dischargeBot} />
    </Router>
  );
};

export default App;
