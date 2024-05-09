import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const BotCard = ({ bot, onEnlist, onDelete, onDischarge }) => { 
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/bots/${bot.id}`);
  };

  const handleDelete = (e) => {
    e.stopPropagation(); 
    onDelete(bot); 
  };

  return (
    <div className="bot-card" onClick={handleCardClick}>
      <button className="delete-button" onClick={handleDelete}>X</button> 
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <button className="black-button" onClick={(e) => { e.stopPropagation(); onEnlist(bot); }}>Enlist</button>
      <button className="black-button" onClick={(e) => { e.stopPropagation(); onDischarge(bot); }}>Discharge</button> {/* Discharge button */}
    </div>
  );
};

export default BotCard;
