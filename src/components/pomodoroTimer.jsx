import React from "react";
import timeFormatter from "../utils/timeFormatter";

const PomodoroTimer = ({ timerValue, itsVisible }) => {
  return (
    <div className={itsVisible ? "pomodoroTimer" : "pomodoroTimer hidden"}>
      My Pomodoro
      <br />
      {timeFormatter(timerValue)}
    </div>
  );
};

export default PomodoroTimer;
