import React from "react";

const PomodoroControls = ({ onStartTimer, onStopTimer, onResetTimer }) => {
  return (
    <div className="timeControls">
      <button onClick={onStartTimer}>start</button>
      <button onClick={onStopTimer}>stop</button>
      <button onClick={onResetTimer}>reset</button>
    </div>
  );
};

export default PomodoroControls;
