import React from "react";
import { formatTime } from "../utils/timeFormatter";

const PomodoroTimer = ({ timerValue, itsVisible }) => {
  return (
    <div className={itsVisible ? "pomodoroTimer" : "pomodoroTimer hidden"}>
      My Pomodoro
      <br />
      {formatTime(timerValue)}
    </div>
  );
};

export default PomodoroTimer;
