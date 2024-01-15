import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';

const Timer = () => {
  const calculateTimeLeft = () => {
    const targetDate = moment.tz('2024-01-24 17:00:00', 'Asia/Jakarta');
    const dateNow = moment();

    const difference = targetDate.diff(dateNow, 'seconds');

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (60 * 60 * 24)).toString().padStart(2, "0"),
        hours: Math.floor((difference % (60 * 60 * 24)) / (60 * 60)).toString().padStart(2, "0"),
        minutes: Math.floor((difference % (60 * 60)) / 60).toString().padStart(2, "0"),
        seconds: Math.floor(difference % 60).toString().padStart(2, "0")
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div>
  {Object.keys(timeLeft).length > 0 ? (
  Object.keys(timeLeft).map((interval) => (
    <span key={interval}>
      {timeLeft[interval]}{' '}
    </span>
  ))
) : (
  <span>Time's up!</span>
)}
    </div>
  );
};

export default Timer;
