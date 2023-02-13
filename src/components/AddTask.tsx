import { useState } from "react";
import ITaskProps from "./interfaces/ITaskProps";

const AddTask = (props: ITaskProps) => {
  const [taskName, setTaskName] = useState<string>();
  const { setTasks, tasks } = props;

  const addTask = (event: any) => {
    event.preventDefault();
    if (
      tasks.find((task) => task.name === taskName) ||
      (taskName && taskName.trimEnd().length === 0) ||
      !taskName
    ) {
      return;
    }
    setTasks([...tasks, { name: taskName, label: [] }]);
  };

  return (
    <form onSubmit={addTask}>
      <label>
        <span>name: </span>
        <input
          type="text"
          name="name"
          onChange={(text) => setTaskName(text.target.value)}
        />
      </label>
      <input type="submit" value="Add" />
    </form>
  );
};

export default AddTask;
