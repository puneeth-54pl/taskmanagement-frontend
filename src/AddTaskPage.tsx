import React from "react";
type Props = {
  task: string;
  setTask:(value: string) => void;
  addTask: () => void;
};
function AddTaskPage({ task, setTask, addTask }: Props) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") addTask();
  };

  return (
    <div className="add-task-container">
      <h2 className="page-title">Add New Task</h2>
      <div className="form-card">
        <div className="form-group">
          <label className="form-label">Task</label>
          <input
            className="form-input"
            type="text"
            placeholder="Type your task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <button className="btn-primary" onClick={addTask}>
          Add Task
        </button>
      </div>
    </div>
  );
}
export default AddTaskPage;