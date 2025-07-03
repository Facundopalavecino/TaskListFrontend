import axios from "axios";

const API_URL = "https://task-api-xyz.onrender.com/api/tasks";

export const getTasks = () => axios.get(API_URL);

export const createTask = (task: { title: string; completed: boolean }) =>
  axios.post(API_URL, task);

export const deleteTask = (id: number) => axios.delete(`${API_URL}/${id}`);
