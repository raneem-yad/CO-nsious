import React, { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';

export const Notification = ({ message, variant, duration, onClose }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Automatically hide the alert after the specified duration
    const timer = setTimeout(() => {
      setShow(false);
      if (onClose) onClose(); // Callback to notify parent when alert is closed
    }, duration);

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!show) return null;

  return (
    <Alert variant={variant} className="mt-3">
      {message}
    </Alert>
  );
};

Notification.defaultProps = {
  variant: 'danger', // Default to "danger" (error)
  duration: 5000, // Default to 5 seconds
};
