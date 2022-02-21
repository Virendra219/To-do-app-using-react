import { useState } from "react";
import { nanoid } from "nanoid";
import "./style.css";


const Form = (props) => {
  const [taskName, setTaskName] = useState("");
  const { AddTask } = props;
  const placeHolderText = "Enter Task Name";
  const handleSubmit = (event) => {
    event.preventDefault();
    const task = {
      id: nanoid(),
      taskName,
      completed: false,
    };
    setTaskName("");
    AddTask(task);
  };

  const handleTaskChange = (event) => {
    setTaskName(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="add-task">What needs to be done?</label>
      <div className="row">
        <input
          type="text"
          name="add-task"
          id="add-task"
          pattern="[a-z0-9]{1,}"
          placeholder={placeHolderText}
          value={taskName}
          onChange={handleTaskChange}
          required
        ></input>
        <button type="submit">
          Add task
        </button>
      </div>
    </form>
  );
};

export default Form;
