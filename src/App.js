import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Todo from "./components/Todo";

function App() {
  const [allTasks, setAllTasks] = useState([]);
  const [filterFlag, setFilterFlag] = useState("all");
  useEffect(()=>{
    console.log(allTasks);
  }, [allTasks])
  const AddTask = (task) => {
    const newTasks = [...allTasks, task];
    setAllTasks(newTasks);
  };

  const filterTask = () => {
    if (filterFlag==="all") {
      return allTasks;
    }
    else if (filterFlag==="active") {
      const newArray = allTasks.filter((task)=>!task.completed);
      console.log(newArray);
      return newArray;
    }
    else {
      return allTasks.filter((task)=>task.completed)
    }
  }

  const MarkTODOCompleted = (completedTask) => {
    const newTasks = allTasks.map((task) => {
      if (task.id === completedTask.id) {
        task.completed = !task.completed;
      }
      return task;
    });
    console.log(newTasks);
    setAllTasks(newTasks);
  };
  const DeleteTODO = (deletedTask) => {
    const newTasks = allTasks.filter((task) => task.id !== deletedTask.id);
    setAllTasks(newTasks);
  };
  const UpdateTODO = (updatedTask, updatedTaskName) => {
    const newTasks = allTasks.map((task)=>{
      if (task.id === updatedTask.id) {
        task.taskName = updatedTaskName;
      }
      return task;
    });
    setAllTasks(newTasks);
  }
  
  // console.log(allTasks);
  return (
    <div>
      <header className="header">
        <h1>TO DO APP</h1>
      </header>
      <main>
        <Form AddTask={AddTask} />
        <div>
          <button onClick={()=>setFilterFlag("all")}>ALL</button>
          <button onClick={()=>setFilterFlag("active")}>ACTIVE</button>
          <button onClick={()=>setFilterFlag("completed")}>COMPLETED</button>
        </div>
        <div>
          {filterTask().map((task) => {
            return (
              <Todo
                key={task.id}
                taskName={task.taskName}
                completed={task.completed}
                MarkCompleted={() => {
                  MarkTODOCompleted(task);
                }}
                Delete={() => {
                  DeleteTODO(task);
                }}
                UpdateTaskName={(taskName)=>{
                  UpdateTODO(task, taskName);
                }}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
