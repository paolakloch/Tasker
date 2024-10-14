import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import { Button, Card, Container, ContentPage } from "./styles/styles.ts";
import { useState } from "react";
import TaskForm from "./components/TaskForm.js";
import TaskCard from "./components/TaskCard.js";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAddTask = () => {
    if (taskInput === "") {
      return;
    }

    if (editIndex !== null) {
      const newTasks = [...tasks]; // this is a copy of the new tasks
      newTasks[editIndex] = taskInput; //updates the task at the index specified by editIndex with the new value from taskInput
      setTasks(newTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, taskInput]);
    }

    setTaskInput("");
  }

  const handleEditTask = (index) => {
    setTaskInput(tasks[index]);
    setEditIndex(index);
  }

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }

  return (
    <ContentPage className="App">
      <TaskForm handleAddTask={handleAddTask} setTaskInput={setTaskInput} taskInput={taskInput} />
      <TaskCard handleDeleteTask={handleDeleteTask} handleEditTask={handleEditTask} tasks={tasks} />
    </ContentPage>
  );
}

export default App;
