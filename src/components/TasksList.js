import Task from "./Task";

function TasksList(){
  const tasksItemsList = [
    "Follow Edukasyon.ph on Facebook",
    "Follow AWS Siklap Pilipinas on Facebook",
    "Follow Zuitt Coding Bootcamp on Facebook",
  ];

  return (
    <>
    <input className="task-input"/>
      <ul>
      {tasksItemsList.map((task, index) => {
        return <Task key={index} taskName={task}/>;
    })}
      </ul>
    </>
  );
}

export default TasksList;