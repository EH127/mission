import { useState } from "react";
import IStatusProps from "./interfaces/IAddTaskProps";
import ITask from "./interfaces/ITask";

const Status = (props: IStatusProps) => {
  const [taskName, setTaskName] = useState("");
  const { tasks, setTasks } = props;

  const addTask = (event: any) => {
    event.preventDefault();
    if(tasks.find(task => task.name === taskName )){
      return;
    }
    setTasks([...tasks, { name: taskName, label: [] }]);
  };

  return (
    <>
      <form onSubmit={addTask}>
        <label>
          <input
            type="text"
            name="name"
            onChange={(text) => setTaskName(text.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <ul>
        {tasks.map((task, index) => {
          return <li key={index}>{task.name}</li>;
        })}
      </ul>
    </>
  );
};

export default Status;
