import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import botsData from '../data/bots.json';
import '../App.css'; 

const BotSpecs = ({ enlistBot }) => {
  const { botId } = useParams();
  const navigate = useNavigate();

  const bot = botsData.bots.find((b) => b.id === parseInt(botId));

  const handleBack = () => {
    navigate('/');
  };

  const handleEnlist = () => {
    enlistBot(bot);
    navigate('/');
  };

  return (
    <div>
      <h2>Bot Specs</h2>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
      <button className="black-button" onClick={handleBack}>Back to Collection</button>
      <button className="black-button" onClick={handleEnlist}>Enlist Bot</button>
    </div>
  );
};

export default BotSpecs;
