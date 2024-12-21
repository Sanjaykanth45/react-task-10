import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
  
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  const handleStart = () => {
    if (!isRunning) {
      const id = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
      setIsRunning(true);
      setIntervalId(id);
    }
  };

  const handleStop = () => {
    if (isRunning && intervalId) {
      clearInterval(intervalId);
      setIsRunning(false);
      setIntervalId(null);
    }
  };

  const handleReset = () => {
    setSeconds(0);
    setIsRunning(false);
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div
      className="container-fluid d-flex flex-column align-items-center justify-content-center"
      style={{
        height: '100vh',
        background: 'linear-gradient(135deg, #ff9a9e, #fad0c4, #fbc2eb, #a6c1ee)',
        backgroundSize: '400% 400%',
        animation: 'gradient 15s ease infinite',
        color: '#fff',
      }}
    >
      <style>
     
      </style>
      <h1 className="mb-4" style={{ fontSize: '4rem', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
        Stopwatch
      </h1>
      <div
        className="display-4 mb-4"
        style={{
          padding: '20px 40px',
          background: 'rgba(0, 0, 0, 0.2)',
          borderRadius: '15px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
        }}
      >
        {formatTime(seconds)}
      </div>
      <div className="btn-group">
        <button
          className="btn btn-success btn-lg mx-2"
          onClick={handleStart}
          disabled={isRunning}
          style={{
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
          }}
        >
          Start
        </button>
        <button
          className="btn btn-danger btn-lg mx-2"
          onClick={handleStop}
          disabled={!isRunning}
          style={{
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
          }}
        >
          Stop
        </button>
        <button
          className="btn btn-warning btn-lg mx-2"
          onClick={handleReset}
          style={{
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
