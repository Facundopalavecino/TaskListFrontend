import { useState } from "react";
import { createTask } from "../services/taskService";

const TaskForm = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === "") return;

    await createTask({ title, completed: false });
    setTitle("");
    window.location.reload(); // por ahora para recargar lista rápido
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nueva tarea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">➕ Agregar</button>
    </form>
  );
};

export default TaskForm;
