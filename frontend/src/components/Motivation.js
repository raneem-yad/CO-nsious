import React, { useState, useEffect } from 'react';

const Motivation = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
      const MotivationResp = await API.get('/motivation/', {})
//      setMessage(MotivationResp.data.message)
      console.log('message:', MotivationResp)

  return (
    <div>
      <h1>Daily Motivation</h1>
      <p>{message || 'Loading motivation...'}</p>
    </div>
  );
};

export default Motivation;