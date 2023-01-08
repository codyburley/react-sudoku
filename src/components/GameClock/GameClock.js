import React from "react";
import { useEffect } from "react";

const GameClock = ({ pause, time, setTime }) => {
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
  }, [pause, setTime]);

  return (
    <div>
      <div>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
      </div>
    </div>
  );
};

export default GameClock;
