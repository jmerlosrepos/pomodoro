import React from "react";

const PomodoroControls = ({ onStartTimer, onStopTimer, onResetTimer }) => {
  return (
    <div className="btn-group" data-toggle="buttons">
      <button className="btn btn-secondary" onClick={onStartTimer}>
        start
      </button>
      <button className="btn btn-secondary" onClick={onStopTimer}>
        stop
      </button>
      <button className="btn btn-secondary" onClick={onResetTimer}>
        reset
      </button>
    </div>
  );
};

export default PomodoroControls;
