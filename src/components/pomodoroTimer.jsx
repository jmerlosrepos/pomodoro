import React from "react";

const PomodoroTimer = ({ timerValue, itsVisible }) => {
  return (
    <div className={itsVisible ? "pomodoroTimer" : "pomodoroTimer hidden"}>
      My Pomodoro
      <br />
      {timerValue}
    </div>
  );
};

export default PomodoroTimer;
