import React from "react";

const PomodoroTasksList = ({ tasks, onDone, onDelete }) => {
  return (
    <ul>
      {!tasks ||
        tasks.map((task) => {
          return (
            <li key={task.name}>
              {task.name}
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => {
                  onDone(task.name, task.done);
                }}
              />
              <button
                className="btn btn-danger"
                onClick={() => {
                  onDelete(task.name);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default PomodoroTasksList;
