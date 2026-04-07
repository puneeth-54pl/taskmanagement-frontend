import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import AddTaskPage from "./AddTaskPage";
import {
  addTaskApi,
  deleteTaskApi,
  getTasks,
  toggleTaskApi,
  type Task
} from "./api";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = async () => {
    if (task.trim() === "") return;

    const newTask = await addTaskApi({
      text: task
    });

    setTasks((prev) => [...prev, newTask]);
    setTask("");
  };

  useEffect(() => {
    getTasks().then(setTasks);
  }, []);

  const deleteTask = async (id: number) => {
    await deleteTaskApi(id);
    setTasks(await getTasks());
  };

  const toggleTask = async (id: number) => {
    await toggleTaskApi(id);
    setTasks(await getTasks());
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        
        <header className="navbar">
          <h1 className="app-title">Task Manager</h1>

          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/add">Add Task</Link>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  tasks={tasks}
                  toggleTask={toggleTask}
                  deleteTask={deleteTask}
                />
              }
            />

            <Route
              path="/add"
              element={
                <AddTaskPage
                  task={task}
                  setTask={setTask}
                  addTask={addTask}
                />
              }
            />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;