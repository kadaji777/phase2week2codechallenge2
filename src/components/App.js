import React, { useState } from 'react'; 
import { BrowserRouter as Router } from 'react-router-dom'; 
import AppRouter from '../AppRouter';
import YourBotArmy from './YourBotArmy';

const App = () => {
  const [army, setArmy] = useState([]); 

  const enlistBot = (bot) => {
    if (!army.some((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseBot = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  const dischargeBot = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
    
  };

  return (
    <Router> 
      <YourBotArmy army={army} releaseBot={releaseBot} dischargeBot={dischargeBot} />
      <AppRouter enlistBot={enlistBot} />
    </Router>
  );
};

export default App;
