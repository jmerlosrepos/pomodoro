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
      <ul>
        <li
          onClick={() => {
            onChangeTimer("working");
          }}
        >
          My Pomodoro
        </li>
        <li
          onClick={() => {
            onChangeTimer("pomodoro");
          }}
        >
          Pomodoro Duration
        </li>
        <li
          onClick={() => {
            onChangeTimer("short");
          }}
        >
          Short Rest Duration
        </li>
        <li
          onClick={() => {
            onChangeTimer("long");
          }}
        >
          Long Rest Duration
        </li>
      </ul>
      <div className={itsVisible ? "hidden" : ""}>
        <p>{displayText}</p>
        <input
          onChange={(e) => {
            onSetTimerValue(e);
          }}
          type="text"
          value={setTimerValue([itsPomodoro, itsShortRest, itsLongRest])}
          placeholder="00:00"
        />
      </div>
    </div>
  );
};

export default PomodoroSettings;
