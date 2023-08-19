import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [inputTime, setInputTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    }

    if (time === 0) {
      setIsRunning(false);
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning, time]);

  const startTimer = () => {
    setTime(inputTime);
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  return (
    <div>
      <h1>Timer App</h1>
      <div>
        <label>Enter time in seconds:</label>
        <input
          type="number"
          value={inputTime}
          onChange={e => setInputTime(parseInt(e.target.value))}
        />
      </div>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
      </div>
      <div>
        <p>Time remaining: {time} seconds</p>
      </div>
    </div>
  );
};

export default Timer;
