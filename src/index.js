import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// My first component

function Task(props){

  return (
      <li className="tasks-item">{props.taskName}</li>
  );
}

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

function App() {
  const paraStyle = {
    "marginBottom": "15px",
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>My Amazing ToDo-List App</h1>
        <p style={paraStyle}>The most simple and amazing todo-list React app.</p>
        <TasksList />
      </header>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));