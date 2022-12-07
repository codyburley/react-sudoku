import React from 'react';
import { useState, useEffect } from 'react';

const GameClock = ({ pause }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;
    if (pause) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!pause) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [pause]);
  return (
    <div className="stopwatch">
      <div className="numbers">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
      </div>
    </div>
  )
}

export default GameClock