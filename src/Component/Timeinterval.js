import React, { useState, useEffect } from 'react';

const TimerApp = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          clearInterval(interval);
          setIsActive(false);
          alert('Timer completed!');
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, minutes, seconds]);

  const startTimer = () => {
    if (minutes > 0 || seconds > 0) {
      setIsActive(true);
    }
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <div>
      <h1>Timer App</h1>
      <div>
        <h1><label>
          Minutes:
          <input
            type="number"
            value={minutes}
            onChange={(e) => setMinutes(parseInt(e.target.value, 10))}
          />
        </label>
        <label>
          Seconds:
          <input
            type="number"
            value={seconds}
            onChange={(e) => setSeconds(parseInt(e.target.value, 10))}
          />
        </label></h1>
      </div>
      <div>
        <button onClick={startTimer}>Start</button>    <button onClick={resetTimer}>Reset</button>
      </div>
      <div>
    
        <h1>
          Time Remaining: {String(minutes).padStart(2, '0')}:
          {String(seconds).padStart(2, '0')}
        </h1 >
      </div>
    </div>
  );
};

export default TimerApp;