import React from "react";

const PomodoroTaskForm = ({ onAddTask, onChangeTaskText, taskText }) => {
  return (
    <div class="card">
      <div class="card-body">
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
              value={taskText}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default PomodoroTaskForm;
