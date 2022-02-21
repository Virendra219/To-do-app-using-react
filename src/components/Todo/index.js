import { useState } from "react";
import "./style.css";

const Todo = (props) => {
  const { taskName, completed, MarkCompleted, Delete, UpdateTaskName } = props;
  const [isEdit, setEdit] = useState(false);
  const [tempTaskName, updateTempTaskName] = useState(taskName);
  const handleCheck = () => {
    MarkCompleted();
  };
  const handleDelete = () => {
    Delete();
  };
  const handleEdit = () => {
    setEdit((prevValue) => !prevValue);
  };
  const handleTaskNameChange = (event) => {
    updateTempTaskName(event.target.value);
  };
  return (
    <div>
      <div>
        {!isEdit && (
          <div>
            <input
              type="checkbox"
              name="taskName"
              id="taskName"
              checked={completed}
              onChange={handleCheck}
            ></input>
            <label
              className={completed ? "completed-Todo" : ""}
              htmlFor="taskName"
            >
              {taskName}
            </label>
          </div>
        )}
        {isEdit && (
          <div>
            <input
              type="text"
              value={tempTaskName}
              onChange={handleTaskNameChange}
            />
            <button
              onClick={() => {
                UpdateTaskName(tempTaskName); setEdit(false);
              }}
            >
              Update
            </button>
          </div>
        )}
      </div>
      {completed ? (
        ""
      ) : (
        <div>
          <button onClick={handleEdit}>Edit TODO</button>
          <button
            onClick={() => {
              handleDelete();
            }}
          >
            Delete TODO
          </button>
        </div>
      )}
    </div>
  );
};

export default Todo;
