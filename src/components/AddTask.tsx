import { useState } from "react";
import ITaskProps from "./interfaces/ITaskProps";

const AddTask = (props: ITaskProps) => {
  const [taskName, setTaskName] = useState("");
  const { setTasks, tasks } = props;


  const addTask = (event: any) => {
    event.preventDefault();
    if (tasks.find((task) => task.name === taskName)) {
      return;
    }
    setTasks([...tasks, { name: taskName, label: ["ORPHAN"] }]);
  };

  return (
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
  );
};

export default AddTask;
