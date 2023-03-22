import React, { useState, useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Timer.css";

const Timer = () => {
  const [time, setTime] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 60));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const percentage = (time / 60) * 100;

  return (
    <div className="progress-bar-wrapper me-3">
      <CircularProgressbar value={percentage} text={`${time}`} />
    </div>
  );
};

export default Timer;
