import React, { useEffect, useState } from 'react';
import BotCard from './BotCard';

const BotCollection = ({ enlistBot }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    const fetchBots = async () => {
      try {
        const response = await fetch('/data/bots'); // Assuming your backend API endpoint is '/api/bots'
        if (!response.ok) {
          throw new Error('Failed to fetch bots');
        }
        const data = await response.json();
        setBots(data.bots);
      } catch (error) {
        console.error('Error fetching bots:', error);
      }
    };

    fetchBots();
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
