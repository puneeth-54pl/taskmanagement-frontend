type Task = {
  id: number;
  text: string;
  completed: boolean;
};

type Props = {
  task: Task;
  id: number;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
};

function TaskItem({ task, id, toggleTask, deleteTask }: Props) {
  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      
      <div 
        className="task-content"
        onClick={() => toggleTask(task.id)}
      >
        <span className="task-text">{task.text}</span>
        <span className="task-status">
          {task.completed ? "✅" : "⭕"}
        </span>
      </div>

      <button 
        className="task-delete-btn"
        onClick={() => deleteTask(task.id)}
      >
        ✕
      </button>

    </li>
  );
}

export default TaskItem;