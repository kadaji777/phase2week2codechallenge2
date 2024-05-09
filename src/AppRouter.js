import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import BotCollection from './components/BotCollection';
import BotSpecs from './components/BotSpecs';

const AppRouter = ({ enlistBot }) => {
  return (
    <Routes> 
      <Route path="/" element={<BotCollection enlistBot={enlistBot} />} /> 
      <Route path="/bots/:botId" element={<BotSpecs enlistBot={enlistBot} />} />
    </Routes>
  );
};

export default AppRouter;
