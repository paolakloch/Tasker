import React from "react";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <TaskCard 
          key={index} 
          task={task} 
          onEdit={() => onEdit(index)} 
          onDelete={() => onDelete(index)} 
        />
      ))}
    </div>
  );
};

export default TaskList;
