import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1>✅ TaskList API REST</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
