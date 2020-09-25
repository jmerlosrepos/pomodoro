import React from "react";

const PomodoroTaskForm = ({ onAddTask }) => {
  return (
    <form onSubmit={onAddTask}>
      <div className="form-group pomodoroInputForm">
        <label htmlFor="taskTxt">Task</label>
        <input
          id="taskTxt"
          name="taskTxt"
          className="form-control"
          type="text"
          placeholder="Do coding for application..."
          onChange={onChangeTaskText}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
};

export default PomodoroTaskForm;
