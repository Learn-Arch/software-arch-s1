import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import InfoTooltip from './InfoTooltip';
import '../index.css';

function App() {
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
      <InfoTooltip 
        isOpen={isInfoTooltipOpen}
        onClose={() => setIsInfoTooltipOpen(false)}
        isSuccess={isSuccess}
      />
    </>
  );
}

export default App; 