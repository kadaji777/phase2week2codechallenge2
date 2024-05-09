import React from 'react';
import BotCard from './BotCard';

const YourBotArmy = ({ army, releaseBot, dischargeBot }) => {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <div className="bot-army">
        {army.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            onEnlist={releaseBot}
            onDischarge={dischargeBot}
          />
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;
