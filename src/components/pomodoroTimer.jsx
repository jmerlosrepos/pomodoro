import React from "react";
import { formatTime } from "../utils/timeFormatter";
import PomodoroControls from "../components/pomodoroControls";

const PomodoroTimer = ({
  timerValue,
  itsVisible,
  onStartTimer,
  onStopTimer,
  onResetTimer,
}) => {
  return (
    <div className={itsVisible ? "pomodoroTimer" : "pomodoroTimer hidden"}>
      My Pomodoro
      <br />
      {formatTime(timerValue)}
      <br />
      <PomodoroControls
        onStartTimer={onStartTimer}
        onStopTimer={onStopTimer}
        onResetTimer={onResetTimer}
      />
    </div>
  );
};

export default PomodoroTimer;
