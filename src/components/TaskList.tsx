import { useEffect, useState } from "react";
import { getTasks, deleteTask } from "../services/taskService";
//import { Task } from "../types/taskTypes";

const TaskList = () => {

  interface Task {
  id: number;
  title: string;
  completed: boolean;
}

  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    const response = await getTasks();
    setTasks(response.data);
  };

  const handleDelete = async (id: number) => {
    await deleteTask(id);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="task-list">
      {tasks.map((task: Task) => (
        <div key={task.id} className="task-card">
          <h3>Tarea: {task.title}</h3>
          <h3>ID: {task.id}</h3>
          <span className={`badge ${task.completed ? "completed" : "pending"}`}>
            {task.completed ? "✔️ Completada" : "🕗 Pendiente"}
          </span>
          <button className="delete-btn" onClick={() => 
          handleDelete(task.id)} >
              Eliminar
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
