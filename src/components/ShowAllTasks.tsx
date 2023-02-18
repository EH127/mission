import { useState, useEffect } from "react";
import ITask from "./interfaces/ITask";
import ITaskProps from "./interfaces/ITaskProps";

const ShowAllTasks = (props: ITaskProps) => {
  const [selectedValue, setSelectedValue] = useState<number>(0);
  const { tasks, setTasks, reload, setReload } = props;

  useEffect(() => {
    if (reload === true) {
      fetch("https://mission-backend.onrender.com/api/select")
        .then((res) => res.json())
        .then((data) => {
          setSelectedValue(data.select);
        })
        .catch((error) => console.log(error))
        .finally(() => setReload && setReload(false));
    }
  }, [reload]);

  const handleChange = (index: number) => {
    fetch("https://mission-backend.onrender.com/api/select", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        select: index,
      }),
    })
      .then((res) => res.json())
      .then((data) => setSelectedValue(data.select))
      .catch((error) => console.log(error));

    fetch(`https://mission-backend.onrender.com/api/tasks/${index}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isInitial: true,
      }),
    })
      .then((res) => res.json())
      .then((data: ITask[]) => setTasks(data))
      .catch((error) => console.log(error))
      .finally(() => setReload && setReload(true));
  };

  const onDelete = (name: string) => {
    fetch(`https://mission-backend.onrender.com/api/tasks/${name}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data: ITask[]) => setTasks(data))
      .catch((error) => console.log(error))
      .finally(() => setReload && setReload(true));
  };

  return (
    <ul>
      {tasks.map((task, index) => {
        return (
          <li key={index}>
            <input
              type="radio"
              name="tasks"
              value={index}
              checked={selectedValue === index}
              onChange={() => handleChange(index)}
            />
            {task.name}
            {task.isInitial && <span>[INIT]</span>}
            {task.isFinal && <span>[FINAL]</span>}
            {task.isOrphan && <span>[ORPHAN]</span>}
            <button onClick={() => onDelete(task.name)}>delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default ShowAllTasks;
