import React, { useRef, useState } from "react";
import "./style.css";

const Index = () => {
  const [time, setTime] = useState(0);
  const stopwatchRef = useRef(0);
  const intervalRef = useRef(null);
  // const [isRunning, setisRunning] = useState(false);

  function handleStart() {
    stopwatchRef.current = new Date().getTime() - time;
    intervalRef.current = setInterval(() => {
      setTime(new Date().getTime() - stopwatchRef.current);
    }, 10);
    // setisRunning(true);
  }
  function handleStop() {
    clearInterval(intervalRef.current);
    // setisRunning(false);
  }
  function handleReset() {
    clearInterval(intervalRef.current);
    setTime(0);
  }
  function timeFormat() {
    const milliSec = Math.floor((time % 1000) / 10)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor((time / 1000) % 60)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((time / (1000 * 60)) % 60)
      .toString()
      .padStart(2, "0");
    const hours = Math.floor(time / (1000 * 60 * 60))
      .toString()
      .padStart(2, "0");

    return { hours, minutes, seconds, milliSec };
  }

  return (
    <div>
      <div className="stopwatch-container">
        <div className="time-display">
          {/* <span className="time">{timeFormat()}</span> */}
          <h3 className="time">{timeFormat().hours} :</h3>
          <h3 className="time">{timeFormat().minutes} :</h3>
          <h3 className="time">{timeFormat().seconds} :</h3>
          <h3 className="time">{timeFormat().milliSec}</h3>
        </div>
        <div className="buttons">
          {/* <button className="btn" onClick={isRunning ? handleStop : handleStart}>
            {isRunning ? "Stop" : "Start"}
          </button> */}

          <button className="btn" onClick={handleStart}>
            Start
          </button>
          <button className="btn" onClick={handleStop}>
            Stop
          </button>
          <button className="btn" onClick={handleReset}>
            reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
