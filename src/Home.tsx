import TaskItem from "./TaskItem";

function Home({ tasks, toggleTask, deleteTask }: any) {
  return (
    <div className="task">
    <ul>
      {tasks.map((t: any) => (
        <TaskItem
          key={t.id}
          task={t}
          id={t.id}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
    </div>
  );
}

export default Home;