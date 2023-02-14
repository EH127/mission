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
    setTasks([
      ...tasks,
      {
        name: taskName,
        isFinal: true,
        isSelectedFrom: false,
        isSelectedTo: false,
        isInitial: tasks.length === 0,
        isOrphan: !(tasks.length === 0),
      },
    ]);
    setTaskName("");
  };

  return (
    <form onSubmit={addTask}>
      <label>
        <input
          type="text"
          name="name"
          value={taskName}
          onChange={(text) => setTaskName(text.target.value)}
        />
      </label>
      <input type="submit" value="Add" />
    </form>
  );
};

export default AddTask;
