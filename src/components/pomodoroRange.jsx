import React from "react";

const PomodoroRange = ({ min, max, onChange, value }) => {
  return (
    <input type="range" onChange={onChange} min={min} max={max} value={value} />
  );
};

export default PomodoroRange;
