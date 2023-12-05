import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <div>
      <h1>Timer:   {seconds} seconds</h1>
     <p> <button onClick={handleStart} disabled={isActive}>
        Start
      </button>   <button onClick={handleStop} disabled={!isActive}>
        Stop
      </button>     <button onClick={handleReset}>Reset</button></p>
    </div>
  );
};

export default Timer;