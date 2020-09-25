import React from "react";

const PomodoroSettings = ({
  displayText,
  itsPomodoro,
  itsShortRest,
  itsLongRest,
  workTime,
  shortRestTime,
  longRestTime,
  itsVisible,
  onChangeTimer,
  onSetTimerValue,
}) => {
  const setTimerValue = (selectedTimer) => {
    if (selectedTimer[0]) return workTime;
    if (selectedTimer[1]) return shortRestTime;
    if (selectedTimer[2]) return longRestTime;
  };

  return (
    <div className="timeOptions">
      <ul className="nav nav-tabs">
        <li
          className="nav-item"
          onClick={() => {
            onChangeTimer("working");
          }}
        >
          <a className="nav-link active">My Pomodoro</a>
        </li>
        <li
          className="nav-item"
          onClick={() => {
            onChangeTimer("pomodoro");
          }}
        >
          <a className="nav-link">Pomodoro Duration</a>
        </li>
        <li
          className="nav-item"
          onClick={() => {
            onChangeTimer("short");
          }}
        >
          <a className="nav-link">Short Rest Duration</a>
        </li>
        <li
          className="nav-item"
          onClick={() => {
            onChangeTimer("long");
          }}
        >
          <a className="nav-link">Long Rest Duration</a>
        </li>
      </ul>
      <form className={itsVisible ? "hidden" : ""}>
        <div className="form-group">
          <label htmlFor="setTimersTxt">{displayText}</label>
          <input
            id="setTimersTxt"
            name="setTimersTxt"
            className="form-control"
            onChange={(e) => {
              onSetTimerValue(e);
            }}
            type="text"
            value={setTimerValue([itsPomodoro, itsShortRest, itsLongRest])}
            placeholder="00:00"
          />
        </div>
      </form>
    </div>
  );
};

export default PomodoroSettings;
