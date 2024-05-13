import React from 'react';
import BotCard from './BotCard';

const YourBotArmy = ({ army, releaseBot, dischargeBot,deleteBot }) => {
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
            onDelete={deleteBot}
          />
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;
