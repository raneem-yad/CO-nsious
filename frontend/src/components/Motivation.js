import React, { useState, useEffect } from 'react';
import API from '../utils/api'
const Motivation = () => {
  const [message, setMessage] = useState('');
  useEffect(() => {
    const fetchMotivation = async () => {
      try {
        const MotivationResp = await API.get('/motivation/', {});
        setMessage(MotivationResp.data.message);
      } catch (error) {
        console.error('Error fetching motivation:', error);
      }
    };
    fetchMotivation();
  }, []);
  return (
    <div>
      <h1>Daily Motivation</h1>
      <p>{message || 'Loading motivation...'}</p>
    </div>
  );
};
export default Motivation;