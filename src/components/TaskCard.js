import React from "react";
import { Button, Card, Container } from "../styles/styles.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TaskCard = ({ task, tasks, handleEditTask, handleDeleteTask }) => {
  return (
    <div>
      <p>{task}</p>
       <Container>
        {tasks.map((task, index) => (
          <Card key={index}>
            <div class="main">
              <h2>{task}</h2>
              <hr />
            </div>

            <FontAwesomeIcon icon="fa-regular fa-pen-to-square" />
            <div style={{ width: '100px', height: '50%' }}>
              <Button onClick={() => handleEditTask(index)}>
               Edit
                <FontAwesomeIcon icon="fa-regular fa-pen-to-square" />
              </Button>
              <Button onClick={() => handleDeleteTask(index)}>
               Delete
                <FontAwesomeIcon icon="fa-regular fa-trash" />
              </Button>
            </div>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default TaskCard;
