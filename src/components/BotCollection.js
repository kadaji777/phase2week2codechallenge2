import React, { useEffect, useState } from 'react';
import BotCard from './BotCard';
import botsData from '../data/bots.json'; 

const BotCollection = ({ enlistBot }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    setBots(botsData.bots); 
  }, []);

  return (
    <div>
      <h2>Bot Collection</h2>
      <div className="bot-collection">
        {bots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            onEnlist={enlistBot}
          />
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
