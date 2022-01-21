import {useState} from "react";
import Task from "./Task";

function TasksList(){
  const [tasksItemsList, setTaskItemsList] =  useState([
    "Follow Edukasyon.ph on Facebook",
    "Follow AWS Siklap Pilipinas on Facebook",
    "Follow Zuitt Coding Bootcamp on Facebook",
  ]);

  const [taskValue, setTaskValue] = useState ("");
  console.log(taskValue);

  const inputChangeHandler = (e) => {
    setTaskValue(e.target.value)
  }

  const addTaskHandler = (e) => {
    setTaskItemsList([e.target.value, ...tasksItemsList]);
    setTaskValue("");
  };

  return (
    <>
      <input
        className="task-input"
        placeholder="Create a new task"
        onChange={inputChangeHandler}
        onBlur={addTaskHandler}
        value={taskValue}
      />
      <ul>
        {tasksItemsList.map((task, index) => {
          return <Task key={index} taskName={task}/>;
        })}
      </ul>
    </>
  );
}

export default TasksList;