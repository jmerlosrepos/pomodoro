import React from "react";

const PomodoroRange = ({ min, max, onChange }) => {
  return <input type="range" onChange={onChange} min={min} max={max} />;
};

export default PomodoroRange;
