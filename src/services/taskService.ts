import axios from "axios";
/* Para pruebas locales, funciona*/ 
//const API_URL = "http://localhost:3000/api/tasks"; 

//const API_URL = "https://task-api-xyz.onrender.com/api/tasks";

const API_URL = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

export const getTasks = () => axios.get(API_URL);

export const createTask = (task: { title: string; completed: boolean }) =>
  axios.post(API_URL, task);

export const deleteTask = (id: number) => axios.delete(`${API_URL}/${id}`);
