import { useState } from "react";
import ITask from "./interfaces/ITask";
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

    fetch("http://192.168.50.10:3001/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: taskName,
        isFinal: true,
        isSelectedFrom: false,
        isSelectedTo: false,
        isInitial: tasks.length === 0,
        isOrphan: !(tasks.length === 0),
      }),
    })
      .then((response) => response.json())
      .then((data) => setTasks((prev: ITask[]) => [...prev, data]))
      .catch((error) => console.error(error));
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
