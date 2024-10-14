import React from "react";
import { AddButton, FormContainer, TaskInput } from "../styles/styles.ts";



const TaskForm = ({ taskInput, setTaskInput, handleAddTask }) => {
  return (
    <FormContainer>
      <TaskInput
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Add a new task"
      />
      <AddButton onClick={handleAddTask}>Add Task</AddButton>
    </FormContainer>
  );
};

export default TaskForm;
