const BASE_URL = "http://localhost:8080/tasks";

export type Task = {
  id?: number;
  text: string;
  completed?: boolean;
};

// GET all tasks
export const getTasks = async (): Promise<Task[]> => {
  const res = await fetch(BASE_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch tasks");
  }

  return res.json();
};

// ADD task
export const addTaskApi = async (task: Task): Promise<Task> => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });

  if (!res.ok) {
    throw new Error("Failed to add task");
  }

  return res.json();
};

// DELETE task
export const deleteTaskApi = async (id: number): Promise<void> => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete task");
  }
};

// TOGGLE task
export const toggleTaskApi = async (id: number): Promise<Task> => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
  });

  if (!res.ok) {
    throw new Error("Failed to update task");
  }

  return res.json();
};